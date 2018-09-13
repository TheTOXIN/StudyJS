import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            url: '',
            avatar_url: '',
            title: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return(
            <div className='container'>
                <img
                    width='100'
                    height='100'
                    src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
                />

                <br/>
                <input className='input' type='text' onChange={this.handleChange.bind(this)}/>
                <br/>
                <button className='button' onClick={this.handleClick}>SEARCH</button>
                <p className='userName'>{this.state.username}</p>
                <img className='avatarUrl' src={this.state.avatar_url} alt=''/>
                <br/>
                <a className='url' href={this.state.url}>{this.state.url}</a>
            </div>
        )
    }

    handleClick() {
        axios.get('https://api.github.com/users/' + this.state.title)
            .then(response => this.setState({
                username: response.data.name,
                avatar_url: response.data.avatar_url,
                url: response.data.url
            }))
            .catch(error => this.setState({
                username: 'NOT FOUND',
                avatar_url: 'https://www.unesale.com/ProductImages/Large/notfound.png',
                url: '404'
            }));
    }

    handleChange(event) {
        this.setState({title: event.target.value})
    }
}

export default App
