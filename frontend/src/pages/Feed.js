import React, { Component } from 'react'
import io from 'socket.io-client'

import './Feed.css'
import api from '../services/api'

class Feed extends Component{
    state={
        feed: []
    }

    async componentDidMount(){
        
        this.registerToSocket()

        const response = await api.get('/posts')
        
        this.setState({ feed: response.data })
        console.log( this.state.feed)
    }

    handleLike = async id =>{
        await api.post(`/posts/${id}/like`)
    }
    registerToSocket = () =>{
        const socket = io('http://localhost:3333')

        socket.on('post', newPost =>{
            this.setState( { feed: [ newPost, ...this.state.feed ] } )
        })

        socket.on('like', postLike =>{
            this.setState({ feed : this.state.feed.map(post =>
                post._id === postLike._id ? postLike : post
            ) })
        })
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
                 <button type='button' onClick={ ()=> this.handleLike(post._id) }>
                    <i className="fa fa-heart"></i>
                 </button>
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