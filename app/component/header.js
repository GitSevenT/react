import React , {Component}from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerL : "headerL",
            headerC : "headerC",
            headerR : "headerR",
        };
    }
    render() {
        return (
            <div className="container-full header">
                <ul className="container">
                    <li><span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span></li>
                    <li className="liCenter">{this.state.headerC}</li>
                    <li><span className="glyphicon glyphicon-align-left"></span></li>
                </ul>
            </div>
        );
    }
}

export default Header