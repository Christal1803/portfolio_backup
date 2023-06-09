import React, { useState, useCallback } from "react";

import Slider from "react-slick";


import cardimg from "../../../src/assets/tivo.svg";
import './Demo.css';
import { HeadProvider, Title, Link, Meta } from 'react-head';

import alivis from "../../../src/assets/alivis.svg";
import aliad from "../../../src/assets/aliad.svg";
import flc from "../../../src/assets/flc.svg";
import kis from "../../../src/assets/kis.svg";
import alic from "../../../src/assets/alic.svg";
import left from "../../../src/assets/leftarrow.svg";
import right from "../../../src/assets/rightarrow.svg";


function Demo() {

    const [slider, setSlider] = useState(null);

    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const next = useCallback(() => {
        slider.slickNext();
    }, [slider]);

    const previous = useCallback(() => {
        slider.slickPrev();
    }, [slider]);

    return (

        <div>
            <Slider ref={setSlider} {...setting}>
                <div key={1}>
                    <div class="card-space">
                        <div>
                            <img src={flc} class="card-img-top img-fluid" alt="..." />



                            <div class="card-body">

                                <div className='mybtn text-center'>
                                    <h5 class="card-title mt-3 mb-3">Floor Client</h5>
                                    <a href="https://www.addant.com/#/solutions/casinomanagementsystem/floorclientt" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div key={2}>
                    <div class="card-space">
                        <img src={alivis} class="card-img-top img-fluid" alt="..." />



                        <div class="card-body">

                            <div className='mybtn text-center'>
                                <h5 class="card-title mt-3 mb-3">Virtual Receptionist</h5>
                                <a href="https://www.addant.com/#/solutions/hospitalitymanagement/alicereceptionist" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                            </div>
                        </div>





                    </div>
                </div>
                <div key={3}>
                    <div class="card-space">
                        <img src={kis} class="card-img-top img-fluid" alt="..." />



                        <div class="card-body">

                            <div className='mybtn text-center'>
                                <h5 class="card-title mt-3 mb-3">Multi Service Kiosk</h5>
                                <a href="https://www.addant.com/#/solutions/smartcityplatform/multiservicekisokapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div key={4}>
                    <div class="card-space">
                        <img src={aliad} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">

                            <div className='mybtn text-center'>
                                <h5 class="card-title mt-3 mb-3">Directory Admin</h5>
                                <a href="https://www.addant.com/#/solutions/hospitalitymanagement/aliceadmin" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                            </div>
                        </div>



                    </div>
                </div>
                <div key={5}>
                    <div class="card-space">
                        <img src={alic} class="card-img-top img-fluid" alt="..." />

                        <div class="card-body">

                            <div className='mybtn text-center'>
                                <h5 class="card-title mt-3 mb-3">Alice</h5>
                                <a href="https://www.addant.com/#/solutions/hospitalitymanagement/alicevisitormanagement" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                            </div>
                        </div>



                    </div>
                </div>
                {/*<div key={6}>*/}
                {/*    <h3>6</h3>*/}
                {/*</div>*/}
            </Slider>
            <div style={{ textAlign: "center" }}>


                <a class="indicator" role="button">
                    <img src={left} className="img-fluid btn-arrow" onClick={previous} />
                </a> &nbsp;&nbsp;
                <a class="w-aut indicator" role="button" >
                    <img src={right} className="img-fluid btn-arrow" onClick={next} />
                </a>
            </div>
        </div>
    );
}
    

export default Demo