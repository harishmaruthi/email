import React from 'react';
import DeleteButton from '../components/DeleteButton';
import SendButton from '../components/SendButton';
import NavButtons from '../components/NavButtons';

class TailBar extends React.Component {
  state = {
    value: 2,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    let Element;
    if (this.props.isListView)
        Element = <DeleteButton textAlign="right"/>
    else if (this.props.isCreateView)
        Element = <SendButton/>
    else if (!this.props.isListView && !this.props.isCreateView)
        Element = <NavButtons/>

    return (
        Element
    );
  }
}

export default TailBar;
