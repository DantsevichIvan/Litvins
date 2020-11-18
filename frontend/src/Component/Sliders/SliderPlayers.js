import React from 'react';
import styles from './SliderPlayers.module.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import Player from "../TeamPage/Player/Player";

// export default class SliderPlayers extends React.PureComponent<any> {
export default class SliderPlayers extends React.PureComponent {
  // constructor(props: any) {
  constructor(props) {
    super(props);
    this.state = {
      mouseTrackingEnabled: true,
      preventEventOnTouchMove: true
    }
  }

  responsive = {
    0: {items: 1},
    200: {items: 2},
    500: {items: 3},
    900: {items: 4},
  }
  stagePadding = {
    paddingLeft: 0,
    paddingRight: 0,
  }

  render() {
    //    const {mouseTrackingEnabled, preventEventOnTouchMove}: any = this.state
    const {mouseTrackingEnabled, preventEventOnTouchMove} = this.state
    return (
      <div id="app">
        <div>
          <h3 className={styles.otherTitle}>{this.props.title}</h3>
          <div className={styles.btn}>
            {/*<LeftCircleOutlined onClick={() => this.Carousel.slidePrev()} theme="outlined"/>*/}
            {/*<RightCircleOutlined />*/}
            {/*<RightOutlined onClick={() => this.Carousel.slideNext()}/>*/}
          </div>
        </div>

        <AliceCarousel
          items={this.props.players}
          preventEventOnTouchMove={preventEventOnTouchMove}
          mouseTrackingEnabled={mouseTrackingEnabled}
          responsive={this.responsive}
          infinite={true}
          stagePadding={this.stagePadding}
          buttonsDisabled={true}
          autoPlayInterval={3000}
          dotsDisabled={true}
          /// ref={(el: any) => (this.Carousel = el)}
          ref={(el) => (this.Carousel = el)}
        >
          {/* {this.props.players.map((player: any) => { */}
          {this.props.players.map((player) => {
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
}

// : any 5
// вопрос по this
//  ref={(el: any) => (this.Carousel = el)}

