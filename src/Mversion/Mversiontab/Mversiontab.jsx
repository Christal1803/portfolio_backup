import React from 'react'
import darrow from "../../../src/assets/darrow.svg";
import './Mversiontab.css';

function Mversiontab() {
  return (
    <div className='container-fluid m-main'>
          <div className='m-menu mt-5 mb-3 text-center'>
    <p className="m-menuhead">Choose what you want to see </p>
    <img src={darrow} className='img-fluid'/>
    
    <div className='m-tab mt-4'>
      
        <p className='m-mainheads'>Our Engagement model</p>
      
      
      <div className='m-btn mt-4 text-center'>
        <button type="button" class="btn m-menubtn">Engagement model</button>
      </div>
      
      <p className='m-mainheads mt-4'>Solutions</p>

      <div className='m-btn mt-4 text-center'>
      <button type="button" class="btn m-menubtn">Kiosk & Touchscreen</button>
      
      </div>

      <div className='m-btn mt-4 text-center'>
      <button type="button" class="btn m-menubtn">Mobile Development</button>

      </div>


      <div className='m-btn mt-4 text-center'>
      <button type="button" class="btn m-menubtn">Web Applications</button>

      </div>


      <div className='m-btn mt-4 text-center'>
      <button type="button" class="btn m-menubtn">Data Science & Engineering</button>

      </div>


      <div className='m-btn mt-4 text-center'>
      <button type="button" class="btn m-menubtn">Cloud Solutions</button>

      </div>


    </div>
  </div>
    </div>
  )
}

export default Mversiontab

