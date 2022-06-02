import { ReactElement } from 'react';
import { Bar } from './Chart.types';
import LaneGroup from './LaneGroup';
import RowLegend from './RowLegend';

type ChartRowProps = {
  name: string,
  data: Bar[],
  minDate: Date,
  maxDate: Date,
  onClick?: (bar: Bar) => void,
}

function ChartRow({data, name, minDate, maxDate, onClick}: ChartRowProps): ReactElement {
  return (
    <>
      <RowLegend label={name} />
      <LaneGroup data={data} minDate={minDate} maxDate={maxDate} onClick={onClick} />
    </>
  )
}

export default ChartRow;
