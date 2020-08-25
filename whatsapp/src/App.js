import React, {useState} from 'react';
import './app.css';
import Sidebar from './components/SideBars/Sidebar';
import MainChats from './components/mainChat/MainChats';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './auth/Login';

function App() {
    const [user, setUser] = useState(null)
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
