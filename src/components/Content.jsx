import React, { useEffect, useRef, useState } from "react";
import '../assets/css/home.css'
import '../assets/css/genkPlayer.css'
import { fetchAllHotNEWS, fetchMainPosts, fetchPostsByCategory, fetchTimelinePosts } from "../redux/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { CATEGORIES } from "../constant/appConstant";
import { CategoryPost, HotNews, TimelinePost, renderGkNewsBox, renderGkNewsBoxes } from "./GK_NEWS_box";

export const Content = () => {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.post.posts);
    const hotNEWS = useSelector(state => state.post.hotNEWS);
    const timelinePostData = useSelector(state => state.post.timelinePosts);
    const categoryPostData = useSelector(state => state.post.categoryPosts);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const targetRef = useRef();

    // const [fetchedData, setFetchedData] = useState(false)

    const firstPost = posts && posts.length > 0 ? posts[0] : null;
    const secondPost = posts && posts.length > 0 ? posts[1] : null;
    const thirdPost = posts && posts.length > 0 ? posts[2] : null;
    const forthPost = posts && posts.length > 0 ? posts[3] : null;

    const remainPosts = posts && posts.length > 4 ? posts.slice(4) : [];

    const timelinePosts = timelinePostData && timelinePostData.length > 0 ? timelinePostData : [];

    const categoryPosts = categoryPostData.Technology && categoryPostData.Technology.length > 0 ? categoryPostData : [];

    const offsetHeight = useRef(410);

    const handleScroll = () => {
        // console.log("window.innerHeight + window.scrollY ", window.innerHeight + window.scrollY)
        // console.log("document.body.offsetHeight - offsetHeight.current ", document.body.offsetHeight - offsetHeight.current)
        if (
            targetRef.current &&
            window.innerHeight + window.scrollY >= document.body.offsetHeight - offsetHeight.current &&
            !isFetching
        ) {
            setIsFetching(true);
            dispatch(fetchTimelinePosts(page)).then(() => {
                offsetHeight.current -= 10000;
                setPage(page + 1);
                setIsFetching(false);
            });
        }
    };
    useEffect(() => {
        const handleScrollEvent = () => {
            handleScroll();
        };
        window.addEventListener('scroll', handleScrollEvent);
        return () => window.removeEventListener('scroll', handleScrollEvent);
    }, [page]);


    useEffect(() => {
        dispatch(fetchMainPosts());
        dispatch(fetchAllHotNEWS());
        CATEGORIES.forEach((cate) => {
            dispatch(fetchPostsByCategory(cate));
        });
    }, []);

    return (
        <div className="main" ref={targetRef}>
            <div className="gk_home20-wrapper genk-body-wrapper">
                <div className="w1160">
                    <div className="gk_section-top">
                        <div
                            className="gk_flx justifySB"
                            data-cd-key="newsposition:zoneid0type1"
                            data-cd-top={8}
                        >
                            <div className="gk_bigleft" data-marked-zoneid="genk_home_focus1">
                                {firstPost && renderGkNewsBox(firstPost, "gknews_box", "bigThumb")}
                                <ul className="list_gknews-top gk_flx justifySB">
                                    <li data-boxtype="homenewsposition">
                                        {secondPost && renderGkNewsBox(secondPost, "gknews_box", "midThumb")}
                                    </li>
                                    <li data-boxtype="homenewsposition">
                                        {thirdPost && renderGkNewsBox(thirdPost, "gknews_box", "midThumb")}
                                    </li>
                                </ul>
                            </div>
                            <div className="gk_bigright">
                                <div className="gk_flx justifySB">
                                    <div className="gk_bigright-left">
                                        {forthPost && renderGkNewsBox(forthPost, "gknews_box", "midThumb")}
                                        <ul
                                            className="list_gknews-topright"
                                            data-marked-zoneid="genk_home_focus"
                                        >
                                            {remainPosts && renderGkNewsBoxes(remainPosts, "gknews_box gk_flx", "smallThumb")}
                                        </ul>
                                    </div>
                                    <div className="gk_bigright-right">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gk_hotnews"
                        data-marked-zoneid="genk_home_dang_chu_y"
                        data-cd-key="objectembedbox:zoneid0typeid1"
                        data-cd-top={3}
                    >
                        <h3 className="hotnews-label">
                            <a data-herf="javascript:;" rel="nofollow" title="đáng chú ý">
                                đáng chú ý
                            </a>
                        </h3>
                        <div className="hotnews-wrapper">
                            <div className="hotnews">
                                <ul className="list-hotnews">
                                    {hotNEWS && hotNEWS.length > 0 ? hotNEWS.map(post => {
                                        return <HotNews key={post.id} post={post} />
                                    }) : ""}
                                </ul>
                            </div>
                        </div>
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
                                        {timelinePosts.map(post => {
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
                                    categoryPosts[category] && categoryPosts[category].length > 0 ? (
                                        <CategoryPost key={category} category={category} posts={categoryPosts[category]} />
                                    ) : null
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}