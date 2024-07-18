import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Timeline.css'; // Make sure to create a Timeline.css file

function Education() {
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
										<h3 id="experience-step-1-heading" class="ra-heading">Master of Science at Arizona State University</h3>
										<span class="uia-card__time">
											<span class="ha-screen-reader">from</span>
											<time datetime="2012-02">August 2023</time>
											<span class="uia-card__time-divider" aria-hidden="true"></span>
											<span class="ha-screen-reader">to</span>
											<time datetime="2013-07">May 2025</time>
										</span>
									</div>
									<div class="uia-card__body">
										<div class="uia-card__description">							
										</div>
									</div>
								</div>
							</div>
						</section>
						<section class="uia-timeline__group" aria-labelledby="experience-step-2-heading">
							<div class="uia-timeline__dot"></div>
							<div class="uia-timeline__point uia-card">
								<div class="uia-card__container">
									<div class="uia-card__intro">
										<h3 id="experience-step-2-heading" class="ra-heading">B.E. from PES University</h3>
										<span class="uia-card__time">
											<span class="ha-screen-reader">from</span>
											<time datetime="2016-07">July 2016</time>
											<span class="uia-card__time-divider" aria-hidden="true"></span>
											<span class="ha-screen-reader">to</span>
											<time datetime="2020-08">August 2020</time>
										</span>
									</div>
									<div class="uia-card__body">
										<div class="uia-card__description">
										</div>
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

export default Education;
