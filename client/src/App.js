import React from 'react';
import './App.css';
import Login from './components/Login';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <AppNavBar />
      <ShoppingList />
    </div>
  );
}

export default App;
