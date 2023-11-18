import React from "react";
import styles from '../css/D1.module.css';
import image from '../../img/Disaster_3.png';

export default function D3() {
    return (
        <div className={styles.all}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <div className={styles['text-container']}>
                    <h2>낙뢰</h2>
                    <span>lighting</span>
                    </div>
                    <img src={image} style={{width: "10%"}}/>
                </div>
                <hr />
                <div className={styles.content}>
                <div className={styles.content1}>
                    <h3>가정에서 가족들과 함께 대비</h3>
                    <ul>
                        <li>스마트폰, 라디오 등을 통하여 기상정보를 파악하고 될 수 있으면 외출을 자제하기.</li>
                        <li>텔레비전 안테나나 전서을 따라 전류가 흐를 수 있으므로 전자제품의 취급에 주의가 필요함.</li>
                        <li>가옥 내에서는 전화기나 전기제품 등의 플러그를 빼어두고, 전등이나 전기제품으로부터 1m이상의 거리 유지.</li>
                    </ul>
                    </div>
                    <div className={styles.content2}>
                    <h3>산에서 위험지역 신속히 벗어나기</h3>
                    <ul>
                        <li>갑자기 하늘에 먹구름 끼면서 돌풍이 몰아칠 때, 특히 바람이 많은 산골짜기 위의 정상 등지에서는 낙뢰 위험이 크므로 신속히 하산하기.</li>
                        <li>높은 곳은 위험하므로 정상부에서는 낙뢰 발생 시 신속히 낮은 지대로 이동한다.</li>
                        <li>번개를 본 후 30초 이내에 천둥소리를 들었담ㄴ 신속히 안전한 장소로 대피하여 즉시 몸을 낮추고 물이 없는 움푹 파인 곳이나 동굴 안으로 대피하기.</li>
                        <li>정사부 암벽 위나 키 큰 나무 밑은 위험하므로 즉시 안전한 장소로 이동하기.</li>
                        <li>대피 때에는 지면에서 10cm정도 이상 높은 절연체 위에 있는 것이 안전하다.</li>
                        <li>등산용 스탁이나 우산같이 긴 물건은 땅에 뒤어 놓고, 몸에서 떨어트린다.</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};