import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './Components/Appbar.jsx';
import routes from './routes/index.jsx';

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
          {/* Dynamic routes from your routes/index.jsx */}
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
