import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap'
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import './App.css';

const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <Card>
        <Card.Body className='m-4'>
          <h1>My Todo List</h1>
          <AddTodoForm />
          <br />
          <h3>Task(s)</h3>
          <TodoList />
          <TotalCompleteItems />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
