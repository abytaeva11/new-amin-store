import { HeaderTabsModule } from "../header/modules";
import { FooterTabsModule } from "./modules";
import "./index.scss"

export const Footer = () => {
    return (
        <div className="footer">
            <HeaderTabsModule />
            <FooterTabsModule />
        </div>
    );
}