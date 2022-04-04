import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './aboutus.css'
import { FaSearchLocation,FaDove } from 'react-icons/fa';
import Contact from "./Contact"



const Landing=()=> {
  
 
return (
	<div className="land">
        	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1573518011645-aa7ab49d0aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		alt="One"
		/>
		<Carousel.Caption>
			<h3 style={{color:"black"}}>ANTI WASTE SITE WEB</h3>
			<p style={{color:"black"}}>Save the planet</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://images.unsplash.com/flagged/photo-1568004614679-c938da0922fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
			alt="Two"
		/>
		<Carousel.Caption>
			<h3 style={{color:"black"}}>Save meals</h3>
				</Carousel.Caption>
		</Carousel.Item>
    <Carousel.Item interval={500}>
    <img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
			alt="Two"
		/>
    <Carousel.Caption>
		
		</Carousel.Caption>
		</Carousel.Item>
    <Carousel.Item interval={500}>
    <img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1584953528649-b522a1b499b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
			alt="Two"
		/>
    <Carousel.Caption>
		
		</Carousel.Caption>
		</Carousel.Item>
    
	</Carousel>
    <div>
    <section className="text-center about">
      <h1 style={{marginLeft:"350px"}}>About US</h1>
      <div className="container" style={{marginLeft:"350px"}}>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
            <span className="fa fa-search"></span>
            <h2>How?</h2>
            <h3>
            SAVE UNSOLD DELICIOUS
                   AT AN ADVANTAGEOUS PRICE!</h3>
          </div>
          <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
            <span><FaDove/></span>
            <h2>For what? </h2>
            <h3>
            MAKE THE DIFFERENCE
WE BUILD BIG THINGS               </h3>
          </div>
          <div className="clearfix visible-md-block visible-sm-block"></div>
          <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
            <span>            <FaSearchLocation/>
</span>
            <h2>Who ?</h2>
            <h3>
            AN ESSENTIAL SOLUTION FOR RETAILERS
BECOME A PARTNER!</h3>
          </div>
          

           <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
            <span>            <FaSearchLocation/>
</span>
            <h2>Where ?</h2>
            <h3>
            SHARE WITH US YOUR UNBUYED FOODS OR PRODUCT EVERYWHERE IN TUNISIA!</h3>
          </div>
        </div>
      </div>
   

    </section>

    </div>
    <Contact/>

	</div>
);
}
export default Landing
