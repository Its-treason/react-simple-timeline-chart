import { useMemo } from 'react';
import useStyles from './Chart.styles';
import { Bar } from './Chart.types';
import ChartBar from './ChartBar';

type LaneProps = {
  data: Bar[],
  minDate: Date,
  maxDate: Date,
  onClick?: (bar: Bar) => void,
}

function Lane({data, maxDate, minDate, onClick}: LaneProps) {
  const { classes } = useStyles({});

  const bars = useMemo<JSX.Element[]>(() => {
    return data.map((bar, index) => (
      <ChartBar key={index} bar={bar} minDate={minDate} maxDate={maxDate} onClick={onClick} />
    ));
  }, [data, minDate, maxDate, onClick]);

  return (
    <div className={classes.lane}>{bars}</div>
  )
}

export default Lane;
