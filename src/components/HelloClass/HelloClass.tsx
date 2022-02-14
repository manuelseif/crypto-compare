import React, { Component } from "react";

interface IState {
  count: number;
}

export default class HelloClass extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }

  componentDidMount(){
    this.increaseCounter()
  }

  helloText(){
    return <h1>HelloClass : {this.state.count} </h1>
  }

  render() {
    return (
      <div>
        {this.helloText()}
        <button onClick={this.increaseCounter}>Click me</button>
      </div>
    );
  }
}
