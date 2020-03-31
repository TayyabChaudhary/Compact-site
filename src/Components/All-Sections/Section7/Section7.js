import React from 'react'
import Image from '../../Assects/All-Images/Sections/appdevelopment.png';
import Dynamic from '../../Assects/All-Images/Sections/dynamic-website-design.jpg'
export default function Section7() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <img src={Image} />
                        </div>
                        <div className="column">
                            <h1 className="is-size-3 has-text-weight-bold" style={{ paddingTop: "40px" }}>
                                Free Learning App Development
</h1>
                            <p>
                                Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These applications can be pre-installed on phones during manufacturing platforms, or delivered as web applications using server-side or client-side processing (e.g., JavaScript) to provide an "application-like" experience within a Web browser. Application software developers also must consider a long array of screen sizes, hardware specifications, and configurations because of intense competition in mobile software and changes within each of the platforms. Mobile app development has been steadily growing, in revenues and jobs created. A 2013 analyst report estimates there are 529,000 direct app economy jobs within the EU then 28 members (including the UK), 60 percent of which are mobile app developers.[1]
</p>
<hr/>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                                                      <h1 className="is-size-3 has-text-weight-bold" style={{ paddingTop: "40px" }}>
                                Free Mobile App Development
</h1>
                            <p>
                                Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. These applications can be pre-installed on phones during manufacturing platforms, or delivered as web applications using server-side or client-side processing (e.g., JavaScript) to provide an "application-like" experience within a Web browser.
</p>
<hr/> 
                        </div>
                        <div className="column">
 
                            <img src={Dynamic} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
