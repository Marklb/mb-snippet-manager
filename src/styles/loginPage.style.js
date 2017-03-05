import style from './style';
import prefixAll from 'inline-style-prefixer/static';

const s = Object.create(style);

s.container = {
  height: '100%',
  position: 'relative',
  backgroundColor: 'rgba(20,70,60,1)',
};

s.loginBtn = {
  color: 'rgba(230,230,230,1)',
  backgroundColor: 'rgba(20,40,60,1)',
  padding: '12px 14px',
  margin: '0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxSizing: 'border-box',
  border: '1px solid rgba(230,230,230,1)',
  cursor: 'default',
  userSelect: 'none',

  ':hover': {
    color: 'rgba(255,255,255,1)',
    border: '1px solid rgba(255,255,255,1)',
    backgroundColor: 'rgba(20,40,80,1)',
  },
};

export default prefixAll(s);
