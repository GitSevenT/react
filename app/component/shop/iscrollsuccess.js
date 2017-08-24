import React , {Component}from 'react';
import IScroll from 'iscroll/build/iscroll-probe.js';
import {Media} from 'react-bootstrap';
class Iscroll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goodTypes : null,
            loadTopState : "下拉刷新",
            loadBtmState : "上拉加载"
        };

    }
    render() {
        return (
            <div className="iscroll5">
                <div id="wrapper" ref="wrapper">
                    <div id="scrollDiv" className="text-center">
                        <div className="text-center" style={{background:"#b0b0b0",padding:"10px 0"}} ref="loadTop">{this.state.loadTopState}</div>
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
                        <div className="text-center" ref="loadBtm"
                             style={{paddingBottom:"15px",width:"100%"}}>
                            {this.state.loadBtmState}</div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(){
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
                const options = {
                    // 默认iscroll会拦截元素的默认事件处理函数，我们需要响应onClick，因此要配置
                    preventDefault: false,
                    // 禁止缩放
                    zoom: false,
                    // 支持鼠标事件
                    mouseWheel: true,
                    // 滚动事件的探测灵敏度，1-3，越高越灵敏，兼容性越好，性能越差
                    probeType: 3,
                    // 拖拽超过上下界后出现弹射动画效果，用于实现下拉/上拉刷新
                    bounce: true,
                    // 展示滚动条
                    scrollbars: true
                };
                this.myScroll = new IScroll('#wrapper', options);
                this.myScroll.on('scroll', this.onScroll.bind(this));
                this.myScroll.on('scrollEnd', this.onScrollEnd.bind(this));
                console.log(this.refs.loadTop);
                this.myScroll.scrollToElement(this.refs.loadTop,0,0,40)
            }.bind(this),
            error: function () {
                //请求出错处理
            }
        });


        // console.dir(this.myScroll.options);
        // this.myScroll.scrollTo(0, 100,1000)
        // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    }
    onScroll(){
        // console.dir(this.myScroll);
        if(this.myScroll.y<0){
            this.setState({
                loadTopState : "下拉刷新"
            });
        }
        if(this.myScroll.y>0){
            this.setState({
                loadTopState : "松开刷新..."
            });
        }
        if(this.myScroll.y<this.myScroll.maxScrollY+40){
            this.setState({
                loadBtmState : "上拉加载"
            })
        }
        if(this.myScroll.y<=this.myScroll.maxScrollY){
            this.setState({
                loadBtmState : "加载中..."
            })
        }

    }
    onScrollEnd(){
        // console.log("结束1");
        console.log(this.myScroll.y);//向下运动距离
        // console.log(this.myScroll.maxScrollY);//scroller长度
        // console.log(this.myScroll.startY);
        // console.log("结束2");
        if(this.myScroll.y>-40&&this.myScroll.y<0){
            this.myScroll.scrollToElement(this.refs.loadTop,100,0,40)
        }

        if(this.myScroll.y===0||this.myScroll.y==this.myScroll.maxScrollY){
            this.ajax = $.ajax({
                url: "http://mockjs",    //请求的url地址
                dataType: "json",   //返回格式为json
                async: true, //请求是否异步，默认为异步，这也是ajax重要特性
                type: "GET",   //请求方式
                beforeSend: function () {
                    //请求前的处理
                }.bind(this),
                success: function (data) {
                    //请求成功时处理

                    if(this.myScroll.y===0){
                        this.state.goodTypes.unshift.apply(this.state.goodTypes,data.result);
                        this.setState({
                            goodTypes : this.state.goodTypes
                        });
                        console.log(this.state.goodTypes)
                    }
                    if(this.myScroll.y==this.myScroll.maxScrollY){
                        this.state.goodTypes.push.apply(this.state.goodTypes,data.result);
                        this.setState({
                            goodTypes : this.state.goodTypes
                        });
                        console.log(this.state.goodTypes)
                    }
                    setTimeout(function () {
                        this.myScroll.refresh();
                    }.bind(this), 0);

                }.bind(this),
                complete: function () {
                    //请求完成的处理
                    if(this.myScroll.y>=0){
                        this.setState({
                            loadTopState : "刷新成功"
                        });
                        setTimeout(function () {
                            this.myScroll.scrollToElement(this.refs.loadTop,100,0,40)
                        }.bind(this),500)
                    }

                }.bind(this),
                error: function () {
                    console.log("请求出错处理")
                }
            });
        }
    }

}

export default Iscroll