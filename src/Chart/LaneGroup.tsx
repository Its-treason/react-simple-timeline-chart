import { ReactElement, useMemo } from 'react';
import useStyles from './Chart.styles';
import { Bar } from './Chart.types';
import Lane from './Lane';

type LaneGroupProps = {
  data: Bar[],
  minDate: Date,
  maxDate: Date,
  onClick?: (bar: Bar) => void,
}

function LaneGroup({data, maxDate, minDate, onClick}: LaneGroupProps): ReactElement {
  const { classes } = useStyles({});

  const groupedData: Bar[][] = useMemo(() => {
    const lanes: Bar[][] = [];

    for (const dataRow of data) {
      

      for (let i = 0; true; i++) {
        if (lanes[i] === undefined) {
          lanes[i] = [dataRow];
          break;
        }

        let canMerge = true;
        for (const existingDataRow of lanes[i]) {
          if (dateRangeOverlaps(dataRow.from, dataRow.to, existingDataRow.from, existingDataRow.to)) {
            canMerge = false;
          }
        }
        if (canMerge) {
          lanes[i].push(dataRow);
          break;
        }
      }
    }

    return lanes;
  }, [data])

  const lanes = useMemo(() => {
    return groupedData.map((row, index) => (
      <Lane key={index} data={row} minDate={minDate} maxDate={maxDate} onClick={onClick} />
    ));
  }, [groupedData, maxDate, minDate, onClick]);


  return <div className={classes.laneGroup}>{lanes}</div>
}

function dateRangeOverlaps(aStart: Date, aEnd: Date, bStart: Date, bEnd: Date): boolean {
  return (aEnd >= bStart && aStart <= bEnd);
}

export default LaneGroup;
