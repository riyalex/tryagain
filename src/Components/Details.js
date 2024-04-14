import React from 'react'
import './Details.css';
import lawlogo from './Assets/lawlogo.svg';
//import law from './Assets/chatgpt.svg';
import addBtn from './Assets/add-30.png';
import messIcon from './Assets/message.svg';
import home from './Assets/home.svg';
import saved from './Assets/bookmark.svg';
import rocket from './Assets/rocket.svg';
import sendBtn from './Assets/send.svg';
//import user from './Assets/user.svg';
import logo from './Assets/chatgptLogo.svg';
import user from './Assets/user-icon.png';

function Details() {
  return(
    <div className='Details'>
      <div className="sideBar">
        <div className='upperSide'>
          <div className='upperSideTop'><img src={lawlogo} alt="logo" className='logo' /></div>
          <button className='midBtn'><img src={addBtn} alt="" className='addBtn' />New Chat</button>
          <div className='uppderSideBottom'>
            <button className='query'><img src={messIcon} alt="Query" />hi</button>
            <button className='query'><img src={messIcon} alt="Query" />hi</button>
          </div>
        </div>
        <div className='lowerSide'>
            <div className='listItems'><img src={home} alt='Home' className='listItemsImg'/>Home</div>
            <div className='listItems'><img src={saved} alt='Saved' className='listItemsImg'/>Saved</div>
            <div className='listItems'><img src={rocket} alt='Upgrade to Pro' className='listItemsImg'/>Upgrade to Pro</div>
        </div>
      </div>
      {/*<div class="line"></div>*/}
      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img className='img' src={user} alt='' /><p className='text'>lorem 2</p>
          </div>
          <div className='chat bot'>
            <img className='img' src={logo} alt='' /><p className='text'>lorem 2</p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Send a message' /><button className='send'><img src={sendBtn} alt='Send' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Details


