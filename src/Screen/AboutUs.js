import React from 'react'
import Logo from '../Image/eng.png'
import { CardData } from "./data"
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div style={{ width: "30px", marginRight: "-30px" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></div>,
    nextArrow: <div style={{ width: "30px", marginLeft: "-30px" }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></div>
};
function AboutUs() {
    return (
        <div className="AboutUsMainWrapper">
            <div style={{ height: '8.7em', width: '100%' }}></div>
            <div className="TextBoxAbout">
                <span className="span">
                    01
                </span>
                <h2 className="TextWlcome">
                    Welcome To
                     <i style={{ color: '#01a3c1', fontStyle: 'normal' }}>
                        Autoparts
                     </i>
                </h2>

                <p>
                    we have any part for any vehicle
</p>
            </div>
            <div className="CradBoxAbout">
                {
                    CardData.map((e, i) =>
                        <div className="card">
                            <div className="TitleBox">
                                <p className="title">
                                    {e.title}
                                </p>
                                <p className="title1">
                                    {e.title1}
                                </p>
                                <p className="discription">
                                    {e.discription}
                                </p>
                            </div>
                            <img src={e.image} style={{ height: '100%', width: '50%' }} alt="not an show image" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AboutUs
