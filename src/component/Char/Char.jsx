import React from 'react';
import { connect } from 'react-redux';

import './style.scss';

const CharItem = React.memo(({ char, ...props }) => {
  return (
    <>
      {
        char.map((element, index) => {
          return (
            <div key={index} ref={element[`_${index}`]} className="circle-snake__wrapper-char" style={{
              display: 'none',
            }}>
              <div></div>
            </div>
          )
        })
      }
    </>
  )
})

export default connect((state) => ({

}))(CharItem);