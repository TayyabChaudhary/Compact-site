import React from 'react'
import Pageloader from '../../Components/Pageloader/pageloader';
import Section1 from '../../Components/All-Sections/Section1/Section1';
import Section2 from '../../Components/All-Sections/Section2/section2';
import Section3 from '../../Components/All-Sections/Section3/Section3';
import Section4 from '../../Components/All-Sections/Section4/Section4';
import Section5 from '../../Components/All-Sections/Section5/Section5';
import Section6 from '../../Components/All-Sections/Section6/Section6';
import Section7 from '../../Components/All-Sections/Section7/Section7';
import Section8 from '../../Components/All-Sections/Section8/Section8';
import Section9 from '../../Components/All-Sections/Section9/Section9';
import Footer from '../../Components/All-Sections/Footer/Footer';
export default function Mainpage() {
    return (
        <div>
            <Pageloader />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Footer />
        </div>
    )
}
