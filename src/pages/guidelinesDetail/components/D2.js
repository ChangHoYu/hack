import React from "react";
import styles from '../css/D1.module.css';
import image from '../../img/Disaster_2.png';
import detailimg1 from '../../img/D2img_1.png';
import detailimg2 from '../../img/D2img_2.png';


export default function D2() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>폭염</h2>
                    <span>heat wave</span>
                    </div>
                    <img src={image} />
                </div>
                <hr />
                <div className={styles.content}>
                    <div className={styles.content1}>
                    <h3>폭염 사전 준비</h3>
                    <ul>
                        <li>여름철에는 항상 기상상황에 주목하며 주변 사람들과 함께 정보를 공유한다</li>
                        <li>열사병 등 온열질환의 증상과 가까운 병원 연락처 등을 가족이나 이웃과 함께 사전에 팡가하고 어떻게 조치해야 하는지 알아둔다.</li>
                        <li>폭염예보에 맞추어 무더위에 필요한 용품이나 준비사항을 가족이나 이웃과 함게 확인하고 공유하기</li>
                        <li>냉방기기를 사용하는 경우 실내외 온도차를 5도 내외로 유지(냉방병 예방)</li>
                        <li>여름철 오후 2시~5시 사이는 가장 더운 시간으로 실외 작업은 되도록 하지 않기기</li>
                        <img src={detailimg1} />
                        <img src={detailimg2} style={{marginLeft: "5%"}}/>
                    </ul>
                    </div>
                    <div className={styles.content2}>
                    <h3>폭염 발생 시</h3>
                    <ul>
                        <li>야외활동을 최대한 자제하고, 외출이 꼭 필요한 경우에는 창이 넓은 모자와 가벼운 옷차림을 하고 물병을 반드시 휴대</li>
                        <li>물을 많이 마시고, 카페인이 함유된 음료나 주류는 마시지 않는다.</li>
                        <li>창문이 닫힌 자동차 안에는 노약자나 어린이를 혼자 두지 않는다.</li>
                        <li>냉방이 되지 않는 실내에서는 햇볕이 실내에 들어오지 않도록 하고, 환기가 잘 되도록 선풍기를 켜고 창문이나 출입문을 열어둔다.</li>
                        <li>건설 현장 등 실외 작업장에서는 폭염안전수칙을 항상 준수하고, 특히 취약시간은(오후 2시 ~ 5시)에는 ‘무더움 휴식시간제’를 적극 시행한다.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};