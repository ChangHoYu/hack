import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import classes from './css/Login.module.css';

function CreateUser() {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const nav = useNavigate();

    const getIdHandler = (e) => {
        setId(e.target.value);
    };

    const getPwdHandler = (e) => {
        setPwd(e.target.value);
    };

    const createUser = () => {
        axios.post('https://sue5520607.pythonanywhere.com/users/register/', {
            username: id,
            password: pwd,
        })
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            })
        nav('/');
    }

    return (
        <div>
            <div>
                <label htmlFor='id' className={classes.inputlabel}>아이디</label>
                <input id='id' type='text' className={classes.inputbox} onChange={getIdHandler} />
                <label htmlFor='pwd' className={classes.inputlabel}>비밀번호</label>
                <input type='password' id='pwd' className={classes.inputbox} onChange={getPwdHandler} />
            </div>
            <div>
                <button onClick={createUser} className={classes.btn}>완료</button>
            </div>
        </div>
    );
}

export default CreateUser;