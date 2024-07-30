import List from './components/list/List.jsx';
import Chat from './components/chat/Chat.jsx';
import Detail from './components/detail/Detail.jsx';
import Login from './components/login/Login.jsx';
import Notification from './components/notification/Notification.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/Firebase.js';

const App = () => {

  const user = false;
  useEffect(() => {
    const onSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    })
    return () => {
      onSub();
    }
  }, []);


  return (
    <div className='container'>
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (<Login />)}
      <Notification />

    </div>
  )
}

export default App