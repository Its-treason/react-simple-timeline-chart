import { AppShell } from '@mantine/core';
import './App.css';
import Chart from './Chart/Chart';
import { Bar } from './Chart/Chart.types';

function App() {
  const data: Bar[] = [
    {
      from: new Date(1652577651000),
      to: new Date(1652577851000),
      group: 'test',
      label: '1',
      tooltip: <div>lel<br />lel<br />lel<br />lel<br />lel<br />lel<br />lel<br />lel<br />lel<br />lel<br /></div>
    },
    {
      from: new Date(1652577951000),
      to: new Date(1652578051000),
      group: 'test',
      label: '2',
      tooltip: false,
    },
    {
      from: new Date(1652577751000),
      to: new Date(1652578051000),
      group: 'test',
      label: '3',
    },

    {
      from: new Date(1652577651000),
      to: new Date(1652577851000),
      group: 'test 2',
      label: '1',
      color: 'yellow',
    },
    {
      from: new Date(1652577951000),
      to: new Date(1652578051000),
      group: 'test 2',
      label: '2',
      color: 'red',
    },
    {
      from: new Date(1652577751000),
      to: new Date(1652578051000),
      group: 'test 354678',
      label: '3',
      color: '#FF1493'
    },
  ];

  return (
    <AppShell>
      <Chart data={data} onClick={(bar) => console.log(bar)} />
    </AppShell>
  )
}

export default App;
