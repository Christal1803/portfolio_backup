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

    const settings = {
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
            <h2>Previous and Next methods</h2>
            <Slider ref={setSlider} {...settings}>
                <div key={1}>
                    <div class="card">
                        <img src={flc} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body text-center">
                            <h5 class="card-title mt-0">Floor Client</h5>
                            <div className='mybtn text-center mt-2'>
                                <a href="https://www.addant.com/#/solutions/casinomanagementsystem/floorclient" target="_blank" class="btn mo-knowmore mb-2">Know more</a>
                            </div>
                        </div>
                    </div>


                </div>
                <div key={2}>
                    <h3>2</h3>
                </div>
                <div key={3}>
                    <h3>3</h3>
                </div>
                <div key={4}>
                    <h3>4</h3>
                </div>
                <div key={5}>
                    <h3>5</h3>
                </div>
                <div key={6}>
                    <h3>6</h3>
                </div>
            </Slider>
            <div style={{ textAlign: "center" }}>
                <button className="button" onClick={previous}>
                    Previous
                </button>
                <button className="button" onClick={next}>
                    Next
                </button>
            </div>
        </div>
    );
}
    //}



//    useEffect(() => {
//        const items = document.querySelectorAll('.carousel .carousel-item');
//        items.forEach((el) => {
//          const minPerSlide = 5;
//          let next = el.nextElementSibling;
//          for (var i=1; i<minPerSlide; i++) {
//            if (!next) {
//              // wrap carousel by using first child
//              next = items[0];
//            }
//            let cloneChild = next.cloneNode(true);
//            el.appendChild(cloneChild.children[0]);
//            next = next.nextElementSibling;
//          }
//        });
//      }, []); 
      
      
//  return(
//    <><HeadProvider>
 
// <div>
//  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
//  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"/>
//<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
//    </div>
//  </HeadProvider>

//  <div className="container-fluid">
//  <div class="row ">
//    <div id="featureCarousel" class="carousel slide" data-bs-ride="carousel">

      

//      <div class="container text-center my-3">
//    <h2 class="font-weight-light">Bootstrap Multi Slide Carousel</h2>
//    <div class="row mx-auto my-auto justify-content-center">
//        <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
//            <div class="carousel-inner" role="listbox">
//                <div class="carousel-item active">
//                    <div class="col-md-4">
                        


//                        <div class="card">
//                            <img src={flc} class="card-img-top img-fluid" alt="..."/>
//                            <div class="card-body text-center">
//                                <h5 class="card-title mt-2">Floor Client</h5>
//                                <div className='mybtn text-center mt-3'>
//                                <a href="https://www.addant.com/#/solutions/casinomanagementsystem/floorclient" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
//                                </div>
//                            </div>
//                        </div>
//                    </div>

//                </div>
//                <div class="carousel-item">
//                    <div class="col-md-4">
//                    <div class="card">
//                            <img src={alivis} class="card-img-top img-fluid" alt="..."/>
//                            <div class="card-body">
//                                <h5 class="card-title mt-2">Virtual Receptionist</h5>
//                                <div className='mybtn text-center mt-3'>
//                                <a href="https://www.addant.com/#/solutions/hospitalitymanagement/alicereceptionist" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//                <div class="carousel-item">
//                    <div class="col-md-4">
//                    <div class="card">
//                            <img src={kis} class="card-img-top img-fluid" alt="..."/>
//                            <div class="card-body">
//                                <h5 class="card-title mt-2">Multi Service Kiosk</h5>
//                                <div className='mybtn text-center mt-3'>
//                                <a href="https://www.addant.com/#/solutions/smartcityplatform/multiservicekisokapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
//                                </div>

//                            </div>
//                        </div>
//                    </div>
//                </div>
//                <div class="carousel-item">
//                    <div class="col-md-4">
//                    <div class="card">
//                            <img src={aliad} class="card-img-top img-fluid" alt="..."/>
//                            <div class="card-body">
//                                <h5 class="card-title mt-2">Directory Admin</h5>
//                                <div className='mybtn text-center mt-3'>
//                                <a href="https://www.addant.com/#/solutions/hospitalitymanagement/aliceadmin" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                </div>
//                <div class="carousel-item">
//                    <div class="col-md-4">
//                    <div class="card">
//                            <img src={alic} class="card-img-top img-fluid" alt="..."/>
//                            <div class="card-body">
//                                <h5 class="card-title mt-2">Alice</h5>
//                                <div className='mybtn text-center mt-3'>
//                                <a href="https://www.addant.com/#/solutions/hospitalitymanagement/alicevisitormanagement" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
//                                </div>
//                            </div>
//                        </div>
//                    </div>
//                </div>
                
//            </div>
           
//        </div>
//    </div>

//</div>


//<div class="text-center pe-md-4">
//        <a class="indicator" href="#recipeCarousel" role="button" data-bs-slide="prev">
//         <img src={left} className="img-fluid btn-arrow" />
//        </a> &nbsp;&nbsp;
//        <a class="w-aut indicator" href="#recipeCarousel" role="button" data-bs-slide="next">
//        <img src={right} className="img-fluid btn-arrow" />
//        </a>
//      </div>
//    </div>
//  </div>
//  </div>

//</>


//  )
//}

export default Demo