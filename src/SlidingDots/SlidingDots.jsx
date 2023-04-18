import React from 'react'
import { useNavigate } from 'react-router';


function SlidingDots() {

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 2000,
   
  };
    let navigate = useNavigate(); 
    const submitThis1 = () =>{ 
     debugger;
        let path = `/partnership_Discovery`; 
        navigate(path);
        }
        const submitThis2 = () =>{ 
     debugger;
            let path = `/OnBoarding`; 
            navigate(path);
            }
            const submitThis3 = () =>{ 
     
                let path = `/ExecutionPhase01`; 
                navigate(path);
                }
                const submitThis4 = () =>{ 
     
                    let path = `/ExecutionPhase02`; 
                    navigate(path);
                    }
                const submitThis5 = () =>{ 
     
                        let path = `/ExecutionPhase03`; 
                        navigate(path);
                        }
                const submitThis6 = () =>{ 
     
                            let path = `/ExecutionPhase04`; 
                            navigate(path);
                            }
            const submitThis7 = () =>{ 
     
                                let path = `/ExecutionPhase05`; 
                                navigate(path);
                                }
            const submitThis8 = () =>{ 
     
                                    let path = `/ExecutionPhase06`; 
                                    navigate(path);
                                    }
  return (
    <div style={{display:'flex',gap:'10px', justifyContent: 'center', alignItems: 'center'}}>
      <p className='pageColor1' onClick={submitThis1} >Page1</p> 
      <p  className='pageColor2' onClick={submitThis2}>Page2</p>
      <p className='pageColor3' onClick={submitThis3}>Page3</p>
      <p className='pageColor4' onClick={submitThis4}>Page4</p>
      <p className='pageColor5' onClick={submitThis5}>Page5</p>
      <p className='pageColor6' onClick={submitThis6}> Page6</p>
      <p className='pageColor7' onClick={submitThis7}>Page7</p>
      <p className='pageColor8' onClick={submitThis8}> Page8</p>
      
    </div>
  )
}

export default SlidingDots
