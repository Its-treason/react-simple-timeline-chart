import { useEffect, useState } from 'react';
import { TimelineItem } from '../index';
import { FormattedItems } from '../types';

export default function useFormat(rawItems: TimelineItem[]): FormattedItems {
  const [FormattedItems, setFormattedItems] = useState<FormattedItems>({});

  return FormattedItems;
}
