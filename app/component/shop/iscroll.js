import React , {Component}from 'react';
import IScroll from 'iscroll/build/iscroll-probe.js';
import {Media} from 'react-bootstrap';
class Iscroll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goodTypes : null
        };

    }
    render() {
        return (
            <div style={{position:"relative"}}>
                <div className="text-center" style={{paddingTop:"15px"}}>下拉刷新</div>
                <div id="wrapper">
                    <div id="scrollDiv" className="text-center">
                        {
                            this.state.goodTypes==null ? "loading..." :
                                this.state.goodTypes.map((item,index)=>(
                                    <Media className="container text-left" key={index}>
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
                </div>
                <div>加载更多</div>
            </div>
        );
    }
    componentDidMount(){
        const options = {
            // 默认iscroll会拦截元素的默认事件处理函数，我们需要响应onClick，因此要配置
            preventDefault: false,
            // 禁止缩放
            zoom: false,
            // 支持鼠标事件，因为我开发是PC鼠标模拟的
            mouseWheel: true,
            // 滚动事件的探测灵敏度，1-3，越高越灵敏，兼容性越好，性能越差
            probeType: 3,
            // 拖拽超过上下界后出现弹射动画效果，用于实现下拉/上拉刷新
            bounce: true,
            // 展示滚动条
            scrollbars: false
        };
        this.myScroll = new IScroll('#wrapper', options);
        this.myScroll.on('scroll', this.onScroll);
        this.myScroll.on('scrollEnd', this.onScrollEnd.bind(this));
        console.dir(this.myScroll.options);
    }
    onScroll(){
        console.log(this.y)

    }
    onScrollEnd(){
        console.log("结束");
        this.ajax = $.ajax({
            url: "http://mockjs",    //请求的url地址
            dataType: "json",   //返回格式为json
            async: true, //请求是否异步，默认为异步，这也是ajax重要特性
            type: "GET",   //请求方式
            beforeSend: function () {
                //请求前的处理
            },
            success: function (data) {
                console.log(data);
                //请求成功时处理
                this.setState({
                    goodTypes : data.result
                });
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

export default Iscroll