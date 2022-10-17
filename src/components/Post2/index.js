import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post2() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="wow.jpg" />

                    <p>Wowparaquedismo </p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="para.png"/>
            </div>

            

            <div className="footer-post" >
                <IconContext.Provider value={{size: "25px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>10.0000000 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <strong>Wowparaquedismo</strong> Se der um medo na hora de pular do avião, vai com medo mesmo!
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 10 HORA</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>
                    

                    

                </div>

            
        
            </div>

            
        </>

        

    )

    
}





