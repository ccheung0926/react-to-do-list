import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./ToDoList.css";

class ToDoList extends Component{
  constructor(props) {
    super(props);
  }
  getDay(today) {
    const day = today.getDay();
    switch(day) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
    }
  }
  getDate(today) {
    const date = today.getDate();
    if(date > 3 && date < 21) {
      return `${date}th`;
    }
    switch (date % 10) {
          case 1:  
            return `${date}st`;
          case 2:  
            return `${date}nd`;
          case 3:  
            return `${date}rd`;
          default: 
            return `${date}th`;
      }
  }
  getToday() {
    const today = new Date(),
      month = "January,February,March,April,May,June,July,August,September,October,November,December"
      .split(",")[today.getMonth()];
    return (
      <section>
        <h1>{this.getDay(today)}, {this.getDate(today)}</h1>
        <p>{month}</p>
      </section>
    );
  }
  render() {
    return(
      <div className="ToDoList">
        <div>
          { this.getToday() }
          <section></section>
        </div>
      </div>
    );
  }
}

export default hot(module)(ToDoList);
