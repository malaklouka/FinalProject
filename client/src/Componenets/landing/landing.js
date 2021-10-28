import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from './header'
import './aboutus.css'
const Landing=()=> {
return (
	<div >
        <Header/>
        	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1573518011645-aa7ab49d0aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
			alt="Image One"
		/>
		<Carousel.Caption>
			<h3>ANTI WASTE SITE WEB</h3>
			<p>Save the planet</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
			alt="Image Two"
		/>
		<Carousel.Caption>
			<h3>Save meals</h3>
				</Carousel.Caption>
		</Carousel.Item>
    <Carousel.Item interval={500}>
    <img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1518171802599-4cd16785f93a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80"
			alt="Image Two"
		/>
    <Carousel.Caption>
		
		</Carousel.Caption>
		</Carousel.Item>
    <Carousel.Item interval={500}>
    <img
			className="d-block w-100"
src="https://images.unsplash.com/photo-1532549872809-c1b33d87e76e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
			alt="Image Two"
		/>
    <Carousel.Caption>
		
		</Carousel.Caption>
		</Carousel.Item>
    
	</Carousel>
    <div>
    <section class="text-center about">
      <h1>About US</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
            <span className="fa fa-search"></span>
            <h2>How?</h2>
            <h3>
            SAVE UNSOLD DELICIOUS
                   AT AN ADVANTAGEOUS PRICE!</h3>
          </div>
          <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
            <span className="fa fa-info"></span>
            <h2>For what? </h2>
            <h3>
            MAKE THE DIFFERENCE
WE BUILD BIG THINGS               </h3>
          </div>
          <div className="clearfix visible-md-block visible-sm-block"></div>
          <div className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
            <span className="fa fa-file"></span>
            <h2>Who ?</h2>
            <h3>
            AN ESSENTIAL SOLUTION FOR RETAILERS
BECOME A PARTNER!</h3>
          </div>
          
        </div>
        
      </div>
    </section>
    </div>
	</div>
);
}
export default Landing
