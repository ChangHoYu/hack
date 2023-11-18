import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Report from '../components/Report';
import Write from './components/Write';
import Content from './components/Content';
import classes from './css/BreakingNewsDetail.module.css';



function BreakingNewsDetail() {

    const show = useSelector((state) => state.show.see);
    const showReport = useSelector(state => state.show.reportshow);
    console.log(show);

    return (
        <div className={show ? classes.containermodalbackground : classes.container}>
            {!show ? <Content /> : undefined}
            {show ? <Write /> : undefined}
            {showReport ? <Report /> : undefined}
        </div>
    );
}

export default BreakingNewsDetail;