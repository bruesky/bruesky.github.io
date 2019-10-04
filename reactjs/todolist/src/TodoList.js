import React,{Component,Fragment} from 'react'

class TodoList extends Component{

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
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue: ""
        });
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
                <div>
                    <input
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
                            <li
                                key={index}
                                onClick={this.handleItemDelete.bind(this,index)}
                            >
                                {value}
                            </li>)
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;
