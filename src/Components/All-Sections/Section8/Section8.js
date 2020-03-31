import React from 'react'
import ImgER from '../../Assects/All-Images/Sections/flexio-web-design.png';
import Mg1 from '../../Assects/All-Images/Sections/isfahan-site-4.png'
export default function Section8() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="box has-background-white-ter" data-aos="fade-right">
                        <div className="columns">
                            <div className="column">
                                <img src={ImgER} />
                            </div>
                            <div className="column">
                                <h1 className="is-size-3">
                                    Seo Information About Website
</h1>
                                <p>
                                    As part of the development process, mobile user interface (UI) design is also essential in the creation of mobile apps. Mobile UI considers constraints, contexts, screen, input, and mobility as outlines for design. The user is often the focus of interaction with their device, and the interface entails components of both hardware and software. User input allows for the users to manipulate a system, and device's output allows the system to indicate the effects of the users' manipulation. Mobile UI design constraints include limited attention and form factors, such as a mobile device's screen size for a user's hand(s). Mobile UI contexts signal cues from user activity, such as location and scheduling that can be shown from user interactions within a mobile app. Overall, mobile UI design's goal is mainly for an understandable, user-friendly interface. The UI of mobile apps should: consider users' limited attention, minimize keystrokes, and be task-oriented with a minimum set of functions. This functionality is supported by mobile enterprise application platforms or integrated development environments (IDEs).
</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className="is-size-3 has-text-weight-bold">
                                Mobile app development is becoming more critical
</h1>
                            <p data-aos="fade-down">
                                Mobile UIs, or front-ends, rely on mobile back-ends to support access to enterprise systems. The mobile back-end facilitates data routing, security, authentication, authorization, working off-line, and service orchestration. This functionality is supported by a mix of middleware components including mobile app server, mobile backend as a service (MBaaS), and service-oriented architecture (SOA) infrastructure.
</p>
                            <p>
                                Mobile app development is becoming more critical for many businesses with more than 3 billion people worldwide using smartphones, more than 1.5 billion using tablets as of 2019. Users, on average, spend 90 percent of their mobile time in apps and there are more than 700 million apps downloads from various app stores.[2]
</p>
                        </div>
                        <div className="column">
                            <img src={Mg1} data-aos="fade-up" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
