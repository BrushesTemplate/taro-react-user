import { Component, PropsWithChildren } from 'react'
import './app.scss'
import {safeArea} from "./utils";

class App extends Component<PropsWithChildren> {

  componentDidMount () {
    safeArea()
  }

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
