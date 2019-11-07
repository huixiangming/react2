import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Sign from './container/Sign';
import Detail from './container/Detail'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route path='/home'  component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/sign' component={Sign} />
                            <Route path='/topic/:id' component={Detail}/>          
                        </div>
                        <div className="sider">
                            <p>回向明</p>
                            <p>cnodecnode</p>
                            <p>cnodecnode</p>
                            <p>cnodecnode</p>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
