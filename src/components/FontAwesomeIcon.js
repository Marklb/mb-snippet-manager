import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
// import s from '../styles/fontAwesomeIcon.style'


/*
*/
class FontAwesomeIcon extends React.Component {
  static propTypes = {
    
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const iconStyle = this.props.iconStyle;
    const iconName = this.props.iconName;
    const iconSize = this.props.iconSize;
    const extraClassNames = this.props.extraClassNames;
    const onClickBtn = this.props.onClickBtn;
    return (
      <i style={(iconStyle) ? iconStyle : {}}
        className={`fa fa-${iconName} fa-${iconSize} ${extraClassNames}`}
        onClick={onClickBtn} 
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp} />
    );
  }


};

export default Radium(FontAwesomeIcon)
