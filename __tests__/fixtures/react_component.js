// @flow
/* eslint-disable react/prop-types */

import React, { Component } from 'react'

type TestComponentDefaultProps = {};

type TestComponentProps = TestComponentDefaultProps & {
  children?: mixed,
  className?: string
};

type TestComponentState = void;

export class TestComponent extends Component<TestComponentDefaultProps, TestComponentProps, TestComponentState> {
  static defaultProps = {}

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillReceiveProps(nextProps: TestComponentProps) {}

  // componentDidReceiveProps() {}

  // shouldComponentUpdate(nextProps: TestComponentProps, nextState: TestComponentState) {}

  // componentWillUpdate(nextProps: TestComponentProps, nextState: TestComponentState) {}

  // componentDidUpdate(prevProps: TestComponentProps, prevState: TestComponentState) {}

  // componentWillUnmount() {}

  render() {
    const {
      children,
      className,
      ...other
    } = this.props
    return (
      <div
        className={ className }
        { ...other }
      >
        { children }
      </div>
    )
  }
}
