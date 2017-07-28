import React , {Component}from 'react';
import  Header from '../header.js';
import  Iscroll from './iscroll.js';


class GoodType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : this.props.match.params.id,
            headerL : '<a href="javascript:history.go(-1)" class="goBack"><span class="glyphicon glyphicon-menu-left"></span>返回</a>',
            headerR : '<i class="glyphicon glyphicon-align-left"></i>'
        };
    }
    render() {
        return (
            <div>
                <Header headerC={this.props.location.state.headerC} headerL={this.state.headerL} headerR={this.state.headerR}/>
                {console.log(this.props.location)}

                <Iscroll/>
            </div>
        );
    }
    /*渲染完成后发送ajax请求*/
    componentDidMount() {


    }
}
GoodType.propTypes = {
    options: React.PropTypes.object.isRequired,
    pullDownThreshold: React.PropTypes.number,
};
GoodType.defaultProps = {
    options: {
        mouseWheel: true,
    },
    pullDownThreshold : 1,
};
export default GoodType