import React, { Component } from 'react';

class DefaultSideBar extends Component {
	render() {
		return (
			<div className="fixed-topbar fixed-sidebar theme-sdtl color-default dashboard">
				<div className="sidebar">
            <div className="logopanel"><h1><a href="dashboard.html"></a></h1></div>
            <div className="sidebar-inner">
                <div className="noti-avatar">
                    <ul className="nav nav-sidebar nav-sidebar-edit m-b-0">
                        <li className="nav-active">
                            <a href="">
                                <img src="assets/global/images/avatar.png" alt="" />
                                <span>
                                    <label>Kiều Chí Công</label>
                                    <p>TK-0022934</p>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="noti-nav">
                    <ul className="nav nav-sidebar nav-sidebar-edit m-b-0">
                        <li className="nav-active">
                            <a href="">
                                <img src="./../../static_template/assets/global/images/active/icon-Setting.png" alt="" />
                                <span>Cấu hình</span>
                            </a>
                        </li>
                        <li className="">
                            <a href="#">
                                <img src="./../../static_template/assets/global/images/active/Icon-Bell.png" alt="" />
                                <span>Bài tập & Ôn bài</span>
                                <span className="nn-alert">12</span>
                            </a>
                        </li>
                        <li className="">
                            <a href="#">
                                <img src="./../../static_template/assets/global/images/active/Icon-Inbox.png" alt="" />
                                <span>Tiến độ học tập</span>
                                <span className="nn-alert">3</span>
                            </a>
                        </li>
                    </ul>
                </div>
                    
                <ul className="nav nav-sidebar nav-sidebar-edit">
                    <li className="nav-active activea">
                        <a href="dashboard.html">
                            <img className="img-changes" src="./../../static_template/assets/global/images/no-active/ico-Dashboard.png" alt="" />
                            <img className="img-change-color" src="./../../static_template/assets/global/images/active/ico-Dashboard.png" alt="" />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#">
                            <img className="img-changes" src="./../../static_template/assets/global/images/no-active/ico-BaiTapOnBai.png" alt="" />
                            <img className="img-change-color" src="./../../static_template/assets/global/images/active/ico-BaiTapOnBai.png" alt="" />
                            <span>Bài tập & Ôn bài</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#">
                            <img className="img-changes" src="./../../static_template/assets/global/images/no-active/ico-TienDoHocTap.png" alt="" />
                            <img className="img-change-color" src="./../../static_template/assets/global/images/active/ico-TienDoHocTap.png" alt="" />
                            <span>Tiến độ học tập</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#">
                            <img className="img-changes" src="./../../static_template/assets/global/images/no-active/ico-Certificate.png" alt="" />
                            <img className="img-change-color" src="./../../static_template/assets/global/images/active/ico-Certificate.png" alt="" />
                            <span>Chứng chỉ</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#">
                            <img className="img-changes" src="./../../static_template/assets/global/images/no-active/ico-SPhocsinh.png" alt="" />
                            <img className="img-change-color" src="./../../static_template/assets/global/images/active/ico-SPhocsinh.png" alt="" />
                            <span>Sản phẩm của học sinh</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#">
                            <img className="img-changes" src="./../../static_template/assets/global/images/no-active/ico-Redem.png" alt="" />
                            <img className="img-change-color" src="./../../static_template/assets/global/images/active/ico-Redem.png" alt="" />
                            <span>Đổi điểm lấy quà </span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#">
                            <img className="img-changes" src="./../../static_template/assets/global/images/no-active/ico-Invoice.png" alt="" />
                            <img className="img-change-color" src="./../../static_template/assets/global/images/active/ico-Invoice.png" alt="" />
                            <span>Hoá đơn</span>
                        </a>
                    </li>
                </ul>
            </div>
        	</div>
		</div>
		);
	}
}

export default DefaultSideBar;