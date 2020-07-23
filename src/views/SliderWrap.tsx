/**
 *
 * @authors lml
 * @date    2017-12-29
 * @version $Id$
 */

import React, { Component } from 'react';
import Slider from '../components/Slider';
import PrevNext from '../components/PrevNext';
import Navigat from '../components/Navigat';
import '../css/style.scss';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

type Props = {
  match: any
}
type State = {
  imageData: Array<any>  
  activeIndex: number
  timerID: any
}

class SliderWrap extends Component<Props, State> { // 用类的方式创建组件
  constructor(props:Props) { 
    super(props);

    this.state = {
      imageData: [{
        url: img1
      }, {
        url: img2
      }, {
        url: img3
      }, {
        url: img4
      }],
      activeIndex: 0,
      timerID: 0
    };
    this.handleItemChange = this.handleItemChange.bind(this);
  }

  componentDidMount() {
    // 获取路由上的参数
    this.sliderStart();
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  sliderStart() {
    const timerID = setInterval(() => {
      const { state: { imageData, activeIndex}} = this;
      this.setState({ activeIndex: activeIndex === imageData.length - 1 ? 0 : activeIndex + 1});
    }, 3000)
    this.setState({ timerID })
  }

  handleItemChange(item: { [key: string]: number} | string) {
    const { state: { imageData, activeIndex, timerID}} = this;
    let isPrev = item === 'prev';
    let index = activeIndex;
    if (item instanceof Object) {
      const { activeIndex } = item;
      this.setState({activeIndex});
      return false;
    }
    clearInterval(timerID);
    if (isPrev) {
      index = index === 0 ? imageData.length - 1 : index - 1
    } else {
      index = index === imageData.length - 1 ? 0 : index + 1
    }
    this.setState({ activeIndex: index});
    this.sliderStart();
  }

  render() {
    const { state: { imageData, activeIndex }  } = this;
    const { props: { match: { params: { id } } } } =this;
    return (
      <div className="slider">
      <h3>路由上的参数为{id}</h3>
        <div className="wrap" id="slide-wrap">
          <Slider imgData={imageData} activeIndex={activeIndex}></Slider>
          <PrevNext activeIndex={activeIndex} handleItemChange={this.handleItemChange}></PrevNext>
          <Navigat imgData={imageData} activeIndex={ activeIndex } handleItemChange={this.handleItemChange} ></Navigat>
        </div>
      </div>
    );
  }
}

export default SliderWrap;
