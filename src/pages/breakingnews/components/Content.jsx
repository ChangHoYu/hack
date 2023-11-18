import classes from '../css/Content.module.css';
import pic from '../../img/짱구.jpg'
import { useNavigate } from 'react-router-dom';

function Content({ title, content, img, time, id }) {
    const navi = useNavigate();
    const clickHandler = () => {
        navi(`/BreakingNews/${id}`);
    }

    return (
        <div className={classes.container} onClick={clickHandler}>
            <div className={classes.intro}>
                <div className={classes.region}>
                    <h3>{title}</h3>
                    <div className={classes.regiontime}>
                        <p className={classes.timeinfo}>{time}</p>
                    </div>
                </div>
                <div>
                    <p>{content}</p>
                </div>
            </div>
            <div className={classes.pic}>
                <img src={`${img}`} />
            </div>
        </div>
    );

}

export default Content;