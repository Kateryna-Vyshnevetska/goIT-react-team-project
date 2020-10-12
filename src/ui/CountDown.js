import React, { Component } from "react";
import moment from "moment";
import "./countdown.css";



class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      secounds: 0,
    };
    this.x = null;
    this.deadline = null;
  }

  count() {
    var now = new Date().getTime();
    var t = this.deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    var seconds = Math.floor((t % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");
    this.setState({ days, minutes, hours, seconds });
    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
      });
    }
  }
  componentDidMount() {
    const dayFor = new Date();
    dayFor.setDate(dayFor.getDate() + 14);
    moment.locale("en");
    const dayForStart = moment(dayFor).format("LLL");

    this.deadline = new Date("oct 22, 2020 00:00:00").getTime();

    this.x = setInterval(this.count, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.x);
    this.deadline = null;
  }

  render() {
    const { days, seconds, hours, minutes, time_up } = this.state;
    return (
      <div className="clock-section">
        <h4 className="title-clock">Ваша подписка истекает через</h4>
        <div id="clockdiv">
          <div>
            <span className="days" id="day">
              {days}
            </span>
            <div className="smalltext">Day</div>
          </div>
          <div>
            <span className="hours" id="hour">
              {hours}
            </span>
            <div className="smalltext">Hour</div>
          </div>
          <div>
            <span className="minutes" id="minute">
              {minutes}
            </span>
            <div className="smalltext">Min</div>
          </div>
          <div>
            <span className="seconds" id="second">
              {seconds}
            </span>
            <div className="smalltext">Sec</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountDown;
