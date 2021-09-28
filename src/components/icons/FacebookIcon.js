import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg width={8} height={16} xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M7.385 5.5h-2.77v-2c0-.552.414-1 .923-1h.924V0H4.615c-1.53 0-2.769 1.343-2.769 3v2.5H0V8h1.846v8h2.77V8h1.846l.923-2.5z'
        fill='currentColor'
      />
    </svg>
  );
}

export default SvgComponent;
