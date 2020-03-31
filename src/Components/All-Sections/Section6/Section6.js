import React from 'react'
import '../../All-Sections/All-Sections-Scss/Section6/Section6.scss';
import Imhg from '../../Assects/All-Images/Sections/web-development-png-6.png'
export default function Section6() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <h1 className="is-size-2 has-text-weight-bold">
                        Browse recent jobs
            </h1>
                    <ul className="lists" style={{
                        position: "absolute",
                        right: "30px",
                        display: "flex"
                    }}>
                        <li>
                            <a href="">Recent</a>
                        </li>
                        <li>
                            <a href="">Full Time</a>
                        </li>
                        <li>
                            <a href="">Part Time</a>
                        </li>
                    </ul>

                </div>
            </section>
            <div className="container">
                <div className="box has-background-black-bis">
                    <div className="section2">
                        <div className="columns">
                            <div className="column">
                                <h1 className="is-size-4 has-text-white">
                                    Assistant Executive - Production/ Quality Control
</h1>
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker"></i>
                                        <span>New Yourk, USA</span>
                                    </li>
                                    <li>
                                        <i class="fa fa-bandcamp" aria-hidden="true"></i>
                                        <span> Applied Chemistry & Chemical Engineering / Chemistry</span>

                                    </li>
                                    <li>
                                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                                        <span>  Deadline Deadline: Dec 11, 2018</span>
                                    </li>
                                </ul>
                                <a href="" className="is-size-4 has-text-danger">Join Now<i class="fa fa-arrow-circle-right" aria-hidden="true" style={{ paddingLeft: "10px" }}></i></a>
                            </div>
                            <div className="column">
                                <img src={Imhg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
