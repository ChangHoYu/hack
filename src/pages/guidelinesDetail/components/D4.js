import React from "react";
import styles from '../css/D3.module.css';
import image from '../../img/Disaster_4.png';
import detailimg from '../../img/D4img.png';

export default function D4() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>산사태</h2>
                    <span>landslide</span>
                    </div>
                    <img src={image} />
                </div>
                <hr />
                <div className={styles.content}>
                <div className={styles.content1}>
                    <h3>산사태 주의보 시</h3>
                    <ul>
                        <li>산사태 취약지역 주민은 대피를 준비, 행정기관에서 안내한 대피장소를 사전에 숙지하고 간단한 생필품 등 사전 준비</li>
                        <li>노약자나 어린이는 집밖으로 나가는 것을 삼가하고, 유선연락이 가능한 곳에서 예의 주시</li>
                        <li>경사면에서 물이솟는 등 산사태 징후가 있을 경우 즉시 대피하고 가까운 주민센터나 시구 재난안전대책본부에 신고한다.</li>
                        <li>기상상황 및 행정기관 연락상황을 SMS 또는 방송 정보를 통해 지속적으로 확인한다.</li>
                    </ul>
                    </div>
                    <div className={styles.content2}>
                    <h3>산사태 경보 시</h3>
                    <ul>
                        <li>산사태 취약지역 주민은 안전을 위해 사전에 대피하거나 주민대피명령이 발령될 경우 대피장소 또는 안전지대로 반드시 대피한다.</li>
                        <li>대피시 화재 등 2차 피해 예방을 위해 가스, 전기 차단.</li>
                        <li>혹시 대피하지 않은 주민이 있을 수 있으므로 옆집을 확인하고 위험 상황을 알려준다.</li>
                        <li>대피 후 기상 등 위험상황의 추이를 확인한다.</li>
                        <img src={detailimg} />
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};