import React from 'react'
import './MversionData.css';
import ptm from "../../../src/assets/ptm.svg";
import papp from "../../../src/assets/papp.svg";
import webad from "../../../src/assets/webad.svg";
import kis from "../../../src/assets/kis.svg";
import fs from "../../../src/assets/fs.svg";
import { useNavigate } from 'react-router';
import Newnav from '../../Kiosk&TouchScreen/Newnav/Newnav';
import python from "../../../src/assets/python.svg";
import apache from "../../../src/assets/apache.svg";
import auto from "../../../src/assets/auto.svg";
import nosql from "../../../src/assets/nosql.svg";
import mongo from "../../../src/assets/mongo.svg";
//import Newnav from '../Newnav/Newnav'


function MversionData() {
    let navigate = useNavigate();
    const Cloud = () => navigate(-1);
  return (
    <div className='container-fluid m-main mb-5'>
      <Newnav/>
        <div className='mokis mt-5'>
      <p className='mo-kishead'>Data Science & Engineering</p>
      <p className='mo-kispara'>With our quest to learn and adapt to the evolving algorithms and models, we bring in unique and advanced data engineering methodologies enabling businesses to optimise data towards usability there by ensuring scalability, tailored user driven solutions, and optimised predictive analysis.</p>
      <p className='mo-kistech'>Tech Stack</p>


      <div className='mo-techs'>
      <span className='mo-technology badge rounded-pill mt-2 '>
      <img src={python} className='img-fluid rounded-circle bg-white' />
        <span>Python </span>
      </span>



      <span className='mo-technology badge rounded-pill'>
      <img src={apache} className='img-fluid rounded-circle bg-white' />
        <span>Apache Spark</span>
      </span>



      <span className='mo-technology badge rounded-pill'>
      <img src={auto} className='img-fluid rounded-circle bg-white' />
        <span>AutoGluon</span>
      </span>


      <span className='mo-technology badge rounded-pill '>
      <img src={nosql} className='img-fluid rounded-circle bg-white' />
        <span>NOSQL - Dynamo DB</span>
      </span>


      <span className='mo-technology badge rounded-pill '>
      <img src={mongo} className='img-fluid rounded-circle bg-white' />
        <span> Mongo DB</span>
      </span>

     


      

      <div className='gallery'>
      
      </div>
      </div>

      <div className='mo-sol mt-5'>
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


      <div className='mo-sol mt-5'>
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



      <div className='mo-sol mt-5 mb-3'>
        <div class="card">
          <img src={webad} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Web Admin</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/webadmin" target="_blank"  class="btn mo-knowmore">Know more</a>

            </div>
          </div>
        </div>
      </div>


      <div className='mo-sol mt-5 mb-3'>
        <div class="card">
          <img src={kis} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Multi Service Kiosk</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/smartcityplatform/multiservicekisokapplication" target="_blank" class="btn mo-knowmore">Know more</a>

            </div>
          </div>
        </div>
      </div>


      <div className='mo-sol mt-5 mb-3'>
        <div class="card">
          <img src={fs} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Floor Assistant</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/floorassistant" target="_blank" class="btn mo-knowmore">Know more</a>

            </div>
          </div>
        </div>
      </div>

      <div className='text-center mb-4'>
                  <button type="button" className='btn mo-go' onClick={Cloud}>Go back to menu</button>
    </div>



    </div>
    </div>
  )
}

export default MversionData

