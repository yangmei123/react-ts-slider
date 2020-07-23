import React, { SFC } from 'react';
import { Props } from '../types/inteface';

const PrevNext: SFC<Props> = (({ handleItemChange }) => {
  return (
    <div className="prevnext">
      <div className="btn-area">
          <span className="prev-btn" onClick={() => handleItemChange('prev')}>上一张</span>
          <span className="next-btn" onClick={() => handleItemChange('next')}>下一张</span>
      </div>
    </div>
  )
});

export default PrevNext;
