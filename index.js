/** @format */
import React, {Component} from "react";
import {AppRegistry, View, Text} from 'react-native';
import {Provider } from "react-redux";
import store from "./store";
import NewPost from './components/NewPost';

const handleSubmit = values=>{
    alert("submitting form with values=${values}");
};

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <NewPost handleSubmit={handleSubmit}/>
            </Provider>
        );
    }
        
};

AppRegistry.registerComponent("uni_market", () => App);
