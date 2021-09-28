import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg width={16} height={10} xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M.183 0h15.634c.102 0 .183.08.183.19v9.62c0 .11-.08.19-.183.19H.183A.183.183 0 010 9.81V.19C0 .08.08 0 .183 0zm15.172 9.626L11.32 5.69a.193.193 0 01-.007-.264.185.185 0 01.264 0l4.051 3.944V.608L8.125 7.463a.181.181 0 01-.25 0L.375.608v8.761l4.051-3.944a.185.185 0 01.264 0 .193.193 0 01-.007.264L.646 9.626h14.71zM.666.374L8 7.074l7.333-6.7H.666z'
        fill='#7D7D7D'
      />
    </svg>
  );
}

export default SvgComponent;
