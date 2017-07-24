import React , {Component}from 'react';
import  Header from '../header.js';
import {Media} from 'react-bootstrap';

class GoodType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : this.props.match.params.id,
            headerL : '<a href="javascript:history.go(-1)" class="goBack"><span class="glyphicon glyphicon-menu-left"></span>返回</a>',
            headerR : '<i class="glyphicon glyphicon-align-left"></i>',
            goodTypes : null
        };
    }
    render() {
        return (
            <div>
                <Header headerC={this.props.location.state.headerC} headerL={this.state.headerL} headerR={this.state.headerR}/>
                {console.log(this.props.location)}
                    {
                        this.state.goodTypes==null ? "loading" :
                        this.state.goodTypes.map((item,index)=>(
                            <Media className="container" key={index}>
                                <Media.Left>
                                    <img width={64} height={64} src={item.image} alt="Image"/>
                                </Media.Left>
                                <Media.Body>
                                <Media.Heading>{item.province}</Media.Heading>
                                <p>{item.content}</p>
                                </Media.Body>
                            </Media>
                        ))
                    }
            </div>
        );
    }
    /*渲染完成后发送ajax请求*/
    componentDidMount() {
        this.ajax = $.ajax({
            url: "http://mockjs",    //请求的url地址
            dataType: "json",   //返回格式为json
            async: true, //请求是否异步，默认为异步，这也是ajax重要特性
            type: "GET",   //请求方式
            beforeSend: function () {
                //请求前的处理
            },
            success: function (data) {
                //请求成功时处理
                this.setState({
                    goodTypes : data.result
                });
                console.log(data)
            }.bind(this),
            complete: function () {
                //请求完成的处理
            },
            error: function () {
                //请求出错处理
            }
        });

    }
}
GoodType.propTypes = {
    options: React.PropTypes.object.isRequired,
    pullDownThreshold: React.PropTypes.number,
    goodTypes : React.PropTypes.object.isRequired
};
GoodType.defaultProps = {
    options: {
        mouseWheel: true,
    },
    pullDownThreshold : 1,
    goodTypes : {}
};
export default GoodType