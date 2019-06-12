import React from "react";
import Tile from "./tile"
class Board extends React.Component {
    constructor(props) {
        super(props)

    }

    render(){
        
        return(
            <div className="row">
                {this.props.board.grid.map( (row, idx) => {
                    return(
                        <div key={idx}>
                            {row.map( (tile, idx) => {
                            return <Tile key={idx} tile={tile} updateGame={this.props.updateGame}/>
                        })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Board;