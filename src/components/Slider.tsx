import React, { SFC } from 'react';

type imgDataObject = {
  url: string;
}
type Props = {
  imgData: Array<imgDataObject>
  activeIndex: number
}

const Slider:SFC<Props> = ((props) => {
    const { imgData, activeIndex } = props;
    const sliderImg = imgData.map((slider, index) => {
        return index === activeIndex ? <img src={slider.url} key={index} alt="图片"/> : '';
      }
    );
    return (
      <div className="slide-box cleafix">
          {sliderImg}
      </div>
    )
  }
);

export default Slider;
