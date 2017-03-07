import style from './style';
import prefixAll from 'inline-style-prefixer/static';

const s = Object.create(style);

s.header = {
  backgroundColor: 'rgba(60,80,100,1)',
  overflow: 'hidden',
  boxSizing: 'border-box',
  // border: '1px solid rgba(50,50,50,1)',
  border: '1px solid rgba(20,40,60,1)',
};

s.headerText = {
  fontFamily: 'Hack, monospace',
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'rgba(230,230,230,1)',
  padding: '4px 6px',
  display: 'inline-block',
};

s.refreshBtn = {
  color: 'rgba(230,230,230,1)',
  padding: '4px',
  float: 'right',
  transition: 'all 0.2s linear',

  ':hover': {
    color: 'rgba(255,255,255,1)',
    transform: 'rotate(25deg)',
  },

  ':active': {
    color: 'rgba(255,255,255,1)',
    transform: 'rotate(360deg)',
  },
};

export default prefixAll(s);
