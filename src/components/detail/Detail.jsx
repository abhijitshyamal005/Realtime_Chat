import"./detail.css";
import { auth } from '../../lib/Firebase.js';

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="../../../public/avatar.png" alt="" />
        <h2>Abhijit</h2>
        <p>Ami ja ka tomar</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="../../../public/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="../../../public/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>privacy & help</span>
            <img src="../../../public/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="../../../public/arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
              <img src="../../../public/avatar.png" alt="" />
              <span>294928401.png</span>
              </div>
            
            <img src="../../../public/download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="../../../public//avatar.png" alt="" />
              <span>294928401.png</span>
              </div>
            
            <img src="../../../public/download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
              <img src="../../../public/avatar.png" alt="" />
              <span>294928401.png</span>
              </div>
            
            <img src="../../../public/download.png" alt="" className="icon" />
            </div>

          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="../../../public/arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block user</button>
        <button className='logout' onClick={()=>auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail