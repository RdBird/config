// @flow
/* eslint-disable react/prop-types */

import React, { Component } from 'react';

type TestComponentDefaultProps = {};

type TestComponentProps = TestComponentDefaultProps & {
  children?: mixed,
  className?: string,
};

type TestComponentState = void;

export class TestComponent extends Component<
  TestComponentDefaultProps,
  TestComponentProps,
  TestComponentState
> {
  static defaultProps = {};

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps: TestComponentProps) {}

  // componentDidReceiveProps() {}

  // shouldComponentUpdate(nextProps: TestComponentProps, nextState: TestComponentState) {}

  // componentWillUpdate(nextProps: TestComponentProps, nextState: TestComponentState) {}

  // componentDidUpdate(prevProps: TestComponentProps, prevState: TestComponentState) {}

  // componentWillUnmount() {}

  handleClick = () => {
    console.warn('Clicked!');
  };

  render() {
    const { children, className, ...other } = this.props;
    return (
      <div className={className} data-test="mytest" {...other}>
        <div data-label="Self closing" />
        <button onClick={this.handleClick} data-test-1 data-test-2>
          Click Me
        </button>

        <button
          onClick={this.handleClick}
          data-test-1
          data-test-2
          data-test-3
          data-test-4
        >
          Click Me
        </button>
        {children}
      </div>
    );
  }
}
