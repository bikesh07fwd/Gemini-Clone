import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets';
import { Context } from '../../context/Context';
const sidebar = () => {

  const [extended,setExtended] = useState(false)
  const{onSent,prevPrompts,setRecentPrompt} = useContext(Context)
  return (
    <div className='sidebar'>
      <div className='top'>
        <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
        <div className='new_chat'>
          <img src={assets.plus_icon} alt="" />
          {extended?<p>New chat</p>:null}
        </div>
      {extended?
        <div className='Recent'>
          <p className="recent_title">Recent</p>
          <div className='recent_entry'>
            <img src={assets.message_icon} alt="" />
            <p>what is react....</p>
          </div>
        </div>
      :null}
      </div>

      <div className='bottom'>
        <div className='bottom_item'>
          <img src={assets.question_icon} alt="" />
          {extended?<p>Help</p>:null}
        </div>
        <div className='bottom_item'>
          <img src={assets.history_icon} alt="" />
          {extended?<p>Activity</p>:null}
        </div>
        <div className='bottom_item'>
          <img src={assets.setting_icon} alt="" />
          {extended?<p>Setting</p>:null}
        </div>
      </div>
    </div>
  )
}

export default sidebar
