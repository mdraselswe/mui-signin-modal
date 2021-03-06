import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg width={15} height={15} xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M12.75 0H2.25C1 0 0 1 0 2.25v10.5C0 14 1 15 2.25 15h10.5C14 15 15 14 15 12.75V2.25C15 1 14 0 12.75 0zm1.536 12.75c0 .839-.696 1.535-1.536 1.535H2.25a1.547 1.547 0 01-1.536-1.536V2.25c0-.839.696-1.536 1.536-1.536h10.5c.84 0 1.536.696 1.536 1.536v10.5z' />
      <path d='M8.887 4.613a.362.362 0 00-.525 0l-3 3a.362.362 0 000 .525l3 3c.076.075.17.112.263.112a.367.367 0 00.262-.113.362.362 0 000-.525L6.151 7.875l2.737-2.738a.362.362 0 000-.525z' />
    </svg>
  );
}

export default SvgComponent;
