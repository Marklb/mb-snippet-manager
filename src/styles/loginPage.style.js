import style from './style';
import prefixAll from 'inline-style-prefixer/static';

const s = Object.create(style);

s.container = {
  margin: '0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxSizing: 'border-box',
  // border: '1px solid rgba(230,230,230,1)',
  textAlign: 'center',
};

s.title = {
  marginBottom: '20px',
  fontFamily: 'Hack, monospace',
  fontSize: '40px',
  fontWeight: '800px',
  color: 'rgba(230,230,230,1)',
  justifyContent: 'space-between',
  cursor: 'default',
  textShadow: '0px 0px 7px rgba(0, 0, 0, 0.8)',
  transition: 'background 0.5s ease',

  ':hover': {
    textShadow: '0px 0px 7px rgba(20,40,80,1)',
  }
};

s.loginBtn = {
  color: 'rgba(230,230,230,1)',
  backgroundColor: 'rgba(20,40,60,1)',
  padding: '12px 14px',
  margin: '0',
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  boxSizing: 'border-box',
  border: '1px solid rgba(230,230,230,1)',
  cursor: 'default',
  userSelect: 'none',
  display: 'inline-block',

  ':hover': {
    color: 'rgba(255,255,255,1)',
    border: '1px solid rgba(255,255,255,1)',
    backgroundColor: 'rgba(20,40,80,1)',
  },
};

export default prefixAll(s);
