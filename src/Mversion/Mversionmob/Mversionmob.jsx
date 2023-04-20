import React from 'react'
import './Mversionmob.css';
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
import { useNavigate } from 'react-router';
import Newnav from '../../Kiosk&TouchScreen/Newnav/Newnav';
import flutter from "../../../src/assets/flutter.svg";
import xamarin from "../../../src/assets/xamarin.svg";
import react from "../../../src/assets/react.svg";
import ios from "../../../src/assets/ios.svg";
import andriod from "../../../src/assets/andriod.svg";
import Newnav from '../Newnav/Newnav'


function Mversionmob() {
    let navigate = useNavigate();
    const Cloud = () => navigate(-1);
  return (
    <div className='container-fluid m-main  mb-5'>
      <Newnav/>
        <div className='mokis mt-5'>
      <p className='mo-kishead'>Mobile Development</p>
      <p className='mo-kispara'>Addant offers design, development, deployment, and maintenance of value-added mobile applications across iOS & Android platforms. Our team has significant experience when it comes to native or cross-platform development, and they focus on creating intuitive interfaces ensuring seamless user engagement.</p>
      <p className='mo-kistech'>Tech Stack</p>


      <div className='mo-techs'>
      <span className='mo-technology badge rounded-pill mt-2 '>
        <img src={flutter} className='img-fluid bg-white rounded-circle'/>
        <span>Flutter</span>
      </span>



      <span className='mo-technology badge rounded-pill '>
      <img src={xamarin} className='img-fluid rounded-circle bg-white' />
        <span>Xamarin</span>
      </span>



      <span className='mo-technology badge rounded-pill '>
      <img src={react} className='img-fluid rounded-circle bg-white' />
        <span>React Native</span>
      </span>


      <span className='mo-technology badge rounded-pill '>
      <img src={ios} className='img-fluid rounded-circle bg-white' />
        <span>Native iOS</span>
      </span>


      <span className='mo-technology badge rounded-pill '>
      <img src={andriod} className='img-fluid rounded-circle bg-white' />
        <span> Android Native</span>
      </span>



     




      <div className='gallery'>
      
      </div>
      </div>

      <div className='mo-sol mt-5'>
        <div class="card">
          <img src={qrp} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">QR Code validation & payment app</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/smartcityplatform/qrcodevalidationpaymentapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
        </div>
      </div>


      <div className='mo-sol mt-5'>
        <div class="card">
          <img src={qrr} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">QR Based conference room management</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/smartcityplatform/qrbaseconferenceroommanagement" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
        </div>
      </div>


      <div className='mo-sol mt-5'>
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


      <div className='mo-sol mt-5'>
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


      <div className='mo-sol mt-5'>
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
          <img src={cusposc} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title mt-2">Custom POS Application - Casino</h5>

            
            <div className='mybtn text-center mt-3'>
            <a href="https://www.addant.com/#/solutions/casinomanagementsystem/customposapplication" target="_blank" class="btn mo-knowmore mb-4">Know more</a>

            </div>
          </div>
        </div>
      </div>

      <div className='mo-sol mt-5'>
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

      <div className='mo-sol mt-5'>
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


      <div className='mo-sol mt-5'>
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


      

      <div className='text-center mb-4'>
                  <button type="button" className='btn mo-go' onClick={Cloud}>Go back to menu</button>
    </div>



    </div>
    </div>
  )
}

export default Mversionmob

