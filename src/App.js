import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpinWheel from './Components/SpinWheel.jsx';
import Appbar from './Components/Appbar.jsx';
import UserTable from './UserTable.jsx';
import UserForm from './Components/UserForm.jsx';
import Card from './Components/Card.jsx';
import List from './Components/List.jsx';
import Entry from './Components/Entry.jsx';
function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Thein Zaw', age: 25 },
    { id: 2, name: 'Myint Thu Aung', age: 30 },
  ]);
  
  return (
    <Router>
      <Appbar />
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/home" element={<UserTable users={users} setUsers={setUsers} />} />
          <Route path="/form" element={<UserForm users={users} setUsers={setUsers} />} />
          <Route path="/spinwheel" element={<SpinWheel />} />
          <Route path='/card' element={<Card />}/>
          <Route path='/List' element={<List />}/>
          <Route path='/Entry' element={<Entry/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
