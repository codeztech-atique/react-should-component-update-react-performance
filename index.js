import React, { Component } from 'react';
import { render } from 'react-dom';

class Foo extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.foo !== nextProps.foo;
  }

  render() {
    console.log('Foo is rendering!');
    return <div>Foo {this.props.foo}</div>;
  }
}

const Bar = ({ bar }) => {
  console.log('Bar is rendering!');
  return <div>Bar {bar}</div>;
};

const FooBarGroup = ({ foo, bar }) => {
  console.log('FooBarGroup is rendering!');
  return (
    <div>
      <Foo foo={foo} />
      <Bar bar={bar} />
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 0,
      bar: 0,
    };
    this.handleFooClick = this.handleFooClick.bind(this);
    this.handleBarClick = this.handleBarClick.bind(this);
  }

  handleFooClick(e) {
    e.preventDefault();
    const newFoo = this.state.foo + 1;
    this.setState({ foo: newFoo });
  }

  handleBarClick(e) {
    e.preventDefault();
    const newBar = this.state.bar + 1;
    this.setState({ bar: newBar });
  }

  render() {
    const { foo, bar } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleFooClick}>Foo</button>
        <button onClick={this.handleBarClick}>Bar</button>
        <FooBarGroup foo={foo} bar={bar} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
