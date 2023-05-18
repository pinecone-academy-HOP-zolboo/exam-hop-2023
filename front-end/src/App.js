import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const { task, setTask } = useState({ text: " ", isDone: "" });
  const {data , setData} = useState()
  const addTask = async () => {
    const user = await axios.post("http://localhost5000/", {
      text: task.text,
      isDone: task.isDone,
    });
    setTask({ text: " ", isDone: "" });
  };

  const [list, setList] = useState([
    { text: "example data", isDone: true, _id: "anyid" },
  ]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    console.log(inputValue);
    //axios.patch()
  };

  const Delete = (_id) => {
    console.log(_id);
    axios.delete("http://localhost:8001/delete", { id: _id });
  };

  // const Add = () => {
  //   console.log(addTodo);
  //   // axios.post();
  // };

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    //axios.patch()
  };
  useEffect(() => {
    const getData = async () => {
      try {
        console.log(task);
        const user = await axios.get("http://localhost:8001/getTask");
        setData(user);
        console.log("asdf", user);
        setList(user.data);
        console.log(user);
        // localStorage.setItem("", user.data.data._id);
        if (user) {
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [task]);


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
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <div className="button" onClick={() => addTask()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
