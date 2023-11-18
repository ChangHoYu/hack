import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from '../css/Main.module.css';
import Content from './Content';

function Main() {
    const [data, setData] = useState();

    async function getData() {
        try {
            const response = await axios.get("https://sue5520607.pythonanywhere.com/posts/")
            console.log(response);
            setData(response.data);
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        getData()

    }, [])

    return (
        <div className={classes.container}>
            {
                data && data.map((c) =>
                    <Content
                        key={c.pk}
                        id={c.pk}
                        content={c.body}
                        img={c.image}
                        time={c.published_date}
                        title={c.title}
                    />
                )
            }
        </div>
    );
}

export default Main;