import SpinWheel from '../Components/SpinWheel.jsx';
import Card from '../Components/Card.jsx';
import List from '../Components/List.jsx';
import Entry from '../Components/Entry.jsx';
import OutCome from '../Components/OutCome.jsx';

const routes = [
  { path: '/', element: <SpinWheel /> },
  { path: '/list', element: <List /> },
  { path: '/entry', element: <Entry /> },
  { path: '/card', element: <Card /> },
  { path: '/outcome', element: <OutCome /> },
];

export default routes;
