import './index.css'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/Auth/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function App() {
  const user = useSelector(selectUser);

  return (
    <div className='app'>
      {!user ? <Login /> : (
        <div className='app__body'>
          <Header />
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
