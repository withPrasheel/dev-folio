import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Timeline.css'; // Make sure to create a Timeline.css file

function Timeline() {
  return (
    <div class="page-section page-section--gray">
  <div class="wrapper">
    <h2 class="section-title section-title--gray">My Works</h2>
    <div class="timeline">
      <div class="timeline__item">
        <div class="timeline__item__date">January <strong>2017</strong></div>
        <div class="timeline__item__content">
          <div class="timeline__item__content__logo">
            <span class="icon icon--content-logo"></span>
          </div>
          <h3 class="timeline__item__content__title">
            Lorem Ipsum
          </h3>
          <p class="timeline__item__content__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div class="timeline__item__content__techs">
            <span class="icon icon--html5"></span>
            <span class="icon icon--css3"></span>
            <span class="icon icon--javascript"></span>
          </div>
        </div>
      </div>

      <div class="timeline__item">
        <div class="timeline__item__date">February <strong>2017</strong></div>
        <div class="timeline__item__content">
          <div class="timeline__item__content__logo">
            <span class="icon icon--content-logo"></span>
          </div>
          <h3 class="timeline__item__content__title">
            Lorem Ipsum
          </h3>
          <p class="timeline__item__content__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
          </p>
          <div class="timeline__item__content__techs">
            <span class="icon icon--sketch"></span>
            <span class="icon icon--css3"></span>
          </div>
        </div>
      </div>

      <div class="timeline__item">
        <div class="timeline__item__date">March <strong>2017</strong></div>
        <div class="timeline__item__content">
          <div class="timeline__item__content__logo">
            <span class="icon icon--content-logo"></span>
          </div>
          <h3 class="timeline__item__content__title">
            Lorem Ipsum
          </h3>
          <p class="timeline__item__content__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
          </p>
          <div class="timeline__item__content__techs">
            <span class="icon icon--sketch"></span>
          </div>
        </div>
      </div>

      <div class="timeline__item">
        <div class="timeline__item__date">April <strong>2017</strong></div>
        <div class="timeline__item__content">
          <div class="timeline__item__content__logo">
            <span class="icon icon--content-logo"></span>
          </div>
          <h3 class="timeline__item__content__title">
            Lorem Ipsum
          </h3>
          <p class="timeline__item__content__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
          </p>
          <div class="timeline__item__content__techs">
            <span class="icon icon--javascript"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Timeline;
