import React, {useState} from 'react';
import styles from './SliderListNews.module.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import 'react-alice-carousel/lib/alice-carousel.css'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import {Carousel} from 'antd';

export const SliderListNews = ({newsList}: any) => {
  const [mouseTrackingEnabled, setMouseTrackingEnabled] = useState<boolean>(true);
  const [preventEventOnTouchMove, setPreventEventOnTouchMove] = useState<boolean>(true);

  const responsive: any = {
    0: {items: 1},
    600: {items: 2},
    960: {items: 3},
  }
  const stagePadding: any = {
    paddingLeft: 0,
    paddingRight: 0,
  }

  return (
    <div className={styles.wrapper} id="app">
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__container__title}>
          <h3>Other <span>Posts</span></h3>
        </div>
        <div className={styles.item__wrap__btn}>
          {/*<button className={styles.btnPrev} onClick={() => Carousel.slidePrev()}>*/}
          {/*  <FontAwesomeIcon icon={faAngleLeft}/>*/}
          {/*</button>*/}
          {/*<button className={styles.btnNext} onClick={() => Carousel.slideNext()}>*/}
          {/*  <FontAwesomeIcon icon={faAngleRight}/>*/}
          {/*</button>*/}
        </div>
      </div>

      <AliceCarousel
        preventEventOnTouchMove={preventEventOnTouchMove}
        mouseTrackingEnabled={mouseTrackingEnabled}
        responsive={responsive}
        infinite={true}
        stagePadding={stagePadding}
        buttonsDisabled={true}
        // autoPlay={true}
        autoPlayInterval={4000}


      >
        {newsList.map((news: any) => {

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


// : any 4