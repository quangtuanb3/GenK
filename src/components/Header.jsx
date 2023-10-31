import React, { useState } from "react";
import "../assets/css/home.css"
import '../customizeCss.css'


export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClickShowMenu = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <>
            <div className="genk-header-wrapper">
                <div className="ghw-top-header">
                    <div className="w1040 w1160">
                        <ul className="ghw-menu-channelvn">
                            <li className="gmchi">
                                <a
                                    href="http://gamek.vn/"
                                    title="Kênh thông tin mới nhất về Game trong nước và thế giới"
                                    target="_blank"
                                    rel="nofollow"
                                >
                                    Gamek
                                </a>
                            </li>
                            <li className="gmchi">
                                <a
                                    href="http://kenh14.vn/"
                                    title="Kênh tin tức giải trí - Xã hội "
                                    target="_blank"
                                    rel="nofollow"
                                >
                                    Kenh14
                                </a>
                            </li>
                            <li className="gmchi">
                                <a
                                    href="http://cafebiz.vn/"
                                    target="_blank"
                                    title="CafeBiz - Thông tin kinh doanh - Doanh nhân"
                                    rel="nofollow"
                                >
                                    Cafebiz
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="ghw-bottom-header">
                    <div className="w1040 w1160 clearfix ghw-bottom-header-top">
                        <h1>
                            <a
                                href="/"
                                title="Trang thông tin dành cho tín đồ công nghệ"
                                className="logo-genk "
                            >
                                <img
                                    src="https://static.mediacdn.vn/genk/web_images/logogenk.svg"
                                    alt="Logo"
                                    style={{ width: "100%" }}
                                />
                            </a>
                        </h1>
                        <div className="ghw-trending-list" style={{}}>
                            <div className="trending-icon">
                                <svg
                                    width={20}
                                    height={13}
                                    viewBox="0 0 20 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_2_588)">
                                        <path
                                            d="M7.71094 6.06641L11.6953 10.0508L17.4141 4.35547L19.7109 6.65234V0.652344H13.7109L16.0078 2.92578L11.6953 7.23828L7.71094 3.23047L0 10.9414L1.40625 12.3477L7.71094 6.06641Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_588">
                                            <rect
                                                width="19.7109"
                                                height="11.6953"
                                                fill="white"
                                                transform="translate(0 0.652344)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="trending-swiper swiper">
                                <ul className="swiper-wrapper trending-list" />
                            </div>
                        </div>
                        <a
                            data-herf="javascript:;"
                            id="btnSearch"
                            className="sprite-genk i-search"
                            rel="nofollow"
                            title="button"
                        />
                        <div className="textsearch fl">
                            <p
                                id="searchinput"
                                contentEditable="true"
                                // onKeyPress="return BBEnterPress1(event)"
                                data-placeholder="Nhập nội dung tìm kiếm ..."
                            />
                        </div>
                    </div>
                    <div className="ghw-nav-header">
                        <div className="w1040 w1160 clearfix">
                            <ul className="gbh-menu-list">
                                <li className="gmli">
                                    <a
                                        href="/"
                                        title="Trang thông tin dành cho tín đồ công nghệ"
                                        className="logo-fixed"
                                    >
                                        <svg
                                            width={180}
                                            height={28}
                                            viewBox="0 0 180 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M33.1237 10.8947H20.1563L21.6318 17.7898H30.0308C30.2011 17.7898 30.3429 17.9601 30.2578 18.1303L29.3214 20.4854C29.293 20.5706 29.1795 20.6557 29.0945 20.6557H12.8922C12.4383 20.6557 12.0977 20.2017 12.268 19.7477L16.7228 8.39765C16.808 8.14227 17.0634 7.97201 17.3471 7.97201H44.4454L47.2545 0.849854H12.4099C11.9275 0.849854 11.4451 0.991731 11.0478 1.27549L8.52245 2.97799C8.12519 3.26174 7.81306 3.63063 7.64281 4.08463L0.322028 22.7838C0.0382765 23.5215 0.123402 24.3728 0.577404 25.0255L1.76916 26.7563C2.22316 27.4089 2.96092 27.8062 3.75542 27.8062H36.6989L43.3387 10.8947H33.1237Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M81.5031 17.7899L84.3121 10.6678H57.3274L58.207 8.42614C58.2921 8.17077 58.5476 8.00051 58.8313 8.00051H85.3621L88.1712 0.878357H54.4331C53.9507 0.878357 53.4684 1.02024 53.0712 1.30398L50.5457 3.0065C50.1485 3.29024 49.8364 3.65912 49.6661 4.11312L42.3453 22.784C42.0616 23.5218 42.1467 24.3729 42.6008 25.0256L43.7924 26.7565C44.2464 27.4092 44.9842 27.8064 45.7787 27.8064H77.5589L80.368 20.6842H54.348C53.894 20.6842 53.5535 20.2302 53.7238 19.7762L54.4899 17.7899H81.5031Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M122.817 0.878357L115.212 20.2586C115.127 20.5139 114.872 20.6842 114.588 20.6842C114.275 20.6842 114.02 20.4572 113.935 20.1734L109.878 0.906733H95.2928C94.8104 0.906733 94.328 1.04861 93.9308 1.33236L91.4054 3.03487C91.0081 3.31862 90.696 3.68749 90.5257 4.14149L83.2049 22.8123C82.9212 23.5501 83.0064 24.4013 83.4603 25.054L84.652 26.7848C85.1061 27.4375 85.8438 27.8347 86.6383 27.8347H102.301L100.826 20.9396H95.69C95.236 20.9396 94.8955 20.4855 95.0658 20.0316L99.6055 8.45452C99.6905 8.19914 99.9467 8.0289 100.23 8.0289C100.542 8.0289 100.797 8.2559 100.882 8.53964L104.941 27.8064H123.015L133.599 0.878357H122.817Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M159.79 25.1107L160.244 26.2457C160.613 27.1821 161.492 27.778 162.485 27.778H172.303L165.918 12.7108L159.96 23.011C159.591 23.6636 159.506 24.4297 159.79 25.1107Z"
                                                fill="#C32022"
                                            />
                                            <path
                                                d="M165.891 0.878357L142.538 20.5423C142.424 20.6558 142.283 20.6842 142.112 20.6842H141.828C141.374 20.6842 141.034 20.2302 141.204 19.7762L148.61 0.878357H137.544L128.975 22.784C128.691 23.5218 128.776 24.3729 129.23 25.0256L130.422 26.7565C130.876 27.4092 131.613 27.8064 132.407 27.8064H147.674L165.919 12.7391L179.993 0.878357H165.891Z"
                                                fill="#C32022"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li className="gmli">
                                    <a href="/mobile.chn" title="mobile">
                                        Mobile
                                    </a>
                                </li>
                                <li className="gmli">
                                    <a href="/tin-ict.chn" title="Tin ICT">
                                        Tin ICT
                                    </a>
                                </li>
                                <li className="gmli">
                                    <a href="/internet.chn" title="internet">
                                        Internet
                                    </a>
                                </li>
                                <li className="gmli">
                                    <a href="/kham-pha.chn" title="Khám phá">
                                        Khám phá
                                    </a>
                                </li>

                                <li className="gmli">
                                    <a href="/thu-thuat.chn" title="Thủ thuật">
                                        Thủ thuật
                                    </a>
                                </li>
                                <li className="gmli">
                                    <a href="/apps-games.chn" title="Apps-Game">
                                        Apps-Game
                                    </a>
                                </li>
                                <li className="gmli">
                                    <a href="/do-choi-so.chn" title="Đồ chơi số">
                                        Đồ chơi số
                                    </a>
                                </li>
                                <li className="gmli expand-icon" id="expandicon">
                                    <a
                                        data-herf="javascript:;"
                                        className="i-expand"
                                        rel="nofollow"
                                        title="icon"
                                        onMouseOver={() => setShowMenu(true)}

                                    >
                                        <div className="iconmenu" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div id="menu-expand" className="menu-expand-wrapper" style={showMenu ? { display: "block" } : { display: "none" }} onMouseLeave={() => setShowMenu(false)}>
                            <div className="clearfix menu-clear">
                                <div className="w1040 clearfix">
                                    <ul className="menu-expand-list">
                                        <li className="menu-expand-item">
                                            <ul className="submenu-expand-list">
                                                <li className="submenu-expand-item cate">
                                                    <a href="/mobile.chn" title="mobile">
                                                        Mobile
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item">
                                                    <a href="/mobile/dien-thoai.chn" title="điện thoại">
                                                        Điện thoại
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item">
                                                    <a href="/mobile/may-tinh-bang.chn" title="máy tính bảng">
                                                        Máy tính bảng
                                                    </a>
                                                </li>
                                            </ul>

                                        </li>
                                        <li className="menu-expand-item">
                                            <ul className="submenu-expand-list">
                                                <li className="submenu-expand-item cate">
                                                    <a href="/internet.chn" title="internet">
                                                        INTERNET
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item">
                                                    <a
                                                        href="/internet/digital-marketing.chn"
                                                        title="digital marketing"
                                                    >
                                                        Digital Marketing
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item">
                                                    <a href="/internet/media.chn" title="media">
                                                        Media
                                                    </a>
                                                </li>
                                            </ul>

                                        </li>

                                        <li className="menu-expand-item">
                                            <ul className="submenu-expand-list">
                                                <li className="submenu-expand-item cate">
                                                    <a href="/tra-da-cong-nghe.chn" title="trà đá công nghệ">
                                                        TRÀ ĐÁ CÔNG NGHỆ
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item">
                                                    <a href="/tra-da-cong-nghe/tan-man.chn" title="tản mạn">
                                                        Tản mạn
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item">
                                                    <a
                                                        href="/tra-da-cong-nghe/y-tuong-sang-tao.chn"
                                                        title="ý tưởng sáng tạo"
                                                    >
                                                        Ý tưởng sáng tạo
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-expand-item">
                                            <ul className="submenu-expand-list">
                                                <li className="submenu-expand-item cate">
                                                    <a href="/blockchain.chn" title="Blockchain">
                                                        Blockchain
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item">
                                                    <a href="/blockchain/xu-huong.chn" title="Xu hướng">
                                                        Xu hướng
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item">
                                                    <a href="/blockchain/cong-nghe.chn" title="Công nghệ">
                                                        Công nghệ
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item">
                                                    <a href="/blockchain/nhan-vat.chn" title="Nhân vật">
                                                        Nhân vật
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-expand-item">
                                            <ul className="submenu-expand-list">
                                                <li className="submenu-expand-item cate">
                                                    <a href="/tin-ict.chn" title="tin ict">
                                                        TIN ICT
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item cate">
                                                    <a href="/thu-thuat.chn" title="thủ thuật">
                                                        THỦ THUẬT
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item cate">
                                                    <a href="/song.chn" title="sống">
                                                        Sống
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item cate">
                                                    <a href="/nhom-chu-de/emagazine.chn" className="emgz">
                                                        EMAGAZINE
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-expand-item">
                                            <ul className="submenu-expand-list">
                                                <li className="submenu-expand-item cate">
                                                    <a href="/apps-games.chn" title="app - games">
                                                        APPS - GAMES
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item cate">
                                                    <a href="/do-choi-so.chn" title="đồ chơi số">
                                                        ĐỒ CHƠI SỐ
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item cate">
                                                    <a href="/gia-dung.chn" title="Gia dụng">
                                                        GIA DỤNG
                                                    </a>
                                                </li>
                                                <li className="submenu-expand-item cate" >
                                                    <a href="/dashboard" title="dashboard">
                                                        Dashboard
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}