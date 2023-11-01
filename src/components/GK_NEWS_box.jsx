import React from "react";
import { formatDateTime, getTimeAgo } from "../utilities/utils";

export const renderGkNewsBox = (post, classList, type) => {
    return (
        <div className={classList} type={type} data-boxtype="homenewsposition" key={post.id}>
            <a
                href={`/post-detail/${post.id}-${post.titleSlug}`}
                title={post.title}
                className="thumb"
            >
                <i
                    style={{
                        backgroundImage: `url(${post.poster})`
                    }}
                />
            </a>
            <div className="gknews_total">
                <h2>
                    <a
                        href={`/post-detail/${post.id}-${post.titleSlug}`}
                        className="gknews_title"
                        title={post.title}
                        data-linktype="newsdetail"
                        data-id={post.id}
                    >
                        {post.title}
                    </a>
                </h2>
            </div>
        </div>
    );
};

export const renderGkNewsBoxes = (posts, classList, type) => {
    if (posts && posts.length > 0) {
        return (
            <>
                {
                    posts.map((post, index) => (
                        <li data-boxtype="homenewsposition" key={index}>
                            {renderGkNewsBox(post, classList, type)}
                        </li>
                    ))
                }
            </>
        );
    }
    // Render a backup component or return null if there are no posts
    return null;
};


export const HotNews = ({ post }) => {
    return (
        <>
            <li className="hotnews-item" data-id="">
                <div className="gknews_box gk_flx" type="midThumb">
                    <a
                        href={`/post-detail/${post.id}-${post.titleSlug}`}
                        title={post.title}
                        className="thumb"
                    >
                        <i
                            style={{
                                backgroundImage: `url(${post.poster})`
                            }}
                        />
                    </a>
                    <div className="gknews_total">
                        <a href="" title="" className="gknews-type" />
                        <h4>
                            <a
                                href={`/post-detail/${post.id}-${post.titleSlug}`}
                                className="gknews_title"
                                title={post.title}
                                data-linktype="newsdetail"
                                data-id={post.id}
                            >
                                {post.title}
                            </a>
                        </h4>
                        <div className="gknews_tt">
                            <div className="time" title="3 ngày trước" />
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export const TimelinePost = ({ post }) => {
    return (
        <li
            className="shownews knswli clearfix done-get-sticker"
            id={post.id}
            data-locked="True"
            data-boxtype="timelineposition"
        >
            <div className="knswli-left fl">
                <a
                    title={post.title}
                    href={`/post-detail/${post.id}-${post.titleSlug}`}
                    className="kscliw-ava show-popup visit-popup"
                    data-popup-url={`/post-detail/${post.id}-${post.titleSlug}`}
                >
                    <img
                        src={post.poster}
                        title={post.title}
                        alt={post.title}
                        width={260}
                        height={162}
                    />
                </a>
            </div>
            <div className="knswli-right elp-list">
                <div className="afnews-type">
                    <a
                        href={`/posts/${post.category}`}
                        className="knswli-category"
                        title={post.category}
                    >
                        {post.category}
                    </a>
                </div>
                <h4 className="knswli-title">
                    <a
                        title={post.title}
                        href={`/post-detail/${post.id}-${post.titleSlug}`}
                        data-id={post.id}
                        newstype={0}
                        className="show-popup visit-popup"
                        data-popup-url={`/post-detail/${post.id}-${post.titleSlug}`}
                    >
                        {post.title}
                    </a>
                </h4>
                <span className="knswli-sapo">
                    {post.subTitle}
                </span>
                <div className="knswli-meta">
                    <span className="knswli-time" >
                        {getTimeAgo(post.created)}
                    </span>
                </div>
            </div>
        </li>
    )
}

export const NewsTitle = ({ post }) => {
    return (
        <li>
            <div className="gknews_box" type="nothumb">
                <div className="gknews_total">
                    <h3>
                        <a
                            href={`/post-detail/${post.id}-${post.titleSlug}`}
                            className="gknews_title">
                            {post.title}
                        </a>
                    </h3>
                </div>
            </div>
        </li>
    )

}

export const CategoryPost = ({ category, posts }) => {
    const post = posts[0];
    const subPosts = posts.slice(0);
    return (
        <div className="gkcategory layout-bd-nonebg"
            data-marked-zoneid="genk_home_z187"
            data-cd-key="newsinzonefull:zone187"
            data-cd-top={4}
        >
            <h2 className="gkcate_heading">
                <a href={`/${category}`} title={category} className="text">
                    {category}
                </a>
            </h2>
            {renderGkNewsBox(post, "gknews_box gk_flx", "row_reverse")}
            <ul className="list_gknews-nothumb">
                {subPosts.map(post => {
                    return <NewsTitle post={post} key={post.id} />
                })}
            </ul>
        </div>
    )
}