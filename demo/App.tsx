import { useMemo, useState } from 'react'
import Timeline, { TimelineItem } from '../lib';
import simpleDataset from './datasets/simple';

function App() {
  const [selected, setSelected] = useState('simple')

  const items: TimelineItem[] = useMemo(() => {
    switch (selected) {
      default:
      case 'simple':
        return simpleDataset;
    }
  }, [selected]);

  return (
    <main className="app">
      <div>
        <select value={selected} onChange={(evt) => setSelected(evt.currentTarget.value)}>
          <option value={'simple'} />
        </select>
      </div>
      <Timeline items={items} />
    </main>
  )
}

export default App
