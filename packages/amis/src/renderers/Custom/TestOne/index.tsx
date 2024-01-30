import React from 'react';
import { RendererProps, FormControlProps, Renderer, FormItem, registerRenderer } from 'amis-core';
import {BaseSchema} from '../../../Schema';


export interface TestOneSchema extends BaseSchema {
    type: 'test-one'
}

interface TestOneProps extends RendererProps {
    tip?: string
}

interface TestOneState {

}


export class TestOne extends React.Component<TestOneProps, TestOneState> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {

  }

  componentDidUpdate() {
    console.log('this.props', this.props)
  }

  render() {
    const {tip} = this.props;
    return (
      <div>
        hello test one <p>{tip}</p>
      </div>
    )
  }
}

// 装饰器注册
@Renderer({
  type: 'test-one'
})
export class TestOneRenderer extends TestOne {}
