import { AiFillStar, AiFillHome } from 'react-icons/ai';
import { Inexpensive2Module } from '../inexpensive/modules';
import { PowerfulBack } from 'src/datas';
import "src/styles/info-block.scss"
import "src/styles/section.scss"
import "./index.scss";


export const PowerfulPage = () => {
    const backend = PowerfulBack[0]
    const backend2 = PowerfulBack[1]
    const backend3 = PowerfulBack[2]

    return (
        <section className="user-powerful">
            <div className="section1">
                <div className="section1-top ">
                    <span> <AiFillHome /> </span>
                    <h2>{backend.text1}</h2>
                </div>
                <div className="section1-text">
                    <h3>{backend.title}</h3>
                    <h4>{backend.text}</h4>
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
            <Inexpensive2Module />
            <div className="power">
                <div className="power-text">
                    <h1>{backend3.title}</h1>
                    <p>{backend3.text1}</p>
                    <p>{backend3.text2}</p>
                    <p>{backend3.text3}</p>
                    <p>{backend3.text4}</p>
                    <p>{backend3.text5}</p>
                </div>
                <img src={backend3.img} alt="" className='power-img' />
            </div>
            <div className="power">
                <img src={backend3.img2} alt="" className='power-img1' />
                <div className="power-text">
                    <h1>{backend3.title2}</h1>
                    <p>{backend3.text6}</p>
                    <p>{backend3.text7}</p>
                    <p>{backend3.text8}</p>
                </div>
            </div>
            <div className="power">
                <div className="power-text">
                    <h1>{backend3.title3}</h1>
                    <p>{backend3.text9}</p>
                    <p>{backend3.text10}</p>
                    <p>{backend3.text11}</p>
                </div>
                <img src="/img/div.seo__end.png" alt="" className='power-img2' />
            </div>


        </section>
    );
};
