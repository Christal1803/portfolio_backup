import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import KioskHandling from './Kiosk&TouchScreen/KioskHandling/KioskHandling';
import Partnership_Discovery from './Kiosk&TouchScreen/Partnership&Discovery/Partnership_Discovery';
import OnBoarding from './Kiosk&TouchScreen/OnBoarding/OnBoarding';
import ExecutionPhase01 from './Kiosk&TouchScreen/ExecutionPhase01/ExecutionPhase01';
import ExecutionPhase02 from './Kiosk&TouchScreen/ExecutionPhase02/ExecutionPhase02';
import ExecutionPhase03 from './Kiosk&TouchScreen/ExecutionPhase03/ExecutionPhase03';
import ExecutionPhase04 from './Kiosk&TouchScreen/ExecutionPhase04/ExecutionPhase04';
import ExecutionPhase05 from './Kiosk&TouchScreen/ExecutionPhase05/ExecutionPhase05';
import ExecutionPhase06 from './Kiosk&TouchScreen/ExecutionPhase06/ExecutionPhase06';
import Mversioncloud from './Mversion/Mversioncloud/Mversioncloud';
import Mversionenage from './Mversion/Mversionenage/Mversionenage';
import MversionKiosk from './Mversion/MversionKiosk/MversionKiosk';
import Mversionmob from './Mversion/Mversionmob/Mversionmob';
import Mversionweb from './Mversion/Mversionweb/Mversionweb';
import MversionData from './Mversion/MversionData/MversionData';
import Mversiontab from './Mversion/Mversiontab/Mversiontab';

import Newnav from './Kiosk&TouchScreen/Newnav/Newnav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="Newnav" element={<Newnav />} />
      <Route path="/" element={<App />} />
      <Route path="home" element={<KioskHandling />} />
      <Route path="partnership_Discovery" element={<Partnership_Discovery />} />
      <Route path="OnBoarding" element={<OnBoarding />} />
      <Route path="ExecutionPhase01" element={<ExecutionPhase01 />} />
      <Route path="ExecutionPhase02" element={<ExecutionPhase02 />} />
      <Route path="ExecutionPhase03" element={<ExecutionPhase03 />} />
      <Route path="ExecutionPhase04" element={<ExecutionPhase04 />} />
      <Route path="ExecutionPhase05" element={<ExecutionPhase05 />} />
      <Route path="ExecutionPhase06" element={<ExecutionPhase06 />} />


    
                <Route path="home/enagementModel" element={<Mversionenage />} />
                <Route path="home/kisok" element={<MversionKiosk />} />

                <Route path="home/mobile" element={<Mversionmob />} />
                <Route path="home/web" element={<Mversionweb />} />
                <Route path="home/data" element={<MversionData />} />
                <Route path="home/cloud" element={<Mversioncloud />} />
                <Route path="home" element={<Mversiontab />} />






      
     
      </Routes>
    </Router>
   
  </React.StrictMode>
);
