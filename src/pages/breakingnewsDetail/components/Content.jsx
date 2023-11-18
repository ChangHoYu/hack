import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showComment } from '../../../redux/show';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import classes from '../css/Content.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import Write from './Write';



function Content({ }) {
    const [token, setToken] = useState();
    const [title, setTitle] = useState('');
    const [img, setImg] = useState();
    const [content, setContent] = useState();
    const [data, setData] = useState();
    const [comment, setComment] = useState();
    const params = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();
    const user = useSelector(state => state.comment.user);

    useEffect(() => {
        setToken(localStorage.getItem('token'))
        console.log(token);
    }, [])

    const writeHandler = () => {
        alert('로그인해주세요');
        nav(`/breakingnews/${+params.BreakingNewsDetailId}`);
    };

    async function getData() {
        try {
            const response = await axios.get("https://sue5520607.pythonanywhere.com/posts/");
            setTitle(response.data[(+params.BreakingNewsDetailId) - 1].title);
            setImg(response.data[(+params.BreakingNewsDetailId) - 1].image);
            setContent(response.data[(+params.BreakingNewsDetailId) - 1].body);
            console.log(response.data);
            console.log(user);

        } catch (e) {
            console.log(e);
        }

    }

    async function getComment() {
        try {
            const comment = [];
            const response = await axios.get(`https://sue5520607.pythonanywhere.com/comments/`);
            setComment(response.data.filter((c) => c.post === +params.BreakingNewsDetailId));
            console.log(comment);

        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        getData()
        getComment();
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <div className={classes.region}>
                    <h3>{title}</h3>
                </div>
                <div className={classes.swipercon}>
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                    >
                        <SwiperSlide className={classes.swiperslide}>
                            <img src={`${img}`} className={classes.contentimg} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={classes.text}>
                    <p>{content}</p>
                </div>
                <div>
                    <div className={classes.commentline}>
                        <p>댓글</p>
                    </div>
                    {
                        comment && comment.map((c) =>
                            <div
                                key={c.pk}
                                className={classes.commentline}
                            >
                                <p>{c.text}</p>
                            </div>
                        )
                    }


                </div>
                <div onClick={() => token ? dispatch(showComment()) : writeHandler}>
                    <button className={classes.writebtn} >댓글 쓰기</button>
                </div>
            </div>
        </div>
    );
}

export default Content;