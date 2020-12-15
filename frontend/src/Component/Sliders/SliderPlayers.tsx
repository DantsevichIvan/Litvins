import React, {useState} from 'react';
import styles from './SliderPlayers.module.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import Player from "../TeamPage/Player/Player";

export const SliderPlayers = (props: any) => {
  const [mouseTrackingEnabled, setMouseTrackingEnabled] = useState<boolean>(true);
  const [preventEventOnTouchMove, setPreventEventOnTouchMove] = useState<boolean>(true);


  const responsive: any = {
    0: {items: 1},
    200: {items: 2},
    500: {items: 3},
    900: {items: 4},
  }
  const stagePadding: any = {
    paddingLeft: 0,
    paddingRight: 0,
  }

  return (
    <div id="app">
      <div>
        <h3 className={styles.otherTitle}>{props.title}</h3>
        <div className={styles.btn}>
          {/*<LeftCircleOutlined onClick={() => this.Carousel.slidePrev()} theme="outlined"/>*/}
          {/*<RightCircleOutlined />*/}
          {/*<RightOutlined onClick={() => this.Carousel.slideNext()}/>*/}
        </div>
      </div>

      <AliceCarousel
        items={props.players}
        preventEventOnTouchMove={preventEventOnTouchMove}
        mouseTrackingEnabled={mouseTrackingEnabled}
        responsive={responsive}
        infinite={true}
        stagePadding={stagePadding}
        buttonsDisabled={true}
        autoPlayInterval={3000}
        dotsDisabled={true}

      >
         {props.players.map((player: any) => {

          return (
            <div className={styles.item} key={player.id}>
              <div className={styles.wrap}><Player player={player}/></div>
            </div>
          )
        })}
      </AliceCarousel>
    </div>
  )
}


// : any 5

