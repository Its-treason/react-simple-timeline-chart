import { useMemo } from 'react';
import useStyles from './Chart.styles';
import { Bar } from './Chart.types';
import ChartBarInner from './ChartBarInner';

type BarProps = {
  bar: Bar,
  minDate: Date,
  maxDate: Date,
  onClick?: (bar: Bar) => void,
}

function ChartBar({bar, minDate, maxDate, onClick}: BarProps) {
  const { classes } = useStyles({ color: bar.color });

  const { width, leftOffset } = useMemo(() => {
    const width = (bar.to.getTime() - bar.from.getTime()) / (maxDate.getTime() - minDate.getTime()) * 100;
    const leftOffset = (bar.from.getTime() - minDate.getTime()) / (maxDate.getTime() - minDate.getTime()) * 100

    return { width, leftOffset };
  }, [bar, minDate, maxDate])

  return (
    <div
      onClick={() => onClick && onClick(bar)}
      className={classes.chartBar}
      style={{left: `${leftOffset}%`, width: `${width}%`}}
    ><ChartBarInner bar={bar} /></div>
  );
}

export default ChartBar;
