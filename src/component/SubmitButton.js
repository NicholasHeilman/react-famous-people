import React, {Component} from 'react';

class SubmitButton extends Component {
    
    render() {

        
        return (
          <button className="submitBtn" 
                  onClick={() => console.log('click')}>  {/*handleClick()}>*/}
            Submit 
          </button>
        )
    }
}

// handleClick() {
//     console.log('click');
// }


export default SubmitButton;