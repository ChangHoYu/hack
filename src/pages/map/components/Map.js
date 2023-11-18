import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/Map.module.css';


const Map = (props) => {
    let markers = [];
    const [userPosition, setUserPosition] = useState(null);

    useEffect(() => {
        const mapContainer = document.getElementById("map");
        const { kakao } = window;
        const mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567),
            level: 3
        };
        // 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀오버레이입니다
        var placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 1 }),
            contentNode = document.createElement('div');
        const map = new kakao.maps.Map(mapContainer, mapOption);

        const ps = new kakao.maps.services.Places();

        // 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다 
        contentNode.className = 'placeinfo_wrap';


        // 커스텀 오버레이 컨텐츠를 설정합니다
        placeOverlay.setContent(contentNode);

        getCurrentPosition();

        function getCurrentPosition() {
            if (navigator.geolocation) {    //현재 위치 받아오기
                navigator.geolocation.getCurrentPosition(function (position) {
                    var lat = position.coords.latitude,
                        lon = position.coords.longitude;

                    var locPosition = new kakao.maps.LatLng(lat, lon);
                    setUserPosition(locPosition);
                    displayUserMarker(locPosition);
                });
            }
        }


        function displayUserMarker(locPosition) {  //유저 현재 위치 마크
            //커스텀 마커 이미지
            // 마커 이미지의 주소
            var markerImageUrl = require('../../img/marker_y.png'),
                markerImageSize = new kakao.maps.Size(27, 40), // 마커 이미지의 크기
                markerImageOptions = {
                    offset: new kakao.maps.Point(10, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
                };

            // 마커 이미지를 생성한다
            var markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);

            var marker = new kakao.maps.Marker({
                map: map,
                image: markerImage,
                position: locPosition
            });
            marker.setMap(map); // 지도 위에 마커를 표출
            // 지도 중심좌표를 접속위치로 변경합니다
            map.setCenter(locPosition);
        }
        searchPlaces();

        function searchPlaces() {
            if (!userPosition) {
                console.log("Could not retrieve user's current location.");
                return;
            }
            let keyword = props.searchKeyword;
            var options = {
                location: userPosition
            };
            ps.keywordSearch(keyword, placesSearchCB, options);
        }

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                displayPlaces(data);

            } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                alert('검색 결과가 존재하지 않습니다.');
                return;
            } else if (status === kakao.maps.services.Status.ERROR) {
                alert('검색 결과 중 오류가 발생했습니다.');
                return;
            }
        }

        function displayPlaces(places) {
            const bounds = new kakao.maps.LatLngBounds();

            // 지도에 표시되고 있는 마커를 제거
            removeMarker();
            // 커스텀 오버레이를 숨깁니다 
            placeOverlay.setMap(null);

            for (var i = 0; i < places.length; i++) {
                // 마커를 생성하고 지도에 표시
                let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
                    marker = addMarker(placePosition, i, undefined);

                // 마커와 검색결과 항목을 클릭 했을 때
                // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
                (function (marker, place) {
                    kakao.maps.event.addListener(marker, 'click', function () {
                        displayPlaceInfo(place);
                        const moveLatLon = new kakao.maps.LatLng(place.y, place.x);
                        map.panTo(moveLatLon); //마크 클릭 시 해당 마크 센터로 이동
                    });
                })(marker, places[i]);
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가
                bounds.extend(placePosition);

            }
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정
            map.setBounds(bounds);
        }


        // 마커를 생성하고 지도 위에 마커를 표시하는 함수
        function addMarker(position, idx, title) {

            var markerImageUrl = require('../../img/marker_b.png'),
                markerImageSize = new kakao.maps.Size(27, 40), // 마커 이미지의 크기
                markerImageOptions = {
                    offset: new kakao.maps.Point(13, 35)// 마커 좌표에 일치시킬 이미지 안의 좌표
                };

            // 마커 이미지를 생성한다
            var markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);


            var marker = new kakao.maps.Marker({
                position: position, // 마커의 위치
                image: markerImage,
                map: map
            });

            marker.setMap(map); // 지도 위에 마커를 표출
            markers.push(marker);  // 배열에 생성된 마커를 추가

            return marker;
        }

        // 지도 위에 표시되고 있는 마커를 모두 제거합니다
        function removeMarker() {
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            markers = [];
        }

        // 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
        function displayPlaceInfo(place) {
            var content = (
                <div className={`${styles.placeinfo_container}`}>
                    <div className={`${styles.placeinfo} ${styles.customOverlay}`}>
                        <div className={styles.placeinfo_content}>
                            <a
                                className={`${styles.title} ${styles.customLink}`}
                                href={place.place_url}
                                target="_blank"
                                title={place.place_name}
                            >
                                {place.place_name}
                            </a>
                            {place.road_address_name ? (
                                <div className={`${styles.address}`}>
                                    <div className={styles.address_container}>
                                        <span title={place.road_address_name}>{place.road_address_name}</span>
                                    </div>
                                    <div className={styles.jibun_container}>
                                        <span className={`${styles.jibun}`} title={place.address_name}>
                                            (지번 : {place.address_name})
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <span title={place.address_name}>{place.address_name}</span>
                            )}
                            <span className={`${styles.tel}`}>{place.phone}</span>
                        </div>
                    </div>
                </div>
            );

            ReactDOM.render(content, contentNode);
            placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
            placeOverlay.setMap(map);
        }

    }, [props.searchKeyword]);

    return (
        <div className={styles.map_container}>
            <div id="map" className={styles.map}></div>

            <div id="search-result"></div>
        </div>
    );
}

export default Map;