import React from "react";
import styles from '../css/D3.module.css';
import image from '../../img/Nation_1.png';

export default function N1() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>감염병</h2>
                    <span>infectious disease</span>
                    </div>
                    <img src={image} />
                </div>
                <hr />
                <div className={styles.content}>
                <div className={styles.content1}>
                    <h3>감염병 예방</h3>
                    <ul>
                        <li>평소에도 손을 자주, 비누를 사용하여 흐르는 깨끗한 물에 씻어야함</li>
                        <li>식수는 반드시 끓였거나 병에 든 물(생수)을 마셔야함.</li>
                        <li>채소류 등 식재료는 흐르는 깨끗한 물에 씻고, 충분히 가열하여 섭취해야한다.</li>
                        <li>여름철 조리 음식 보관 금지, 오염된 물에 닿았떤 음식 섭취 금지</li>
                        <li>기침, 재치기를 할 경우 휴지나 손수건, 옷 소매 이용 입 가리기 등 기침 에티켓을 지키고 기침이 계속 된다면 마스크를 착용하여함.</li>
                        <li>손으로 가급적 눈, 코, 입을 만지는 것을 피하고, 집안실내 등은 청결히 하고 환기를 자주 시킨다.</li>
                        <li>발열이나 호흡기 증상이 있을 때에는 사람과 밀접한 접촉을 피하가급적 많은 사람이 모이는 장소로의 외출은 자제해야한다.</li>
                    </ul>
                    </div>
                    <div className={styles.content2}>
                    <h3>감염병 증상 시</h3>
                    <ul>
                        <li>설사, 발열 및 호흡기 증상이 나타날 때에는 바로 의료기관을 방문해야한다.</li>
                        <li>해외 여행객은 귀국 시 바령ㄹ, 호흡기 증상, 설사, 구토 등의 증상이 있을 경우 건강상태 질문서에 성실히 기재하고 검역관에게 반드시 신고해야한다.</li>
                        <li>올바른 손씻기 방법을 준수
                            <ol>1. 손바닥과 손바닥을 마주대고 문질러 준다</ol>
                            <ol>2. 손가락을 마주잡고 문질러 준다</ol>
                            <ol>3.손등과 손바닥을 대고 문질러 준다.</ol>
                            <ol>4.엄지 손가락을 다른 편 손바닥으로 돌려주면서 문질러 준다.</ol>
                            <ol>5.손바닥을 마주 대고 손깍지를 끼고 문질러 준다</ol>
                            <ol>6.손가락을 반대편 손바닥에 놓고 문지르며 손톱 밑을 깨끗하게 한다.</ol>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};