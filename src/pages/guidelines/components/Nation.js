import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Report from '../../components/Report';
import styles from '../css/Nation.module.css';
import image1 from '../../img/Nation_1.png';
import image2 from '../../img/Nation_2.png';
import image3 from '../../img/Nation_3.png';
import image4 from '../../img/Nation_4.png';
import image5 from '../../img/Nation_5.png';
import image6 from '../../img/Nation_6.png';

function Nation() {
    let showReport = useSelector(state => state.show.reportshow);

    return (
        <div className={styles.container}>
            <Link to="/guidelines/N1" className={styles.buttonLink}>
                <div className={styles.content}><img src={image1} alt="Nation_1" className={styles.icon1} /><p className={styles.text}>감염병</p></div>
            </Link>
            <Link to="/guidelines/N2" className={styles.buttonLink}>
                <div className={styles.content}><img src={image2} alt="Nation_2" className={styles.icon2} /><p className={styles.text}>미세먼지</p></div>
            </Link>
            <Link to="/guidelines/N3" className={styles.buttonLink}>
                <div className={styles.content}><img src={image3} alt="Nation_3" className={styles.icon3} /><p className={styles.text}>교통사고</p></div>
            </Link>
            <Link to="/guidelines/N4" className={styles.buttonLink}>
                <div className={styles.content}><img src={image4} alt="Nation_4" className={styles.icon4} /><p className={styles.text}>산불</p></div>
            </Link>
            <Link to="/guidelines/N5" className={styles.buttonLink}>
                <div className={styles.content}><img src={image5} alt="Nation_5" className={styles.icon5} /><p className={styles.text}>전기사고</p></div>
            </Link>
            <Link to="/guidelines/N6" className={styles.buttonLink}>
                <div className={styles.content}><img src={image6} alt="Nation_6" className={styles.icon6} /><p className={styles.text}>테러</p></div>
            </Link>
            {showReport ? <Report /> : undefined}
        </div>
    );
};

export default Nation;