import React from "react";
import styles from '../css/D4.module.css';
import image from '../../img/Nation_2.png';
import detailimg from '../../img/N2img.png';

export default function N2() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>미세먼지</h2>
                    <span>fine dust</span>
                    </div>
                    <img src={image} />
                </div>
                <hr />
                <div className={styles.content}>
                <div className={styles.content1}>
                    <h3>주의보</h3>
                    <ul>
                        <li>민감군(어린이, 노인, 폐질환 및 심장질환자)은 실외활동 제한 및 실내생활 권고</li>
                        <li>일반인은 장시간 또는 무리한 실외활동을 줄인다.</li>
                        <li>부득이 외출 시 황사마스크</li>
                        <li>교통량이 많은 지역 이동 자</li>
                        <li>유치원 초등학교 실외수업 자제</li>
                        <li>공공기관 운영 야외 체육시설 운영 제한</li>
                    </ul>
                    </div>
                    <div className={styles.content2}>
                    <h3>경보</h3>
                    <ul>
                        <li>민감군은 실외활동 금지</li>
                        <li>일반인은 장시간 또는 무리한 실와활동 자제</li>
                        <li>부득이 외출 시 황사마스크 착용</li>
                        <li>교통량이 많은 지역 가급적 이동 금지</li>
                        <li>유치원, 초등학교 실외수업 금지, 수업단축 또는 휴교</li>
                        <li>중,고등학교 실외수업 자제</li>
                        <li>공공기관 운영 야외 체육시설 운영중단</li>
                        <img src={detailimg} />
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};