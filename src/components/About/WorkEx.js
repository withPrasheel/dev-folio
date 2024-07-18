import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Timeline.css'; // Make sure to create a Timeline.css file

function WorkEx() {
	return (
		<div class="page">
			<div class="uia-timeline" data-uia-timeline-skin="2" data-uia-timeline-adapter-skin-2="ui-card-skin-#1" data-uia-card-skin="1" data-uia-card-mod="1">
				<div class="uia-timeline__container">
					<div class="uia-timeline__line"></div>
					<div class="uia-timeline__groups">
						<section class="uia-timeline__group" aria-labelledby="experience-step-1-heading">
							<div class="uia-timeline__dot"></div>
							<div class="uia-timeline__point uia-card">
								<div class="uia-card__container">
									<div class="uia-card__intro">
										<h3 id="experience-step-1-heading" class="ra-heading">Full Stack Software Developer at Netmeds</h3>
										<span class="uia-card__time">
											<span class="ha-screen-reader">from</span>
											<time datetime="2012-02">October 2020</time>
											<span class="uia-card__time-divider" aria-hidden="true"></span>
											<span class="ha-screen-reader">to</span>
											<time datetime="2013-07">November 2021</time>
										</span>
									</div>
									<div class="uia-card__body">
										<ul class="uia-card__description">
											<li class="uia-card-list-item">Implemented a scalable microservices architecture using advanced OOP Paradigms, Java-Spring Boot, and
											Angular and TypeScript features to efficiently manage over 100k orders per day.</li>
											<li class="uia-card-list-item">Developed robust RESTful APIs for CRUD operations, with rigorous unit testing with JUnit 5 to ensure system
											reliability.</li>
											<li class="uia-card-list-item">Designed adaptable architectures for critical components using optimal design patterns impacting 100k+ customers.</li>
											<li class="uia-card-list-item">Incorporated a BDD pipeline leveraging Cucumber and Java, reducing manual effort by 99.46%, slashing time from
											16 hours to 6 minutes.</li>
											<li class="uia-card-list-item">Enhanced system security by effectively managing and addressing security reports, successfully resolving a total of 19
											individual security bugs.</li>
											<li class="uia-card-list-item">Led and mentored a team of 3 to write automated test cases, showcasing leadership and management skills.</li>
										</ul>
									</div>
								</div>
							</div>
						</section>
						<section class="uia-timeline__group" aria-labelledby="experience-step-2-heading">
							<div class="uia-timeline__dot"></div>
							<div class="uia-timeline__point uia-card">
								<div class="uia-card__container">
									<div class="uia-card__intro">
										<h3 id="experience-step-2-heading" class="ra-heading">Software Engineer at Synechron</h3>
										<span class="uia-card__time">
											<span class="ha-screen-reader">from</span>
											<time datetime="2013-09">September 2013</time>
											<span class="uia-card__time-divider" aria-hidden="true"></span>
											<span class="ha-screen-reader">to</span>
											<time datetime="2014-02">February 2014</time>
										</span>
									</div>
									<div class="uia-card__body">
										<ul class="uia-card__description">
											<li class="uia-card-list-item">Contributed to migrating a Legacy system to Java, demonstrating proficiency in navigating intricate processes and
											seamlessly transitioning between Cobol and Java.</li>
											<li class="uia-card-list-item">Crafted an intuitive web application for streamlined payroll processing, employing Angular and Node.js technologies to
											benefit 1000+ employees.</li>
											<li class="uia-card-list-item">Implemented a robust CI/CD pipeline to automate deployment processes using Jenkins on the Azure cloud
											platform.</li>
											<li class="uia-card-list-item">Well-versed with agile methodology, version control systems, customer interaction, and troubleshooting.</li>
										</ul>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorkEx;
