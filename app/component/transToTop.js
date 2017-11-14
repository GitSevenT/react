import React , {Component}from 'react';
class TransToTop extends Component {
    render() {
        return (
            <div className="topTrans">
                <div className="shade" style={{display:this.props.isTop ? "block" : "none"}}
                     onClick={this.props.isToP.bind(this)}>
                </div>
                <div className="transToTop" style={{transform:this.props.isTop ? "translateY(0)" : "translateY(100%)"}}>
                    <ul className="container clearfix">
                        <li>浏览"购买原料"的教程</li>
                        <li>浏览"购买成品"的教程</li>
                        <li>"购买原料"和"购买成品"的教程</li>
                    </ul>
                </div>
            </div>
        );
    }
    //prop更改后调用，及重新render
    componentWillReceiveProps() {
        console.log("属性更改了")
    }
}

export default TransToTop