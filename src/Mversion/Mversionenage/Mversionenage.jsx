import React from 'react'
import './Mversionenage.css';
import pd from "../../../src/assets/pd.svg";
import onk from "../../../src/assets/onk.svg";
import exp1 from "../../../src/assets/exp1.svg";
import exp2 from "../../../src/assets/exp2.svg";
import exp3 from "../../../src/assets/exp3.svg";
import exp4 from "../../../src/assets/exp4.svg";
import exp5 from "../../../src/assets/exp5.svg";
import exp6 from "../../../src/assets/exp6.svg";
import { useNavigate } from 'react-router';

function Mversionenage() {
    let navigate = useNavigate();
    const Cloud = () => navigate(-1);
  return (
    <div className='container-fluid m-main mt-5 mb-5'>
       <div className='mop&d'>
      <p className='mo-head'>Partnership & Discovery phase</p>
      <p className='mo-para'>What does success look for you?</p>

      <img src={pd} className='img-fluid' />


      <div class="accordion" id="accordionExample1">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <i class="glyphicon glyphicon-minus"></i>How
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample1">
            <div class="accordion-body">
              <p>Carefully pinpoint what you are looking to
                  achieve with your touchscreen solution and
                  how these goals are going to line up with those
                  of your audience.</p>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Who
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample1">
            <div class="accordion-body">
            <p>Carefully pinpoint what you are looking to
            achieve with your touchscreen solution and
            how these goals are going to line up with those
            of your audience.</p>      
          </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Outcome
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample1">
            <div class="accordion-body">
            <p>Carefully pinpoint what you are looking to
            achieve with your touchscreen solution and
            how these goals are going to line up with those
            of your audience.</p>      
            </div>
          </div>
        </div>
      </div>
    </div>  

    <div className='mop&d mt-5'>
      <p className='mo-head'>Onboarding & Kickoff phase</p>
      <p className='mo-para'>What space your touchscreen is going into?</p>

      <img src={onk} className='img-fluid' />


      <div class="accordion" id="accordionExample2">
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading4">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
              <i class="glyphicon glyphicon-minus"></i>How
              </button>
            </h2>
            <div id="collapse4" class="accordion-collapse collapse show" aria-labelledby="heading4" data-bs-parent="#accordionExample2">
              <div class="accordion-body">
                <p>Carefully pinpoint what you are looking to
        achieve with your touchscreen solution and
        how these goals are going to line up with those
        of your audience.</p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="heading5">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
              Who
              </button>
            </h2>
            <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample2">
              <div class="accordion-body">
              <p>Carefully pinpoint what you are looking to
              achieve with your touchscreen solution and
              how these goals are going to line up with those
              of your audience.</p>      
            </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="heading6">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
              Outcome
              </button>
            </h2>
            <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample2">
              <div class="accordion-body">
              <p>Carefully pinpoint what you are looking to
              achieve with your touchscreen solution and
              how these goals are going to line up with those
              of your audience.</p>      
              </div>
            </div>
          </div>
      </div>
    </div>

    <div className='mop&d  mt-5'>
      <p className='mo-head'>Execution phase 01</p>
      <p className='mo-para'>What does the system
        capable of, both from
        functional and non-
        functional aspects?</p>

      <img src={exp1} className='img-fluid' />


      <div class="accordion" id="accordionExample3">
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading7">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
      <i class="glyphicon glyphicon-minus"></i>How
      </button>
    </h2>
    <div id="collapse7" class="accordion-collapse collapse show" aria-labelledby="heading7" data-bs-parent="#accordionExample3">
      <div class="accordion-body">
        <p>Carefully pinpoint what you are looking to
        achieve with your touchscreen solution and
        how these goals are going to line up with those
        of your audience.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading8">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
      Who
      </button>
    </h2>
    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionExample3">
      <div class="accordion-body">
      <p>Carefully pinpoint what you are looking to
      achieve with your touchscreen solution and
      how these goals are going to line up with those
      of your audience.</p>      
     </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading9">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
      Outcome
      </button>
    </h2>
    <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionExample3">
      <div class="accordion-body">
      <p>Carefully pinpoint what you are looking to
      achieve with your touchscreen solution and
      how these goals are going to line up with those
      of your audience.</p>      
      </div>
    </div>
  </div>
</div>
    </div>

    <div className='mop&d  mt-5'>
      <p className='mo-head'>Execution phase 02</p>
      <p className='mo-para'>What is the navigation
      experience to the user?</p>

      <img src={exp2} className='img-fluid' />


      <div class="accordion" id="accordionExample4">
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading10">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="true" aria-controls="collapse10">
      <i class="glyphicon glyphicon-minus"></i>How
      </button>
    </h2>
    <div id="collapse10" class="accordion-collapse collapse show" aria-labelledby="heading10" data-bs-parent="#accordionExample4">
      <div class="accordion-body">
        <p>Carefully pinpoint what you are looking to
achieve with your touchscreen solution and
how these goals are going to line up with those
of your audience.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading11">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
      Who
      </button>
    </h2>
    <div id="collapse11" class="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionExample4">
      <div class="accordion-body">
      <p>Carefully pinpoint what you are looking to
      achieve with your touchscreen solution and
      how these goals are going to line up with those
      of your audience.</p>      
     </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading12">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
      Outcome
      </button>
    </h2>
    <div id="collapse12" class="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample4">
      <div class="accordion-body">
      <p>Carefully pinpoint what you are looking to
      achieve with your touchscreen solution and
      how these goals are going to line up with those
      of your audience.</p>      
      </div>
    </div>
  </div>
</div>
    </div>

    <div className='mop&d  mt-5'>
      <p className='mo-head'>Execution phase 03</p>
      <p className='mo-para'>What are you doing to
      increase my confidence in
      validating step #1?</p>

      <img src={exp3} className='img-fluid' />


      <div class="accordion" id="accordionExample5">
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading13">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="true" aria-controls="collapse13">
      <i class="glyphicon glyphicon-minus"></i>How
      </button>
    </h2>
    <div id="collapse13" class="accordion-collapse collapse show" aria-labelledby="heading13" data-bs-parent="#accordionExample5">
      <div class="accordion-body">
        <p>Carefully pinpoint what you are looking to
achieve with your touchscreen solution and
how these goals are going to line up with those
of your audience.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headin14">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
      Who
      </button>
    </h2>
    <div id="collapse14" class="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample5">
      <div class="accordion-body">
      <p>Carefully pinpoint what you are looking to
      achieve with your touchscreen solution and
      how these goals are going to line up with those
      of your audience.</p>      
     </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading15">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
      Outcome
      </button>
    </h2>
    <div id="collapse15" class="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample5">
      <div class="accordion-body">
      <p>Carefully pinpoint what you are looking to
      achieve with your touchscreen solution and
      how these goals are going to line up with those
      of your audience.</p>      
      </div>
    </div>
  </div>
</div>
    </div>

    <div className='mop&d  mt-5'>
      <p className='mo-head'>Execution phase 04</p>
      <p className='mo-para'>What are you doing to troubleshoot any remote deployment issues after a version release?</p>

      <img src={exp4} className='img-fluid' />


      <div class="accordion" id="accordionExample6">
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading16">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="true" aria-controls="collapse16">
      <i class="glyphicon glyphicon-minus"></i>How
      </button>
    </h2>
    <div id="collapse16" class="accordion-collapse collapse show" aria-labelledby="heading16" data-bs-parent="#accordionExample6">
      <div class="accordion-body">
        <p>Carefully pinpoint what you are looking to
achieve with your touchscreen solution and
how these goals are going to line up with those
of your audience.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading17">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
      Who
      </button>
    </h2>
    <div id="collapse17" class="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordionExample6">
      <div class="accordion-body">
      <p>Carefully pinpoint what you are looking to
      achieve with your touchscreen solution and
      how these goals are going to line up with those
      of your audience.</p>      
     </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading18">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
      Outcome
      </button>
    </h2>
    <div id="collapse18" class="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordionExample6">
      <div class="accordion-body">
      <p>Carefully pinpoint what you are looking to
      achieve with your touchscreen solution and
      how these goals are going to line up with those
      of your audience.</p>      
      </div>
    </div>
  </div>
</div>
    </div>

    <div className='mop&d  mt-5'>
      <p className='mo-head'>Execution phase 05</p>
      <p className='mo-para'>What are you doing for a final review and signoff?</p>

      <img src={exp5} className='img-fluid' />


      <div class="accordion" id="accordionExample7">
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading19">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="true" aria-controls="collapse19">
      <i class="glyphicon glyphicon-minus"></i>How
      </button>
    </h2>
    <div id="collapse19" class="accordion-collapse collapse show" aria-labelledby="heading19" data-bs-parent="#accordionExample7">
      <div class="accordion-body">
        <p>Carefully pinpoint what you are looking to
        achieve with your touchscreen solution and
        how these goals are going to line up with those
        of your audience.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading20">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="false" aria-controls="collapse20">
      Who
      </button>
    </h2>
    <div id="collapse20" class="accordion-collapse collapse" aria-labelledby="heading20" data-bs-parent="#accordionExample7">
      <div class="accordion-body">
      <p>Carefully pinpoint what you are looking to
      achieve with your touchscreen solution and
      how these goals are going to line up with those
      of your audience.</p>      
     </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading21">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse21" aria-expanded="false" aria-controls="collapse21">
      Outcome
      </button>
    </h2>
    <div id="collapse21" class="accordion-collapse collapse" aria-labelledby="heading21" data-bs-parent="#accordionExample7">
      <div class="accordion-body">
      <p>Carefully pinpoint what you are looking to
      achieve with your touchscreen solution and
      how these goals are going to line up with those
      of your audience.</p>      
      </div>
    </div>
  </div>
</div>
    </div>

    <div className='mop&d  mt-5'>
      <p className='mo-head'>Execution phase 06</p>
      <p className='mo-para'>What are you doing to make sure post launch success?</p>

      <img src={exp6} className='img-fluid' />


      <div class="accordion" id="accordionExample8">
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading22">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse22" aria-expanded="true" aria-controls="collapse22">
      <i class="glyphicon glyphicon-minus"></i>How
      </button>
    </h2>
    <div id="collapse22" class="accordion-collapse collapse show" aria-labelledby="heading22" data-bs-parent="#accordionExample8">
      <div class="accordion-body">
        <p>Carefully pinpoint what you are looking to
        achieve with your touchscreen solution and
        how these goals are going to line up with those
        of your audience.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading23">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse23" aria-expanded="false" aria-controls="collapse23">
      Who
      </button>
    </h2>
    <div id="collapse23" class="accordion-collapse collapse" aria-labelledby="heading23" data-bs-parent="#accordionExample8">
      <div class="accordion-body">
      <p>Carefully pinpoint what you are looking to
      achieve with your touchscreen solution and
      how these goals are going to line up with those
      of your audience.</p>      
     </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="heading24">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse24" aria-expanded="false" aria-controls="collapse24">
      Outcome
      </button>
    </h2>
    <div id="collapse24" class="accordion-collapse collapse" aria-labelledby="heading24" data-bs-parent="#accordionExample8">
      <div class="accordion-body">
      <p>Carefully pinpoint what you are looking to
      achieve with your touchscreen solution and
      how these goals are going to line up with those
      of your audience.</p>      
      </div>
    </div>
  </div>
</div>
    </div>

    <div className='text-center'>
              <button type="button" className='btn mo-go' onClick={Cloud}>Go back to menu</button>
    </div>
    </div>
  )
}

export default Mversionenage

