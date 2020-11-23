import React, {useState} from 'react'
import styles from "./SliderNewsContent.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faCalendarAlt, faUser, faListUl} from "@fortawesome/free-solid-svg-icons";
import AliceCarousel from "react-alice-carousel";
import newsImg1 from "../../logo/35b8bf93115eb2b8da9f8b4f41fdb0fd.jpg";
import newsImg2 from "../../logo/5276.jpg";
import newsImg3 from "../../logo/Best-Football-Score-Apps-for-Android-feature-image.jpg";
import moment from "moment";
import {NavLink} from 'react-router-dom';

export const newsArr: Array<any> = [
  {img: {backgroundImage: `url(${newsImg1})`}, id: 1, data: 'March 25, 2020', user: 'Guest', categories: 'Life'},
  {img: {backgroundImage: `url(${newsImg2})`}, id: 2, data: 'April 20, 2020', user: 'Imbacow', categories: 'Life'},
  {img: {backgroundImage: `url(${newsImg3})`}, id: 3, data: 'May 9, 2020', user: 'Denis', categories: 'Life'}
];

export const SliderNewsContent = ({dataValue}: any) => {
  const [mouseTrackingEnabled, setMouseTrackingEnabled] = useState<boolean>(true);
  const [preventEventOnTouchMove, setPreventEventOnTouchMove] = useState<boolean>(true);

  const responsive: any = {
    0: {items: 1}

  }
  const stagePadding: any = {
    paddingLeft: 0,
    paddingRight: 0
  }

  return (
    <div className={styles.wrap} id="app">
      <div className={styles.item__wrap__btn}>
        {/*<button className={styles.btnPrev} onClick={() => this.Carousel.slidePrev()}>*/}
        {/*  <FontAwesomeIcon icon={faAngleLeft}/>*/}
        {/*</button>*/}
        {/*<button className={styles.btnNext} onClick={() => this.Carousel.slideNext()}>*/}
        {/*  <FontAwesomeIcon icon={faAngleRight}/>*/}
        {/*</button>*/}
      </div>
      <AliceCarousel
        preventEventOnTouchMove={preventEventOnTouchMove}
        mouseTrackingEnabled={mouseTrackingEnabled}
        responsive={responsive}
        infinite={true}
        stagePadding={stagePadding}
        buttonsDisabled={true}
        autoPlayInterval={4000}
        dotsDisabled={true}
        transitionTimingFunction={'ease-in-out'}
      >
      {newsArr.map((news: any) => {

        return (
          <div className={styles.item} key={news.id}>
            <div className={styles.item__wrap} style={news.img}>
            </div>
            <div className={styles.item__bottom}>
              <div className={styles.item__bottom__data}>
                <FontAwesomeIcon icon={faCalendarAlt}/>
                <span>{moment(dataValue).format('LL')}</span>
              </div>
              <div className={styles.item__bottom__author}>
                <FontAwesomeIcon icon={faUser}/>
                <span>{news.user}</span>
              </div>
              <div className={styles.item__bottom__categories}>
                <FontAwesomeIcon icon={faListUl}/>
                <span>{news.categories}</span>
              </div>
            </div>
          </div>
        )
      })}
    </AliceCarousel>
</div>
)
}



// : any 3

