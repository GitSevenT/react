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
                <div className="container-full" style={{marginTop:"5%"}}>
                    <Grid>
                        <Row>
                            {
                                this.state.ajaxRes.map(function (item,index) {
                                    return(
                                        <Col xs={6} md={6} key={index}>
                                            <div className="productList">
                                                <Image src={item.image} responsive style={{marginBottom:"5%",borderTopLeftRadius: "5px",borderTopRightRadius: "5px"}}/>
                                                <p className="text-center">{item.text}</p>
                                                <div className="commitDiv">
                                                    <Image width={30} height={30} src={item.image} alt="Image" circle/>
                                                    <span>正文内容</span>
                                                </div>
                                                <div className="commitLove">
                                                    <i className="glyphicon glyphicon-heart"></i>
                                                    <span>取消关注</span>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                }.bind(this))
                            }
                        </Row>
                    </Grid>
                </div>
            )
        }
    };
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
                // setTimeout(function () {
                    this.setState({
                        ajaxRes: data.result
                    });
                // }.bind(this), 2000);
            }.bind(this),
            complete: function () {
                //请求完成的处理
                // console.log(1)
            },
            error: function () {
                //请求出错处理
            }
        });

    }
    componentWillUnmount(){
        this.ajax.abort();
        // alert(1)
    }
}

export default List