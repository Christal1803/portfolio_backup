import React from 'react'
import './Mversioncloud.css';
import webad from "../../../src/assets/webad.svg";
import swp from "../../../src/assets/swp.svg";
import { useNavigate } from 'react-router';
import Newnav from '../../Kiosk&TouchScreen/Newnav/Newnav';
import aws from "../../../src/assets/auto.svg";
import amplify from "../../../src/assets/nosql.svg";
import app from "../../../src/assets/mongo.svg";




function Mversioncloud() {
    let navigate = useNavigate();
    const Cloud = () => navigate(-1);
  return (
    <div className='container-fluid m-main mb-5'>
      <Newnav/>
        <div className='mokis mt-5'>
      <p className='mo-kishead'>Cloud Solutions</p>
      <p className='mo-kispara'>We recognize the paradigm shift from the traditional software development to the modern applications development, leveraging cloud tools. Cloud applications bring higher scalability, easier management, and reduced cost through microservices, better automation and DevOps practices.</p>
      <p className='mo-kistech'>Tech Stack</p>


      <div className='mo-techs'>
      <span className='mo-technology badge rounded-pill mt-2 '>
      <img src={aws} className='img-fluid rounded-circle bg-white' />
        <span>AWS Serverless </span>
      </span>



      <span className='mo-technology badge rounded-pill'>
      <img src={amplify} className='img-fluid rounded-circle bg-white' />
        <span>Amplify</span>
      </span>



      <span className='mo-technology badge rounded-pill'>
      <img src={app} className='img-fluid rounded-circle bg-white' />
        <span>App Sync</span>
      </span>


      <div className='gallery'>
      
      </div>
      </div>

      <div className='mo-sol mt-5'>
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


      <div className='mo-sol mt-5'>
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



      

      <div className='text-center mb-4'>
                  <button type="button" className='btn mo-go' onClick={Cloud}>Go back to menu</button>
    </div>



    </div>
    </div>
  )
}

export default Mversioncloud

