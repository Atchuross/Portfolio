import React from 'react';
import '../components/styles/styles.scss'
import 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'



const Contact = () => {
  return (
    <section id="contact" style={{paddingTop: "10%"}}>
    <div className="white-divider" />
    <h2 className="AboutPersonal__Heading">.<span id="me2">contact</span>()</h2>
    <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-12">
					<div class="wrapper">
						<div class="row no-gutters">
							<div class="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
								<div class="contact-wrap w-100 p-md-5 p-4">
									<h3 class="mb-4">Get in touch</h3>
									<div id="form-message-warning" class="mb-4"></div> 
									<form method="POST" id="contactForm" name="contactForm" class="contactForm" action="https://getform.io/f/307be58a-8fbd-4c58-a91b-93bc93ee913d">
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<label class="label" for="name">Full Name *</label>
													<input type="text" class="form-control" name="name" id="name" placeholder="Ex: John Doe" />
												</div>
											</div>
											<div class="col-md-6"> 
												<div class="form-group">
													<label class="label" for="email">Email Address *</label>
													<input type="email" class="form-control" name="email" id="email" placeholder="Ex: jhondoe@gmail.com" />
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="subject">Enterprise Name</label>
													<input type="text" class="form-control" name="subject" id="subject" placeholder="Ex: Enterprise ..." />
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label class="label" for="tel">Phone Number</label>
                          <input type="text" class="form-control" name="subject" id="subject" placeholder="Ex: +33 6 00 00 00 00" />
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="submit" value="Send Message" class="btn btn-sub" /> 
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-lg-4 col-md-5 d-flex align-items-stretch">
								<div class="info-wrap bg-primary w-100 p-md-5 p-4">
									<h3>Let's get in touch</h3>
									<p class="mb-4"></p>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faHome} />
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Address:</span> 49 impasse clos mazille 69220 Cercié (FRA)</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faPhoneAlt} />
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Phone:</span> <a href="tel://0781548734">(+33) 7 81 54 87 34</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faEnvelope} />
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Email:</span> <a href="mailto:c.clauzel@icloud.com">c.clauzel@icloud.com</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		  <div class="icon d-flex align-items-center justify-content-center">
				        			<FontAwesomeIcon icon={faLinkedinIn} />
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Linkedin : </span> <a href="https://www.linkedin.com/in/clément-clauzel-59a344181/">Clément Clauzel</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  </section>
  )
}

export default Contact
