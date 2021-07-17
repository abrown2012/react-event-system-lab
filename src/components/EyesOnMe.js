import React from 'react'

class EyesOnMe extends React.Component {

    handleFocus = () => {
        console.log('Good!')
    }

    handleOffFocus = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return(
            <button onFocus = {this.handleFocus} onBlur = {this.handleOffFocus}>

            </button>
        )
    }
    
}

export default EyesOnMe;
// Code EyesOnMe Component Here
