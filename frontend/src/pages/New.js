import React, { Component } from 'react'
import './New.css'

import api from '../services/api'

class New extends Component{
    state ={
        image: null,
        author:'',
        place:'',
        description:'',
        hastags:''
    }
    handleSubmit = async e =>{
        e.preventDefault()
        
        const data = new FormData()

        data.append( 'image', this.state.image )
        data.append( 'author', this.state.author )
        data.append( 'place', this.state.place )
        data.append( 'description', this.state.description )
        data.append( 'hastags', this.state.hastags )

        await api.post('posts', data )

        this.props.history.push('/')
  
    }

    handleImageChange = e =>{
        this.setState( { image : e.target.files[0] } )
    }

    handleChange = e =>{
        this.setState( { [ e.target.name] : e.target.value } )
    }

    render(){
        return(
            <form id='new-post' onSubmit={ this.handleSubmit } >
                <input type='file' onChange= { this.handleImageChange } />
                <input 
                    type='text' 
                    name='author' 
                    placeholder='Autor do Post'
                    onChange= { this.handleChange }
                    value = { this.state.author }
                 />
                <input 
                     type='text' 
                     name='place' 
                     placeholder='Lugar de origem'
                     onChange= { this.handleChange }
                     value= { this.state.place }
                />
                <input 
                     type='text' 
                     name='description' 
                     placeholder='Descrição do Post'
                     onChange= { this.handleChange }
                     value = { this.state.description }
                />
                <input 
                     type='text' 
                     name='hastags' 
                     placeholder='Hastags'
                     onChange={ this.handleChange }
                     value={ this.state.hastags }
                />
                <button type='submit' name='send'>Cadastrar</button> 
            </form>
        )
    }
}

export default New