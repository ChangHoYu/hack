import React from 'react';
import { Outlet } from 'react-router-dom';

import classes from './css/RootLayer.module.css';
import Header from './Header';
import Menu from './Menu';

function RootGuideLine() {
    return (
        <div className={classes.container}>

            <Outlet />

        </div>
    );
}

export default RootGuideLine;