import React from "react";
import '../assets/css/home.css'

export const Footer = () => {
    return (
        <div
            className="genk-footer-wrapper clearfix hide-on-loading"
            style={{ display: "block" }}
        >
            <div className="top-footer">
                <div className="w1040">
                    <div className="gfw-top-wrapper clearfix">
                        <a
                            href="/"
                            className="logo-genk"
                            title="genk - trang thông tin dành cho tín đồ công nghệ"
                        >
                            <img
                                src="https://static.mediacdn.vn/genk/web_images/logogenk.svg"
                                alt="Logo"
                                style={{ width: "100%" }}
                            />
                        </a>
                    </div>
                    <div className="gfw-menu gfw-bottom-wrapper clearfix">
                        <ul className="gfwm-list">
                            <li className="gfwmli">
                                <a href="/mobile.chn" title="mobile">
                                    Mobile
                                </a>
                            </li>
                            <li className="gfwmli">
                                <a href="/tin-ict.chn" title="tin ict">
                                    Tin ICT
                                </a>
                            </li>
                            <li className="gfwmli">
                                <a href="/internet.chn" title="internet">
                                    Internet
                                </a>
                            </li>
                            <li className="gfwmli">
                                <a href="/kham-pha.chn" title="khám phá">
                                    Khám phá
                                </a>
                            </li>
                            <li className="gfwmli">
                                <a href="/tra-da-cong-nghe.chn" title="trà đá công nghệ">
                                    Trà đá công nghệ
                                </a>
                            </li>
                            <li className="gfwmli">
                                <a href="/thu-thuat.chn" title="thủ thuật">
                                    Thủ thuật
                                </a>
                            </li>
                            <li className="gfwmli">
                                <a href="/apps-games.chn" title="apps - games">
                                    Apps - Game
                                </a>
                            </li>
                            <li className="gfwmli">
                                <a href="/do-choi-so.chn" title="đồ chơi số">
                                    Đồ chơi số
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="w1040">
                    <div className="gfwbf-left fl">
                        <div className="w190">
                            <a
                                href="http://www.vccorp.vn/"
                                target="_blank"
                                rel="nofollow"
                                title="Công ty Cổ phần VCCorp"
                                className="logovcorp"
                            >
                                <i className="logovccorpnew sprite-genk" />
                            </a>
                        </div>
                        <br />
                        <p>
                            {" "}
                            Chịu trách nhiệm quản lý nội dung: Bà Nguyễn Bích Minh
                            <br /> Hà Nội: Tầng 20, Tòa nhà Center Building - Hapulico Complex, Số
                            1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội.
                            <br /> Email:{" "}
                            <a href="mailto:info@genk.vn" rel="nofollow">
                                info@genk.vn
                            </a>
                            <br /> Điện thoại: 024.73095555, máy lẻ 62374
                            <br /> VPĐD tại TP.HCM: Tầng 4, Tòa nhà 123 <br /> Võ Văn Tần, Phường
                            6, Quận 3, Tp. Hồ Chí Minh <br />
                        </p>
                        <p>
                            <b>© Copyright 2010 - 2023 - Công ty Cổ phần VCCorp</b>
                            <br /> Tầng 17, 19, 20, 21 Toà nhà Center Building - Hapulico Complex,
                            Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội.
                            <br /> Giấy phép thiết lập trang thông tin điện tử tổng hợp trên mạng
                            số 460/GP-TTĐT do Sở Thông tin và Truyền thông Hà Nội cấp ngày
                            03/02/2016
                            <br />
                        </p>
                    </div>
                    <div className="gfwbf-right">
                        <a
                            rel="nofollow"
                            href="http://www.vccorp.vn"
                            title="Công ty Cổ phần VCCorp"
                            target="_blank"
                        >
                            <img
                                src="https://vccorp.mediacdn.vn/vccorp-m.png"
                                alt="Công ty Cổ phần VCCorp"
                                className="mb10"
                            />
                        </a>
                        <h4 className="contact">Liên hệ quảng cáo</h4>
                        <span className="sprite-genk i-admicro" />
                        <p>
                            {" "}
                            Hotline hỗ trợ quảng cáo: 0794463333 <br />
                            <br /> Email:{" "}
                            <a href="mailto:giaitrixahoi@admicro.vn" rel="nofollow">
                                giaitrixahoi@admicro.vn
                            </a>
                            <br /> Hỗ trợ &amp; CSKH: Admicro <br /> Address: Tầng 20, Tòa nhà
                            Center Building - Hapulico Complex, Số 1 Nguyễn Huy Tưởng, Thanh Xuân,
                            Hà Nội.
                            <br />
                        </p>
                        <a
                            style={{ marginTop: 0 }}
                            rel="nofollow"
                            href="https://www.messenger.com/t/Genk.vn"
                            title="Xem chi tiết"
                            target="_blank"
                            className="btn-messenger-lightbox"
                        >
                            <span className="messenger-icon">
                                <svg width={12} height={12} viewBox="0 0 12 12">
                                    <path
                                        d="M2.185,12.001 C2.522,11.817 2.845,11.639 3.154,11.468 C3.463,11.298 3.772,11.134 4.081,10.977 C4.147,10.940 4.226,10.914 4.320,10.900 C4.414,10.887 4.503,10.889 4.587,10.907 C5.261,11.046 5.926,11.085 6.582,11.025 C7.237,10.965 7.884,10.801 8.521,10.533 C9.410,10.155 10.136,9.626 10.698,8.948 C11.260,8.269 11.640,7.533 11.836,6.739 C12.033,5.945 12.033,5.132 11.836,4.301 C11.640,3.470 11.223,2.709 10.586,2.016 C10.155,1.545 9.694,1.157 9.202,0.853 C8.710,0.548 8.195,0.324 7.657,0.181 C7.118,0.038 6.561,-0.024 5.985,-0.006 C5.409,0.013 4.812,0.110 4.194,0.285 C3.669,0.433 3.184,0.629 2.740,0.873 C2.295,1.118 1.901,1.411 1.559,1.753 C1.217,2.095 0.927,2.485 0.688,2.923 C0.450,3.362 0.269,3.849 0.148,4.384 C0.026,4.920 -0.021,5.428 0.007,5.908 C0.035,6.388 0.129,6.847 0.288,7.286 C0.447,7.724 0.674,8.142 0.969,8.539 C1.264,8.936 1.613,9.315 2.016,9.675 C2.063,9.712 2.103,9.767 2.135,9.841 C2.168,9.915 2.185,9.979 2.185,10.035 C2.194,10.358 2.196,10.679 2.192,10.997 C2.187,11.316 2.185,11.651 2.185,12.001 L2.185,12.001 ZM5.304,4.107 C5.585,4.357 5.861,4.604 6.132,4.848 C6.404,5.093 6.685,5.345 6.975,5.603 C7.415,5.363 7.865,5.118 8.324,4.869 C8.783,4.620 9.246,4.370 9.715,4.121 C9.724,4.130 9.731,4.137 9.736,4.142 C9.741,4.147 9.748,4.154 9.757,4.163 C9.495,4.440 9.235,4.712 8.977,4.980 C8.720,5.248 8.462,5.518 8.205,5.790 C7.947,6.062 7.689,6.330 7.432,6.593 C7.174,6.856 6.919,7.122 6.666,7.390 C6.395,7.140 6.121,6.891 5.844,6.642 C5.568,6.392 5.285,6.143 4.994,5.894 C4.554,6.134 4.102,6.379 3.639,6.628 C3.175,6.877 2.709,7.131 2.241,7.390 C2.241,7.381 2.231,7.367 2.213,7.348 C2.475,7.071 2.735,6.796 2.992,6.524 C3.250,6.252 3.507,5.979 3.765,5.707 C4.023,5.435 4.280,5.165 4.538,4.897 C4.795,4.629 5.051,4.366 5.304,4.107 L5.304,4.107 L5.304,4.107 Z"
                                        fill="#fff"
                                    />
                                </svg>
                            </span>
                            Chat với tư vấn viên{" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}