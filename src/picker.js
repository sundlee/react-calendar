import React from 'react';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import DatePicker from 'rc-calendar/lib/Picker';
import moment from 'moment';
import koKR from 'rc-calendar/lib/locale/ko_KR';

const format = 'YYYY-MM-DD';
const fullFormat = 'YYYY-MM-DD dddd';

const now = moment();

class Picker extends React.Component {
  state = {
    hoverValue: [],
  };


  onHoverChange = (hoverValue) => {
    // console.log(`onHoverChange - hoverValue: ${hoverValue}`);
    this.setState({ hoverValue });
  }


  render() {
    const props = this.props;
    const { showValue } = props;
    const calendar = (
      <RangeCalendar
        hoverValue={this.state.hoverValue}
        onHoverChange={this.onHoverChange}
        type={this.props.type}
        locale={koKR}
        defaultValue={now}
        format={format}
        onChange={props.onChange}
        disabledDate={props.disabledDate}
      />);

    return (
      <DatePicker
        open={this.props.open}
        onOpenChange={this.props.onOpenChange}
        calendar={calendar}
        value={props.value}
      >
        {
          () => {
            return (
              <span>
                <input
                  placeholder="날짜를 선택하세요"
                  style={{ width: 150 }}
                  readOnly
                  value={showValue && (showValue.format(fullFormat) || '')}
                />
                </span>
            );
          }
        }
      </DatePicker>);
  }
}


export default Picker;
