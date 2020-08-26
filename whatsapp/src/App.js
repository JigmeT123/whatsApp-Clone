import React from 'react';
import './app.css';
import Sidebar from './components/SideBars/Sidebar';
import MainChats from './components/mainChat/MainChats';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './auth/Login';

import {useStateValue} from './ReduxStuffs/StateProvider'


function App() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="app">

            {
                !user
                    ? (<Login />)
                    : (
                        <div className="app__body">
                            <BrowserRouter>
                                <Sidebar/>
                                <Switch>
                                    <Route path="/rooms/:roomId">
                                        <MainChats/>
                                    </Route>
                                    <Route path="/">
                                        {/* <MainChats/> */}
                                    </Route>

                                </Switch>
                            </BrowserRouter>
                        </div>
                    )
            }

        </div>
    );
}

export default App;
