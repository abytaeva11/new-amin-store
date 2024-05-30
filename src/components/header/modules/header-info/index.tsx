import { Link, NavLink } from "react-router-dom";
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { MdOutlinePlace } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import "./index.scss"


export const HeaderInfoModule = () => {
    return (
        <div className="header-info">
            <div className="header-inside">
                <div className=" header-block-first">
                    <Link to="/logo"> <img src="/logo.png" alt="" /></Link>
                    <div className=" header-block-first-icons">
                    </div>
                    <div className="header-block-first-second">
                        <h3> <HiOutlineDevicePhoneMobile /></h3>
                        <h4> <a href="/">8 (800) 234 99 19</a></h4>
                    </div>
                    <div className="header-block-first-second ">
                        <h3><MdOutlinePlace /> </h3>
                        <h4>Бишкек</h4>
                    </div>
                </div>
                <div className=" header-block-second">
                    <div className=" header-block-second-block">
                        <Link to="/about">
                            <h3>О нас</h3>
                        </Link>
                        <h4><BsThreeDotsVertical /> </h4>
                    </div>
                    <div className=" header-block-second-block">
                        <Link to="/clients">
                            <h3>Клиентам</h3>
                        </Link>
                        <h4><BsThreeDotsVertical /> </h4>
                    </div>
                    <div className=" header-block-second-block">
                        <Link to="/contact">
                            <h3>Контакты</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
