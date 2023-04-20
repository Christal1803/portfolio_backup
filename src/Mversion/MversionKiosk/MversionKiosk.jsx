import React from 'react'
import './MversionKiosk.css';
import alivis from "../../../src/assets/alivis.svg";
import aliad from "../../../src/assets/aliad.svg";
import flc from "../../../src/assets/flc.svg";
import kis from "../../../src/assets/kis.svg";
import alic from "../../../src/assets/alic.svg";
import wpf from "../../../src/assets/wpf.svg";
import flutter from "../../../src/assets/flutter.svg";
import xaml from "../../../src/assets/xaml.svg";
import Newnav from '../../Kiosk&TouchScreen/Newnav/Newnav';

import { useNavigate } from 'react-router';

function MversionKiosk() {
    let navigate = useNavigate();
    const Cloud = () => navigate(-1);
  return (
    <div className='container-fluid m-main mb-5'>
      <Newnav/>
        <div className='mokis mt-5'>
      <p className='mo-kishead'>Kiosk & Touchscreen</p>
      <p className='mo-kispara'>We provide custom kiosk software development for our customers current and future needs. Our kiosk & touchscreen development team builds efficient UIs, multi-tenant services, hardware interfaces, branding management, resource management, and remote administration.</p>
      <p className='mo-kistech'>Tech Stack</p>


      <div className='mo-techs'>
      <span className='mo-technology badge rounded-pill mt-2 '>
        <img src={flutter} className='img-fluid rounded-circle bg-white' />
        <span>Flutter</span>
      </span>



      <span className='mo-technology badge rounded-pill '>
      <img src={wpf} className='img-fluid rounded-circle' />
        <span>WPF</span>
      </span>



      <span className='mo-technology badge rounded-pill '>
      <img src={xaml} className='img-fluid rounded-circle' />
        <span>XAML</span>
      </span>




      <div className='gallery'>
      
      </div>
      </div>

      <div className='mo-sol mt-5'>
        <div class="card">
          <img src={flc} class="card-img-top img-fluid" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Floor Client</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/floorclient" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
        </div>
      </div>


      <div className='mo-sol mt-5'>
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



      <div className='mo-sol mt-5 mb-3'>
        <div class="card">
          <img src={kis} class="card-img-top img-fluid" alt="..."/>
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
          <img src={aliad} class="card-img-top img-fluid" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Directory Admin </h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/hospitalitymanagement/aliceadmin" target="_blank" class="btn mo-knowmore">Know more</a>

            </div>
          </div>
        </div>
      </div>


      <div className='mo-sol mt-5 mb-3'>
        <div class="card">
          <img src={alic} class="card-img-top img-fluid" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Alice </h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/hospitalitymanagement/alicevisitormanagement" target="_blank" class="btn mo-knowmore">Know more</a>

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

export default MversionKiosk

