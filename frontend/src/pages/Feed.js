import React, { Component } from 'react'

import './Feed.css'

class Feed extends Component{
    render(){
        return(
            <section id='post-list'>
                <article>
                    <header>
                        <div className='user-info'>
                            <span>Wilson Azer</span>
                            <span className='place'>Joinville</span>
                        </div>
                        <i class="fa fa-ellipsis-h"></i>
                        
                    </header>
                    <img src='http://localhost:3333/files/lagoa-azul.jpg' alt='imagem do post'></img>

                    <footer>
                        <div className='actions'>
                             <i className="fa fa-heart"></i>
                             <i class="fa fa-comment"></i>
                             <i class="fa fa-paper-plane"></i>
                        </div>

                        <strong>Curtidas 911</strong>

                        <p>
                            Um post massa
                            <span>#omminista #top #react</span>
                        </p>
                    </footer>
                </article>
                <article>
                    <header>
                        <div className='user-info'>
                            <span>Wilson Azer</span>
                            <span className='place'>Joinville</span>
                        </div>
                        <i class="fa fa-ellipsis-h"></i>
                        
                    </header>
                    <img src='http://localhost:3333/files/lagoa-azul.jpg' alt='imagem do post'></img>

                    <footer>
                        <div className='actions'>
                             <i className="fa fa-heart"></i>
                             <i class="fa fa-comment"></i>
                             <i class="fa fa-paper-plane"></i>
                        </div>

                        <strong>Curtidas 911</strong>

                        <p>
                            Um post massa
                            <span>#omminista #top #react</span>
                        </p>
                    </footer>
                </article>
            </section>
        )
    }
}

export default Feed