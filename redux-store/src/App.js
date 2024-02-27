
import React from "react";
import { Provider } from "react-redux";
import store from "./Component/store";
import Addtask from "./Component/addTask";
import ListTask from './Component/listtask';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Provider store={store}>
        <Addtask />
        <ListTask />
    </Provider>
    </div>
  );
}

export default App;
