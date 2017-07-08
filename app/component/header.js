import React , {Component}from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerL : "headerLl",
            headerC : this.props.headerC,
            headerR : "headerR",
        };
    }
    render() {
        return (
            <div className="container-full header">
                <ul className="container">
                    <li><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span></li>
                    <li className="liCenter">{this.state.headerC}</li>
                    <li><span className="glyphicon glyphicon-align-left"></span>
                        <ul className="munUl">
                            <li><i className="glyphicon glyphicon-sort-by-attributes"></i>筛选</li>
                            <li><i className="glyphicon glyphicon-search"></i>搜索</li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header