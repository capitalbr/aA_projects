
import React from "react";

class Tile extends React.Component {
    
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        
        let flag; 
        if (e.altKey) {
            flag = true;
        } else {
            flag = false;
        }
        this.props.updateGame(this.props.tile, flag);
    }
    render () {
        
        if (this.props.tile.bombed && this.props.tile.explored) {
            return (
                <div className="tile Bombed" onClick={this.handleClick}>
                    &#128163;
                </div> 
            )
            
        } else if (this.props.tile.explored === true) {
            return (
                <div className="tile Explored">
                    {this.props.tile.adjacentBombCount()}
                </div>
            ) 
        } else if (this.props.tile.flagged === true) {
            return (
                <div className="tile Flagged" onClick={this.handleClick}>
                    &#9873;
                </div> 
            ) 
        } else {
            return (
                <div className="tile Unexplored" onClick={this.handleClick}></div>
            ) 
        }
        
    }
}


export default Tile;