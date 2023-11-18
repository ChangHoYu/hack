import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../../../redux/comment';
import { showComment } from '../../../redux/show';
import { useParams } from 'react-router-dom';

import classes from '../css/Write.module.css';



function Write(props) {
    const [token, setToken] = useState();
    const [text, setText] = useState('');
    const comment = useSelector(state => state.comment)
    const dispatch = useDispatch();
    const params = useParams();

    const getTextHandler = (e) => {
        setText(e.target.value);
    };
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    const sbmHandler = (e) => {
        // const newcomment = {
        //     index: Math.random(),
        //     id: name,
        //     content: text
        // }

        axios.post(`https://sue5520607.pythonanywhere.com/comments/`, {
            post: +params.BreakingNewsDetailId,
            text: text,
        }, {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            })
        e.preventDefault();
        // dispatch(addComment(newcomment))
        dispatch(showComment());
        // console.log(comment);
    };


    return (
        <div className={classes.container}>
            <form className={classes.form}>
                <div className={classes.input}>
                    <label htmlFor='content'></label>
                    <textarea
                        type='text'
                        id='content'
                        rows='10'
                        cols='33'
                        placeholder='내용을 입력해주세요.'
                        onChange={getTextHandler}
                    />
                </div>
                <div className={classes.sbmbtncontainer}>
                    <button onClick={sbmHandler} className={classes.sbmbtn}
                    >게시</button>
                </div>
            </form>
        </div>
    );
}

export default Write;