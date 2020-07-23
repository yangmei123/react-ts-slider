/**
 *
 * @authors lml
 * @date    2017-12-29
 * @version $Id$
 */

import React, { Component } from 'react';
type State = {
  note: Array<String>
  timer: any
  date: string
}

class Note extends Component<object, State> {
  constructor(props:any) {
    super(props);
    this.state = {
      note: [
       'react-router,4.0以后，嵌套的路由需要单独放置在嵌套的根component中去处理路由，否则会一直有warning: You should not use Route component and Route children in the same route',
       '在路由createHashHistory.js文件中，跳转路由，如果和现在浏览的路由是相同的，会报警告，说是相同的路由：Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack',
       'react-router,4.0以后，如果有Link要在Router外使用，应该用<BrowserRouter></BrowserRouter>包裹在外层',
       'React 16.9,警告componentWillMount，componentWillReceiveProps ，componentWillUpdate将被弃用，但是不会报错，应对应的加上UNSAFE_前缀，并且安装 npx react-codemod rename-unsafe-lifecycles插件',
       '使用 Typescript 的过程中， 第三方类库添加声明文件。1.可以从 TypeSearch(https://microsoft.github.io/TypeSearch/) 中找到并安装这些第三方库的类型声明文件。2.手动声明在src目录下新建一个types目录,然后在types 目录下新建一个 index.d.ts文件然后在文件中添加代码 declare module "第三方类库名"。declare module "XXXX";',
       '改写了入口文件的文件类型，最好重启项目。否则容易报错找不到对应的文件'
       ],
       timer: 0,
       date: 'date'
    };
  }

  componentDidMount() {
    const timer = setInterval(() => { 
      this.setState({date: (new Date()).toString()}) 
    }, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  
  render() {
    const noteData = this.state.note.map((data, index) => <li key={index}>{data}</li> );
    const { state: { date } } = this;
    return (
      <div className="box">
        <h2>使用react-router-dom做路由跳转。</h2>
        <h3>{}</h3>
        <ol>{noteData}</ol>
        <p>{date}</p>
      </div>
    );
  }
}

export default Note;
