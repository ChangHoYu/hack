import React from "react";
import styles from '../css/D4.module.css';
import image from '../../img/Emergency_1.png';

export default function E1() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>응급처치</h2>
                    <span>first aid</span>
                    </div>
                    <img src={image} />
                </div>
                <hr />
                <div className={styles.content}>
                <div className={styles.content1}>
                    <h3>화상 입을 시</h3>
                    <ul>
                        <li>불, 뜨거운 증기, 기름, 물, 주방기구 등에 의해서 화상을 입으며, 주로 어린이들에게서 많이 발생한다.</li>
                        <li>화상시 화상부위를 흐르는 찬물 속에 넣어 적어도 10분 동안 담가야 한다.</li>
                        <li>상처부위는 깨긋하고 멸균 처리된 보푸라기가 없는 거즈로 덮어야 한다.</li>
                        <li>물집은 터뜨리지 말고, 화상부위에 딱 붙어 있는 물질들은 떼어내지 말아야한다.</li>
                        <li>로션을 바르거나 연고 기름 같은 것도 바르지 않는다.</li>
                        <li>최대한 빨리 병원으로 간다.</li>
                    </ul>
                    </div>
                    <div className={styles.content2}>
                    <h3>일사병 발생 시</h3>
                    <ul>
                        <li>환자를 시원한 장소로 옮긴 후 편안한 자세로 뉘어두고, 옷을 벗겨준다.</li>
                        <li>부채질을 해주거나 이온음료 또는 물을 준다. 단, 의식이 없을 시 입으로 아무것도 주지 않는다.</li>
                        <li>병원으로 신속히 이동한다.</li>
                    </ul>
                    </div>
                    <div className={styles.content3}>
                    <h3>벌에 쏘였을 경우</h3>
                    <ul>
                        <li>쏘인 부위 벌침이 남아있으면 바늘이나 칼 등을 제거, 없으면 신용카드로 긁어서 제거 후 2차 감염 방지를 위해 비누와 물로 씻는다</li>
                        <li>환자를 벌이 없는 안전한 곳으로 옮기고, 119 또는 1339에 연락한다.</li>
                        <li>알레르기 반응이 나타나는 경우, 신속하게 병원으로 이송해야하며, 구급차가 도착하기 전까지는 환자를 반듯이 눕히고 입으로 아무것도 섭취시키지 않는다.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};