import React, { useState } from 'react';
import "./chat.css"
import EmojiPicker from 'emoji-picker-react';

function Chat() {
  const [open, setOpen] = useState(false)
  const [text, settext] = useState("")

  const handleEmoji = (e) => {
    settext((prev) => prev + e.emoji);
    setOpen(false);
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="../../../../public/avatar.png" alt="" />
          <div className="texts">
            <span>Labani</span>
            <p>Lorem ipsum dolor sit amet .</p>
          </div>
        </div>
        <div className="icons">
          <img src="../../../../public/phone.png" alt="" />
          <img src="../../../../public/video.png" alt="" />
          <img src="../../../../public/info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="../../../../public/avatar.png" alt="" />
          <div className="texts">

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis, modi, iusto explicabo eum ut ex perspiciatis alias repudiandae laudantium unde, quos possimus accusantium? Nisi asperiores iusto quis consectetur obcaecati!</p>
            <span>1 min ago</span>

          </div>
        </div>
        <div className="message own">
          <div className="texts">

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis, modi, iusto explicabo eum ut ex perspiciatis alias repudiandae laudantium unde, quos possimus accusantium? Nisi asperiores iusto quis consectetur obcaecati!</p>
            <span>1 min ago</span>

          </div>
        </div>
        <div className="message">
          <img src="../../../../public/avatar.png" alt="" />
          <div className="texts">

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis, modi, iusto explicabo eum ut ex perspiciatis alias repudiandae laudantium unde, quos possimus accusantium? Nisi asperiores iusto quis consectetur obcaecati!</p>
            <span>1 min ago</span>

          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://avatars.githubusercontent.com/u/143218735?v=4?s=400" alt="" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis, modi, iusto explicabo eum ut ex perspiciatis alias repudiandae laudantium unde, quos possimus accusantium? Nisi asperiores iusto quis consectetur obcaecati!</p>
            <span>1 min ago</span>

          </div>
        </div>
        <div className="message">
          <img src="../../../../public/avatar.png" alt="" />
          <div className="texts">

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis, modi, iusto explicabo eum ut ex perspiciatis alias repudiandae laudantium unde, quos possimus accusantium? Nisi asperiores iusto quis consectetur obcaecati!</p>
            <span>1 min ago</span>

          </div>
        </div>
        
        </div>
        <div className="bottom">
          <div className="icons">
            <img src="../../../../public/img.png" alt="" />
            <img src="../../../../public/camera.png" alt="" />
            <img src="../../../../public/mic.png" alt="" />
          </div>
          <input type="text" placeholder='Type a message..........'
            value={text}
            onChange={e => settext(e.target.value)} />
          <div className="emoji">
            <img src="../../../../public/emoji.png" alt="" onClick={() => setOpen(prev => !prev)} />
            <div className="picker">
              <EmojiPicker open={open} onEmojiClick={handleEmoji} />
            </div>
          </div>
          <button className='sendButton'>Send</button>
        </div>
      </div>
    
  )
}

export default Chat