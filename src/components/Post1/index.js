import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post1() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="proa.jpg" />

                    <p>Instituto Proa  </p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="proa2.png"/>
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
                    <span>100000000 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>Instituto Proa</span> 

😱 Quer estudar e trabalhar com programação? Essa é a sua oportunidade! 👾

<p>💻 Inscrições abertas para o curso de programação do PROA.</p>

🤓 Você pode contar com auxílio-transporte, notebook e uniforme, tudinho para você se dedicar ao curso sem problemas.


<p>O PROPROFISSÃO também apoia no desenvolvimento comportamental e cultural do aluno.</p>

<p>Informações sobre o curso:</p>

✅ É 100% gratuito
<p>✅ Disponibilizamos computador, uniforme e material para fazer as aulas</p>
✅ Formação em Programação Java com certificação pelo Senac
<p>✅ Acompanhamento pedagógico durante todo o curso</p>
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 1 HORA</time>
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





