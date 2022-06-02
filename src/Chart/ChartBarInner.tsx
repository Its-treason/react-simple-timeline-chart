import { Tooltip } from '@mantine/core';
import useStyles from './Chart.styles';
import { Bar } from './Chart.types';
import { ReactElement } from 'react';

type ChartBarInnerProps = {
  bar: Bar,
}

function ChartBarInner({bar}: ChartBarInnerProps): ReactElement {
  const { classes } = useStyles({});

  let tooltip = bar.tooltip;
  if (tooltip === undefined) {
    tooltip = `${bar.from.toLocaleString()} - ${bar.to.toLocaleString()} lol`;
  }
  if (tooltip === false) {
    tooltip = undefined;
  }

  return (
    <Tooltip disabled={!tooltip} label={tooltip} className={classes.tooltip}>
      <div className={classes.chartBarInner}>{bar.label}</div>
    </Tooltip>
  )
}

export default ChartBarInner;
