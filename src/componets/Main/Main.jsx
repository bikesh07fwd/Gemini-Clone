import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {


    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)


  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className='main_container'>

            {!showResult?
            <>
                <div className='greet'>
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Who is the world best footballer</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Suggest some best food-items</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>What is the full form of HTML</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>what is the literacy rate of india</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='Result'>
                <div className="result_title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result_data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
            }

            <div className="bottom_main">
                <div className="search_box">
                    <input onChange={(e)=>setInput(e.target.value)} value = {input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom_info'>
                     Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
