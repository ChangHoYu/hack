import { useSelector } from 'react-redux';

import classes from './css/WritePage.module.css';
import Input from './components/Input';
import Report from '../components/Report';

function WritePage() {
    let showReport = useSelector(state => state.show.reportshow);

    return (
        <div className={classes.container}>
            {showReport ? <Report /> : undefined}
            <Input />
        </div>
    );
}

export default WritePage;