import style from './style';
import prefixAll from 'inline-style-prefixer/static';

const s = Object.create(style);

s.topHeader = {
  backgroundColor: 'rgba(20,20,20,1)',
  display: 'block',
  boxSizing: 'border-box',
  // border: '1px solid rgba(230,230,230,1)',
  overflow: 'hidden',
  cursor: 'default',
  userSelect: 'none',
  // 'zoom': '1',
  // ':before': {
  //   content: '" "',
  //   display: 'table',
  // },
  // ':after': {
  //   content: '" "',
  //   display: 'table',
  //   clear: 'both',
  // },
};

s.sidebarToggleBtn = {
  color: 'rgba(230,230,230,1)',
  padding: '4px',

  ':hover': {
    color: 'rgba(255,255,255,1)',
  },
};

s.githubAuthBtn = {
  color: 'rgba(230,230,230,1)',
  backgroundColor: 'rgba(20,40,60,1)',
  padding: '4px 6px',
  float: 'right',
  // boxSizing: 'border-box',
  // border: '1px solid rgba(230,230,230,1)',
};

export default prefixAll(s);
