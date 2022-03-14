import './index.css'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/Auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './store/userSlice';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import { auth } from './firebase';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //User is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))

      } else {
        //User isn't logged in
        dispatch(logout)
      } 
    })
  }, [])

  return (
    <div className='app'>
      {!user ? <Login /> : (
          <>
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Feed />
              {/* Widgets */}
            </div>
          </>
      )}
      <Footer />
    </div>
  );
}

export default App;
