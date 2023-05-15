import React from 'react'

import GetStarted from "../../src/assets/getstarted.svg";
import LandImg from "../../src/assets/landpageimg.svg";
import './Home.css';
import { useNavigate } from 'react-router';
import '../Responsive.css'
import logo from "../../src/assets/logo.svg";
import Button from "../../src/assets/hamburger.svg";
import NavBar01 from '../Kiosk&TouchScreen/NavBar/NavBar01';
import '../Responsive.css'
import KioskHandling from '../Kiosk&TouchScreen/KioskHandling/KioskHandling';
import Newnav from '../Kiosk&TouchScreen/Newnav/Newnav';

function Home() {
  let navigate = useNavigate(); 
    const submitThis = () =>{ 
     
        let path = `home`; 
        navigate(path);
        }
  return (
    <div class="container-fluid nav-align ">
      
      <Newnav/>
      <div class="row container-align">
        <div class="col-lg-7 col-sm-12 col-md-12 my-auto con-sec">
          <p class="para1">Interactive Solution Development:<span className='highlights'> A Journey from Partnership to Post-Launch Success</span></p>

          <p class="para2">Our comprehensive approach begins by understanding your goals and aligning them with audience needs. We create seamless navigation experiences, design scalable systems, and address deployment issues to ensure a successful launch. With ongoing monitoring, user feedback analysis, and continuous improvement, we guarantee long-term post-launch success.</p>
          <p class="para3 mt-4">Get Started <span className='home-submit-btn'><svg  width="50" height="50" viewBox="0 0 60 60" fill="none" class="img-fluid move-left" onClick={submitThis} xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="20" cy="20" rx="20" ry="20" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 55 50)" fill="#0EC79B"/>
          <path d="M14.7 30C14.7 18.7886 23.7886 9.7 35 9.7C46.2114 9.7 55.3 18.7886 55.3 30C55.3 41.2114 46.2114 50.3 35 50.3C23.7886 50.3 14.7 41.2114 14.7 30Z" stroke="#2A4157" stroke-opacity="0.24" stroke-width="0.6"/>
          <path d="M12.3223 47.6777C15.8186 51.174 20.2732 53.555 25.1227 54.5196C29.9723 55.4843 34.9989 54.9892 39.5671 53.097C44.1352 51.2048 48.0397 48.0005 50.7867 43.8893C53.5338 39.778 55 34.9445 55 30C55 25.0555 53.5338 20.222 50.7867 16.1107C48.0397 11.9995 44.1352 8.7952 39.5671 6.90301C34.9989 5.01082 29.9723 4.51574 25.1227 5.48037C20.2732 6.445 15.8186 8.82602 12.3223 12.3223" stroke="#21272C" stroke-width="1.2"/>
          <path class="arrow" d="M37.5 30L37.9685 29.6252L38.2684 30L37.9685 30.3748L37.5 30ZM7.5 30.6C7.16863 30.6 6.9 30.3314 6.9 30C6.9 29.6686 7.16863 29.4 7.5 29.4V30.6ZM27.9685 17.1252L37.9685 29.6252L37.0315 30.3748L27.0315 17.8748L27.9685 17.1252ZM37.9685 30.3748L27.9685 42.8748L27.0315 42.1252L37.0315 29.6252L37.9685 30.3748ZM37.5 30.6H7.5V29.4H37.5V30.6Z" fill="#21272C"/>
          </svg></span></p>
        </div>
        <div class="col-lg-5 col-sm-12 col-md-12 text-center my-auto">
          <svg class="img-fluid spin" width="531" height="645" viewBox="0 0 531 645" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.05" d="M547.703 435.724L167.413 3.00001L1.99986 620.329L547.703 435.724Z" stroke="url(#paint0_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.08" d="M543.935 422.1L153.016 21.6495L23.9346 628.929L543.935 422.1Z" stroke="url(#paint1_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.11" d="M539.393 409.044L140.15 40.7615L45.8849 635.929L539.393 409.044Z" stroke="url(#paint2_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.13" d="M534.127 396.599L128.822 60.2277L67.7438 641.352L534.127 396.599Z" stroke="url(#paint3_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.16" d="M528.189 384.804L119.034 79.94L89.4086 645.23L528.189 384.804Z" stroke="url(#paint4_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.19" d="M521.632 373.694L110.778 99.7918L110.778 647.597L521.632 373.694Z" stroke="url(#paint5_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.22" d="M514.512 363.302L104.041 119.678L131.755 648.497L514.512 363.302Z" stroke="url(#paint6_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.25" d="M506.886 353.653L98.8014 139.494L152.245 647.978L506.886 353.653Z" stroke="url(#paint7_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.27" d="M498.813 344.772L95.0338 159.139L172.16 646.094L498.813 344.772Z" stroke="url(#paint8_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.3" d="M490.351 336.679L92.7041 178.516L191.413 642.905L490.351 336.679Z" stroke="url(#paint9_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.33" d="M481.561 329.387L91.7727 197.527L209.925 638.476L481.561 329.387Z" stroke="url(#paint10_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.36" d="M472.503 322.91L92.1942 216.081L227.619 632.876L472.503 322.91Z" stroke="url(#paint11_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.39" d="M463.238 317.254L93.9172 234.091L244.426 626.18L463.238 317.254Z" stroke="url(#paint12_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.41" d="M453.827 312.421L96.8846 251.471L260.28 618.464L453.827 312.421Z" stroke="url(#paint13_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.44" d="M444.331 308.411L101.035 268.144L275.123 609.812L444.331 308.411Z" stroke="url(#paint14_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.47" d="M434.808 305.219L106.301 284.032L288.902 600.308L434.808 305.219Z" stroke="url(#paint15_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.5" d="M425.319 302.835L112.611 299.068L301.57 590.04L425.319 302.835Z" stroke="url(#paint16_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.53" d="M415.921 301.246L119.891 313.188L313.086 579.098L415.921 301.246Z" stroke="url(#paint17_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.55" d="M406.671 300.436L128.061 326.331L323.416 567.575L406.671 300.436Z" stroke="url(#paint18_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.58" d="M397.625 300.384L137.037 338.446L332.533 555.565L397.625 300.384Z" stroke="url(#paint19_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.61" d="M388.834 301.065L146.736 349.485L340.415 543.163L388.834 301.065Z" stroke="url(#paint20_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.64" d="M380.352 302.452L157.069 359.408L347.048 530.466L380.352 302.452Z" stroke="url(#paint21_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.66" d="M372.226 304.514L167.943 368.18L352.424 517.57L372.226 304.514Z" stroke="url(#paint22_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.69" d="M364.503 307.217L179.269 375.774L356.543 504.57L364.503 307.217Z" stroke="url(#paint23_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.72" d="M357.229 310.523L190.953 382.167L359.41 491.565L357.229 310.523Z" stroke="url(#paint24_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.75" d="M350.443 314.393L202.898 387.346L361.036 478.647L350.443 314.393Z" stroke="url(#paint25_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.78" d="M344.183 318.783L215.012 391.301L361.441 465.91L344.183 318.783Z" stroke="url(#paint26_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.8" d="M338.486 323.65L227.198 394.031L360.65 453.447L338.486 323.65Z" stroke="url(#paint27_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.83" d="M333.383 328.945L239.362 395.54L358.693 441.347L333.383 328.945Z" stroke="url(#paint28_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.86" d="M328.901 334.62L251.41 395.841L355.608 429.697L328.901 334.62Z" stroke="url(#paint29_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.89" d="M325.066 340.623L263.248 394.951L351.438 418.581L325.066 340.623Z" stroke="url(#paint30_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.92" d="M321.9 346.903L274.788 392.893L346.233 408.079L321.9 346.903Z" stroke="url(#paint31_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.94" d="M319.419 353.405L285.939 389.7L340.045 398.269L319.419 353.405Z" stroke="url(#paint32_linear_217_2777)" stroke-width="2.5"/>
          <path opacity="0.97" d="M317.637 360.074L296.613 385.406L332.934 389.223L317.637 360.074Z" stroke="url(#paint33_linear_217_2777)" stroke-width="2.5"/>
          <path d="M316.563 366.856L306.729 380.055L324.964 381.011L316.563 366.856Z" stroke="url(#paint34_linear_217_2777)" stroke-width="2.5"/>
          <defs>
          <linearGradient id="paint0_linear_217_2777" x1="547.703" y1="435.724" x2="84.7063" y2="311.665" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint1_linear_217_2777" x1="543.935" y1="422.1" x2="88.4752" y2="325.289" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint2_linear_217_2777" x1="539.393" y1="409.044" x2="93.0175" y2="338.345" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint3_linear_217_2777" x1="534.127" y1="396.599" x2="98.2831" y2="350.79" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint4_linear_217_2777" x1="528.189" y1="384.804" x2="104.221" y2="362.585" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint5_linear_217_2777" x1="521.632" y1="373.694" x2="110.778" y2="373.694" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint6_linear_217_2777" x1="514.512" y1="363.302" x2="117.898" y2="384.087" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint7_linear_217_2777" x1="506.886" y1="353.653" x2="125.523" y2="393.736" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint8_linear_217_2777" x1="498.813" y1="344.772" x2="133.597" y2="402.617" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint9_linear_217_2777" x1="490.351" y1="336.679" x2="142.059" y2="410.71" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint10_linear_217_2777" x1="481.561" y1="329.387" x2="150.849" y2="418.001" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint11_linear_217_2777" x1="472.503" y1="322.91" x2="159.907" y2="424.479" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint12_linear_217_2777" x1="463.238" y1="317.254" x2="169.172" y2="430.135" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint13_linear_217_2777" x1="453.827" y1="312.421" x2="178.583" y2="434.968" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint14_linear_217_2777" x1="444.331" y1="308.411" x2="188.079" y2="438.978" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint15_linear_217_2777" x1="434.808" y1="305.219" x2="197.602" y2="442.17" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint16_linear_217_2777" x1="425.319" y1="302.835" x2="207.091" y2="444.554" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint17_linear_217_2777" x1="415.921" y1="301.246" x2="216.489" y2="446.143" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint18_linear_217_2777" x1="406.671" y1="300.436" x2="225.738" y2="446.953" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint19_linear_217_2777" x1="397.625" y1="300.384" x2="234.785" y2="447.005" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint20_linear_217_2777" x1="388.834" y1="301.065" x2="243.576" y2="446.324" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint21_linear_217_2777" x1="380.352" y1="302.452" x2="252.058" y2="444.937" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint22_linear_217_2777" x1="372.226" y1="304.514" x2="260.184" y2="442.875" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint23_linear_217_2777" x1="364.503" y1="307.217" x2="267.906" y2="440.172" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint24_linear_217_2777" x1="357.229" y1="310.523" x2="275.181" y2="436.866" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint25_linear_217_2777" x1="350.443" y1="314.393" x2="281.967" y2="432.996" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint26_linear_217_2777" x1="344.183" y1="318.783" x2="288.226" y2="428.606" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint27_linear_217_2777" x1="338.486" y1="323.65" x2="293.924" y2="423.739" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint28_linear_217_2777" x1="333.383" y1="328.945" x2="299.027" y2="418.444" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint29_linear_217_2777" x1="328.901" y1="334.62" x2="303.509" y2="412.769" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint30_linear_217_2777" x1="325.066" y1="340.623" x2="307.343" y2="406.766" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint31_linear_217_2777" x1="321.9" y1="346.903" x2="310.511" y2="400.486" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint32_linear_217_2777" x1="319.419" y1="353.405" x2="312.992" y2="393.984" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint33_linear_217_2777" x1="317.637" y1="360.074" x2="314.774" y2="387.315" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          <linearGradient id="paint34_linear_217_2777" x1="316.563" y1="366.856" x2="315.847" y2="380.533" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F89DB"/>
          <stop offset="1" stop-color="#0EC79B"/>
          </linearGradient>
          </defs>
          </svg>
        </div>
      </div>
  


     
    </div>
    
  )
}

export default Home