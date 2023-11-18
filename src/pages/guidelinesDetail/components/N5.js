import React from "react";
import styles from '../css/D4.module.css';
import image from '../../img/Nation_5.png';
import detailimg from '../../img/N5img.png';


export default function N5() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>전기 사고</h2>
                    <span>electrical accident</span>
                    </div>
                    <img src={image} style={{width: "10%"}}/>
                </div>
                <hr />
                <div className={styles.content}>
                <div className={styles.content1}>
                    <h3>불시 정전 사전 대비 방법</h3>
                    <ul>
                        <li>불시 정전에 대비 가정 내 손전등, 비상식 음료, 휴대용 라디오 등을 사전에 준비한다</li>
                        <li>전자기기의 과부하 사용은 정전 및 화재의 원인이 되므로 사용 자제하고 별도의 전용회로 및 전용콘센트 사용하기</li>
                        <li>경보기 등 정전을 감지할 수 있는 시설 갖추기 권고</li>
                        <li>정전신고와 전기상담은 국번 없이 123으로 신고, 구조요청은 119</li>
                    </ul>
                    </div>
                    <div className={styles.content2}>
                    <h3>전기안전</h3>
                    <ul>
                        <li>전기코드는 반드시 플러그를 잡고 뽑아야한다</li>
                        <li>문어발식 배선은 사용 지양</li>
                        <li>전선이 손상된 경우 감점 또는 합선의 원인이 되므로 교체하기</li>
                        <li>젖은 손으로 플러그나 스위치를 잡지 않기</li>
                        <li>유아나 어린이들의 감전사고를 예방을 위해 덮개 있는 콘셉트를 사용하기</li>
                        <li>위험, 고압 등이 쓰인 장소에는 절대로 가까이 가기 않기</li>
                        <li>전봇대를 오르거나 전선을 긴 막대기 등으로 찌르는 장난을 하지 않기</li>
                        <li>땅에 떨어진 전선 가끼이는 가지 않기</li>
                        <li>누전차단기는 감전사고 방지를 위해 꼭 사용하고 위급 시 바로 전기 차단가기를 사용하기</li>
                        <img src={detailimg} />
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};