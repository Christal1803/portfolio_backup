import React, { useState, useCallback } from "react";

import Slider from "react-slick";


import cardimg from "../../../src/assets/tivo.svg";
import '../Demo/Demo.css';
import { HeadProvider, Title, Link, Meta } from 'react-head';

import alivis from "../../../src/assets/alivis.svg";
import aliad from "../../../src/assets/aliad.svg";
import flc from "../../../src/assets/flc.svg";
import kis from "../../../src/assets/kis.svg";
import alic from "../../../src/assets/alic.svg";
import left from "../../../src/assets/leftarrow.svg";
import right from "../../../src/assets/rightarrow.svg";
import cuspos from "../../../src/assets/cupos.svg";
import papp from "../../../src/assets/papp.svg";
import fs from "../../../src/assets/fs.svg";
import ca from "../../../src/assets/ca.svg";
import ptm from "../../../src/assets/ptm.svg";
import cusposc from "../../../src/assets/cusposc.svg";


function Mapp() {

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
                                    <h5 class="card-title mt-3 mb-3">QR Code validation & payment app</h5>
                                    <a href="https://www.addant.com/#/solutions/smartcityplatform/qrcodevalidationpaymentapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
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
                                <h5 class="card-title mt-3 mb-3">Custom POS Application</h5>
                                <a href="https://www.addant.com/#/solutions/smartcityplatform/customposapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                            </div>
                        </div>





                    </div>
                </div>
                <div key={3}>
                    <div class="card-space">
                        <img src={papp} class="card-img-top" alt="..." />



                        <div class="card-body">

                            <div className='mybtn text-center'>
                                <h5 class="card-title mt-3 mb-3">Player App</h5>
                                <a href="https://www.addant.com/#/solutions/casinomanagementsystem/playerapp" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div key={4}>
                    <div class="card-space">
                        <img src={ca} class="card-img-top" alt="..." />

                        <div class="card-body">

                            <div className='mybtn text-center'>
                                <h5 class="card-title mt-3 mb-3">Cage Application</h5>
                                <a href="https://www.addant.com/#/solutions/casinomanagementsystem/cageapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                            </div>
                        </div>



                    </div>
                </div>
                <div key={5}>
                    <div class="card-space">
                        <img src={ptm} class="card-img-top" alt="..." />

                        <div class="card-body">

                            <div className='mybtn text-center'>
                                <h5 class="card-title mt-3 mb-3">Player Tracking Module</h5>
                                <a href="https://www.addant.com/#/solutions/casinomanagementsystem/playertrackingmodule" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                            </div>
                        </div>
                    </div>



                </div>


                <div key={6}>
                    <div class="card-space">
                        <img src={cusposc} class="card-img-top" alt="..." />

                        <div class="card-body">

                            <div className='mybtn text-center'>
                                <h5 class="card-title mt-3 mb-3">Custom POS Application - Casino</h5>
                                <a href="https://www.addant.com/#/solutions/casinomanagementsystem/customposapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
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


export default Mapp