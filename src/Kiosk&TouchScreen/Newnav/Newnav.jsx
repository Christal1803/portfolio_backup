import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Modal from 'react-modal';
import './Newnav.css';
import logo from "../../../src/assets/logo.svg";
import hum from "../../../src/assets/hum.svg";
import cancel from "../../../src/assets/cancel.svg";


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
    return (
      <div>
        <nav class="navbar container-align">
            <a class="navbar-brand"><img src={logo} class="img-fluid" /></a>
            <img src={hum} class="img-fluid humburger" />
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

                        

                        <img src={cancel} className='img-fluid float-end xc' onClick={this.toggleModal}/>
                    <br></br>
            <p className='nav-head mb-2'>Engagement Model</p>
                    <p className='nav-head mb-2'>Solutions</p>
                    <p className='nav-head mb-2 dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">Downloads</p>


                    <div class="dropdown">
                        <ul class="dropdown-menu">

                            <ul>
                            <li><a class="dropdown-item" href="#">Connected Smart Services</a></li>
                            <li><a class="dropdown-item" href="#">Gaming O&M Solutions</a></li>
                            <li><a class="dropdown-item" href="#">ABC Docs</a></li>
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