import React , {Component}from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

class List extends Component {
    /*初始化状态*/
    constructor(props) {
        super(props);
        this.state = {
            ajaxRes : null
        };
    }
    render() {
        if(this.state.ajaxRes==null){
            return(
                <p>loading</p>
            )
        }else{
            return(
                <Grid>
                    <Row>
                        {
                            this.state.ajaxRes.map(function (item,index) {
                                return(
                                    <Col xs={6} md={6} key={index}>
                                        <Image src={item.image} responsive />
                                        <p className="text-center">{item.text}</p>
                                    </Col>
                                )
                            }.bind(this))
                        }
                    </Row>
                </Grid>
            )
        }
    };
    /*渲染完成后发送ajax请求*/
    componentDidMount() {
        $.ajax({
            url        : "http://mockjs",    //请求的url地址
            dataType   : "json",   //返回格式为json
            async      : true, //请求是否异步，默认为异步，这也是ajax重要特性
            type       : "GET",   //请求方式
            beforeSend : function() {
                //请求前的处理
            },
            success: function(data) {
                //请求成功时处理
                console.log(typeof data);
                setTimeout(function () {
                    this.state.ajaxRes = data.result;
                    this.setState({
                        ajaxRes :this.state.ajaxRes
                    });
                }.bind(this),2000);


                // console.log(this.state.ajaxRes.length);
            }.bind(this),
            complete: function() {
                //请求完成的处理
                // console.log(1)
            },
            error: function() {
                //请求出错处理
            }
        });
    }
}

export default List