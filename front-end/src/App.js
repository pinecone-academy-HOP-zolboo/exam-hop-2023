import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const [list, setList] = useState();
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id,Todotext) => {
    const inputValue = window.prompt("Edit", Todotext);

    console.log(inputValue);
    axios.patch(`http://localhost:5000/update/${_id}` ,{
      Todotext: inputValue
    }).then(() => console.log("data updated"))
  };

  const Delete = (_id) => {
    axios.delete(`http://localhost:5000/delete/${_id}`).then(() => console.log("daata deleted"))
  };

  const Add = () => {
    axios.post('http://localhost:5000/add', {
      Todotext: addTodo,
      isDone: false,
      createdDate: Date
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((er) => {
      console.log(er.message)
    })
  };

  const List = () => {
    axios.get('http://localhost:5000/list')
    .then((res) => {
      setList(res.data.data)
      console.log(res.data.data)
    })
    .catch((er) => {
      console.log(er)
    })
  }

  const toggleDone = (_id, isDone) => {
     
    axios.patch(`http://localhost:5000/checked/${_id}` ,{
      isDone: true,
    }).then(() => console.log("data updated"))
    //axios.patch()
  };

  useEffect(() => {
    List();
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
          {checkedCounter}/{list?.length}
        </div>
      </div>
      <div className="list">
        {list?.map((e, index) => (
          <div className="todo" key={index}>
            <div className="checkbox">
              <input
                type={"checkbox"}
                defaultChecked={e.isDone}
                onChange={() => toggleDone(e._id, e.isDone)}
              />
              <div>{e.Todotext}</div>
            </div>
            <div className="actions">
              <div onClick={() => Edit(e._id, e.Todotext)}>
                <EditIcon />
              </div>
              <div onClick={() => Delete(e._id)}>
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}



        <input
          placeholder="what's next?"
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <button className="button" onClick={() => Add()}>
          Add task
        </button>
      </div>
    </div>
  );
}

export default App;
