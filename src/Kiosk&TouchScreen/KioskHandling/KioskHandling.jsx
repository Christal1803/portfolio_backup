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
  // const settings = {
  //   infinite: true,
  //   dots: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   lazyLoad: true,
  //   autoplay: true,
  // autoplaySpeed: 2000,
  // appendDots: dots => (
    
  //       <div>
  //         <CustomDots>
  //           debugger;
  //           {dots.map((dot, index) => (
              
  //             <CustomDot key={index} isActive={index === dot.props['data-index']} />
  //           ))}
  //         </CustomDots>
  //         </div>
  // )
   
  // };
  // const settings = {
  //   dots: true,
  //   appendDots: renderDots,
  //   lazyLoad: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 2
  // };

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

  const pages = [
    { id: 1, Element: <Partnership_Discovery /> , width: '100vw'},
    { id: 2, Element: <OnBoarding /> , width: '100vw' },
    { id: 3, Element: <ExecutionPhase01 /> , width: '100vw'},
    { id: 4, Element: <ExecutionPhase02 /> , width: '100vw'},
    { id: 5, Element: <ExecutionPhase03 /> , width: '100vw'},
    { id: 6, Element: <ExecutionPhase04 /> , width: '100vw'},
    { id: 7, Element: <ExecutionPhase05 /> , width: '100vw'},
    { id: 8, Element: <ExecutionPhase06 /> , width: '100vw'},

  ];
 
 
  
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

  // const settings = {
    
  //   dots: true,
  //   // infinite: true,
  //   // speed: 500,
  //   // slidesToShow: 3,
  //   // slidesToScroll: 1,
  //   // autoplay: true,
  //   // autoplaySpeed: 2000,
  //   // afterChange: (index) => setCurrentPage(index),
  //   appendDots: renderDots
  // };

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
  <NavBar02/>
    

  {isMobile?(
    console.log(isMobile),
     <div >
     <Partnership_Discovery/>
    
     <OnBoarding/>
   
     <ExecutionPhase01/>
    
     <ExecutionPhase02/>
    
     <ExecutionPhase03/>
     <ExecutionPhase04/>
     <ExecutionPhase05/>
     <ExecutionPhase06/>

   </div>

  ):(
    <div >
     
    
    <div>
     
      
    <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
   
    <ScrollMenu onWheel={onWheel}  >
    {/* <Slider {...settings}>  */}
       {pages.map((page) => (
          
          <div key={page.id}  style={{ width: page.width }} >
            
             <Slider {...settings}>
             {page.Element}</Slider>
           </div>
         
        
      ))}
  {/* </Slider> */}
    </ScrollMenu>
    
  </div>
 

  </div>
  {/* </Slider>  */}
  {/* <div className="dots">
  {[...Array(settings.slidesToShow).keys()].map((index) => (
          <span
            key={index}
            className={currentPage === index ? "active" : ""}
            onClick={() => scrollToPage(index)}
          >
            {index + 1}
          </span>
        ))}
    </div> */}
  </div>
  

  )}
   
   {/* <SlidingDots/> */}
   
    </div>
    
    
  )
}

export default KioskHandling
