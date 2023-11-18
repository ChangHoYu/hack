import { useDispatch } from 'react-redux';
import { showReport } from '../../redux/show';

import classes from './css/Report.module.css';
import pic1 from '../img/긴급신고1.png';
import pic2 from '../img/긴급신고2.png';
import pic3 from '../img/긴급신고3.png';

function Report() {
    const dispatch = useDispatch();

    return (
        <div className={classes.container}>

            <div className={classes.title}>
                <h3>긴급신고</h3>
            </div>
            <div className={classes.contentbox}>
                <div className={classes.picback1}>
                    <img src={pic1} className={classes.pic} />
                </div>
                <a href='tel:119' className={classes.tel}>화재 구조 구급 신고</a>
                <h2>119</h2>
            </div>
            <div className={classes.contentbox}>
                <div className={classes.picback2}>
                    <img src={pic2} className={classes.pic} />
                </div>
                <a href='tel:112' className={classes.tel}>긴급 범죄 신고</a>
                <h2>112</h2>
            </div>
            <div className={classes.contentbox}>
                <div className={classes.picback3}>
                    <img src={pic3} className={classes.pic} />
                </div>
                <a href='tel:110' className={classes.tel}>그 외 모든 민원 상담</a>
                <h2>110</h2>
            </div>
            <button className={classes.closebtn} onClick={() => dispatch(showReport())}>닫기</button>
        </div >
    );
}

export default Report;