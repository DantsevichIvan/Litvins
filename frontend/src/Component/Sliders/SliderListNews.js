import React from 'react';
import styles from './SliderListNews.module.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import 'react-alice-carousel/lib/alice-carousel.css'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export default class SliderListNews extends React.PureComponent {
  state = {mouseTrackingEnabled: true, preventEventOnTouchMove: true}
  responsive = {
    0: {items: 1},
    200: {items: 2},
    400: {items: 3},
  }
  stagePadding = {
    paddingLeft: 0,
    paddingRight: 0,
  }

  render() {
    const {mouseTrackingEnabled, preventEventOnTouchMove} = this.state
    const {newsList} = this.props
    return (
      <div className={styles.wrapper} id="app">
        <div className={styles.wrapper__container}>
          <div className={styles.wrapper__container__title}>
            <h3>Other <span>Posts</span></h3>
          </div>
          <div className={styles.item__wrap__btn}>
            <button className={styles.btnPrev} onClick={() => this.Carousel.slidePrev()}>
              <FontAwesomeIcon icon={faAngleLeft}/>
            </button>
            <button className={styles.btnNext} onClick={() => this.Carousel.slideNext()}>
              <FontAwesomeIcon icon={faAngleRight}/>
            </button>
          </div>
        </div>

        <AliceCarousel
          preventEventOnTouchMove={preventEventOnTouchMove}
          mouseTrackingEnabled={mouseTrackingEnabled}
          // onSlideChanged={console.debug}
          responsive={this.responsive}
          infinite={true}
          stagePadding={this.stagePadding}
          buttonsDisabled={true}
          // autoPlay={true}
          autoPlayInterval={4000}
          // ref={(el : any) => (this.Carousel = el)}
          ref={(el) => (this.Carousel = el)}
        >
          {/*{newsList.map((news: any) => {*/}
          {newsList.map((news) => {
            return (
              <div className={styles.item} key={news._id}>
                {/*<div className={styles.item__img} style={news.img}></div>*/}
                <div className={styles.item__info}>
                  <div className={styles.item__info__data}>
                    <span>{moment(news.dataValue).format('LL')}</span>
                  </div>
                  <div className={styles.item__info__name}>
                    <h4><NavLink to='#'>{news.nameNews}</NavLink></h4>
                  </div>
                </div>
              </div>
            )
          })}
        </AliceCarousel>
      </div>
    )
  }
}

// : any 2