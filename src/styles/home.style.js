import style from './style';
import prefixAll from 'inline-style-prefixer/static';

const s = Object.create(style);

s.pageContainer = { 
  display: 'flex',
  // flexFlow: 'column', 
  flexDirection: 'column',
  height: '100%',
  // bottom: '0',
  overflow: 'hidden',
};

s.topHeader = {
  // backgroundColor: 'rgba(20,20,20,1)',
  display: 'block',
  boxSizing: 'border-box',
  // border: '1px solid rgba(230,230,230,1)',
  overflow: 'hidden',
  cursor: 'default',
  userSelect: 'none',
  
  // flex: '0 1 auto', 
  flexGrow: '0',
  flexShrink: '1',
  flexBasis: 'auto',

  // position: 'fixed'


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

s.contentContainer = {
  // flex: '1 1 auto', 
  flexGrow: '1',
  flexShrink: '1',
  flexBasis: 'auto',
  backgroundColor: 'rgba(30,60,100,1)',
  // height: '100%',
  // marginTop: '30px',
  marginBottom: '1000px',
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

s.menuBtnsContainer = {
  // color: 'rgba(230,230,230,1)',
  // backgroundColor: 'rgba(20,40,60,1)',
  // padding: '4px 6px',
  float: 'right',
};


s.sideBarContent = {
  backgroundColor: 'rgba(20,40,60,1)',
  height: '100%',
};

export default prefixAll(s);
// export default s;
