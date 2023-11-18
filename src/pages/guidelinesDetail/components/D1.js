import React from "react";
import styles from '../css/D1.module.css';
import image from '../../img/Disaster_1.png';
import detailimg from '../../img/D1img.png';

export default function D1() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>홍수</h2>
                    <span>flooding</span>
                    </div>
                    <img src={image} />
                </div>
                <hr />
                <div className={styles.content}>
                    <h3>호우 예보 시</h3>
                    <ul>
                        <li>홍수 피해가 예상되는 지역의 주민은 라디오나 TV, 인테넷을 통해 기상변화를 알아둔다.</li>
                        <li>홍수 우려 때 피난 가능한 장소와 길을 사전에 숙지한다.</li>
                        <li>갑작스러운 홍수가 발생하였으면 높은 곳으로 대피한다.</li>
                        <li>비탈면이나 산사태가 일어날 수 있는 지역에 가까이 가지 않는다.</li>
                        <li>바위나 자갈 등이 흘러내리기 쉬운 비탈면 지역의 도로 통행을 삼가고, 만약 도로를 지날 때 주위를 잘 살핀 후 이동한다.</li>
                        <li>홍수 예상 시 전기차단기를 내리고 가스 밸브를 잠근다.</li>
                        <li>지정된 대피소에 도착하면 반드시 도착사실을 알리고, 통제에 따라 행동한다.</li>
                        <li>침수주택은 가스 전기차단기가 off에 있는지 확인하고, 기술자의 안전조사가 끝난 후에 사용한다.</li>
                        <li>수돗물이나 저장식수도 오염 여부를 반드시 조사 후에 사용한다.</li>
                        <li>침수나 산사태 위험지역 주민은 대피장소와 비상연락방법을 미리 알아둔다.</li>
                        <img src={detailimg} />
                    </ul>
                </div>
            </div>
        </div>
    );
};
