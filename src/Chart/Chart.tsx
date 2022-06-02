import { ReactElement, useMemo } from "react";
import { Bar } from './Chart.types';
import useStyles from './Chart.styles';
import ChartRow from './ChartRow';

type GroupedBar = {
  [key: string]: Bar[],
}

type ChartProps = {
  data: Bar[],
  onClick?: (bar: Bar) => void,
  width?: string,
  from?: Date,
  to?: Date,
}

function Chart({data, onClick, width, from, to}: ChartProps): ReactElement {
  const { classes } = useStyles({chartWidth: width});

  const groupedData = useMemo(() => {
    return data.reduce<GroupedBar>((acc, barRow) => {
      if (!acc[barRow.group]) {
        acc[barRow.group] = [];
      }
      acc[barRow.group].push(barRow);
      return acc;
    }, {})
  }, [data]);

  const [minDate, maxDate] = useMemo(() => {
    let minDate: Date|null = null;
    let maxDate: Date|null = null;

    for (const bar of data) {
      if (minDate === null || bar.from.getTime() < minDate.getTime()) {
        minDate = bar.from;
      }
      if (maxDate === null || bar.to.getTime() > maxDate.getTime()) {
        maxDate = bar.to;
      }
    }

    if (minDate === null || maxDate === null) {
      minDate = new Date();
      maxDate = new Date();
    }

    if (from) {
      minDate = from;
    }
    if (to) {
      maxDate = to;
    }

    return [minDate, maxDate];
  }, [data, from, to]);

  const chart = useMemo(() => {
    return Object.entries(groupedData).map((groupedRow) => {
      return (
        <ChartRow
          key={groupedRow[0]}
          data={groupedRow[1]}
          name={groupedRow[0]}
          minDate={minDate}
          maxDate={maxDate}
          onClick={onClick}
        />
      );
    });
  }, [groupedData, maxDate, minDate, onClick]);

  return <div className={classes.chart}>{chart}</div>
}

export default Chart;
