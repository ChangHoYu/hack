import React from "react";
import styles from '../css/D1.module.css';
import image from '../../img/Nation_6.png';

export default function N6() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                        <h2>테러</h2>
                        <span>terror</span>
                    </div>
                    <img src={image} />
                </div>
                <hr />
                <div className={styles.content}>
                    <div className={styles.content1}>
                        <h3>폭발물 테러</h3>
                        <p>폭발물 의심물품 또논 차량 발견 시</p>
                        <ul>
                            <li>절대 손대지 말고 신속히 대피 후 경찰에 신고</li>
                            <li>폭발물 반대 방향 비상꼐단을 이용하여 건물밖으로 탈출</li>
                        </ul>
                        <p>폭발물이 폭발하는 경우</p>
                        <ul>
                            <li>폭발음이 들리면 즉시 바닥에 엎드리고, 양팔과 팔꿈치를 붙여 가슴을 보호하고, 귀와 머리를 손으로 감싸 두개골 보호</li>
                            <li>폭발이 종료되어도 연쇄 폭발이 있을 수 있으므로 좀 더 엎드려 있다가 폭발지점 반대 방향으로 신속히 대피</li>
                        </ul>
                    </div>
                    <div className={styles.content2}>
                        <h3>화학 생물 테러</h3>
                        <ul>
                            <li>오염공기가 감지되면 손수건, 휴지 등으로 코와 입을 가리고 호흡</li>
                            <li>오임지역과 오염원을 재빨리 확인 후 신속히 현재 위치에서 탈출</li>
                            <li>오염지역에서 화학물질 등에 노출되었을 경우, 비누로 얼굴과 손 등을 깨끗이 씻고 응급치료</li>
                        </ul>
                    </div>
                    <div className={styles.content3}>
                        <h3>방사능 테러</h3>
                        <ul>
                            <li>원자력 시설, 방사성 물질 이용시설에 대한 테러발생시 신속히 현재 위치에서 탈출</li>
                            <li>즉시 지하대피소나 엄폐물을 찾아 몸을 숨김</li>
                            <li>대규모 오염환자 발생시 방사선 비상 진료기관의 현장 대응지시에 따라 이동</li>
                        </ul>
                    </div>
                    <div className={styles.content4}>
                        <h3>억류 납치 테러</h3>
                        <ul>
                            <li>납치범을 자극하지 말고 몸값 요구를 위한 서한이나 녹음을 요청할 때는 응함</li>
                            <li>눈을 가릴 때 주변 소리, 냄새, 범인 목소리, 이동할 경우 도로 상태 등을 최대한 기억</li>
                            <li>구출된다는 희마을 갖고 최대한 건강 상태를 유지하고, 구출 작전 시 바닥에 엎드림</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};