import React from 'react';
import { useSelector } from 'react-redux';


import WeatherInfo from './components/WeatherInfo';
import Content from './components/Content';
import classes from './css/MainPage.module.css';
import Report from '../components/Report';


function MainPage() {
    let showReport = useSelector(state => state.show.reportshow);


    return (
        <div className={classes.container}>
            <WeatherInfo />
            <Content />
            {showReport ? <Report /> : undefined}
        </div>
    );
}

export default MainPage;