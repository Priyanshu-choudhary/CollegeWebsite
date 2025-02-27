import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Navbr from "../NavBr/Navbar";
import ImageSlideshow from "./section1";
import Footer from "./footer";
import AboutContent from "./about";
import Testimonials from "./Testimonials";

export default function Home() {
    const images = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
    ];

    return (
        <div classNameName="probootstrap-page-wrapper">
            <Navbr />
            <ImageSlideshow images={images} />
            <AboutContent />


        <Testimonials/>
            <Footer />
        </div>
    );
}
