
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import App from './components/App/App';
import Home from './components/Home/Home';
// import Denglu from './components/Denglu_Zhuce/Denglu';
// import Zhuce from "./components/Denglu_Zhuce/Zhuce";
import Personal_page from './components/Personal_page/Personal_page';
import Miju from './components/Miju/Miju';
import Miyou from './components/Miyou/Miyou';
import Jiaoyou from './components/Jiaoyou/Jiaoyou';
import Zhuchao from './components/Zhuchao/Zhuchao';
import Miju_detail from './components/Miju_detail/Miju_detail';


render((
    //所有跳转在此绑定路径与跳转后的组件
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>

            {/*<Route path="/Denglu&Zhuce" component={Denglu}/>*/}
            {/*<Route path="/Zhuce" component={Zhuce}/>*/}

            <Route path="/Miju/:searchName/:searchCity" component={Miju}/>
            <Route path="/Miju/:id" component={Miju_detail}/>

            <Route path="/Miyou" component={Miyou}/>
            <Route path="/Jiaoyou" component={Jiaoyou}/>
            <Route path="/Zhuchao" component={Zhuchao}/>

            <Route path="/Personal_page" component={Personal_page}/>

        </Route>
    </Router>
), document.getElementById('app'))//渲染到id为app的div上

