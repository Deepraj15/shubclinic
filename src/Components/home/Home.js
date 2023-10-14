import React from 'react'
import Header from '../header/Header'
import Banner from '../main-banner/Banner'
import Appointment from '../Appointment/Appointment'
import About from '../about/About'
import Treatment from '../treatment/Treatment'
import OurDoctor from '../our-doctor/OurDoctor'
import Testimonial from '../testimonial/Testimonial'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'


export default function Home() {
    return <>
        <Header/>
        <Banner/>
        <Appointment/>
        <About/>
        <Treatment/>
        <OurDoctor/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </>
}
