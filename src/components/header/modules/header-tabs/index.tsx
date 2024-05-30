import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { PiShoppingCart } from "react-icons/pi";
import "./index.scss"


export const HeaderTabsModule = () => {
    return (
        <div className="header-tabs">
            <div className="header-tabs-inside">
                <div className="header-tabs-inside-block1">
                    <NavLink to="/"> <h3>Конфигуратор ПК</h3></NavLink>
                    <NavLink to="/inexpensive"><h3> Недорогие ПК</h3></NavLink>
                    <NavLink to="/game"><h3>Игровые ПК</h3></NavLink>
                    <NavLink to="/powerful"><h3>Мощнейшие ПК</h3></NavLink>
                    <NavLink to="/basedAMD"><h3> ПК на базе AMD</h3></NavLink>
                </div>
                <div className="header-tabs-inside-block2">
                    <BiSearch />
                    <NavLink to="/basket"> <PiShoppingCart /></NavLink>
                </div>
            </div>
        </div>
    );
};
