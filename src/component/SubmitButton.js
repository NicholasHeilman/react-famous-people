import React, {Component} from 'react';

class SubmitButton extends Component {
    
    render() {

        
        return (
          <button className="submitBtn" 
                  onClick={() => handleClick()}>
            Submit 
          </button>
        )
    }
}

handleClick() {
    console.log('click');
}


export default SubmitButton;