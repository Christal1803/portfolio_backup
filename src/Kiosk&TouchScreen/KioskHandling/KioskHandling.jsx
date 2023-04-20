import React , { useRef,  useState ,useEffect,useLayoutEffect} from 'react'
import Partnership_Discovery from '../Partnership&Discovery/Partnership_Discovery'
import OnBoarding from '../OnBoarding/OnBoarding'
import ExecutionPhase01 from '../ExecutionPhase01/ExecutionPhase01'
import ExecutionPhase02 from '../ExecutionPhase02/ExecutionPhase02'
import ExecutionPhase03 from '../ExecutionPhase03/ExecutionPhase03'
import ExecutionPhase04 from '../ExecutionPhase04/ExecutionPhase04'
import ExecutionPhase05 from '../ExecutionPhase05/ExecutionPhase05'
import ExecutionPhase06 from '../ExecutionPhase06/ExecutionPhase06'
import NavBar02 from '../NavBar/NavBar02'
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import usePreventBodyScroll from '../../HorizontalScrollBar/UsePreventBodyScroll'
import './KioskHandling.css';
import "react-circular-progressbar/dist/styles.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-magic-slider-dots/dist/magic-dots.css';
import styled from 'styled-components'
import Mversiontab from '../../Mversion/Mversiontab/Mversiontab'

//import { Tab, Tabs, Carousel } from 'react-bootstrap';



function KioskHandling() {
 
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const renderDots = dots => (
   
        <ul style={{ display: 'flex', justifyContent: 'center', margin: 0, padding: 0 , backgroundColor: "black"}}>
      {dots}
    </ul>
  )
  const settings = {
    dots: true,
    infinite: true,
    appendDots:renderDots,
    speed: 500,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (index) => setCurrentPage(index),
    customPaging: (i) => <div style={{ backgroundColor: 'red', width: '10px', height: '10px', borderRadius: '50%', margin: '0 5px' }} />,
  };
  

  function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }
  
    if (ev.deltaY < 0) {
      apiObj. scrollPrev();
    } else if (ev.deltaY > 0) {
      apiObj.scrollNext();
    }
    }

    const elementRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            const elementWidth = elementRef.current.offsetWidth;
            console.log(`Element width: ${elementWidth}`);
            window.$name = elementWidth;
        }
    }, []);

    console.log(window.$name)

    const [elementWidth, setElementWidth] = useState(null);
    let mystyle = {};
    function handleElementLoad(event) {
        debugger
        const elementWidth = event.target.offsetWidth;
        setElementWidth(elementWidth);
        console.log(`Element width: ${elementWidth}`);
        window.$name = elementWidth;
    }
    if (elementWidth) {
        mystyle.width = elementWidth + "px";
    }

    const pages = [
        { id: 1, Element: <Partnership_Discovery />, width: window.$name },
        { id: 2, Element: <OnBoarding />, width: window.$name },
        { id: 3, Element: <ExecutionPhase01 />, width: window.$name },
        { id: 4, Element: <ExecutionPhase02 />, width: window.$name },
        { id: 5, Element: <ExecutionPhase03 />, width: window.$name },
        { id: 6, Element: <ExecutionPhase04 />, width: window.$name },
        { id: 7, Element: <ExecutionPhase05 />, width: window.$name },
        { id: 8, Element: <ExecutionPhase06 />, width: window.$name },

    ];

  //const pages = [
  //  { id: 1, Element: <Partnership_Discovery /> , width: '100vw'},
  //  { id: 2, Element: <OnBoarding /> , width: '100vw' },
  //  { id: 3, Element: <ExecutionPhase01 /> , width: '100vw'},
  //  { id: 4, Element: <ExecutionPhase02 /> , width: '100vw'},
  //  { id: 5, Element: <ExecutionPhase03 /> , width: '100vw'},
  //  { id: 6, Element: <ExecutionPhase04 /> , width: '100vw'},
  //  { id: 7, Element: <ExecutionPhase05 /> , width: '100vw'},
  //  { id: 8, Element: <ExecutionPhase06 /> , width: '100vw'},

  //];
 
 
  
  const elemPrefix = "test";
  const getId = (index) => `${elemPrefix}${index}`;
  const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));
  
  
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [progress, setProgress] = useState(0);
  const articleRef = useRef();
  console.log("articleRef:",articleRef)

  const CustomDots = styled.ul`
  display: flex;
  justify-content: center;
`;

const CustomDot = styled.li`
  margin: 0 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isActive ? 'blue' : 'red')};
`;


  const scrollToPage = (index) => {
    debugger;
    setCurrentPage(index);
    containerRef.current.scrollLeft = index * window.innerWidth;
  };
// })


  useLayoutEffect(()=>{
    
    function handleResize(){
      setIsMobile(window.innerWidth<768)
    }
    const updateWidth = () => {
      console.log("Entered into updateWidth")
      if (articleRef.current) {
        const { width } = articleRef.current.getBoundingClientRect();
        setWidth(width);
        console.log("Width",width)
        // const progress = window.scrollX / (width - window.innerWidth);
        const progress = window.scrollX / Math.max(1, width - window.innerWidth);
        console.log("Progress",progress)
        setProgress(progress);
      }
    };

    
    // updateHeight();
    // updateWidth()
    window.addEventListener('load', function() {
      const progress = window.scrollX / Math.max(1, width - window.innerWidth);
      console.log("Progress inside",progress);
    });
        window.addEventListener("resize",handleResize);
        window.addEventListener("scroll", function() {
          window.scrollBy(100, 0); // Move the window horizontally by 100 pixels
          updateWidth(); // Call the updateHeight() function
        });
    
    return()=>{
      window.removeEventListener("resize",handleResize);
      window.removeEventListener("scroll", function() {
        window.scrollBy(100, 0); // Move the window horizontally by 100 pixels
        updateWidth(); // Call the updateHeight() function
      });
   
    }
  },[]);
  const position = Math.max(1 - progress, 0);
  console.log("Position",position)
  const complete = position === 0;
  const notMoved = position === 1;

  const DIAMETER = 50;
  const STROKE_WIDTH = 6;
  const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = Math.PI * RADIUS * 2;
  return (
<div >
  {/*<NavBar02/>*/}
    

  {isMobile?(
    console.log(isMobile),
              <div >
                  <Mversiontab></Mversiontab>
     {/*<Partnership_Discovery/>*/}
    
     {/*<OnBoarding/>*/}
   
     {/*<ExecutionPhase01/>*/}
    
     {/*<ExecutionPhase02/>*/}
    
     {/*<ExecutionPhase03/>*/}
     {/*<ExecutionPhase04/>*/}
     {/*<ExecutionPhase05/>*/}
     {/*<ExecutionPhase06/>*/}

   </div>

  ):(
    <div >
                      <div class="container-fluid mt-5">


                          <div class="row g-3">
                              <div class="col-md-3">
                                  <nav id="myTab" class="nav nav-pills flex-column">
                                      <p className='m-0'><b className='tab-head'>Our Engagement model</b></p>
                                      <a href="#category_tab1" data-bs-toggle="pill" class="active nav-link mb-4" >Engagement model</a>
                                      <p className='m-0'><b className='tab-head'>Our Solutions</b></p>
                                      <a href="#category_tab2" data-bs-toggle="pill" class="nav-link">Kiosk & Touchscreen</a>
                                      <a href="#category_tab3" data-bs-toggle="pill" class="nav-link">Mobile development</a>
                                      <a href="#category_tab4" data-bs-toggle="pill" class="nav-link">Web applications</a>
                                      <a href="#category_tab5" data-bs-toggle="pill" class="nav-link">Data Science & Engineering</a>
                                      <a href="#category_tab6" data-bs-toggle="pill" class="nav-link">Cloud Solutions</a>
                                  </nav>
                              </div>
                              <div class="col-md-9 tab-content">
                                  <article class="tab-pane fade show active" id="category_tab1">
                                      {/*<KioskHandling></KioskHandling>*/}

                                      <div>
                                          <div ref={elementRef} onLoad={handleElementLoad} className="widthlisy">This is my element</div>

                                          <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>

                                              <ScrollMenu onWheel={onWheel}  >
                                                  {/* <Slider {...settings}>  */}
                                                  {pages.map((page) => (

                                                      <div key={page.id} style={{ width: page.width }} >

                                                          <Slider {...settings}>
                                                              {page.Element}</Slider>
                                                      </div>


                                                  ))}
                                                  {/* </Slider> */}
                                              </ScrollMenu>
                                              

                                          </div>


                                      </div>



                                  </article>

                                  <article class="tab-pane fade" id="category_tab2">
                                      <h6 className='solution_name'>Kiosk & Touchscreen</h6>
                                      <p className='solution_desc'>We provide custom kiosk software development for our customer’s current and future needs. Our kiosk & touchscreen development team builds efficient UIs, multi-tenant services, hardware interfaces, branding management, resource management, and remote administration.</p>
                                      <h4 className='tech-stack'>Tech Stack</h4>

                                      <div className='techs'>
                                          <span className='technology badge rounded-pill mt-2 '>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>Flutter</span>
                                          </span>



                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>WPF</span>
                                          </span>



                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>XAML</span>
                                          </span>




                                          <div className='gallery'>

                                          </div>
                                      </div>

                                  </article>



                                  <article class="tab-pane fade" id="category_tab3">
                                      <h6 className='solution_name'>Mobile Development</h6>
                                      <p className='solution_desc'>Addant offers design, development, deployment, and maintenance of value-added mobile applications across iOS & Android platforms. Our team has significant experience when it comes to native or cross-platform development, and they focus on creating intuitive interfaces ensuring seamless user engagement.</p>
                                      <h4 className='tech-stack'>Tech Stack</h4>

                                      <div className='techs'>
                                          <span className='technology badge rounded-pill mt-2 '>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>Flutter</span>
                                          </span>



                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>Xamarin</span>
                                          </span>



                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>React Native</span>
                                          </span>


                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>XAML</span>
                                          </span>


                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>Native iOS</span>
                                          </span>


                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>Android Native</span>
                                          </span>

                                          {/*<div>*/}

                                          {/*    <Carousel>*/}
                                          {/*        <Carousel.Item>*/}
                                          {/*            <KioskHandling></KioskHandling> */}
                                          {/*        </Carousel.Item>*/}
                                          {/*        <Carousel.Item>*/}
                                          {/*            <img*/}
                                          {/*                className="d-block w-100"*/}
                                          {/*                src="https://pixelprowess.com/i/carousel_flight.png"*/}
                                          {/*                alt="Second slide"*/}
                                          {/*            />*/}

                                          {/*            <Carousel.Caption>*/}
                                          {/*                <h3>Second slide label</h3>*/}
                                          {/*                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                                          {/*            </Carousel.Caption>*/}
                                          {/*        </Carousel.Item>*/}
                                          {/*    </Carousel>*/}

                                          {/*</div>*/}
                                      </div>

                                  </article>


                                  <article class="tab-pane fade" id="category_tab4">
                                      <h6 className='solution_name'>Web Applications</h6>
                                      <p className='solution_desc'>We build custom tailored web solutions to fit our customer’s business goals. Our team work backwards from customer requirements and focuses on user experience (UX), high performance, availability, and scalability. We always use the most apt technology while staying focused on the business requirements.</p>
                                      <h4 className='tech-stack'>Tech Stack</h4>

                                      <div className='techs'>
                                          <span className='technology badge rounded-pill mt-2 '>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>React </span>
                                          </span>



                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>Angular</span>
                                          </span>



                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>.NET Core</span>
                                          </span>


                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>Node</span>
                                          </span>


                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>JavaScript</span>
                                          </span>


                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>HTML 5</span>
                                          </span>


                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>Bootstrap</span>
                                          </span>
                                      </div>

                                  </article>

                                  <article class="tab-pane fade" id="category_tab5">
                                      <h6 className='solution_name'>Data Science & Engineering</h6>
                                      <p className='solution_desc'>With our quest to learn and adapt to the evolving algorithms and models, we bring in unique and advanced data engineering methodologies enabling businesses to optimise data towards usability there by ensuring scalability, tailored user driven solutions, and optimised predictive analysis.</p>
                                      <h4 className='tech-stack'>Tech Stack</h4>

                                      <div className='techs'>
                                          <span className='technology badge rounded-pill mt-2 '>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>Python </span>
                                          </span>



                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>Apache Spark</span>
                                          </span>



                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>.AutoGluon</span>
                                          </span>


                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>NOSQL - Dynamo DB</span>
                                          </span>


                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>Mongo DB</span>
                                          </span>
                                      </div>

                                  </article>


                                  <article class="tab-pane fade" id="category_tab6">
                                      <h6 className='solution_name'>Cloud Solutions</h6>
                                      <p className='solution_desc'>We recognize the paradigm shift from the traditional software development to the modern applications development, leveraging cloud tools. Cloud applications bring higher scalability, easier management, and reduced cost through microservices, better automation and DevOps practices.</p>
                                      <h4 className='tech-stack'>Tech Stack</h4>

                                      <div className='techs'>
                                          <span className='technology badge rounded-pill mt-2 '>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>AWS Serverless </span>
                                          </span>



                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>Amplify</span>
                                          </span>



                                          <span className='technology badge rounded-pill ms-3'>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                                                  <path d="M10.6112 16.3947L8.21582 13.9993L15.9936 6.22217H20.7837L10.6112 16.3947ZM20.7837 13.3989H15.9936L14.1993 15.1932L16.5946 17.5886" fill="#42A5F5" fill-opacity="0.8" />
                                                  <path d="M14.1992 19.9834L15.9936 21.7777H20.7837L16.5946 17.5886" fill="#0D47A1" />
                                                  <path d="M11.8096 17.5899L14.2012 15.1976L16.5928 17.5892L14.2012 19.9815L11.8096 17.5899Z" fill="#42A5F5" />
                                                  <path d="M14.2012 19.9815L16.5928 17.5898L16.9266 17.9237L14.535 20.3153L14.2012 19.9815Z" fill="url(#paint0_linear_2_3660)" />
                                                  <path d="M14.1992 19.9834L17.7533 18.7555L16.5946 17.588" fill="url(#paint1_linear_2_3660)" />
                                                  <defs>
                                                      <linearGradient id="paint0_linear_2_3660" x1="15.3974" y1="18.7852" x2="15.7313" y2="19.1191" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.15" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                      <linearGradient id="paint1_linear_2_3660" x1="14.2001" y1="18.7858" x2="17.7541" y2="18.7858" gradientUnits="userSpaceOnUse">
                                                          <stop offset="0.2" stop-opacity="0.55" />
                                                          <stop offset="0.85" stop-color="#616161" stop-opacity="0.01" />
                                                      </linearGradient>
                                                  </defs>
                                              </svg>
                                              <span>App Sync</span>
                                          </span>

                                      </div>

                                  </article>

                              </div>
                          </div>


                      </div>

    
  {/*  <div>*/}
  {/*    <div ref={elementRef} onLoad={handleElementLoad} className="widthlisy">This is my element</div>*/}
     
  {/*  <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>*/}
   
  {/*  <ScrollMenu onWheel={onWheel}  >*/}
  {/*  */}{/* <Slider {...settings}>  */}
  {/*     {pages.map((page) => (*/}
          
  {/*        <div key={page.id}  style={{ width: page.width }} >*/}
            
  {/*           <Slider {...settings}>*/}
  {/*           {page.Element}</Slider>*/}
  {/*         </div>*/}
         
        
  {/*    ))}*/}
  {/* </Slider> */}
  {/*  </ScrollMenu>*/}
    
  {/*</div>*/}
 

  {/*</div>*/}

  </div>
  

  )}
   
   {/* <SlidingDots/> */}
   
    </div>
    
    
  )
}

export default KioskHandling
