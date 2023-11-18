import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Report from '../../components/Report';
import styles from '../css/Disaster.module.css';
import image1 from '../../img/Disaster_1.png';
import image2 from '../../img/Disaster_2.png';
import image3 from '../../img/Disaster_3.png';
import image4 from '../../img/Disaster_4.png';
import image5 from '../../img/Disaster_5.png';
import image6 from '../../img/Disaster_6.png';


function Disaster() {
  let showReport = useSelector(state => state.show.reportshow);

  return (
    <div className={styles.container}>
      <Link to="/guidelines/D1" className={styles.buttonLink}>
        <div className={styles.content}>
          <img src={image1} alt="Disaster_1" className={styles.icon1} />
          <p className={styles.text1}>침수</p>
        </div>
      </Link>
      <Link to="/guidelines/D2" className={styles.buttonLink}>
        <div className={styles.content}>
          <img src={image2} alt="Disaster_2" className={styles.icon2} />
          <p className={styles.text2}>폭염</p>
        </div>
      </Link>
      <Link to="/guidelines/D3" className={styles.buttonLink}>
        <div className={styles.content}>
          <img src={image3} alt="Disaster_3" className={styles.icon3} />
          <p className={styles.text3}>낙뢰</p>
        </div>
      </Link>
      <Link to="/guidelines/D4" className={styles.buttonLink}>
        <div className={styles.content}>
          <img src={image4} alt="Disaster_4" className={styles.icon4} />
          <p className={styles.text4}>산사태</p>
        </div>
      </Link>
      <Link to="/guidelines/D5" className={styles.buttonLink}>
        <div className={styles.content}>
          <img src={image5} alt="Disaster_5" className={styles.icon5} />
          <p className={styles.text5}>지진</p>
        </div>
      </Link>
      <Link to="/guidelines/D6" className={styles.buttonLink}>
        <div className={styles.content}>
          <img src={image6} alt="Disaster_6" className={styles.icon6} />
          <p className={styles.text6}>대설</p>
        </div>
      </Link>
      {showReport ? <Report /> : undefined}
    </div>
  );
};

export default Disaster;