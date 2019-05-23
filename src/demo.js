import React from 'react';
import 'rc-calendar/assets/index.css';
import Picker from './picker';



class Demo extends React.Component {
  state = {
    startValue: null,
    endValue: null,
    startOpen: false,
    endOpen: false,
  };


  onStartOpenChange = (startOpen) => {
    console.log(`onStartOpenChange - startOpen: ${startOpen}`);
    this.setState({
      startOpen,
    });
  }


  onEndOpenChange = (endOpen) => {
    console.log(`onEndOpenChange - endOpen: ${endOpen}`);
    this.setState({
      endOpen,
    });
  }


  onStartChange = (value) => {
    console.log(`onStartChange - startValue: ${value[0]}`);
    this.setState({
      startValue: value[0],
      startOpen: false,
      endOpen: true,
    });
  }


  onEndChange = (value) => {
    console.log(`onEndChange - endValue: ${value[1]}`);
    this.setState({
      endValue: value[1],
    });
  }


  disabledStartDate = (endValue) => {
    // console.log(`disabledStartDate - endValue: ${endValue}`);
    if (!endValue) {
      return false;
    }
    const startValue = this.state.startValue;
    if (!startValue) {
      return false;
    }
    return endValue.diff(startValue, 'days') < 0;
  }


  render() {
    const state = this.state;
    return (
      <div style={{ width: 350, margin: 20 }}>
        <p>
          시작시간：
          <Picker
            onOpenChange={this.onStartOpenChange}
            open={this.state.startOpen}
            type="start"
            showValue={state.startValue}
            value={[state.startValue, state.endValue]}
            onChange={this.onStartChange}
          />
        </p>

        <p>
          종료시간:
          <Picker
            onOpenChange={this.onEndOpenChange}
            open={this.state.endOpen}
            type="end"
            showValue={state.endValue}
            disabledDate={this.disabledStartDate}
            value={[state.startValue, state.endValue]}
            onChange={this.onEndChange}
          />
        </p>
        <p>
          startValue={this.state.startValue && (this.state.startValue.format('YYYY-MM-DD dddd') || '')},
          endValue={this.state.endValue && (this.state.endValue.format('YYYY-MM-DD dddd') || '')}
        </p>
      </div>);
  }
}


export default Demo;
