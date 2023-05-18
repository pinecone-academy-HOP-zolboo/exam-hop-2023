import { useEffect, useState, useNavigation } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const [list, setList] = useState([
    { text: "example data", isDone: true, _id: "anyid" },
  ]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [data, setData] = useState();
  const [addTodo, setAddTodo] = useState("");
  const [form, setForm] = useState({ text: "", isDone: "", createdDate: "" });
  const addTask = async () => {
    console.log(form);
    const user = await axios.post("http://localhost:8001/", {
      text: form.name,
      isDone: form.isDone,
      createdDate: form.createdDate,
    });
    setForm({ text: "", isDone: "", createdDate: "" });
    console.log(user);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(form);
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
  }, [form]);
  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    // console.log(inputValue);
    //axios.patch()
  };

  const Delete = (_id) => {
    console.log(_id);
    axios.delete("http://localhost:8001/deleteTask", { id: _id });
  };

  const Add = () => {
    // console.log(addTodo);
    // axios.post();
  };

  const toggleDone = (_id, isDone) => {
    console.log(_id, isDone);
    //axios.patch()
  };

  useEffect(() => {
    // axios
    //   .get("Your backend URL")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setList(data.data);
    //   });
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
