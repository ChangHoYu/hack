import React from "react";
import styles from '../css/D1.module.css';
import image from '../../img/Nation_4.png';
import detailimg from '../../img/N4img.png';

export default function N4() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>산불</h2>
                    <span>forest fire</span>
                    </div>
                    <img src={image} />
                </div>
                <hr />
                <div className={styles.content}>
                <div className={styles.content1}>
                    <h3>산불예방</h3>
                    <ul>
                        <li>산행 전에는 입산 통제, 등산로 폐쇄 여부를 확인하고, 산불 위험이 높은 통제지역에는 산행을 하지 않는다.</li>
                        <li>입산 시에는 성냥, 담배 등 인화성 물질을 소지하지 않는다.</li>
                        <li>취사를 하거나 모닥불을 피우느 행위는 허용된 지역에서만 실시한다.</li>
                        <li>성묘, 무속행위로 불가피하게 불씨를 다루어야 할 경우 반드시 간이 소화장비를 갖추도록 한다.</li>
                        <li>산림 또는 산림과 연접된 지역에서 담배를 피우거나 불씨를 다루지 못하게 하고, 산불조심을 당부한다.</li>
                    </ul>
                    </div>
                    <div className={styles.content2}>
                    <h3>산행 중 산불 발견 시</h3>
                    <ul>
                        <li>산불 발견 시 119, 산림관서, 경찰서로 신고한다.</li>
                        <li>초기의 작은 산불을 진화하고자 할 경우 외투를 사용하여 두드리거나 덮어서 진화가능</li>
                        <li>산불은 바람이 불어가는 쪽으로 확산되므로 바람 방향을 감아하여 산불의 진행경로에서 벗어나도록 한다.</li>
                        <li>불길에 휩싸일 경우 당황하지 말고 침착하게 주위를 확인하여 화세가 약한 곳으로 신속하게 대피한다.</li>
                        <li>대피장소는 타버린 연료지대, 저지대, 연료가 없는 지역, 도로, 바위 뒤 등올 정한다.</li>
                        <li>산불보다 높은 위치를 피피하고 복사열로부터 멀리 떨어져 있어야 한다.</li>
                        <img src={detailimg} style={{width: "70%"}}/>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};