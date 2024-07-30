import { useState } from 'react'
import "./addUser.css";
import { toast } from 'react-toastify';
import { collection,query, where, getDocs, serverTimestamp ,setDoc ,doc } from 'firebase/firestore';
import { db } from '../../../../lib/Firebase.js';

const AddUser = () => {


  const [user, setUser] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));

      const querySnapShot = await getDocs(q);
      if (!querySnapShot.empty) {

        setUser(querySnapShot.docs[0].data());
        toast.success("User found");

      } else {

        toast.error("User not found");
      }


    } catch (err) {
      console.log(err);
      toast.error(err.message);

    }

  }

  const handleAdd = async (e) => {
    e.preventDefault();
    const chatRef = collection(db,"chats")
    const userChatsRef = collection(db,"userchats")
    try {
      const newchatRef = doc(chatRef)
        await setDoc(newchatRef,{
        createAt: serverTimestamp(),
        messages:[]
      })
      console.log(newchatRef.id);
      
  }catch (err) {
    console.log(err);
    toast.error(err.message);
  }
}
  return (
    <div className='addUser'>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder='Name' name='username' />
        <button>Search</button>
      </form>
      {user && <div className="user">
        <div className="detail">
          <img src={user.avatar || "../../../public/avatar.png"} alt="" />
          <span>{user.username}</span>
        </div>
        <button onClick={handleAdd}>Add</button>

      </div>}
    </div>
  )
}

export default AddUser