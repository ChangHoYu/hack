import React from 'react';
import { Outlet } from 'react-router-dom';

import classes from './css/RootLayer.module.css';
import Header from './Header';
import Menu from './Menu';

function RootLayer() {
    return (
        <div className={classes.container}>
            <Header />
            <Outlet />
            <Menu />
        </div>
    );
}

export default RootLayer;