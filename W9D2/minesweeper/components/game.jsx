import React from "react";
import * as Minesweeper from "../minesweeper.js"
import Board from "./board"

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {board: new Minesweeper.Board(12, 14)};
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, bool) {
        if (bool === true) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({board: this.state.board});
        // this.forceUpdate();
    }

    render() {
        let message;
        if (this.state.board.won()) {
            message = 
                <div className="modal is-on">
                    <article className="modal-content">
                        you won
                    </article>
                    <div className="modal-screen"></div>
                </div>
        } else if (this.state.board.lost()) {
            message = 
                <div className="modal is-on">
                    <article className="modal-content">
                        you lost
                    </article>
                    <div className="modal-screen"></div>
                </div>
        }
        return (
            <section>
                <h1>{message}</h1>
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </section>
        )
    }
}

export default Game;