import React from "react";
import styles from '../css/D4.module.css';
import image from '../../img/Nation_3.png';
import detailimg from '../../img/N3img.png';

export default function N3() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>교통사고</h2>
                    <span>accident</span>
                    </div>
                    <img src={image} />
                </div>
                <hr />
                <div className={styles.content}>
                <div className={styles.content1}>
                    <h3>안전한 도로 횡단</h3>
                    <ul>
                        <li>횡단보도에서 우선 멈추어 좌우를 살피는 습관 갖기</li>
                        <li>횡단보도가 아닌 곳을 무단으로 횡단하지 않기</li>
                        <li>신호가 바뀌더라도 차량의 진행유무를 반드시 확인하기</li>
                        <li>어린이나 노약자는 보호자와 함께 건너기</li>
                        <li>신호등이 없거나 점멸시노학 있는 횡단보도에서는 차량이 완전히 멈추었거나 운전자의 수신호가 있을 때 건너기</li>
                        <li>운전자는 사람이 내리고 있는 차량 옆으로 지나가거나 추월하지 않기</li>
                        <li>차에서 내리는 사람은 지나가는 자전거, 오토바이, 차량에 주의하기</li>
                    </ul>
                    </div>
                    <div className={styles.content2}>
                    <h3>교통사고 발생시</h3>
                    <ul>
                        <li>위험물질 수송차량 사고시 사고지점에서 빠쟈 나와 대피하기</li>
                        <li>화재가 발생한 경우 외에는 부상자를 건드리지 않기</li>
                        <li>구조대의 활동이 본격적으로 시작시 구조에 참여하지 말고 사고 현장에서 물러나기</li>
                        <li>유류 및 가스가 누출로 인한 화재위험이 있으므로 사고 주변에서 금연하기</li>
                        <img src={detailimg} style={{width: "70%"}}/>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};