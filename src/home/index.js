import React from 'react';
import '../App.css';
import './index.css';
import history from '../history';

function Home() {
  return (
    <div className="App">

            <div className="dropdown">
            <button className="dropbtn">Personal Details</button>
            <div className="dropdown-content">
                <a href="#">My Orders</a>
                <a href="#">Profile</a>
                <a href="#">Signout</a>
            </div>
            </div>
          
<div className="w3-content ck1">


<header className="w3-panel w3-center w3-opacity ck2">
  <h1 className="w3-xlarge">Elocals</h1>
  <h1>Shopping App</h1>
  
  <div className="w3-padding-32">
    <div className=" col-md-12 ">
      <button onClick={() => history.push('/Products')} className="btn btn-default">Product Details</button>
      
      </div>

      <div className="col-md-12" >
      <button onClick={() => history.push('/Seller')} className="btn btn-default">Seller Details</button>
      <div className="zoom"></div>
      
      </div>        
  </div>
    
</header>


</div>

     
        <footer class="w3-container w3-padding-64 w3-light-grey w3-center w3-large"> 
        <i class="fa fa-facebook-official w3-hover-opacity"></i>
        <i class="fa fa-instagram w3-hover-opacity"></i>
        <i class="fa fa-snapchat w3-hover-opacity"></i>
        <i class="fa fa-pinterest-p w3-hover-opacity"></i>
        <i class="fa fa-twitter w3-hover-opacity"></i>
        <i class="fa fa-linkedin w3-hover-opacity"></i>
        </footer>

    </div>
  );
}

export default Home;
