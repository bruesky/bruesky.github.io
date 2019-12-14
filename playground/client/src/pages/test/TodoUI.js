import React from "react";
import {Button, Input, List} from "antd";

const TodoUI = (props)=>{
    return(
        <div style={{marginTop: '10px',marginLeft:'10px'}}>
            <div>
                <Input value={props.inputValue}
                       placeholder="Basic usage"
                       style={{width:300, marginRight: '10px'}}
                       onChange={props.handleInputChange}
                />
                <Button type="primary"
                        onClick={props.handleClick}
                >Submit</Button>
            </div>

            <List
                style={{marginTop:'10px',width: 300}}
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item onClick={()=>{
                        props.handleItemDelete(index);
                    }}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    );
}


export default TodoUI;
