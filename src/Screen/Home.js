import React from 'react'
import Header from '../Components/HomeComponents/Header'
import "./AllscreenStyle.css"
import { Slide } from 'react-slideshow-image';
import { Year, Make, Model, SubModel, Part } from './data'
import { LeftContactIcon } from "./data"
import 'react-slideshow-image/dist/styles.css'
import background from "../Image/car1.jpg";
import background1 from "../Image/car2.jpg";
import background2 from "../Image/car3.jpg";
import 'react-slideshow-image/dist/styles.css'


function Home() {
    return (
        <div className="MainHomeWraper">
            <div className="backGroundImage">

                <Slide easing="ease">
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${background})` }}>
                            <span className="firstText"> <div>One Stop  <p>Shop</p> </div>Aotu Parts</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${background1})` }}>
                            <span className="secoundtText"><div>The World's<p>Best</p></div>Used Aout Parts</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${background2})` }}>
                            <span className="secoundtText"><div>The World's<p>Best</p></div>Used Aout Parts</span>
                        </div>
                    </div>
                </Slide>


            </div>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                <div className="RightIconBox">
                    {/* <div className="MediaIcons1"><i class="fa fa-phone-square" aria-hidden="true"></i><div className="text">9999999999</div></div> */}
                    <div className="MediaIcons"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                    <div className="MediaIcons"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>
                    <div className="MediaIcons"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                    <div className="MediaIcons"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                </div>
            </div>
            <div className="homefooter">
                <div className="centerfooterdiv">
                    <div className="dropdwon" style={{ width: '20%', borderLeft: 'none' }}>
                        <p style={{ color: 'black', fontSize: "15px" }}>
                            Contact Email
                      </p>
                        <input style={{ padding: '3px' }} type="email" placeholder="Email" />
                    </div>
                    <div className="dropdwon">
                        <select>
                            {Year.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="dropdwon">
                        <select>
                            {Make.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="dropdwon">
                        <select>
                            {Model.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="dropdwon">
                        <select>
                            {SubModel.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="dropdwon" style={{ borderRight: "2px solid black" }}>
                        <select>
                            {Part.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <button className="btn" onClick={() => alert("hello")}>Go</button>
                </div>
            </div>
        </div>
    )
}

export default Home
