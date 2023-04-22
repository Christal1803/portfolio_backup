import React, { useEffect, Component } from "react";

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


function Demo() {

   
      
  return(
    <>

  <div className="container-fluid">
   <div class="row ">
    <div id="featureCarousel" class="carousel slide" data-bs-ride="carousel">

      

      <div class="container text-center my-3">
    <h2 class="font-weight-light">Bootstrap Multi Slide Carousel</h2>
    <div class="row mx-auto my-auto justify-content-center">
        <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <div class="col-md-4">
                        


                        <div class="card">
                            <img src={flc} class="card-img-top img-fluid" alt="..."/>
                            <div class="card-body text-center">
                                <h5 class="card-title mt-2">Floor Client</h5>
                                <div className='mybtn text-center mt-3'>
                                <a href="https://www.addant.com/#/solutions/casinomanagementsystem/floorclient" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                            <img src={alivis} class="card-img-top img-fluid" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title mt-2">Virtual Receptionist</h5>
                                <div className='mybtn text-center mt-3'>
                                <a href="https://www.addant.com/#/solutions/hospitalitymanagement/alicereceptionist" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                            <img src={kis} class="card-img-top img-fluid" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title mt-2">Multi Service Kiosk</h5>
                                <div className='mybtn text-center mt-3'>
                                <a href="https://www.addant.com/#/solutions/smartcityplatform/multiservicekisokapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                            <img src={aliad} class="card-img-top img-fluid" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title mt-2">Directory Admin</h5>
                                <div className='mybtn text-center mt-3'>
                                <a href="https://www.addant.com/#/solutions/hospitalitymanagement/aliceadmin" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                            <img src={alic} class="card-img-top img-fluid" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title mt-2">Alice</h5>
                                <div className='mybtn text-center mt-3'>
                                <a href="https://www.addant.com/#/solutions/hospitalitymanagement/alicevisitormanagement" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </div>
    </div>

</div>


<div class="text-center pe-md-4">
        <a class="indicator" href="#recipeCarousel" role="button" data-bs-slide="prev">
         <img src={left} className="img-fluid btn-arrow" />
        </a> &nbsp;&nbsp;
        <a class="w-aut indicator" href="#recipeCarousel" role="button" data-bs-slide="next">
        <img src={right} className="img-fluid btn-arrow" />
        </a>
      </div>
    </div>
  </div> 

   <div class="row ">
    <div id="featureCarousel" class="carousel slide" data-bs-ride="carousel">

      

      <div class="container text-center my-3">
    <h2 class="font-weight-light">Bootstrap Multi Slide Carousel</h2>
    <div class="row mx-auto my-auto justify-content-center">
        <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <div class="col-md-4">
                        


                        <div class="card">
                            <img src={flc} class="card-img-top img-fluid" alt="..."/>
                            <div class="card-body text-center">
                                <h5 class="card-title mt-2">QR Code validation & payment app</h5>
                                <div className='mybtn text-center mt-3'>
                                <a href="https://www.addant.com/#/solutions/smartcityplatform/qrcodevalidationpaymentapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                            <img src={cuspos} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title mt-2">Custom POS Application</h5>

                                
                                <div className='mybtn text-center mt-3'>
                                <a href="https://www.addant.com/#/solutions/smartcityplatform/customposapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                    <img src={papp} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Player App</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/playerapp" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                    <img src={fs} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Floor Assistant</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/floorassistant" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                            <img src={ca} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Cage Application</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/cageapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>



                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                    <img src={ptm} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Player Tracking Module</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/playertrackingmodule" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>




                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                    <img src={cusposc} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Custom POS Application - Casino</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/customposapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>




                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                    <img src={pct} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Parking Cashier Terminal</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/smartcityplatform/parkingcashierterminal" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>




                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                    <img src={ct} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Connected Taxi</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/smartcityplatform/connectedtaxi" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>




                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                    <img src={tivo} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Custom Hospital Parking Management Application</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/smartcityplatform/customhospitalparkingmanagementapplication" target="_blank"  class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </div>
    </div>

</div>


<div class="text-center pe-md-4">
        <a class="indicator" href="#recipeCarousel" role="button" data-bs-slide="prev">
         <img src={left} className="img-fluid btn-arrow" />
        </a> &nbsp;&nbsp;
        <a class="w-aut indicator" href="#recipeCarousel" role="button" data-bs-slide="next">
        <img src={right} className="img-fluid btn-arrow" />
        </a>
      </div>
    </div>
  </div> 

 <div class="row ">
    <div id="featureCarousel" class="carousel slide" data-bs-ride="carousel">

      

      <div class="container text-center my-3">
    <h2 class="font-weight-light">Bootstrap Multi Slide Carousel</h2>
    <div class="row mx-auto my-auto justify-content-center">
        <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <div class="col-md-4">
                        


                        <div class="card">
                        <img src={webad} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Web Admin</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/webadmin" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>

                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                    <img src={swp} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Smart Web Platform</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/smartcityplatform/smartwebplatform" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>
             
            </div>
           
        </div>
    </div>

</div>


<div class="text-center pe-md-4">
        <a class="indicator" href="#recipeCarousel" role="button" data-bs-slide="prev">
         <img src={left} className="img-fluid btn-arrow" />
        </a> &nbsp;&nbsp;
        <a class="w-aut indicator" href="#recipeCarousel" role="button" data-bs-slide="next">
        <img src={right} className="img-fluid btn-arrow" />
        </a>
      </div>
    </div>
  </div>  


 <div class="row ">
    <div id="featureCarousel" class="carousel slide" data-bs-ride="carousel">

      

      <div class="container text-center my-3">
    <h2 class="font-weight-light">Bootstrap Multi Slide Carousel</h2>
    <div class="row mx-auto my-auto justify-content-center">
        <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <div class="col-md-4">
                        


                        <div class="card">
                        <img src={ptm} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Player Tracking Module</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/playertrackingmodule" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>

                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                    <img src={papp} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Player App</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/playerapp" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>


                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                   <img src={webad} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Web Admin</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/webadmin" target="_blank"  class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>




                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                    <img src={kis} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Multi Service Kiosk</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/smartcityplatform/multiservicekisokapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>




                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                    <img src={fs} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Floor Assistant</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/floorassistant" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>
             
            </div>
           
        </div>
    </div>

</div>


<div class="text-center pe-md-4">
        <a class="indicator" href="#recipeCarousel" role="button" data-bs-slide="prev">
         <img src={left} className="img-fluid btn-arrow" />
        </a> &nbsp;&nbsp;
        <a class="w-aut indicator" href="#recipeCarousel" role="button" data-bs-slide="next">
        <img src={right} className="img-fluid btn-arrow" />
        </a>
      </div>
    </div>
  </div>  

<div class="row ">
    <div id="featureCarousel" class="carousel slide" data-bs-ride="carousel">

      

      <div class="container text-center my-3">
    <h2 class="font-weight-light">Bootstrap Multi Slide Carousel</h2>
    <div class="row mx-auto my-auto justify-content-center">
        <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <div class="col-md-4">
                        


                        <div class="card">
                        <img src={webad} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Web Admin</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/webadmin" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>

                </div>
                <div class="carousel-item">
                    <div class="col-md-4">
                    <div class="card">
                    <img src={swp} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Smart Web Platform</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/smartcityplatform/smartwebplatform" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
                        </div>
                    </div>
                </div>
             
            </div>
           
        </div>
    </div>

</div>


<div class="text-center pe-md-4">
        <a class="indicator" href="#recipeCarousel" role="button" data-bs-slide="prev">
         <img src={left} className="img-fluid btn-arrow" />
        </a> &nbsp;&nbsp;
        <a class="w-aut indicator" href="#recipeCarousel" role="button" data-bs-slide="next">
        <img src={right} className="img-fluid btn-arrow" />
        </a>
      </div>
    </div>
  </div>
  




  </div>

</>


  )
}

export default Demo