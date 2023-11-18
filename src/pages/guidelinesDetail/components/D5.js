import React from "react";
import styles from '../css/D1.module.css';
import image from '../../img/Disaster_5.png';
import detailimg from '../../img/D5img.png';

export default function D5() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>지진</h2>
                    <span>earthquake</span>
                    </div>
                    <img src={image} />
                </div>
                <hr />
                <div className={styles.content}>
                <div className={styles.content1}>
                    <h3>지진 사전 대비</h3>
                    <ul>
                        <li>탁자 아래 공간과 같이 집안에서 안전한 대피 공간을 미리미리 파악해둔다.</li>
                        <li>화재를 일을킬 수 있는 난로나 위험물을 주의하여 관리한다.</li>
                        <li>텔레비전, 꽃병 등 떨어질 수 있는 물건은 높은 곳에 두지 않는다.</li>
                        <li>창문 등의 유리 부분은 필름을 붙여 유리가 파손되지 않도록 한다.</li>
                        <li>가스 및 전기를 미리 점검한다.</li>
                        <li>비상시 가족들과 만날 곳과 연락할 방법을 미리 정해둔다.</li>
                        <li>응급처지하는 방법을 반복적으로 훈련하여 익혀둔다.</li>
                        <li>지진에 대비하여 비상용품을 준비해 두고, 보관 장소와 사용 방법을 미리 알아둔다.</li>
                        <li>지진 발생 시 화재가 발생 할 수 있으므로, 소화기를 준비해 두고 사용방법을 알아둔다.</li>
                    </ul>
                    </div>
                    <div className={styles.content2}>
                    <h3>지진발생 시</h3>
                    <ul>
                        <li>튼튼한 탁자 아래로 들어가 몸을 보호한다.</li>
                        <li>가스와 전깃불을 차단하고 문을 열어 출구를 확보한다.</li>
                        <li>집에서 나갈 때는 신발을 꼭 신고 이동한다.</li>
                        <li>계단을 이용하여 밖으로 대피한다.</li>
                        <li>건물이나 담장으로부터 떨어져 이동한다.</li>
                        <li>낙하물이 없는 넓은 공간으로 대피한다.</li>
                        <li>올바른 정보에 따라 행동한다.</li>
                        <img src={detailimg} style={{width: "90%"}}/>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};