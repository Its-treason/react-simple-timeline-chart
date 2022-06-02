import useStyles from './Chart.styles';
import { ReactElement } from 'react';

type RowLegendProps = {
  label: string,
}

function RowLegend({label}: RowLegendProps): ReactElement {
  const { classes } = useStyles({});

  return (
    <div className={classes.legend}>{label}</div>
  )
}

export default RowLegend;
