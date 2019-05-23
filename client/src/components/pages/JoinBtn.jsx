import React, {Component } from 'react'

class JoinBtn extends Component {
   // //TODO create a state `isOn`
   constructor(props) {
       super(props)
       this.state = {
           nbOfLikes: 0
       }

       //Bind the method ìncrement likes`
       this.incrementLikes = this.incrementLikes.bind(this)
   }

incrementLikes() {
           //Never use this
           // this.state.nbOfLikes++

   this.setState({
       nbOfLikes: this.state.nbOfLikes = 1
   })
}

   render() {
       let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
       let index = this.state.nbOfLikes % colors.length
       let buttonStyle = {
           color: 'white',
           backgroundColor: colors[index]
       }
       return (
       <button className="LikeButton" style={buttonStyle} onClick={this.incrementLikes}>
       {this.state.nbOfLikes} {this.state.nbOfLikes===1 ? "Join" : "Join"}
       </button>
       )

}
}

export default JoinBtn;