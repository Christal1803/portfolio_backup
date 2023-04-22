import React from 'react'
import './Mversionweb.css';
import webad from "../../../src/assets/webad.svg";
import swp from "../../../src/assets/swp.svg";
import { useNavigate } from 'react-router';
import Newnav from '../../Kiosk&TouchScreen/Newnav/Newnav';
import react from "../../../src/assets/react.svg";
import angular from "../../../src/assets/angular.svg";
import net from "../../../src/assets/net.svg";
import node from "../../../src/assets/node.svg";
import js from "../../../src/assets/js.svg";
import html from "../../../src/assets/html.svg";
import bootstrap from "../../../src/assets/bootstrap.svg";


function Mversionweb() {
    let navigate = useNavigate();
    const Cloud = () => navigate(-1);
  return (
    <div className='container-fluid m-main  mb-5'>
      <Newnav/>
        <div className='mokis mt-5'>
      <p className='mo-kishead'>Web Applications</p>
      <p className='mo-kispara'>We build custom tailored web solutions to fit our customer’s business goals. Our team work backwards from customer requirements and focuses on user experience (UX), high performance, availability, and scalability. We always use the most apt technology while staying focused on the business requirements.</p>
      <p className='mo-kistech'>Tech Stack</p>


      <div className='mo-techs'>
      <span className='mo-technology badge rounded-pill mt-2 '>
      <img src={react} className='img-fluid rounded-circle bg-white' />
        <span>React </span>
      </span>



      <span className='mo-technology badge rounded-pill'>
      <img src={angular} className='img-fluid rounded-circle bg-white' />
        <span>Angular</span>
      </span>



      <span className='mo-technology badge rounded-pill '>
      <img src={net} className='img-fluid rounded-circle bg-white' />
        <span>.NET Core</span>
      </span>


      <span className='mo-technology badge rounded-pill '>
      <img src={node} className='img-fluid rounded-circle bg-white' />
        <span>Node</span>
      </span>


      <span className='mo-technology badge rounded-pill '>
      <img src={js} className='img-fluid rounded-circle bg-white' />
        <span> JavaScript</span>
      </span>

      <span className='mo-technology badge rounded-pill '>
      <img src={html} className='img-fluid rounded-circle bg-white' />
        <span> HTML 5</span>
      </span>


      <span className='mo-technology badge rounded-pill '>
      <img src={bootstrap} className='img-fluid rounded-circle bg-white' />
        <span> Bootstrap</span>
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

export default Mversionweb

