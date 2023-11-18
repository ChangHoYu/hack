import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import classes from '../css/Content.module.css';
import pic1 from '../../img/확성1 1.png';
import pic2 from '../../img/대피소1 2.png';
import pic3 from '../../img/안진업 1.png';

function Content() {
    const [token, setToken] = useState();
    const nav = useNavigate();

    useEffect(() => {
        setToken(localStorage.getItem('token'))
        console.log(token);
    }, [token])

    const changePageBnHandler = () => {
        nav('/breakingnews');
    };

    const changePageMapHandler = () => {
        nav('/map');
    };

    const changePageGuideHandler = () => {
        nav('/guidelines');
    };

    const loginHandler = () => {
        nav('/login');
    };

    const logoutHandler = () => {
        localStorage.clear();
        nav('/login');
    };

    return (
        <div className={classes.container}>
            <div
                className={classes.contentbox}
                onClick={changePageBnHandler}
            >
                <div className={classes.textbox}>
                    <p className={classes.title}>실시간 재난 상황</p>
                    <p className={classes.intro}>시민들이 알려주는 실시간 상황</p>
                </div>
                <img src={pic1} className={classes.pic} />
            </div>

            <div
                className={classes.contentbox}
                onClick={changePageMapHandler}
            >
                <div className={classes.textbox}>
                    <p className={classes.title}>대피소 찾기</p>
                    <p className={classes.intro}>가까운 대피 시설은??</p>
                </div>
                <img src={pic2} className={classes.pic} />
            </div>
            <div
                className={classes.contentbox}
                onClick={changePageGuideHandler}
            >
                <div className={classes.textbox}>
                    <p className={classes.title}>안전 행동 요령</p>
                    <p className={classes.intro}>우리 스스로 안전을 지키는 법!</p>
                </div>
                <img src={pic3} className={classes.pic} />
            </div>
            {
                !token ?
                    <button
                        className={classes.loginbtn}
                        onClick={loginHandler}
                    >
                        로그인
                    </button> :
                    <button
                        className={classes.loginbtn}
                        onClick={logoutHandler}
                    >
                        로그아웃
                    </button>
            }
        </div >
    );
}

export default Content