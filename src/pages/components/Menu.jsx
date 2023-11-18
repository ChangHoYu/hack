import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showComment, showReport } from '../../redux/show';

import classes from './css/Menu.module.css';
import home from '../img/Home.png';
import backkey from '../img/뒤로가기.png';
import call from '../img/긴급신고.png';

function Menu() {
    const show = useSelector(state => state.show.see);
    const dispatch = useDispatch();
    const location = useLocation();
    const nav = useNavigate();

    const backBtnHandler = () => {
        if (location.pathname === '/writebreakingnews?') {
            nav('/breakingnews');
        } else {
            nav(-1);
        }

        if (show === true) {
            dispatch(showComment());
        }
    };

    const homeBtnHandler = () => {
        nav('/');
    };

    return (
        <div className={classes.container}>
            <div className={classes.btncontainer}
                onClick={() => dispatch(showReport())}>
                <img src={call} />
                <button >긴급신고</button>
            </div>
            <div
                className={classes.btncontainer}
                onClick={homeBtnHandler}
            >
                <img src={home} />
                <button >홈</button>
            </div>
            <div className={classes.btncontainer}
                onClick={backBtnHandler}>
                <img src={backkey} />
                <button >뒤로 가기</button>
            </div>
        </div>
    );
}

export default Menu;