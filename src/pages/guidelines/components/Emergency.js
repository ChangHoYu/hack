import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Report from '../../components/Report';
import styles from '../css/Emergency.module.css';
import image1 from '../../img/Emergency_1.png';
import image2 from '../../img/Emergency_2.png';
function Emergency() {
    let showReport = useSelector(state => state.show.reportshow);

    return (
        <div className={styles.container}>
            <Link to="/guidelines/E1" className={styles.buttonLink}>
                <div className={styles.content}><img src={image1} alt="Emergency_1" className={styles.icon1} /><p className={styles.text1}>응급처치</p></div>
            </Link>
            <Link to="/guidelines/E2" className={styles.buttonLink}>
                <div className={styles.content}><img src={image2} alt="Emergency_2" className={styles.icon2} /><p className={styles.text2}>심폐소생술</p></div>
            </Link>
            {showReport ? <Report /> : undefined}
        </div>
    );
};

export default Emergency;