import React from 'react'
import * as emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm("service_o58jxoo","template_gbwk7zc", e.target,"user_EA91lKOXpigOTUjSTE8wa")
        .then((result) => {
        alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
        alert("An error occurred, Please try again", error.text);
        });
        };
    return (
        <div>
             <section>
    <div className="contact">
	<div className="row">
			<h1 style={{textAlign:"center", color:"white"}}>contact </h1>
	</div>
	<div className="row">
			<h4 style={{textAlign:"center", color:"white"}}>We'd love to hear from you!</h4>
	</div>
	<form className="row input-container" onSubmit={sendEmail}>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" name="name" required />
					<label>Name</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" name="user_email" required />
					<label>Email</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input" style={{float:"right"}}>
					<input type="text" name="phone" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea name="message" required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div className="col-xs-12">
      <input type="submit" value="send" className="btn-lrg submit-btn"/>
			</div>
	</form>
</div>

    </section>
        </div>
    )
}

export default Contact
