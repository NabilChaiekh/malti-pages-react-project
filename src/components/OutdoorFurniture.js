import React from 'react'
//import './Collection.css'

function OutdoorFurniture() {
  return (
    <div className="outdoor"> 
    
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img class="img-fluid rounded mb-4 mb-lg-0"
            src={require('./assets/images/malissa-sofa.jpg').default} />
          </div>
          <div class="col-lg-5">
            <h4 class="font-weight-light">Malissa Sofa</h4>
            <p>
            The curvacious Melissa is nothing short of a piece of art in itself. The set consists of a single seater armchair, a three seater corner sofa, two two seaters and a gorgeous round coffee table. We love the stunning design that's sure to elevate the look and feel of any space it's in.<br></br>
            <br></br>

            Material Type : Steel & Wicker.<br></br>
            Functionality : Stationary Sofa Set.
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img class="img-fluid rounded mb-4 mb-lg-0"
            src={require('./assets/images/lexuss-sofa.jpg').default} />
          </div>
          <div class="col-lg-5">
            <h4 class="font-weight-light">Lexuss Sofa</h4>
            <p>
            Say hello to a whole new level of comfort with the Lexuss Rattan sofa set that's designed to effortlessly blend in with the decor of every outdoor space. The set consists of two single seaters, one three seater and a coffee table.<br></br>
            <br></br>
            Material Type : Steel & Rattan. <br></br>
            Functionality : Stationary Sofa Set.
            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img class="img-fluid rounded mb-4 mb-lg-0"
            src={require('./assets/images/montero-gazebo.jpg').default} />
          </div>
          <div class="col-lg-5">
            <h4 class="font-weight-light">Motero Gazebo</h4>
            <p>
            Less space? No problem! The New Montero Metal gazebo is perfect for smaller apartment balconies or lawns or patios. The compact design and subtle color is perfect to amp up the appeal of any outdoor space.<br></br>
            <br></br>
            Material Type : Metal. <br></br>
            Functionality : Stationary Gazebo


            </p>
          </div>
        </div>
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img class="img-fluid rounded mb-4 mb-lg-0"
            src={require('./assets/images/laura-gazebo.jpg').default} />
          </div>
          <div class="col-lg-5">
            <h4 class="font-weight-light">Laura Gazebo</h4>
            <p>
            The Laura Sofa with Gazebo is designed to impress! With ample room for the whole family to get together for some good-old outdoor fun, the Laura is sure to be a great addition to any outdoor space.<br></br>
            <br></br>

            Functionality : Stationary Gazebo With Sofa.


            </p>
          </div>
        </div>
      </div>
    
      
    </div>
  )
}

export default OutdoorFurniture;