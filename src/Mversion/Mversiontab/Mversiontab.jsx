import React from 'react'
import darrow from "../../../src/assets/darrow.svg";
import './Mversiontab.css';
import { useNavigate } from 'react-router';
import Newnav from '../../Kiosk&TouchScreen/Newnav/Newnav';

function Mversiontab() {
    let navigate = useNavigate();
    const submitThis = () => {

        let path = `enagementModel`;
        navigate(path);
    }

    let navigateKiosk = useNavigate();
    const kiosk = () => {

        let path = `kisok`;
        navigateKiosk(path);
    }

    let navigateMobile = useNavigate();
    const Mobile = () => {

        let path = `mobile`;
        navigateMobile(path);
    }

    let navigateWeb = useNavigate();
    const Web = () => {

        let path = `web`;
        navigateWeb(path);
    }

    let navigateData = useNavigate();
    const Data = () => {

        let path = `data`;
        navigateData(path);
    }

    let navigateCloud = useNavigate();
    const Cloud = () => {

        let path = `cloud`;
        navigateCloud(path);
    }

  return (
    
    <div className='container-fluid m-main'>
      <Newnav/>
          <div className='m-menu  mb-3 text-center'>
    <p className="m-menuhead">Choose what you want to see </p>
    <img src={darrow} className='img-fluid'/>
    
    <div className='m-tab mt-4'>
      
        <p className='m-mainheads'>Our Engagement model</p>
      
      
      <div className='m-btn mt-4 text-center'>
                      <button type="button" class="btn m-menubtn" onClick={submitThis}>Engagement model</button>
      </div>
      
      <p className='m-mainheads mt-4'>Solutions</p>

      <div className='m-btn mt-4 text-center'>
                      <button type="button" class="btn m-menubtn" onClick={kiosk}>Kiosk & Touchscreen</button>
      
      </div>

      <div className='m-btn mt-4 text-center'>
                      <button type="button" class="btn m-menubtn" onClick={Mobile}>Mobile Development</button>

      </div>


      <div className='m-btn mt-4 text-center'>
                      <button type="button" class="btn m-menubtn" onClick={Web}>Web Applications</button>

      </div>


      <div className='m-btn mt-4 text-center'>
                      <button type="button" class="btn m-menubtn" onClick={Data}>Data Science & Engineering</button>

      </div>


      <div className='m-btn mt-4 text-center'>
                      <button type="button" class="btn m-menubtn" onClick={Cloud}>Cloud Solutions</button>

      </div>


    </div>
  </div>
    </div>
  )

}

export default Mversiontab

