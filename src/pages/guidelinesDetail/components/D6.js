import React from "react";
import styles from '../css/D1.module.css';
import image from '../../img/Disaster_6.png';
import detailimg from '../../img/D6img.png';


export default function D6() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>대설</h2>
                    <span>heavy snow</span>
                    </div>
                    <img src={image} />
                </div>
                <hr />
                <div className={styles.content}>
                <div className={styles.content1}>
                    <h3>대설 사전 대비</h3>
                    <ul>
                        <li>내가 거주하거나 생활하는 지역의 눈사태, 붕괴위험시설물 등 재해위험요소는 과거 피해 자료를 통해서 사전에 가족이나 이웃과 공유한다.</li>
                        <li>TV나 라디오 등을 통하여 기상정볼ㄹ 미리 파악하고, 가족이나 이웃과 함께 한다.</li>
                        <li>가족이나 이웃과 함께 사전에 누가 무엇을 어떻게 할 것인지 약속을 정한다.</li>
                        <li>비상시 가족이나 이웃과 함께 안전한 이동방법, 대피요령 등을 자세히 알라둔다.</li>
                        <li>재난이 발생할 경우를 대비하여 비상용품을 사전에 가족이나 이웃과 함께 준비한다.</li>
                        <li>재난에 대비해 지속적인 관심을 갖고 대비 및 정비를 한다.</li>
                        <img src={detailimg} />
                    </ul>
                    </div>
                    <div className={styles.content2}>
                    <h3>대설 시</h3>
                    <ul>
                        <li>눈이 많은 올 때에는 되도록 외출을 자제하여 피해를 사전에 방지한다.</li>
                        <li>내 집앞, 내점포 앞 보행로와 지붕 및 옥상에 내린 눈은 가족이나 이웃과 함께 치워 사고를 예방한다.</li>
                        <li>외출 시에는 바닥면이 넓은 운동화 및 등산화를 착용하여 주머니 손을 넣지 않고 보온 장갑 등을 착용하여 체온을 유지한다.</li>
                        <li>출퇴근을 평소보다 일찍하고, 자가용대신 대중교통을 이용한다.</li>
                        <li>자동차 운행 시 사고위험이 높으므로, 커브길, 고갯길, 고가도로, 교량, 결빙 구간을 통과 시 반드시 서행하고, 차간 안전거리를 유지한다.</li>
                        <li>차량 이동 중 폭설에 고립시, 가능한 수단을 통해 구조 연락을 취하고, 체온을 유지하면서 휴식을 취한다.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};