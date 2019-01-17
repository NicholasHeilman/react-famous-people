import React, { Component } from 'react';
import FamousItem from './FamousItem.js';

class FamousList extends Component {

    buildFamousTable() {
        let famousPeopleList = [];
        console.log(famousPeopleList);
        for( let i = 0; i< this.props.famousPeople.length; i+= 1) {
            let item = this.props.famousPeople[i];
            let itemRow = (<FamousItem key={i} i={i} item={item} />);
            famousPeopleList.push(itemRow);
        }
        return famousPeopleList;
       
    }
    render() {
        // {JSON.stringify(famousPeopleList)}
        return (
            <div>
                <h2>Famous Table</h2>
                <table>
                    <tbody>
                        {this.buildFamousTable()}
                    </tbody>
                </table>
            </div>
       )
    }
}          
export default FamousList;