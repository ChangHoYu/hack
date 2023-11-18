import { useSelector } from 'react-redux';

import classes from './css/BreakingNews.module.css';
import Main from '../breakingnews/components/Main';
import Report from '../components/Report';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function BreakingNews() {
    const nav = useNavigate();
    const [token, setToken] = useState();
    let showReport = useSelector(state => state.show.reportshow);

    useEffect(() => {
        setToken(localStorage.getItem('token'))
        console.log(token);
    }, [])

    const gowritepage = () => {
        console.log(token)
        if (token === null) {
            alert('로그인 해주세요');
            nav('/breakingnews');
        } else {
            nav('/writebreakingnews');
        }
    }

    return (
        <div className={classes.container}>
            <Main />
            <button
                onClick={gowritepage}
                className={classes.writebtn}
            >
                <p >글쓰기</p>
            </button>
            {showReport ? <Report /> : undefined}
        </div>
    );
}

export default BreakingNews;