import List from './components/list/List.jsx';
import Chat from './components/chat/Chat.jsx';
import Detail from './components/detail/Detail.jsx';
import Login from './components/login/Login.jsx';
import Notification from './components/notification/Notification.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/Firebase.js';
import { useEffect } from 'react';
import { useUserStore } from './lib/userStore.js';

const App = () => {


  const { currentUser , isLoading ,fetchUserInfo } = useUserStore();

  useEffect(() => {
    const onSub = onAuthStateChanged(auth, (user) => {
      
        fetchUserInfo(user?.uid);
    
    });
    return () => {
      onSub();
    }
  }, [fetchUserInfo]);

  if(isLoading) return <div className="loading">Loading........</div>;


  return (
    <div className='container'>
      {currentUser ? (
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