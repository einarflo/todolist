import React from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends React.Component {



  constructor(props, context) {
      super(props, context);

      this.state = {
        open: [],
        pending: [],
        closed: []
      };

      this.addItem = this.addItem.bind(this);
      this.moveItem = this.moveItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.open;

    if (this._inputElementName.value !== "") {
      itemArray.unshift(
        {
          name: this._inputElementName.value,
          description: this._inputElementDescription.value,
          key: Date.now()
        }
      );

      this.setState({
        open: itemArray
      });

      this._inputElementName.value = "";
      this._inputElementDescription.value = "";
    }
    console.log(this.state);
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredOpenItems = this.state.open.filter(function (item) {
      return (item.key !== key);
    });
    var filteredPendingItems = this.state.pending.filter(function (item) {
      return (item.key !== key);
    });
    var filteredClosedItems = this.state.closed.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      open: filteredOpenItems,
      pending: filteredPendingItems,
      closed: filteredClosedItems
    });
  }

  moveItem(inputItem) {
    var closedItems = this.state.closed;

    var filteredPendingItems = this.state.pending.filter(function (item) {
      if (item.key === inputItem.key) {
        closedItems.unshift(inputItem);
        return false;
      }
      else {
        return true;
      }
    });

    var filteredOpenItems = this.state.open.filter(function (item) {
      if (item.key === inputItem.key) {
        filteredPendingItems.unshift(inputItem);
        return false;
      }
      else {
        return true;
      }
    });

    this.setState({
      open: filteredOpenItems,
      pending: filteredPendingItems,
      closed: closedItems
    });
  }


  render() {
    return (
      <div className="todoListMain">
        <div className="">
          <form onSubmit={this.addItem}>
            <input type="text" className="form-control margin-bottom" ref={(a) => this._inputElementName = a} placeholder="Task name"></input>
            <input type="text" className="form-control margin-bottom" ref={(b) => this._inputElementDescription = b} placeholder="Description"></input>
            <button className="btn btn-default" type="submit">Create New <i className="fa fa-plus" aria-hidden="true"></i></button>
          </form>
        </div>
        <h1>Open</h1>
        <TodoItems entries={this.state.open} move={this.moveItem} delete={this.deleteItem}/>
        <h1>Pending</h1>
        <TodoItems entries={this.state.pending} move={this.moveItem} delete={this.deleteItem}/>
        <h1>Closed</h1>
        <TodoItems entries={this.state.closed} move={this.moveItem} delete={this.deleteItem}/>
      </div>
    );
  }
};

export default TodoList;
