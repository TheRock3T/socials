import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import Videos from "./Components/Videos/Videos";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";


const App = (props) => {



    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />}/>
                    <Route path='/Profile' render={() => <Profile postData={props.postData} />}/>
                    <Route path='/Music' render={() => <Music />}/>
                    <Route path='/Videos' render={() => <Videos />}/>
                    <Route path='/Settings' render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
