import React, { Component } from 'react';

class List extends Component {
    state = {
        cards: [
            {
                "content": "Continuar construcciónd el modelo"
            },
            {
                "content": "Realizar las encuestas"
            },
            {
                "content": "Hacer artículo"
            }
        ],
        form: {

        },

        newCard: ""
    }

    handleAdd = () => {
        document.getElementById("newCardButton").hidden = true;

        let form = document.getElementById("form");
        if (form) {
            form.hidden = false;
            document.getElementById("newCard").focus();
        }

        this.setState({ form: { name: "dd" } });
    }

    renderCards() {
        return (
            this.state.cards.map((c, i) => {
                return (
                    <div class="card">
                        <div class="card-body">
                            {c.content}
                        </div>
                    </div>
                );
            })

        );
    }

    handleSubmit = (event) => {
        console.log("Su", this.state.newCard)
        this.setState(state => {
            const cards = state.cards.concat({ content: state.newCard });
            return {
                cards,
                newCard: "",
            };
        });
        this.resetForms();
        event.preventDefault();
    }

    resetForms() {
        document.getElementById("newCard").value = "";
        document.getElementById("form").hidden = true;
        document.getElementById("newCardButton").hidden = false;
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleClose = () => {
        this.resetForms();
    }

    renderForm() {
        if (Object.keys(this.state.form).length !== 0) {
            return (
                <div id="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="newCard" name="newCard" onChange={this.handleChange} />
                        <button type="button" onClick={this.handleClose}>X</button>
                    </form>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="col-4">
                <h1>{this.props.name}</h1>
                {this.renderCards()}
                {this.renderForm()}
                <div id="newCardButton">
                    <button onClick={this.handleAdd}>Añada otra tarjeta</button>
                </div>
            </div>
        );
    }
}

export default List;