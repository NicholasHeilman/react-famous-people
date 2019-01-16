import React, {Component} from 'react';

class FamousPerson extends Component {
    constructor() {  
        super();        
        this.state = {famousPerson: 'Chistopher Walken',  
                              role: 'Feng' ,
                             movie: 'Balls of Fury',
    };
}

handleChangePerson = (event) => {
        console.log(event.target.value);
                        this.setState({
                        famousPerson: event.target.value
    });
};

handleChangeRole = (event) => {
        console.log(event.target.value);
                        this.setState({
                        role: event.target.value
    });
};

handleChangeMovie = (event) => {
    console.log(event.target.value);
                    this.setState({
                    movie: event.target.value
    });
};


    render() {
        return (
            <div className="person">
             <input onChange={this.handleChangePerson} 
                    type="text" 
                    placeholder="Famous Name" />
            <br />
            <p> {this.state.famousPerson}</p>
            <br />
            <input onChange={this.handleChangeRole} 
                   type="text" 
                   placeholder="Role" />
            <br />
            <p> {this.state.role}</p>
            <br />
            <input onChange={this.handleChangeMovie} 
                   type="text" 
                   placeholder="Movie" />
            <br />
            <p> {this.state.movie}</p>
            
            </div>
        )

    }

}


export default FamousPerson;