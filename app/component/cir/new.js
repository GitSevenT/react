import React , {Component}from 'react';
import {Media, Image} from 'react-bootstrap';
class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ajaxNew : null
        };
    }
    render() {
        return (
            <div className="container" style={{paddingTop:"5%",backgroundColor:"#fff"}}>
                <Media.List>
                    <Media.ListItem>
                        <Media.Left>
                            <Image width={45} height={45} src="/assets/thumbnail.png" alt="Image" circle/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading style={{fontSize:"1.2rem"}}>
                                浮动
                                <span style={{paddingLeft:"1.2rem",fontSize:"1rem"}}>time</span>
                            </Media.Heading>
                            <div className="clearfix">
                                <p className="newLog">标签</p>
                                <div className="newCommit">
                                    <p><i className="glyphicon glyphicon-edit marginL"></i>评论</p>
                                    <p><i className="glyphicon glyphicon-thumbs-up marginL"></i>点赞</p>
                                </div>
                            </div>
                            <p>正文内容</p>
                            <div className="reply">
                                <div className="threeTitle"></div>
                                <div>
                                    <p className="floatL">作者：</p>
                                    <span>正文内容1</span>
                                </div>
                                <div>
                                    <p className="floatL">作者：</p>
                                    <span>正文内容1</span>
                                </div>

                            </div>
                        </Media.Body>
                    </Media.ListItem>
                </Media.List>
            </div>
        );
    }
    componentDidMount() {
    $.ajax({
        url: "http://mockjs",    //请求的url地址
        dataType: "json",   //返回格式为json
        async: true, //请求是否异步，默认为异步，这也是ajax重要特性
        type: "GET",   //请求方式
        beforeSend: function () {
            //请求前的处理
        },
        success: function (data) {
            //请求成功时处理
            console.log(data);
            this.setState({
                ajaxNew: this.state.ajaxNew
            });

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

}

export default New