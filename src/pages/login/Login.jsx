import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/comment';


import classes from './css/Login.module.css';

function Login() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const getIdHandler = (e) => {
        setId(e.target.value);
    };

    const getPwdHandler = (e) => {
        setPwd(e.target.value);
    };

    const createUser = () => {
        nav('/create');
    };

    const loginHandler = () => {
        axios.post('https://sue5520607.pythonanywhere.com/users/login/', {
            username: id,
            password: pwd,
        })
            .then(function (response) {
                console.log(response);
                localStorage.clear();
                localStorage.setItem('token', response.data.token);
                nav('/');
            }).catch(function (error) {
                console.log(error);
            })
        dispatch(addUser(id));
    };

    return (
        <div className={classes.container}>
            <div className={classes.loginbox}>
                <label htmlFor='id' className={classes.inputlabel}>아이디</label>
                <input id='id' type='text' className={classes.inputbox} onChange={getIdHandler} />
                <label htmlFor='pwd' className={classes.inputlabel} >비밀번호</label>
                <input type='password' id='pwd' className={classes.inputbox} onChange={getPwdHandler} />
            </div>
            <div>
                <button onClick={loginHandler} className={classes.btn}>로그인</button>
                <button onClick={createUser} className={classes.btn}>회원가입</button>
            </div>
        </div>
    );
}

export default Login;