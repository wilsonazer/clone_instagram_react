import React, { Component } from 'react'
import api from '../services/api'

import './Feed.css'

class Feed extends Component{
    state={
        feed: []
    }

    async componentDidMount(){
        const response = await api.get('/posts')
        
        this.setState({ feed: response.data })
        console.log( this.state.feed)
    }

    henderUserFedd = ( post ) => (
        <article key={ post._id }>
        <header>
            <div className='user-info'>
                <span>{  post.image }</span>
                <span className='place'>{ post.place}</span>
            </div>
            <i className="fa fa-ellipsis-h"></i>
            
        </header>
        <img src={ `http://localhost:3333/files/${ post.image }` } alt={ post.image} />

        <footer>
            <div className='actions'>
                 <i className="fa fa-heart"></i>
                 <i className="fa fa-comment"></i>
                 <i className="fa fa-paper-plane"></i>
            </div>

            <strong>Curtidas { post.likes  }</strong>

            <p>
                { post.description }
                <span>{ post.hastags }</span>
            </p>
        </footer>
    </article>   
    )
    render(){
        return(
            <section id='post-list'>
               { this.state.feed.map( this.henderUserFedd ) }
            </section>
        )
    }
}

export default Feed