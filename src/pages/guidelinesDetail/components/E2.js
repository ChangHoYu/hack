import React from "react";
import styles from '../css/D5.module.css';
import image from '../../img/Emergency_2.png';

export default function E2() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>심폐소생술</h2>
                    <span>CPR</span>
                    </div>
                    <img src={image} />
                </div>
                <hr />
                <div className={styles.content}>
                <div className={styles.content1}>
                    <h3>1. 의식 및 호흡확인</h3>
                    <ul>
                        <li>환자의 어깨를 가볍게 두드리며 “괜찮으세요? 괜찮으세요?”라고 물으며 의식 및 호흡을 확인</li>
                    </ul>
                    </div>
                    <div className={styles.content2}>
                    <h3>2. 119신고 및 자동제세동기 요청</h3>
                    <ul>
                        <li>주변 사람에게 큰소리로 119 신고 요청 및 자동제세동기(AED)를 요청</li>
                        <li>주변에 사람이 없을 시 직접 신고</li>
                    </ul>
                    </div>
                    <div className={styles.content3}>
                    <h3>3. 가슴 압박 30회 실시</h3>
                    <ul>
                        <li>저 한손을 다른 한손의 손등 위에 올린 후 깍지를 낀 다음 손바닥의 뒤꿈치를 사용하여 양쪽 젖꼭지 사이에 위치한다. 이 때 손가락이 가슴에 닿지 않도록 주의</li>
                        <li>팔을 쭉 펴고 수직으로 분당 최소 120~150회 속도로 깊이 5~6cm가 되도록 강하고 빠르게 압박한다.</li>
                        <li>하나, 둘, 셋 ---”서른”하고 세어가면서 30회 시행하며, 압박된 가슴은 완전히 이완되도록 한다.</li>
                    </ul>
                    </div>
                    <div className={styles.content4}>
                    <h3>4. 인공호흡 2회 시행</h3>
                    <ul>
                    <li>머리를 뒤로 젖히고 턱을 위로 들어 올려 기도를 열어준다.</li>
                    <li>엄지와 검지손가락으로 환자의 코를 막고 입을 크게 벌린 후 2번 불어 넣기를 시행한다.</li>
                    <li>30회의 가슴압박과 2회의 인공호흡을 119구급대원이 도착할 때까지 반복해서 시행한다.</li>
                    <li>흉부압박 시 중단 시간이 10초 미만이 되독록 한다.</li>
                    <li>구조자가 인공호흡을 모르거나 능숙하지 않을 경우 인공호흡을 제외하고, 지속적으로 가슴압박만 시행한다.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};