
import './App.css';
import Home from './Home/Home';
import './Responsive.css'
// import { useMediaQuery } from 'react-responsive'


function App() {
  // const breakpoints = {
  //   desktop: 1024,
  //   tablet: 768,
  //   mobile: 480
  // };
  // const isDesktop = useMediaQuery({ minWidth: breakpoints.desktop });
  // const isTablet = useMediaQuery({ minWidth: breakpoints.tablet, maxWidth: breakpoints.desktop - 1 });
  // const isMobile = useMediaQuery({ maxWidth: breakpoints.mobile - 1 });
  return (
      <div className="hide-root-font">
        <div >

        </div>
       <Home/>
       {/* <Partnership_Discovery/>
       <OnBoarding/>
       <ExecutionPhase01/>
       <ExecutionPhase02/>
       <ExecutionPhase03/>
       <ExecutionPhase04/>
       <ExecutionPhase05/>
       <ExecutionPhase06/> */}
      </div>
  );
}

export default App;
