import React from "react";
import "./ToDo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState ,useEffect} from "react";


const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  if(list){
    return JSON.parse(localStorage.getItem('lists'))
  }
  else{
    return [];
  }
}

function ToDo() {
  const [input, setinput] = useState('');
  const [todos, setTodo] = useState(getLocalItems())
  const addItemHandler = () => {
    if(!input){
      alert('Add Todo')
      
    }
    else{
      setTodo([...todos,input]);
      setinput('')
      
    }
  }

  const deleteItem = (id) => {
      const updateItems = 
        todos.filter((item,index) => {
          return index!==id;
        })
      
      setTodo(updateItems)
  }

  const removeAll = () => {
    setTodo([])
  }

  useEffect(() => {
   localStorage.setItem('lists',JSON.stringify(todos))
  }, [todos])
  
  return (
    <div id="todo-div">
      <h1>Enter Your ToDo's Here...</h1>
      <input
        style={{
          padding: "12px",
          width: "300px",
          marginRight: "20px",
          borderRadius: "4px",
          outline: "none",
        }}
        type="text"
        placeholder="Enter ToDo"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#8208aa",
          color: "white",
          cursor:'pointer'
        }}
           onClick={addItemHandler}
      >
        Add ToDo
      </button>
     {
      todos.map((item , i) => {
        return(
          <div id="item-main-div" key={i}>
          <p
            style={{
              
              borderRadius: "4px",
              textAlign: "left",
              marginLeft: "10px",
            }}
          >
            {item}
          </p>
          <DeleteIcon style={{ marginRight: "5px" ,cursor:'pointer'}} onClick={() => deleteItem(i)} />
        </div>
        )
      })
     }
      <div>
      <button
        style={{
          padding: "14px",
          border: "none",
          color: "black",
          backgroundColor: "white",
          borderRadius: "3px",
          width: "90px",
          marginTop: "30px",
          cursor:'pointer'
        }}
        onClick={removeAll}
      >
        Clear All
      </button>
      </div>
    </div>
  );
}

export default ToDo;
