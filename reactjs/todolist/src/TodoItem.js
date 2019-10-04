import React,{Component} from 'react';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const {handleItemDelete,index} = this.props;
        handleItemDelete(index);
    }

    render() {
        const {value} = this.props;
        return (
            <div onClick={this.handleClick}>{value}</div>
        )
    }
}

export default TodoItem;
