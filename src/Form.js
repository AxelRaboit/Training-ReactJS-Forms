import React, { Component } from 'react';
import Car from './Car'

class Form extends Component {

    state = {
        displayInformations: false,
        username: '',
        color: '',
        colors: [
            '','blue','red','green','orange','pink'
        ],
        comment: ''
    }

    handlePseudo = (e) => {
        this.setState({
            username: e.target.value
        })   
    }

    handleColor = (e) => {
        this.setState({
            color: e.target.value
        })   
    }

    handleComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.setState({
            displayInformations: true
        })
        console.log(`Username: ${this.state.username} Color: ${this.state.color} Comment: ${this.state.comment}`);

    }

    
    
    render() {

        const displayInformationsTrue = {
            display: 'block'
        }

        const displayInformationsFalse = {
            display: 'none'
        }

        console.log(this.state.displayInformations);

        return (

            <div>
                <Car color={this.state.color}/>
                <h1>Commentaire</h1>
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Pseudo</label>
                        <input onChange={this.handlePseudo} type="text" value={this.state.username}/>
                    </div>
                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}>{color}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label>Commentaire</label>
                        <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                    </div>
                    <button>Valider</button>
                </form>

                <div style={this.state.displayInformations === true ? displayInformationsTrue : displayInformationsFalse}>
                    <h2>Resultat</h2>
                    <p>Pseudo: {this.state.username}</p>
                    <p>Couleur choisi: {this.state.color}</p>
                    <p>Commentaire: {this.state.comment}</p>
                </div>
            </div>
        );
    }
}

export default Form;
