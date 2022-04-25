import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Friends from "./Components/Navbar/Friends/Friends";
import {addPost} from "./Redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar state={props.state.sideBar}/>
                <div className="mainContent">
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                                   addMessage={props.addMessage}
                                                                   updateNewMessageText={props.updateNewMessageText} />}/>

                        <Route path='/profile/*' element={<Profile profilePage={props.state.profilePage}
                                                                   addPost={props.addPost}
                                                                   updateNewPostText={props.updateNewPostText} />}/>
                        <Route path='/news/*' element={<News/>}/>
                        <Route path='/music/*' element={<Music/>}/>
                        <Route path='/settings/*' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
