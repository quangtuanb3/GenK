import React, { useEffect } from 'react'
// import Speech from 'react-speech';
import Layout from './Layout'

import { Content } from '../components/Content'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllHotNEWS, fetchPostById, fetchPostsByCategory, fetchTimelinePosts } from '../redux/postSlice';
import { CATEGORIES } from '../constant/appConstant';
import { CategoryPost, HotNews, TimelinePost } from '../components/GK_NEWS_box';
import { getTimeAgo } from '../utilities/utils';
import TextToSpeech from '../components/TextToSpeech';

function PostDetail() {
    const titleSlug = useParams().titleSlug;
    const currentPost = useSelector((state) => state.post.currentPost);
    const hotNEWS_data = useSelector((state) => state.post.hotNEWS);
    const timelinePostData = useSelector(state => state.post.timelinePosts);
    const categoryPostData = useSelector(state => state.post.categoryPosts);
    const dispatch = useDispatch();

    const postId = titleSlug.split("-")[0];

    const extractTextFromHTML = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    };

    const contentText = currentPost && currentPost.content ? currentPost.title + " " + currentPost.subTitle + " " + extractTextFromHTML(currentPost.content) : "";


    const filteredHotNews = hotNEWS_data && hotNEWS_data.length > 0 ? hotNEWS_data.filter((post) => post.id != postId) : [];
    const filteredTimelinePost = timelinePostData && timelinePostData.length > 0 ? timelinePostData.filter((post) => post.id != postId) : [];
    const filteredCategoryPost = categoryPostData && categoryPostData.length > 0 ? categoryPostData.filter((post) => post.id != postId) : [];


    useEffect(() => {
        dispatch(fetchAllHotNEWS())
        dispatch(fetchPostById(postId))
        dispatch(fetchTimelinePosts())
        CATEGORIES.forEach(category => dispatch(fetchPostsByCategory(category)))

    }, [])

    return (
        <>
            <Layout>

                <div className="main">
                    <div className="gk_home20-wrapper genk-body-wrapper">
                        <div className="w1040 gbwc-wrp clearfix">

                            <div className="gk_hotnews"
                                data-marked-zoneid="genk_home_dang_chu_y"
                                data-cd-key="objectembedbox:zoneid0typeid1"
                                data-cd-top={3}
                            >
                                <div className="hotnews-wrapper">
                                    <div className="hotnews">
                                        <ul className="list-hotnews">
                                            {filteredHotNews && filteredHotNews.length > 0 ? filteredHotNews.map(post => {
                                                return <HotNews key={post.id} post={post} />
                                            }) : ""}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={currentPost.poster} alt="poster" style={{ width: "100%", padding: '20 0' }} />
                            </div>

                            <div id='NEWS-content'>
                                <h5 style={{ marginTop: 40, color: "gray" }}><Link to={'/'} style={{ color: "gray", textDecoration: 'none' }}>Home</Link> - {currentPost.category}</h5>
                                <div className='row'>
                                    <h1 className='col-10'>  {currentPost.title}  </h1>
                                    <div className='col-2'>
                                        <TextToSpeech text={contentText} />
                                    </div>

                                </div>

                                <div className="kbwc-meta" sourceid="0" style={{ padding: 15 }}>
                                    <span className="kbwcm-author">{currentPost.author} &nbsp;</span>
                                    <span className="kbwcm-time" title={currentPost.created}>{getTimeAgo(currentPost.created)}</span>
                                </div>
                                <h3 className='subTitle' style={{ borderTop: "1px solid gray", padding: "20px 0px" }}>{currentPost.subTitle}</h3>
                                <div dangerouslySetInnerHTML={{ __html: currentPost?.content }} />
                            </div>

                            <div className="gk_section-mid">
                                <div className="gk_flx justifySB">
                                    <div className="gk_bigleft">
                                        <div className="kds-new-stream-wrapper">
                                            <ul
                                                className="knsw-list"
                                                id="LoadListCate"
                                                data-cd-key="newsinzoneisonhome:zone0"
                                                data-marked-zoneid="genk_home_bs7"
                                                data-cd-top={26}
                                            >
                                                {filteredTimelinePost.map(post => {
                                                    return (
                                                        <TimelinePost post={post} key={post.id} />
                                                    )
                                                })}

                                            </ul>
                                            <div className="fb-loading-wrapper" style={{ maxWidth: 700 }}>
                                                <div className="fblw-timeline-item">
                                                    <div className="fblwti-animated">
                                                        <div className="fblwtia-mask fblwtia-title-line fblwtia-title-mask-0" />
                                                        <div className="fblwtia-mask fblwtia-sepline-sapo fblwtia-sapo-line-0" />
                                                        <div className="fblwtia-mask fblwtia-sepline-sapo fblwtia-sepline-sapo-0" />
                                                        <div className="fblwtia-mask fblwtia-title-line fblwtia-title-mask-1" />
                                                        <div className="fblwtia-mask fblwtia-sepline-sapo fblwtia-sapo-line-1" />
                                                        <div className="fblwtia-mask fblwtia-sepline-sapo fblwtia-sepline-sapo-1" />
                                                        <div className="fblwtia-mask fblwtia-front-mask fblwtia-front-mask-2" />
                                                        <div className="fblwtia-mask fblwtia-sapo-line fblwtia-sapo-line-2" />
                                                        <div className="fblwtia-mask fblwtia-sepline-sapo fblwtia-sepline-sapo-2" />
                                                        <div className="fblwtia-mask fblwtia-front-mask fblwtia-front-mask-3" />
                                                        <div className="fblwtia-mask fblwtia-sapo-line fblwtia-sapo-line-3" />
                                                        <div className="fblwtia-mask fblwtia-sepline-sapo fblwtia-sepline-sapo-3" />
                                                        <div className="fblwtia-mask fblwtia-front-mask fblwtia-front-mask-4" />
                                                        <div className="fblwtia-mask fblwtia-sapo-line fblwtia-sapo-line-4" />
                                                        <div className="fblwtia-mask fblwtia-sepline-sapo fblwtia-sepline-sapo-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gk_bigright mgt-25">
                                        {CATEGORIES.map((category) => (
                                            filteredCategoryPost[category] && categoryPosts[category].length > 0 ? (
                                                <CategoryPost key={category} category={category} posts={categoryPosts[category]} />
                                            ) : null
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <h1 >{currentPost?.content || ""}</h1> */}
            </Layout >

        </>
    )
}

export default PostDetail
