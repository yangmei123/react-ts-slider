import React, { SFC } from 'react';
import { Props } from '../types/inteface';

const Navigat: SFC<Props> = (props => {
  const { imgData = [], activeIndex, handleItemChange } = props;
    const spanNode = imgData.map((slider, index) => <span key={index} className={ index === activeIndex ? 'active':''} onClick={() => handleItemChange({slider, activeIndex: index})} ></span>);
  return (<div className="navigat">{spanNode}</div>);
});

export default Navigat;
