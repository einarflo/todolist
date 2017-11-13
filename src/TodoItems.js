import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
    this.move = this.move.bind(this);
    this.delete = this.delete.bind(this);
  }

  createTasks(item) {
    return <li className="list-group-item" key={item.key}>


    <div className="btn-group pull-right" role="group">
      <button type="button" className="btn btn-success" onClick={(e) => this.move(item, e)}><i className="fa fa-check" aria-hidden="true"></i></button>
      <button type="button" className="btn btn-danger" onClick={(e) => this.delete(item.key, e)}><i className="fa fa-times" aria-hidden="true"></i></button>
    </div>
    <h4 className="list-group-item-heading">{item.name}</h4>
    <p className="list-group-item-text">{item.description}</p>
    </li>
  }

  delete(key) {
    this.props.delete(key);
  }

  move(item) {
    this.props.move(item);
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="list-group">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};

export default TodoItems;
