import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import items from "./Items";

const styling = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  border: "20px solid white"
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      value: ""
    };
  }

  updateChecked = (completed, id) => {
    this.setState(prev => ({
      items: prev.items.map((elem, i) => {
        return i === id
          ? Object.assign(elem, { completed: !elem.completed })
          : elem;
      })
    }));

    this.drawLine(!completed, id);
  };

  drawLine = (completed, id) => {
    this.setState(prev => ({
      items: prev.items.map((elem, i) => {
        return i === id
          ? Object.assign(elem, {
              styling: {
                textDecoration: completed ? "line-through" : "none"
              }
            })
          : elem;
      })
    }));
  };

  deleteTask = id => {
    this.state.items.splice(id, 1);
    this.setState(prev => ({
      items: prev.items
    }));
  };

  submit = () => {
    if (this.state.value) {
      this.setState(state => ({
        items: [
          ...state.items,
          {
            task: state.value,
            completed: false,
            styling: {
              textDecoration: "none"
            }
          }
        ],
        value: ""
      }));
    }
  };

  change = value => {
    this.setState(state => ({
      value: state.value.replace(state.value, value)
    }));
  };

  render() {
    const tasks = this.state.items.map((elem, i) => (
      <TodoList
        items={items}
        task={elem.task}
        key={i}
        completed={elem.completed}
        id={i}
        styling={elem.styling}
        deleteTask={this.deleteTask}
        updateChecked={this.updateChecked}
      />
    ));
    return (
      <div style={styling}>
        <Header
          items={this.state.items}
          value={this.state.value}
          change={this.change}
          submit={this.submit}
        />
        {tasks}
      </div>
    );
  }
}
