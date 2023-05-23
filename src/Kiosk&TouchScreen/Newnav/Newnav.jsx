import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import './Newnav.css';
import logo from "../../../src/assets/logo.svg";
import hum from "../../../src/assets/hum.svg";
import cancel from "../../../src/assets/cancel.svg";
import { saveAs } from 'file-saver';
import ssp from '../../assets/ssp.pdf';
import cma from '../../assets/cma.pdf';
import asp from '../../assets/asp.pdf';
import aem from '../../assets/aem.pdf';
import {Link} from 'react-router-dom'


class Newnav extends Component{
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const modalStyles = {
      overlay: {
        backgroundColor: '#ffffff',
      },
    };


    const downloadPdf1 = () => {
      const fileURL = '../../assets/ssp.pdf'; // Replace with the actual URL of the PDF file
      const fileName = 'SamplePDF.pdf';
    
      fetch(fileURL)
        .then(response => {
          if (response.ok) {
            return response.blob();
          } else {
            throw new Error('Failed to download PDF');
          }
        })
        .then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = fileURL;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(error => {
          console.error(error);
          // Handle the download error
        });
    };

    const downloadPdf2 = () => {
      const link = document.createElement('a');
      link.href = '../../src/assets/cma.pdf';
      link.download = 'casino_management_addant.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };


    const downloadPdf3 = () => {
      const link = document.createElement('a');
      link.href = '../../src/assets/asp.pdf';
      link.download = 'addant_systems_pitch.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };


    const downloadPdf4 = () => {
      const link = document.createElement('a');
      link.href = '../../src/assets/aem.pdf';
      link.download = 'addant_engagement_model.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <div>
            <nav class="navbar container-align qwer">
              <Link to={'/'}>
                <a class="navbar-brand"><img src={logo} class="height-mt" /></a>
                </Link>



                <img src={hum} class="humburger height-hb" onClick={this.toggleModal} />
            </nav>


       
        <CSSTransition
          in={this.state.isOpen}
          timeout={300}
          classNames="dialog"
        >
          <Modal
            closeTimeoutMS={500}
            isOpen={this.state.isOpen}
            style={modalStyles}
          >
            
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-4 col-sm-12 sidebar'>

                        

                        <img src={cancel} className='img-fluid float-end xc sideCancel' onClick={this.toggleModal}/>
                    <br></br>
            <p className='nav-head mb-2'>Engagement Model</p>
                    <p className='nav-head mb-2'>Solutions</p>
                    <p className='nav-head mb-2 dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">Downloads</p>


                  <div class="dropdown">
                    <ul class="dropdown-menu">

                      <ul>
                        <li><a href={ssp}
                          download="smart service platforms"
                          target="_blank"
                          rel="noreferrer" class="dropdown-item" >Smart Service Platforms</a></li>
                        <li><a href={cma}
                          download="casino management addant"
                          target="_blank"
                          rel="noreferrer"  class="dropdown-item" >Casino Management Addant</a></li>
                        <li><a href={asp}
                          download="addant systems pitch"
                          target="_blank"
                          rel="noreferrer" class="dropdown-item" >Addant Systems Pitch</a></li>
                        <li><a href={aem}
                          download="addant engangement model"
                          target="_blank"
                          rel="noreferrer" class="dropdown-item" >Addant Engangement Model</a></li>
                      </ul>

                    </ul>
                  </div>
                </div>








                    <div className='col-lg-8  col-sm-1 as'>

                    </div>

                    
                </div>
            </div>
          </Modal>
        </CSSTransition>
      </div>
    );
  }
}

export default Newnav