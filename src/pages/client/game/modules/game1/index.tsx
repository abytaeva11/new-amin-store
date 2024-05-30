import { AiFillHome, AiFillStar } from "react-icons/ai";
import { GameBack } from "src/datas";

export const Game1Module = () => {
    const backend1 = GameBack[0];
    const backend2 = GameBack[1];
    return (
        <div className="game-user">
            <div className="section1">
                <div className="section1-top">
                    <span> <AiFillHome /> </span>
                    <h2>{backend1.text1}</h2>
                </div>
                <div className="section1-text">
                    <h3>{backend1.title}</h3>
                    <h4>{backend1.text}</h4>
                </div>
            </div>
            <div className="section2-global">
                <div className="section2-block-first">
                    <h6>{backend2.title}</h6>
                    <div className="section2-block">
                        <div className="section2-first">
                            <span> <AiFillStar /> </span>
                            <h5>{backend2.text1}</h5>
                        </div>
                        <hr />
                        <div className="section2-first">
                            <span> <AiFillStar /> </span>
                            <h5>{backend2.text2}</h5>
                        </div>
                        <hr />
                        <div className="section2-first">
                            <span> <AiFillStar /> </span>
                            <h5>{backend2.text3}</h5>
                        </div>
                    </div>
                </div>
                <div className="section2-img">
                    <img src={backend2.img} alt="" />
                </div>
            </div>
        </div>
    );
};
