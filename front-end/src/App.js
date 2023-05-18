import { useEffect, useState, useRef } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

//frond-end dutuu back-end buren shuu

function App() {
  const [list, setList] = useState([
    { text: "example data", isDone: true, _id: "anyid" },
  ]);
  const [count, setCount] = useState("")
  const inputRef = useRef(0)
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState(0);
  const instance = axios.create ({
    baseURL: "http://localhost:5001"
  })

const getTask = async () => {
  try {
    const res = await instance.get('/list')
    setList(res.data.data)
  } catch (error) {
    alert("failed")
  }
}

 const getCount = async () => {
  try {
    const res = await instance.get("/count")
    setCount(res.data.data)
  } catch (error) {
    console.log(error)
  }
 }
  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    console.log(inputValue);
    //axios.patch()
  };

  const Delete = (_id) => {
    console.log(_id);
    // axios.delete();
  };

  const Add = async () => {
    try {
      const re = await instance.get('/list')
      setList(re.data.data)
      const res = await instance.post('/post', {List: inputRef.current.value})

    }catch (error) {

    }
  };

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    //axios.patch()
  };

  useEffect(() => {
    // axios
    //   .get("http://localhost:5001/")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setList(data.data);
    //   });
    getTask()
    getCount()
  }, []);

  return (
    <div className="container">
      <div className="title">
        <div>My Todo list</div>
        <div className="count">
          {count}/{list.length}
        </div>
      </div>
      <div className="list">
        {list.map(({ List, _id, isDone }, index) => (
          <div className="todo" key={index}>
            <div className="checkbox">
              <input
                type={"checkbox"}
                defaultChecked={isDone}
                onChange={() => toggleDone(_id, isDone)}
              />
              <div>{List}</div>
            </div>
            <div className="actions">
              <div onClick={() => Edit(_id, List)}>
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
          onChange={(e) => setAddTodo(e.target.value)}
          ref={inputRef}
        />
        <div className="button" onClick={() => Add()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
