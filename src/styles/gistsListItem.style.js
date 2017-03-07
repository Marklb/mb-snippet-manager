import style from './style';
import prefixAll from 'inline-style-prefixer/static';

const s = Object.create(style);

s.item = {
  backgroundColor: 'rgba(60,80,100,1)',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: '1px solid rgba(20,40,60,1)',
};

export default prefixAll(s);
