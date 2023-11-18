import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from '../css/Input.module.css';


function Input() {
    const [token, setToken] = useState();
    const nav = useNavigate();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [imgFile, setImgFile] = useState('');

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, []);

    const saveImgFileHandler = (e) => {
        setImgFile(e.target.files[0]);
    };

    const getText = (e) => {
        setText(e.target.value);
    };

    const getTitle = (e) => {
        setTitle(e.target.value);
    };

    const submitHandler = (event) => {
        console.log(imgFile);
        event.preventDefault();
        if (imgFile === '') {
            alert('사진을 넣어주세요');
            return;
        } else {
            axios.post('https://sue5520607.pythonanywhere.com/posts/', {

                title: title,
                body: text,
                image: imgFile,

            }, {
                headers: {
                    Authorization: `Token ${token}`,
                    'content-type': 'multipart/form-data'
                },
            })
        }
        nav('/');
    };


    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h1>글쓰기</h1>
            </div>
            <form onSubmit={submitHandler}>
                <div className={classes.inputtitle}>
                    <label htmlFor='title' className={classes.label}>제목</label>
                    <input type='text' id='title' className={classes.input} onChange={getTitle} />
                </div>
                <div className={classes.inputtitle}>
                    <label htmlFor='title' className={classes.label}>내용을 입력해주세요</label>
                    <textarea id='title' rows='10' cols='33' onChange={getText} ></textarea>
                </div>
                <div>
                    <input type='file' onChange={saveImgFileHandler} />
                    <button className={classes.submitBtn}>완료</button>
                </div>

            </form>
        </div>
    );
}

export default Input;