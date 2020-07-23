import React, { Component } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Slider from './views/SliderWrap';
import Note from './views/Note';
import './App.css';
type hrefObj = {
  id: number
  name: string
  url: string
};
type State = {
  href: Array<hrefObj>
};
class App extends Component<object,State> { // 用类的方式创建组件
  constructor(props:any) {
    super(props);
    this.state = {
      href: [{
        id: 1,
        name: '轮播图页',
        url: '/slider'
      },
      {
        id: 2,
        name: '说明页',
        url: '/note'
      }]
    }
  }

  render() {
    const { state: { href } } = this;
    const hrefData = href.map((href) => {
        return <p key={href.id}><Link to={`${href.url}/${href.id}`}>{href.name}</Link></p>;
      }
    );
    return (
      <BrowserRouter>
        <div className="box">{ hrefData}
          <Route path="/slider/:id" component={Slider} replace />
          <Route path="/note/:id" component={Note} replace />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
