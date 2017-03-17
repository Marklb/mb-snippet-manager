import style from './style';
import prefixAll from 'inline-style-prefixer/static';

const s = Object.create(style);

s.item = {
  fontFamily: 'Hack, monospace',
  fontSize: '12px',
  backgroundColor: 'rgba(60,80,100,1)',
  // backgroundColor: 'rgba(100,100,100,1)',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: '1px solid rgba(20,40,60,1)',
  padding: '2px 4px',
  userSelect: 'none',
  cursor: 'default',
};

s.itemSelected = {
  backgroundColor: 'rgba(60,80,150,1)',
  // backgroundColor: 'rgba(100,100,100,1)',
};

export default prefixAll(s);
