import React from "react";
import "./Wrapper.css";

const Wrapper = (props) => (
		<div id="wrapper">
		<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
							<div class="container">
								<a class="navbar-brand" href="#page-top">Fetch!</a>
								<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
									Menu
									<i class="fas fa-bars"></i>
								</button>
								<div class="collapse navbar-collapse" id="navbarResponsive">
									<ul class="navbar-nav ml-auto">
										<li class="nav-item">
											<a class="nav-link" href="/About">About</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="/Faq">FAQ!</a>
										</li>
									</ul>
								</div>
							</div>
						</nav>
		{props.children}
		</div>
);

export default Wrapper;