import React, { ReactElement } from 'react';
import { FormattedItem, FormattedItems } from './types'

export type TimelineItem = {
  from: Date,
  to: Date,
  title: string,
  group: string,
}

type TimelineProps = {
  items: TimelineItem[],
}

export default function Timeline({ items }: TimelineProps): ReactElement {
  return (
    <div>Hello World</div>
  )
};
