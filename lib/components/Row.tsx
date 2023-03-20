import React, { ReactElement } from 'react';
import { FormattedItem } from '../types';
import { style } from '@vanilla-extract/css';

const rowStyle = style({
  borderBottom: '1px solid black',
  padding: '0.25rem 0',

  selectors: {
    // Disable border for last child
    '&:nth-last-of-type(-n+2)': {
      borderBottom: '0px',
    },

    // Stripe every second row
    '&:nth-last-of-type(4n), &:nth-last-of-type(4n-1)': {
      backgroundColor: 'gainsboro',
    },
  }
})

type RowProps = {
  items: FormattedItem[][],
}

export default function Row(): ReactElement {
  return (
    <div className={rowStyle}></div>
  )
}
