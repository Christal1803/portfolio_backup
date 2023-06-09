import React, { useRef, useState, useEffect, useLayoutEffect, useCallback } from 'react'
import Partnership_Discovery from '../Partnership&Discovery/Partnership_Discovery'
import OnBoarding from '../OnBoarding/OnBoarding'
import ExecutionPhase01 from '../ExecutionPhase01/ExecutionPhase01'
import ExecutionPhase02 from '../ExecutionPhase02/ExecutionPhase02'
import ExecutionPhase03 from '../ExecutionPhase03/ExecutionPhase03'
import ExecutionPhase04 from '../ExecutionPhase04/ExecutionPhase04'
import ExecutionPhase05 from '../ExecutionPhase05/ExecutionPhase05'
import ExecutionPhase06 from '../ExecutionPhase06/ExecutionPhase06'
import NavBar02 from '../NavBar/NavBar02'
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import usePreventBodyScroll from '../../HorizontalScrollBar/UsePreventBodyScroll'
import './KioskHandling.css';
import "react-circular-progressbar/dist/styles.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-magic-slider-dots/dist/magic-dots.css';
import styled from 'styled-components'
import Mversiontab from '../../Mversion/Mversiontab/Mversiontab';
import addantProgress from "../../../src/assets/addantProgress.svg";


import wpf from "../../../src/assets/wpf.svg";
import flutter from "../../../src/assets/flutter.svg";
import xaml from "../../../src/assets/xaml.svg";


import xamarin from "../../../src/assets/xamarin.svg";
import react from "../../../src/assets/react.svg";
import ios from "../../../src/assets/ios.svg";
import andriod from "../../../src/assets/andriod.svg";


import angular from "../../../src/assets/angular.svg";
import net from "../../../src/assets/net.svg";
import node from "../../../src/assets/node.svg";
import js from "../../../src/assets/js.svg";
import html from "../../../src/assets/html.svg";
import bootstrap from "../../../src/assets/bootstrap.svg";


import python from "../../../src/assets/python.svg";
import apache from "../../../src/assets/apache.svg";
import auto from "../../../src/assets/auto.svg";
import nosql from "../../../src/assets/nosql.svg";
import mongo from "../../../src/assets/mongo.svg";

import aws from "../../../src/assets/auto.svg";
import amplify from "../../../src/assets/nosql.svg";
import app from "../../../src/assets/mongo.svg";
import Newnav from '../Newnav/Newnav'












import alivis from "../../../src/assets/alivis.svg";
import aliad from "../../../src/assets/aliad.svg";
import flc from "../../../src/assets/flc.svg";
import kis from "../../../src/assets/kis.svg";
import alic from "../../../src/assets/alic.svg";
import left from "../../../src/assets/leftarrow.svg";
import right from "../../../src/assets/rightarrow.svg";




import qrp from "../../../src/assets/qrp.svg";
import qrr from "../../../src/assets/qrr.svg";
import cuspos from "../../../src/assets/cupos.svg";
import papp from "../../../src/assets/papp.svg";
import fs from "../../../src/assets/fs.svg";
import ca from "../../../src/assets/ca.svg";
import ptm from "../../../src/assets/ptm.svg";
import cusposc from "../../../src/assets/cusposc.svg";
import pct from "../../../src/assets/pct.svg";
import ct from "../../../src/assets/ct.svg";
import tivo from "../../../src/assets/tivo.svg";


import webad from "../../../src/assets/webad.svg";
import swp from "../../../src/assets/swp.svg";
import Demo from '../../Mversion/Demo/Demo'
import Mapp from '../../Mversion/Mapp/Mapp'






//import { Tab, Tabs, Carousel } from 'react-bootstrap';



function KioskHandling() {

    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    const sliderRef3 = useRef(null);
    const sliderRef4 = useRef(null);
    const sliderRef5 = useRef(null);
    const sliderRef6 = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(32.2);
    const [scrollProgress2, setScrollProgress2] = useState(32.2);
    const [scrollProgress3, setScrollProgress3] = useState(32.2);
    const [scrollProgress4, setScrollProgress4] = useState(100);
    const [scrollProgress5, setScrollProgress5] = useState(100);
    const [scrollProgress6, setScrollProgress6] = useState(5);
    const [slideToShow, setSlideToShow] = useState(3);
    const [activeDiv, setActiveDiv] = useState(1);

    const handleProgressClick = (divNumber) =>{
    setActiveDiv(divNumber)
    }

    const handleScroll1 = (e) => {
        const slider = sliderRef1.current;
        if (slider) {
            // increase or decrease the current slide index based on the scroll direction
            slider.slickGoTo(slider.innerSlider.state.currentSlide + (e.deltaY > 0 ? 1 : -1));
        }
    };
    const handleScroll2 = (e) => {
        const slider = sliderRef2.current;
        if (slider) {
            // increase or decrease the current slide index based on the scroll direction
            slider.slickGoTo(slider.innerSlider.state.currentSlide + (e.deltaY > 0 ? 1 : -1));
        }
    };
    const handleScroll3 = (e) => {
        const slider = sliderRef3.current;
        if (slider) {
            // increase or decrease the current slide index based on the scroll direction
            slider.slickGoTo(slider.innerSlider.state.currentSlide + (e.deltaY > 0 ? 1 : -1));
        }
    };
    const handleScroll4 = (e) => {
        const slider = sliderRef3.current;
        if (slider) {
            // increase or decrease the current slide index based on the scroll direction
            slider.slickGoTo(slider.innerSlider.state.currentSlide + (e.deltaY > 0 ? 1 : -1));
        }
    };
    const handleScroll5 = (e) => {
        const slider = sliderRef5.current;
        if (slider) {
            // increase or decrease the current slide index based on the scroll direction
            slider.slickGoTo(slider.innerSlider.state.currentSlide + (e.deltaY > 0 ? 1 : -1));
        }
    };
    const handleScroll6 = (e) => {
        const slider = sliderRef6.current;
        if (slider) {
            // increase or decrease the current slide index based on the scroll direction
            slider.slickGoTo(slider.innerSlider.state.currentSlide + (e.deltaY > 0 ? 1 : -1));
        }
    };


    const [currentPage, setCurrentPage] = useState(0);
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);
    //Program For Getting Scroll Value:
    const [scrollTop, setScrollTop] = useState(0);
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled)
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const renderDots = dots => (

        <ul style={{ display: 'flex', justifyContent: 'center', margin: 0, padding: 0, backgroundColor: "black" }}>
            {dots}
        </ul>
    )
    const settings = {
        dots: true,
        infinite: true,
        appendDots: renderDots,
        speed: 500,
        // slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        afterChange: (index) => setCurrentPage(index),
        customPaging: (i) => <div style={{ backgroundColor: 'red', width: '10px', height: '10px', borderRadius: '50%', margin: '0 5px' }} />,
    };


    function onWheel(apiObj, ev) {
        const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
        if (isThouchpad) {
            ev.stopPropagation();
            return;
        }

        if (ev.deltaY < 0) {
            apiObj.scrollPrev();
        } else if (ev.deltaY > 0) {
            apiObj.scrollNext();
        }
    }

    const elementRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            const elementWidth = elementRef.current.offsetWidth;
            console.log(`Element width: ${elementWidth}`);
            window.$name = elementWidth;
        }
    }, []);

    console.log(window.$name)

    const [elementWidth, setElementWidth] = useState(null);
    let mystyle = {};
    function handleElementLoad(event) {
        debugger
        const elementWidth = event.target.offsetWidth;
        setElementWidth(elementWidth);
        console.log(`Element width: ${elementWidth}`);
        window.$name = elementWidth;
    }
    if (elementWidth) {
        mystyle.width = elementWidth + "px";
    }

    const pages = [
        { id: 1, Element: <Partnership_Discovery />, width: window.$name },
        { id: 2, Element: <OnBoarding />, width: window.$name },
        { id: 3, Element: <ExecutionPhase01 />, width: window.$name },
        { id: 4, Element: <ExecutionPhase02 />, width: window.$name },
        { id: 5, Element: <ExecutionPhase03 />, width: window.$name },
        { id: 6, Element: <ExecutionPhase04 />, width: window.$name },
        { id: 7, Element: <ExecutionPhase05 />, width: window.$name },
        { id: 8, Element: <ExecutionPhase06 />, width: window.$name },

    ];

    //const pages = [
    //  { id: 1, Element: <Partnership_Discovery /> , width: '100vw'},
    //  { id: 2, Element: <OnBoarding /> , width: '100vw' },
    //  { id: 3, Element: <ExecutionPhase01 /> , width: '100vw'},
    //  { id: 4, Element: <ExecutionPhase02 /> , width: '100vw'},
    //  { id: 5, Element: <ExecutionPhase03 /> , width: '100vw'},
    //  { id: 6, Element: <ExecutionPhase04 /> , width: '100vw'},
    //  { id: 7, Element: <ExecutionPhase05 /> , width: '100vw'},
    //  { id: 8, Element: <ExecutionPhase06 /> , width: '100vw'},

    //];



    const elemPrefix = "test";
    const getId = (index) => `${elemPrefix}${index}`;
    const getItems = () =>
        Array(20)
            .fill(0)
            .map((_, ind) => ({ id: getId(ind) }));


    const [items] = React.useState(getItems);
    const { disableScroll, enableScroll } = usePreventBodyScroll();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
    const [progress, setProgress] = useState(0);
    const articleRef = useRef();
    console.log("articleRef:", articleRef)

    const CustomDots = styled.ul`
  display: flex;
  justify-content: center;
`;

    const CustomDot = styled.li`
  margin: 0 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isActive ? 'blue' : 'red')};
`;


    const scrollToPage = (index) => {
        debugger;
        setCurrentPage(index);
        containerRef.current.scrollLeft = index * window.innerWidth;
    };
    // })


    useLayoutEffect(() => {

        function handleResize() {
            setIsMobile(window.innerWidth < 768)
        }
        const updateWidth = () => {
            console.log("Entered into updateWidth")
            if (articleRef.current) {
                const { width } = articleRef.current.getBoundingClientRect();
                setWidth(width);
                console.log("Width", width)
                // const progress = window.scrollX / (width - window.innerWidth);
                const progress = window.scrollX / Math.max(1, width - window.innerWidth);
                console.log("Progress", progress)
                setProgress(progress);
            }
        };


        // updateHeight();
        // updateWidth()
        window.addEventListener('load', function () {
            const progress = window.scrollX / Math.max(1, width - window.innerWidth);
            console.log("Progress inside", progress);
        });
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", function () {
            window.scrollBy(100, 0); // Move the window horizontally by 100 pixels
            updateWidth(); // Call the updateHeight() function
        });

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", function () {
                window.scrollBy(100, 0); // Move the window horizontally by 100 pixels
                updateWidth(); // Call the updateHeight() function
            });

        }
    }, []);
    const position = Math.max(1 - progress, 0);
    console.log("Position", position)
    const complete = position === 0;
    const notMoved = position === 1;

    const DIAMETER = 50;
    const STROKE_WIDTH = 6;
    const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
    const CIRCUMFERENCE = Math.PI * RADIUS * 2;

    const [slider, setSlider] = useState(null);

    const setting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: current => {
            setScrollProgress(100 / (5 - slideToShow + 1) * (current + 1));
            console.log(slideToShow)
        }
    };
    const setting2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: current => {
            setScrollProgress2(100 / (5 - slideToShow + 1) * (current + 1));
            console.log(slideToShow)
        }
    };
    const setting3 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: current => {
            setScrollProgress3(100 / (5 - slideToShow + 1) * (current + 1));
            console.log(slideToShow)
        }
    };
    const setting4 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: current => {
            setScrollProgress4(100 / (5 - slideToShow + 1) * (current + 1));
            console.log(slideToShow)
        }
    };
    const setting5 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: current => {
            setScrollProgress5(100 / (5 - slideToShow + 1) * (current + 1));
            console.log(slideToShow)
        }
    };
    const setting6 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: current => {
            setScrollProgress6(100 / (10 - slideToShow + 1) * (current + 1));
            console.log(slideToShow)
        }
    };

    const next = useCallback(() => {
        slider.slickNext();
    }, [slider]);

    const previous = useCallback(() => {
        slider.slickPrev();
    }, [slider]);


    return (
        <div >
            {isMobile ? (
                console.log(isMobile),
                <div >
                    <Mversiontab></Mversiontab>
                </div>

            ) : (
                    <div class="homeHt" >
                    <Newnav />
                    <div class="container-fluid   kisok-container-box">


                        <div class="row container-align ht-md   kiosk-container">
                            <div class="col-md-5 col-lg-3 col-xxl-2 ">
                                <nav id="myTab" class="nav nav-pills flex-column">
                                    <p className='m-0'><b className='tab-head'>Our Engagement model</b></p>
                                        <a onClick={() => handleProgressClick(1)} href="#category_tab1" data-bs-toggle="pill" class="active nav-link mb-xxl-3 mt-lg-2  mb-lg-2 mt-xxl-3" >Engagement model</a>
                                    <p className='m-0'><b className='tab-head'>Our Solutions</b></p>
                                    <a onClick={()=>handleProgressClick(2)} href="#category_tab2" data-bs-toggle="pill" class="nav-link">Kiosk & Touchscreen</a>
                                    <a onClick={()=>handleProgressClick(3)} href="#category_tab3" data-bs-toggle="pill" class="nav-link">Mobile development</a>
                                    <a onClick={()=>handleProgressClick(4)} href="#category_tab4" data-bs-toggle="pill" class="nav-link">Web applications</a>
                                    <a onClick={()=>handleProgressClick(5)} href="#category_tab5" data-bs-toggle="pill" class="nav-link">Data Science & Engineering</a>
                                    <a onClick={()=>handleProgressClick(6)} href="#category_tab6" data-bs-toggle="pill" class="nav-link">Cloud Solutions</a>
                                </nav>
                            </div>
                            <div class="col-md-9 col-xxl-10 col-lg-9 tab-content">


                            
                                <article class="tab-pane fade show active" id="category_tab1">

                                 
                                        {/* <div ref={elementRef} onLoad={handleElementLoad} className="widthlisy"></div> */}

                                      

                                            {/* <ScrollMenu onWheel={onWheel}  >
                                              
                                                {pages.map((page) => (

                                                    <div key={page.id} style={{ width: page.width }} >

                                                        <Slider ref={sliderRef6} {...setting6}>
                                                            {page.Element}</Slider>
                                                    </div>


                                                ))}

                                            </ScrollMenu> */}
                                                <div onMouseEnter={disableScroll} onMouseLeave={enableScroll} onWheel={handleScroll6}>
                                                    <Slider ref={sliderRef6} {...setting6}>
                                                        <div key={1}>
                                                            <Partnership_Discovery />
                                                        </div>
                                                        <div key={2}>
                                                            <OnBoarding />
                                                        </div>
                                                        <div key={3}>
                                                            <ExecutionPhase01 />
                                                        </div>
                                                        <div key={4}>
                                                            <ExecutionPhase02 />
                                                        </div>
                                                        <div key={5}>
                                                            <ExecutionPhase03 />
                                                        </div>
                                                        <div key={6}>
                                                            <ExecutionPhase04 />
                                                        </div>
                                                        <div key={7}>
                                                            <ExecutionPhase05 />
                                                        </div>
                                                        <div key={8}>
                                                            <ExecutionPhase06 />
                                                        </div>
                                                    </Slider>
                                                </div>




                                                {/* Scroll Icon */}
                       


                                         
                                </article>



                                {/* ****************************************************************************************************************************************************** */}
                                <article class="tab-pane fade" id="category_tab2">
                                    <h6 className='solution_name'>Kiosk & Touchscreen</h6>
                                    <p className='solution_desc'>We provide custom kiosk software development for our customers current and future needs. Our kiosk & touchscreen development team builds efficient UIs, multi-tenant services, hardware interfaces, branding management, resource management, and remote administration.</p>
                                    <h4 className='tech-stack'>Tech Stack</h4>

                                    <div className='techs'>
                                        <span className='technology badge rounded-pill mt-2 '>
                                            <img src={flutter} className='img-fluid rounded-circle bg-white' />
                                            <span>Flutter</span>
                                        </span>



                                        <span className='technology badge rounded-pill ms-3'>
                                            <img src={wpf} className='img-fluid rounded-circle' />
                                            <span>WPF</span>
                                        </span>



                                        <span className='technology badge rounded-pill ms-3'>
                                            <img src={xaml} className='img-fluid rounded-circle' />
                                            <span>XAML</span>
                                        </span>

                                    </div>
                                    {/* DATA SCIENCE AND ENGINEERING */}
                                    <div onMouseEnter={disableScroll} onMouseLeave={enableScroll} onWheel={handleScroll1}>
                                        <Slider ref={sliderRef1} {...setting}>
                                            <div key={1}>

                                                <div class="card-space">
                                                    <div>
                                                        <img src={flc} class="card-img-top" alt="..." />

                                                        <div class="card-body">

                                                            <div className='mybtn text-center'>
                                                                    <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Floor Client</h5>
                                                                <a href="https://www.addant.com/#/solutions/casinomanagementsystem/floorclient" target="_blank" class="btn mo-knowmore mb-xxl-4 mb-lg-3">Know more</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div key={2}>
                                                <div class="card-space">
                                                    <img src={alivis} class="card-img-top" alt="..." />
                                                    <div class="card-body">

                                                        <div className='mybtn text-center'>
                                                                <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Virtual Receptionist</h5>
                                                                <a href="https://www.addant.com/#/solutions/hospitalitymanagement/alicereceptionist" target="_blank" class="btn mo-knowmore mb-xxl-4 mb-lg-3">Know more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div key={3}>
                                                <div class="card-space">
                                                    <img src={kis} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <div className='mybtn text-center'>
                                                                <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Multi Service Kiosk</h5>
                                                                <a href="https://www.addant.com/#/solutions/smartcityplatform/multiservicekisokapplication" target="_blank" class="btn mo-knowmore mb-xxl-4 mb-lg-3">Know more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div key={4}>
                                                <div class="card-space">
                                                    <img src={aliad} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <div className='mybtn text-center'>
                                                                <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Directory Admin</h5>
                                                                <a href="https://www.addant.com/#/solutions/hospitalitymanagement/aliceadmin" target="_blank" class="btn mo-knowmore mb-xxl-4 mb-lg-3">Know more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div key={5}>
                                                <div class="card-space">
                                                    <img src={alic} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <div className='mybtn text-center'>
                                                                <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Alice</h5>
                                                                <a href="https://www.addant.com/#/solutions/hospitalitymanagement/alicevisitormanagement" target="_blank" class="btn mo-knowmore mb-xxl-4 mb-lg-3">Know more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                          
                                    </div>


                                </article>
                                {/* ****************************************************************************************************************************************************** */}


                                <article onMouseEnter={disableScroll} onMouseLeave={enableScroll} class="tab-pane fade" id="category_tab3">
                                    <h6 className='solution_name'>Mobile Development</h6>
                                    <p className='solution_desc'>Addant offers design, development, deployment, and maintenance of value-added mobile applications across iOS & Android platforms. Our team has significant experience when it comes to native or cross-platform development, and they focus on creating intuitive interfaces ensuring seamless user engagement.</p>
                                    <h4 className='tech-stack'>Tech Stack</h4>

                                    <div className='techs'>
                                        <span className='technology badge rounded-pill me-3  mt-2 '>
                                            <img src={flutter} className='img-fluid rounded-circle bg-white' />
                                            <span>Flutter</span>
                                        </span>



                                        <span className='technology badge rounded-pill mt-2  me-3'>
                                            <img src={xamarin} className='img-fluid rounded-circle bg-white' />
                                            <span>Xamarin</span>
                                        </span>



                                        <span className='technology badge rounded-pill mt-2  me-3'>
                                            <img src={react} className='img-fluid rounded-circle bg-white' />

                                            <span>React Native</span>
                                        </span>




                                        <span className='technology badge rounded-pill mt-2  me-3'>
                                            <img src={ios} className='img-fluid rounded-circle bg-white' />

                                            <span>Native iOS</span>
                                        </span>


                                        <span className='technology badge rounded-pill mt-2  me-3'>
                                            <img src={andriod} className='img-fluid rounded-circle bg-white' />

                                            <span>Android Native</span>
                                        </span>


                                        <div onWheel={handleScroll2}>
                                            <Slider ref={sliderRef2} {...setting2}>
                                                <div key={1}>
                                                    <div class="card-space">
                                                        <div>
                                                            <img src={flc} class="card-img-top" alt="..." />

                                                            <div class="card-body">
                                                                    <div className='mybtn text-center'>
                                                                        <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">QR Code validation & payment app</h5>
                                                                        <a href="https://www.addant.com/#/solutions/smartcityplatform/qrcodevalidationpaymentapplication" target="_blank" class="btn mo-knowmore mb-xxl-4 mb-lg-3">Know more</a>
                                                                    </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div key={2}>
                                                    <div class="card-space">
                                                        <img src={cuspos} class="card-img-top" alt="..." />
                                                            <div class="card-body">
                                                                <div className='mybtn text-center'>
                                                                    <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Custom POS Application</h5>
                                                                    <a href="https://www.addant.com/#/solutions/smartcityplatform/customposapplication" target="_blank" class="btn mo-knowmore mb-xxl-4 mb-lg-3">Know more</a>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div key={3}>
                                                    <div class="card-space">
                                                        <img src={papp} class="card-img-top" alt="..." />
                                                            <div class="card-body">
                                                                <div className='mybtn text-center'>
                                                                    <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Player App</h5>
                                                                    <a href="https://www.addant.com/#/solutions/casinomanagementsystem/playerapp" target="_blank" class="btn mo-knowmore mb-xxl-4 mb-lg-3">Know more</a>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div key={4}>
                                                    <div class="card-space">
                                                        <img src={ca} class="card-img-top" alt="..." />
                                                        <div class="card-body"> 
                                                            <div className='mybtn text-center'>
                                                                    <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Cage Application</h5>
                                                                    <a href="https://www.addant.com/#/solutions/casinomanagementsystem/cageapplication" target="_blank" class="btn mo-knowmore mb-xxl-4 mb-lg-3">Know more</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div key={5}>
                                                    <div class="card-space">
                                                        <img src={ptm} class="card-img-top" alt="..." />
                                                        <div class="card-body">
                                                            <div className='mybtn text-center'>
                                                                    <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Player Tracking Module</h5>
                                                                    <a href="https://www.addant.com/#/solutions/casinomanagementsystem/playertrackingmodule" target="_blank" class="btn mo-knowmore mb-xxl-4 mb-lg-3">Know more</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*<div key={6}>*/}
                                                {/*    <h3>6</h3>*/}
                                                {/*</div>*/}
                                            </Slider>
                                        </div>

                                    </div>

                                </article>


                                <article onMouseEnter={disableScroll} onMouseLeave={enableScroll} class="tab-pane fade" id="category_tab4">
                                    <h6 className='solution_name'>Web Applications</h6>
                                    <p className='solution_desc'>We build custom tailored web solutions to fit our customer�s business goals. Our team work backwards from customer requirements and focuses on user experience (UX), high performance, availability, and scalability. We always use the most apt technology while staying focused on the business requirements.</p>
                                    <h4 className='tech-stack'>Tech Stack</h4>

                                    <div className='techs'>
                                        <span className='technology badge rounded-pill  mt-2  me-3 '>
                                            <img src={react} className='img-fluid rounded-circle bg-white' />
                                            <span>React </span>
                                        </span>



                                        <span className='technology badge rounded-pill  mt-2  me-3'>
                                            <img src={angular} className='img-fluid rounded-circle bg-white' />
                                            <span>Angular</span>
                                        </span>



                                        <span className='technology badge rounded-pill  mt-2  me-3'>
                                            <img src={net} className='img-fluid rounded-circle bg-white' />
                                            <span>.NET Core</span>
                                        </span>


                                        <span className='technology badge rounded-pill  mt-2  me-3'>
                                            <img src={node} className='img-fluid rounded-circle bg-white' />
                                            <span>Node</span>
                                        </span>


                                        <span className='technology badge rounded-pill  mt-2  me-3'>
                                            <img src={js} className='img-fluid rounded-circle bg-white' />
                                            <span>JavaScript</span>
                                        </span>


                                        <span className='technology badge rounded-pill  mt-2  me-3'>
                                            <img src={html} className='img-fluid rounded-circle bg-white' />
                                            <span>HTML 5</span>
                                        </span>


                                        {/*<span className='technology badge rounded-pill  mt-2  me-3'>*/}
                                        {/*    <img src={bootstrap} className='img-fluid rounded-circle bg-white' />*/}
                                        {/*    <span>Bootstrap</span>*/}
                                        {/*</span>*/}
                                    </div>
                                    <div onWheel={handleScroll4}>
                                        <Slider ref={sliderRef4} {...setting4}>
                                            <div key={1}>
                                                <div class="card-space">
                                                    <div>
                                                        <img src={webad} class="card-img-top" alt="..." />

                                                        <div class="card-body">

                                                            <div className='mybtn text-center'>
                                                                    <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Web Admin</h5>
                                                                <a href="https://www.addant.com/#/solutions/casinomanagementsystem/webadmin" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div key={2}>
                                                <div class="card-space">
                                                    <img src={swp} class="card-img-top" alt="..." />
                                                    <div class="card-body">

                                                        <div className='mybtn text-center'>
                                                                <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Smart Web Platform</h5>
                                                            <a href="https://www.addant.com/#/solutions/smartcityplatform/smartwebplatform" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div key={3}>
                                                <div class="card-space">
                                                    
                                                </div>
                                            </div>
                                            {/*<div key={6}>*/}
                                            {/*    <h3>6</h3>*/}
                                            {/*</div>*/}
                                        </Slider>
                                    </div>
                       

                                </article>

                                {/********************************************************************************************************************************************************/}
                                <article onMouseEnter={disableScroll} onMouseLeave={enableScroll} class="tab-pane fade" id="category_tab5">
                                    <h6 className='solution_name'>Data Science & Engineering</h6>
                                    <p className='solution_desc'>With our quest to learn and adapt to the evolving algorithms and models, we bring in unique and advanced data engineering methodologies enabling businesses to optimise data towards usability there by ensuring scalability, tailored user driven solutions, and optimised predictive analysis.</p>
                                    <h4 className='tech-stack'>Tech Stack</h4>

                                    <div className='techs'>
                                        <span className='technology badge rounded-pill  mt-2  me-3 '>
                                            <img src={python} className='img-fluid rounded-circle bg-white' />
                                            <span>Python </span>
                                        </span>



                                        <span className='technology badge rounded-pill  mt-2  me-3'>
                                            <img src={apache} className='img-fluid rounded-circle bg-white' />
                                            <span>Apache Spark</span>
                                        </span>



                                        <span className='technology badge rounded-pill  mt-2  me-3'>
                                            <img src={auto} className='img-fluid rounded-circle bg-white' />
                                            <span>AutoGluon</span>
                                        </span>


                                        <span className='technology badge rounded-pill  mt-2  me-3'>
                                            <img src={nosql} className='img-fluid rounded-circle bg-white' />
                                            <span>NOSQL - Dynamo DB</span>
                                        </span>


                                        <span className='technology badge rounded-pill  mt-2  me-3'>
                                            <img src={mongo} className='img-fluid rounded-circle bg-white' />
                                            <span>Mongo DB</span>
                                        </span>
                                    </div>

                                    {/* DATA SCIENCE AND ENGINEERING */}
                                    <div onWheel={handleScroll3}>
                                        <Slider ref={sliderRef3} {...setting3}>
                                            <div key={1}>
                                                <div class="card-space">
                                                    <div>
                                                        <img src={ptm} class="card-img-top" alt="..." />

                                                        <div class="card-body">

                                                            <div className='mybtn text-center'>
                                                                    <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Player Tracking Module</h5>
                                                                <a href="https://www.addant.com/#/solutions/casinomanagementsystem/playertrackingmodule" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div key={2}>
                                                <div class="card-space">
                                                    <img src={papp} class="card-img-top" alt="..." />
                                                    <div class="card-body">

                                                        <div className='mybtn text-center'>
                                                                <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Player App</h5>
                                                            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/playerapp" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div key={3}>
                                                <div class="card-space">
                                                    <img src={webad} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <div className='mybtn text-center'>
                                                                <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Web Admin</h5>
                                                            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/webadmin" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div key={4}>
                                                <div class="card-space">
                                                    <img src={kis} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <div className='mybtn text-center'>
                                                                <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Multi Service Kiosk</h5>
                                                            <a href="https://www.addant.com/#/solutions/smartcityplatform/multiservicekisokapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div key={5}>
                                                <div class="card-space">
                                                    <img src={fs} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <div className='mybtn text-center'>
                                                                <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Floor Assistant</h5>
                                                            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/floorassistant" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<div key={6}>*/}
                                            {/*    <h3>6</h3>*/}
                                            {/*</div>*/}
                                        </Slider>

                                    </div>
                          
                                </article>
                                {/********************************************************************************************************************************************************/}



                                <article  onMouseEnter={disableScroll} onMouseLeave={enableScroll} class="tab-pane fade" id="category_tab6">
                                    <h6 className='solution_name'>Cloud Solutions</h6>
                                    <p className='solution_desc'>We recognize the paradigm shift from the traditional software development to the modern applications development, leveraging cloud tools. Cloud applications bring higher scalability, easier management, and reduced cost through microservices, better automation and DevOps practices.</p>
                                    <h4 className='tech-stack'>Tech Stack</h4>

                                    <div className='techs'>
                                        <span className='technology badge rounded-pill  mt-2  me-3 '>
                                            <img src={aws} className='img-fluid rounded-circle bg-white' />

                                            <span>AWS Serverless </span>
                                        </span>



                                        <span className='technology badge rounded-pill  mt-2  me-3'>
                                            <img src={amplify} className='img-fluid rounded-circle bg-white' />

                                            <span>Amplify</span>
                                        </span>



                                        <span className='technology badge rounded-pill  mt-2  me-3'>
                                            <img src={app} className='img-fluid rounded-circle bg-white' />

                                            <span>App Sync</span>
                                        </span>

                                    </div>


                                    <div onWheel={handleScroll5}>
                                        <Slider ref={sliderRef5} {...setting5}>
                                            <div key={1}>
                                                <div class="card-space">
                                                    <div>
                                                        <img src={webad} class="card-img-top" alt="..." />

                                                        <div class="card-body">

                                                            <div className='mybtn text-center'>
                                                                    <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Web Admin</h5>
                                                                <a href="https://www.addant.com/#/solutions/casinomanagementsystem/webadmin" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div key={2}>
                                                <div class="card-space">
                                                    <img src={swp} class="card-img-top" alt="..." />
                                                    <div class="card-body">

                                                        <div className='mybtn text-center'>
                                                                <h5 class="card-title mt-xxl-3 mb-xxl-3 mt-lg-2 mb-lg-2">Smart Web Platform</h5>
                                                            <a href="https://www.addant.com/#/solutions/smartcityplatform/smartwebplatform" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div key={3}>
                                                <div class="card-space">
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                   

                                    </article>


                                </div>
                                {/* PROGRESS 1 */}
                                <div style={{ display: activeDiv === 1 ? 'flex' : 'none' }} className='scroll-box one scroll_mt '>

                                    <div className='scroll-box-1'>
                                        <div className='scroll-rl'>
                                            <div className='scroll-left'>
                                                <svg width="30" height="30" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" xmlns="http://www.w3.org/2000/svg">
                                                    <path class="arrow" d="M22.5 30L22.0315 29.6252L21.7316 30L22.0315 30.3748L22.5 30ZM52.5 30.6C52.8314 30.6 53.1 30.3314 53.1 30C53.1 29.6686 52.8314 29.4 52.5 29.4V30.6ZM32.0315 17.1252L22.0315 29.6252L22.9685 30.3748L32.9685 17.8748L32.0315 17.1252ZM22.0315 30.3748L32.0315 42.8748L32.9685 42.1252L22.9685 29.6252L22.0315 30.3748ZM22.5 30.6H52.5V29.4H22.5V30.6Z" fill="#0EC79B"></path>
                                                </svg>
                                                Scroll
                                            </div>
                                            <div className='scroll-right'>Scroll
                                                <svg width="30" height="30" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" xmlns="http://www.w3.org/2000/svg">
                                                    <path class="arrow" d="M37.5 30L37.9685 29.6252L38.2684 30L37.9685 30.3748L37.5 30ZM7.5 30.6C7.16863 30.6 6.9 30.3314 6.9 30C6.9 29.6686 7.16863 29.4 7.5 29.4V30.6ZM27.9685 17.1252L37.9685 29.6252L37.0315 30.3748L27.0315 17.8748L27.9685 17.1252ZM37.9685 30.3748L27.9685 42.8748L27.0315 42.1252L37.0315 29.6252L37.9685 30.3748ZM37.5 30.6H7.5V29.4H37.5V30.6Z" fill="#0EC79B"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='progressbar'>
                                                <div className='progressindicator' style={{ width: `${scrollProgress6}%` }}></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='circle-progress'>
                                        <svg className='circle-svg' viewBox="0 0 100 100" width="100" height="100">
                                            <circle className='circle-stroke'
                                                cx="50"
                                                cy="50"
                                                r="40"
                                                stroke="#0EC79B"
                                                strokeWidth="3"
                                                fill="transparent"
                                                strokeDasharray={`${scrollProgress6 * 2.6},810`}
                                            />
                                        </svg>
                                        <img className='addant-image' src={addantProgress} />
                                    </div>

                                </div>
                                {/* PROGRESS 2 */}
                                <div style={{ display: activeDiv === 2 ? 'flex' : 'none' }} className='scroll-box two scroll_mt '>

<div className='scroll-box-1'>
    <div className='scroll-rl'>
        <div className='scroll-left'>
            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M22.5 30L22.0315 29.6252L21.7316 30L22.0315 30.3748L22.5 30ZM52.5 30.6C52.8314 30.6 53.1 30.3314 53.1 30C53.1 29.6686 52.8314 29.4 52.5 29.4V30.6ZM32.0315 17.1252L22.0315 29.6252L22.9685 30.3748L32.9685 17.8748L32.0315 17.1252ZM22.0315 30.3748L32.0315 42.8748L32.9685 42.1252L22.9685 29.6252L22.0315 30.3748ZM22.5 30.6H52.5V29.4H22.5V30.6Z" fill="#0EC79B"></path>
            </svg>
            Scroll
        </div>
        <div className='scroll-right'>Scroll
            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M37.5 30L37.9685 29.6252L38.2684 30L37.9685 30.3748L37.5 30ZM7.5 30.6C7.16863 30.6 6.9 30.3314 6.9 30C6.9 29.6686 7.16863 29.4 7.5 29.4V30.6ZM27.9685 17.1252L37.9685 29.6252L37.0315 30.3748L27.0315 17.8748L27.9685 17.1252ZM37.9685 30.3748L27.9685 42.8748L27.0315 42.1252L37.0315 29.6252L37.9685 30.3748ZM37.5 30.6H7.5V29.4H37.5V30.6Z" fill="#0EC79B"></path>
            </svg>
        </div>
    </div>
    <div>
        <div className='progressbar'>
            <div className='progressindicator' style={{ width: `${scrollProgress}%` }}></div>
        </div>
    </div>
</div>


<div className='circle-progress'>
    <svg className='circle-svg' viewBox="0 0 100 100" width="100" height="100">
        <circle className='circle-stroke'
            cx="50"
            cy="50"
            r="40"
            stroke="#0EC79B"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={`${scrollProgress * 2.6},810`}
        />
    </svg>
    <img className='addant-image' src={addantProgress} />
</div>

</div>
{/* PROGRESS 3 */}
                                <div style={{ display: activeDiv === 3 ? 'flex' : 'none' }} className='scroll-box three scroll_mt '>

<div className='scroll-box-1'>
    <div className='scroll-rl'>
        <div className='scroll-left'>
            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M22.5 30L22.0315 29.6252L21.7316 30L22.0315 30.3748L22.5 30ZM52.5 30.6C52.8314 30.6 53.1 30.3314 53.1 30C53.1 29.6686 52.8314 29.4 52.5 29.4V30.6ZM32.0315 17.1252L22.0315 29.6252L22.9685 30.3748L32.9685 17.8748L32.0315 17.1252ZM22.0315 30.3748L32.0315 42.8748L32.9685 42.1252L22.9685 29.6252L22.0315 30.3748ZM22.5 30.6H52.5V29.4H22.5V30.6Z" fill="#0EC79B"></path>
            </svg>
            Scroll
        </div>
        <div className='scroll-right'>Scroll
            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M37.5 30L37.9685 29.6252L38.2684 30L37.9685 30.3748L37.5 30ZM7.5 30.6C7.16863 30.6 6.9 30.3314 6.9 30C6.9 29.6686 7.16863 29.4 7.5 29.4V30.6ZM27.9685 17.1252L37.9685 29.6252L37.0315 30.3748L27.0315 17.8748L27.9685 17.1252ZM37.9685 30.3748L27.9685 42.8748L27.0315 42.1252L37.0315 29.6252L37.9685 30.3748ZM37.5 30.6H7.5V29.4H37.5V30.6Z" fill="#0EC79B"></path>
            </svg>
        </div>
    </div>
    <div>
        <div className='progressbar'>
            <div className='progressindicator' style={{ width: `${scrollProgress2}%` }}></div>
        </div>
    </div>
</div>


<div className='circle-progress'>
    <svg className='circle-svg' viewBox="0 0 100 100" width="100" height="100">
        <circle className='circle-stroke'
            cx="50"
            cy="50"
            r="40"
            stroke="#0EC79B"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={`${scrollProgress2 * 2.6},810`}
        />
    </svg>
    <img className='addant-image' src={addantProgress} />
</div>

</div>
{/* PROGRESS 4 */}
                                <div style={{ display: activeDiv === 4 ? 'flex' : 'none' }} className='scroll-box four scroll_mt '>

<div className='scroll-box-1'>
    <div className='scroll-rl'>
        <div className='scroll-left'>
            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M22.5 30L22.0315 29.6252L21.7316 30L22.0315 30.3748L22.5 30ZM52.5 30.6C52.8314 30.6 53.1 30.3314 53.1 30C53.1 29.6686 52.8314 29.4 52.5 29.4V30.6ZM32.0315 17.1252L22.0315 29.6252L22.9685 30.3748L32.9685 17.8748L32.0315 17.1252ZM22.0315 30.3748L32.0315 42.8748L32.9685 42.1252L22.9685 29.6252L22.0315 30.3748ZM22.5 30.6H52.5V29.4H22.5V30.6Z" fill="#0EC79B"></path>
            </svg>
            Scroll
        </div>
        <div className='scroll-right'>Scroll
            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M37.5 30L37.9685 29.6252L38.2684 30L37.9685 30.3748L37.5 30ZM7.5 30.6C7.16863 30.6 6.9 30.3314 6.9 30C6.9 29.6686 7.16863 29.4 7.5 29.4V30.6ZM27.9685 17.1252L37.9685 29.6252L37.0315 30.3748L27.0315 17.8748L27.9685 17.1252ZM37.9685 30.3748L27.9685 42.8748L27.0315 42.1252L37.0315 29.6252L37.9685 30.3748ZM37.5 30.6H7.5V29.4H37.5V30.6Z" fill="#0EC79B"></path>
            </svg>
        </div>
    </div>
    <div>
        <div className='progressbar'>
            <div className='progressindicator' style={{ width: `${scrollProgress4}%` }}></div>
        </div>
    </div>
</div>


<div className='circle-progress'>
    <svg className='circle-svg' viewBox="0 0 100 100" width="100" height="100">
        <circle className='circle-stroke'
            cx="50"
            cy="50"
            r="40"
            stroke="#0EC79B"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={`${scrollProgress4 * 2.6},810`}
        />
    </svg>
    <img className='addant-image' src={addantProgress} />
</div>

</div>
{/* PROGRESS 5 */}
                                <div style={{ display: activeDiv === 5 ? 'flex' : 'none' }} className='scroll-box five scroll_mt '>

<div className='scroll-box-1'>
    <div className='scroll-rl'>
        <div className='scroll-left'>
            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M22.5 30L22.0315 29.6252L21.7316 30L22.0315 30.3748L22.5 30ZM52.5 30.6C52.8314 30.6 53.1 30.3314 53.1 30C53.1 29.6686 52.8314 29.4 52.5 29.4V30.6ZM32.0315 17.1252L22.0315 29.6252L22.9685 30.3748L32.9685 17.8748L32.0315 17.1252ZM22.0315 30.3748L32.0315 42.8748L32.9685 42.1252L22.9685 29.6252L22.0315 30.3748ZM22.5 30.6H52.5V29.4H22.5V30.6Z" fill="#0EC79B"></path>
            </svg>
            Scroll
        </div>
        <div className='scroll-right'>Scroll
            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M37.5 30L37.9685 29.6252L38.2684 30L37.9685 30.3748L37.5 30ZM7.5 30.6C7.16863 30.6 6.9 30.3314 6.9 30C6.9 29.6686 7.16863 29.4 7.5 29.4V30.6ZM27.9685 17.1252L37.9685 29.6252L37.0315 30.3748L27.0315 17.8748L27.9685 17.1252ZM37.9685 30.3748L27.9685 42.8748L27.0315 42.1252L37.0315 29.6252L37.9685 30.3748ZM37.5 30.6H7.5V29.4H37.5V30.6Z" fill="#0EC79B"></path>
            </svg>
        </div>
    </div>
    <div>
        <div className='progressbar'>
            <div className='progressindicator' style={{ width: `${scrollProgress3}%` }}></div>
        </div>
    </div>
</div>


<div className='circle-progress'>
    <svg className='circle-svg' viewBox="0 0 100 100" width="100" height="100">
        <circle className='circle-stroke'
            cx="50"
            cy="50"
            r="40"
            stroke="#0EC79B"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={`${scrollProgress3 * 2.6},810`}
        />
    </svg>
    <img className='addant-image' src={addantProgress} />
</div>

</div>
{/* PROGRESS 6 */}
                                <div style={{ display: activeDiv === 6 ? 'flex' : 'none' }} className='scroll-box six scroll_mt '>

<div className='scroll-box-1'>
    <div className='scroll-rl'>
        <div className='scroll-left'>
            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" xmlns="http://www.w3.org/2000/svg">
                    <path class="arrow" d="M22.5 30L22.0315 29.6252L21.7316 30L22.0315 30.3748L22.5 30ZM52.5 30.6C52.8314 30.6 53.1 30.3314 53.1 30C53.1 29.6686 52.8314 29.4 52.5 29.4V30.6ZM32.0315 17.1252L22.0315 29.6252L22.9685 30.3748L32.9685 17.8748L32.0315 17.1252ZM22.0315 30.3748L32.0315 42.8748L32.9685 42.1252L22.9685 29.6252L22.0315 30.3748ZM22.5 30.6H52.5V29.4H22.5V30.6Z" fill="#0EC79B"></path>
                </svg>
                Scroll
            </div>
            <div className='scroll-right'>Scroll
                <svg width="30" height="30" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" xmlns="http://www.w3.org/2000/svg">
                    <path class="arrow" d="M37.5 30L37.9685 29.6252L38.2684 30L37.9685 30.3748L37.5 30ZM7.5 30.6C7.16863 30.6 6.9 30.3314 6.9 30C6.9 29.6686 7.16863 29.4 7.5 29.4V30.6ZM27.9685 17.1252L37.9685 29.6252L37.0315 30.3748L27.0315 17.8748L27.9685 17.1252ZM37.9685 30.3748L27.9685 42.8748L27.0315 42.1252L37.0315 29.6252L37.9685 30.3748ZM37.5 30.6H7.5V29.4H37.5V30.6Z" fill="#0EC79B"></path>
                </svg>
            </div>
        </div>
        <div>
            <div className='progressbar'>
                <div className='progressindicator' style={{ width: `100%` }}></div>
            </div>
        </div>
    </div>


    <div className='circle-progress'>
        <svg className='circle-svg' viewBox="0 0 100 100" width="100" height="100">
            <circle className='circle-stroke'
                cx="50"
                cy="50"
                r="40"
                stroke="#0EC79B"
                strokeWidth="3"
                fill="transparent"
                strokeDasharray={`260%`}
            />
        </svg>
        <img className='addant-image' src={addantProgress} />
    </div>

</div>


                            </div>


                        </div>



                </div>


            )}


        </div>


    )
}

export default KioskHandling
