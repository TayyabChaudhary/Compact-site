import React from 'react';
import Images1 from '../../Assects/All-Images/Background-Images/developer-illustration.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function section2() {
    AOS.init({})
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className="is-size-1 has-text-weight-bold" style={{paddingTop:"60px"}}>
                                Free Courses Online Traning
            </h1>
                            <p className="is-size-5">
                                Wherein herb beginning. Moved after gathering. Sea hi crate fowl man replenish place divided likeness herb one two lnetn Winged moving saw, may over.
            </p>
                            <a href="" className="is-size-5 has-text-weight-bold has-text-success" style={{ lineHeight:"30px" }}>
                                Get Started <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                            <hr/>
                        </div>
                        <div className="column">
                            <img src={Images1} data-aos="fade-left" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
