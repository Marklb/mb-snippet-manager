import style from './style';
import prefixAll from 'inline-style-prefixer/static';

const s = Object.create(style);

s.dropdown = {
  width: '140px',
  margin: '0',
  borderRadius: '0',
  boxShadow: '0 0 0 rgba(0,0,0,0)',
  top: '-4px',
  backgroundColor: 'rgba(20,40,60,1)',

  // ':before': {
  //   top: '0',
  // },
};

s.activatorBtn = {
  fontFamily: 'Hack, monospace',
  display: 'inline-block',
  margin: '0 0 0 0',
  padding: '8px 10px',
  appearance: 'none',
  boxShadow: 'none',
  borderRadius: '0',
  color: 'rgba(230,230,230,1)',
  backgroundColor: 'rgba(20,40,60,1)',
  border: 'none',
  pointerEvents: 'visible',

  ':focus': {
    outline:  'none',
  },

  ':hover': {
    color: 'rgba(255,255,255,1)',
    // border: '1px solid rgba(255,255,255,1)',
    backgroundColor: 'rgba(20,40,80,1)',
  }
};

s.menuBtn = {
  fontFamily: 'Hack, monospace',
  width: '100%',
  display: 'inline-block',
  // display: 'block',
  margin: '0 0 0 0',
  padding: '8px 10px',
  appearance: 'none',
  boxShadow: 'none',
  borderRadius: '0',
  color: 'rgba(230,230,230,1)',
  backgroundColor: 'rgba(20,40,60,1)',
  border: 'none',
  pointerEvents: 'visible',

  ':focus': {
    outline: 'none',
  },

  ':hover': {
    color: 'rgba(255,255,255,1)',
    // border: '1px solid rgba(255,255,255,1)',
    backgroundColor: 'rgba(20,40,80,1)',
  }
};


export default prefixAll(s);
