import { Component } from "react";
import check from './imageThree.png';


export class TodoList extends Component {
    state = {
        userInput: "",
        todoList: []
    }

    onChangeEvent(e) {
        this.setState( {userInput: e} );
        }
    
    addItem(input) {
        if (input === "") {
            alert( "Please enter your plan")
        }
        else {
        let listArray = this.state.todoList;
        listArray.push(input);
        this.setState( {todoList: listArray, userInput: ""})
        console.log(listArray)
    }
}

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle ("crossed");
        
    }

    deleteItem() {
        let listArray = this.state.todoList;
        listArray = [];
        this.setState({todoList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="box">
                    <div>
                        <input type="text" placeholder="What do you plan to do?" value={this.state.userInput} onChange={ (e) => this.onChangeEvent(e.target.value)}/>
                    </div>
                    <div>
                        <button className="btn add" onClick={ () => this.addItem(this.state.userInput)}>Add</button>
                    </div>
                    </div>
                    <ul>
                        {this.state.todoList.map( (item, index) => (
                            <li onClick={this.crossedWord} key={index}><img src={check} width="30px" alt="check"/>{item}</li>
                        ))}
                    </ul>
                    <div>
                        <button className="btn delete" onClick={ () => this.deleteItem()}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}