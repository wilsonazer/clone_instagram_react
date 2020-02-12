import React, { Component } from 'react'
import './New.css'

class New extends Component{
    render(){
        return(
            <form id='new-post'>
                <input type='file'/>
                <input type='text' name='author' placeholder='Autor do Post'/>
                <input type='text' name='place' placeholder='Lugar de origem'/>
                <input type='text' name='description' placeholder='Descrição do Post'/>
                <input type='text' name='hastags' placeholder='Hastags'/>
                <button type='submit' name='send'>Cadastrar</button> 
            </form>
        )
    }
}

export default New