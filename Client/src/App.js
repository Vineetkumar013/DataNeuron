import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Layout from './Task 1/components/layout';
import YourComponent from "./Task 2/dataTask/Task2";
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/task1" className="nav-link">Task 1</Link>
            </li>
            <li>
              <Link to="/task2" className="nav-link">Task 2</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/task1" element={<Layout />} />
          <Route path="/task2" element={<YourComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
