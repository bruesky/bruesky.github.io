import React,{Component,Fragment} from 'react'
import './style.css'
import TodoItem from "./TodoItem";

class TodoList extends Component{
    //注释
    constructor(props){
        super(props);
        this.state = {
            inputValue : '',
            list: []
        }
    }

    handleInputChange(event){
        // this.state.inputValue = event.target.value;
        this.setState({inputValue:event.target.value});
    }

    handleButtonClick(){
        if (this.state.inputValue){
            this.setState({
                list:[...this.state.list,this.state.inputValue],
                inputValue: ""
            });
        }

    }

    handleItemDelete(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list: list,
        });
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
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button
                        onClick={this.handleButtonClick.bind(this)}
                    >Commit</button>
                </div>
                <ul>
                    {
                        this.state.list.map((value, index, array)=>{
                            return(
                                <div key={index}>
                                    <TodoItem
                                        value = {value}
                                    ></TodoItem>
                                    {/*<li*/}
                                    {/*    key={index}*/}
                                    {/*    onClick={this.handleItemDelete.bind(this,index)}*/}
                                    {/*    dangerouslySetInnerHTML={{__html: value}}*/}
                                    {/*>*/}
                                    {/*     /!*{value}*!/*/}
                                    {/*</li>*/}
                                </div>

                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;
