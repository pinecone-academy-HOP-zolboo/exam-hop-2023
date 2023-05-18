import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const [list, setList] = useState([]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState({ text: "", isDone: false });

  const Edit = async (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    console.log(inputValue);

    await axios.patch(`http://localhost:5000/update/${_id}`, {
      text: inputValue
    });
    getList()
  };

  const Delete = async (_id) => {
    console.log(_id);
    await axios.delete(`http://localhost:5000/delete/${_id}`);
    getList()
  };

  const Add = async () => {
    console.log(addTodo);
    await axios.post("http://localhost:5000/add", addTodo)
    getList()
  };

  const toggleDone = async (_id, isDone) => {
    await axios.patch(`http://localhost:5000/checked/${_id}`, {
      isDone: true
    })
    setCheckedCounter(checkedCounter => checkedCounter+1)
    // if(checkedCounter === list.length) return list.length;

    console.log(isDone)
    getList()
  };

  const getList = async () => {
    const res = await axios.get("http://localhost:5000/list")
    setList(res.data)
  }

  useEffect(() => {
    getList()
  }, []);

  return (
    <div className="container">
      <div className="title">
        <div>My Todo list</div>
        <div className="count">
          {checkedCounter}/{list.length}
        </div>
      </div>
      <div className="list">
        {list.map(({ text, _id, isDone }, index) => (
          <div className="todo" key={index}>
            <div className="checkbox">
              <input
                type={"checkbox"}
                defaultChecked={isDone}
                onChange={() => toggleDone(_id, isDone)}
              />
              <div>{text}</div>
            </div>
            <div className="actions">
              <div onClick={() => Edit(_id, text)}>
                <EditIcon />
              </div>
              <div onClick={() => Delete(_id)}>
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}
        <input
          placeholder="what's next?"
          onChange={(e) => setAddTodo({ ...addTodo, text: e.target.value })}
        />
        <div className="button" onClick={() => Add()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
