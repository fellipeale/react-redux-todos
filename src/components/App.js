import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
            <div className="container">
                <form>
                    <input type="text" className="col-md-12" placeholder="type your todo here" />
                </form>
                <hr />
                <div className="todo-list">
                    <div className="col-md-12">
                        <div className="col-md-1 text-center">
                            <input type="checkbox"  />
                        </div>
                        <div className="col-md-10">To-Do</div>
                        <button className="btn btn-default col-md-1">x</button>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-1 text-center">
                            <input type="checkbox"  />
                        </div>
                        <div className="col-md-10">To-Do</div>
                        <button className="btn btn-default col-md-1">x</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default App; 