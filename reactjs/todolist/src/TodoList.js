import React,{Component,Fragment} from 'react'
import TodoItem from "./TodoItem";
import './style.css'

class TodoList extends Component{
    //注释
    constructor(props){
        super(props);
        this.state = {
            inputValue : '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    handleInputChange(event){
        // this.state.inputValue = event.target.value;
        const value = event.target.value;
        this.setState((prevState)=>{
            console.log(prevState);
            return {inputValue:value}
        });
    }

    handleButtonClick(){
        if (this.state.inputValue){
            const list = [...this.state.list,this.state.inputValue];
            this.setState(()=>{
                return{
                    list:list,
                    inputValue: ""
                }
            });
        }

    }

    handleItemDelete(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState(()=>{
            return{
                list: list,
            }
        });
    }

    getItems(){
        return this.state.list.map((value, index, array)=>{
            return(
                <TodoItem
                    key={index}
                    value = {value}
                    index = {index}
                    handleItemDelete = {this.handleItemDelete}
                ></TodoItem>
            )
        })
    }

    render() {
        return(
            // eslint-disable-next-line react/react-in-jsx-scope
            <Fragment>
                {/*JSX注释*/}
                <div>
                    <label htmlFor="insertArea">input plz</label>
                    <input
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button
                        onClick={this.handleButtonClick}
                    >Commit</button>
                </div>
                <ul>
                    {this.getItems()}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;
