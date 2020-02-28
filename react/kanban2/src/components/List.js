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

        newCard: "",

        form: false
    }

    handleAdd = () => {
        document.getElementById(`newCardButton${this.props.name}`).hidden = true;
        let form = document.getElementById(`form${this.props.name}`);
        if (form) {
            form.hidden = false;
            document.getElementById(`newCard${this.props.name}`).focus();
        }
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
        document.getElementById(`newCard${this.props.name}`).value = "";
        document.getElementById(`form${this.props.name}`).hidden = true;
        document.getElementById(`newCardButton${this.props.name}`).hidden = false;
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

        return (
            <div id={`form${this.props.name}`}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id={`newCard${this.props.name}`} name="newCard" onChange={this.handleChange} />
                    <button type="button" onClick={this.handleClose}>X</button>
                </form>
            </div>
        );

    }

    componentDidMount() {
        if (!this.state.form) {
            document.getElementById(`form${this.props.name}`).hidden = true;
        }
    }

    render() {
        return (
            <div className="col-4">
                <h1>{this.props.name}</h1>
                {this.renderCards()}
                {this.renderForm()}
                <div id={`newCardButton${this.props.name}`}>
                    <button onClick={this.handleAdd}>Añada otra tarjeta</button>
                </div>
            </div>
        );
    }
}

export default List;