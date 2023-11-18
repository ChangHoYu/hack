
import classes from './css/Header.module.css';
import logo from '../img/로고.png';

function Header() {
    return (
        <div className={classes.container}>
            <img src={logo} className={classes.logo} />
        </div>
    );
}

export default Header