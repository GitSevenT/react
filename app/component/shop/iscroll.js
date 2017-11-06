import React , {Component}from 'react';
import IScroll from 'iscroll/build/iscroll-probe.js';
import {Media} from 'react-bootstrap';
class Iscroll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goodTypes : null,
            loadTopState : "下拉刷新",
            loadBtmState : "上拉加载",
            loadDis : true
        };

    }
    render() {
        return (
            <div className="iscroll5">
                <div id="wrapper" ref="wrapper">
                    <div id="scrollDiv" className="text-center" ref="scrollDiv">
                        <div ref="loadTop" style={{height:"0",overflow:"hidden",background:"#b0b0b0",
                            width:"100%"}}>{this.state.loadTopState}</div>
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
                             style={{paddingTop:"15px",width:"100%"}}>
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
                this.myScroll.on('beforeScrollStart', this.beforeScrollStart.bind(this));
                this.myScroll.on('scrollCancel', this.scrollCancel.bind(this));
                this.myScroll.on('scrollStart', this.scrollStart.bind(this));
                this.myScroll.on('scroll', this.scroll.bind(this));
                this.myScroll.on('scrollEnd', this.scrollEnd.bind(this));
                // this.myScroll.scrollerStyle.transform = "translate(0px, -40px) translateZ(0px)";
                // console.log(this.myScroll.scrollerStyle.transform);
                // this.myScroll.scrollBy(0, -40)
            }.bind(this),
            error: function () {
                //请求出错处理
            }
        });


        // console.dir(this.myScroll.options);
        // this.myScroll.scrollTo(0, 100,1000)
        // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    }
    beforeScrollStart(){
        console.log("触摸屏幕");

    }
    scrollCancel(){
        console.log("初始化完成");
        // var loadTopHtml = '<div className="loadTop" ref="loadTop"'+
        // 'style="position:absolute;top:0;background:#b0b0b0;width:100%;text-align:center;padding:10px 0">'+
        // '下拉加载</div>';
        // var creatDiv = document.createElement('div');
        // creatDiv.innerHTML = loadTopHtml;
        // console.log(creatDiv);
        // this.refs.wrapper.insertBefore(creatDiv,this.refs.scrollDiv);
    }
    scrollStart(){
        console.log("开始滚动")
    }
    scroll(){
        // console.dir(this.myScroll);

        // console.log("滚动中...");
        if(parseInt(this.refs.loadTop.style.height) !== 40){
            this.refs.loadTop.style.paddingBottom = this.refs.loadTop.style.height = this.refs.loadTop.style.lineHeight = this.myScroll.y + "px";
        }
        if(this.myScroll.y>40){
            this.refs.loadTop.style.height = 40+"px";
            this.refs.loadTop.style.paddingBottom = 40+"px"
        }
        console.log(this.refs.loadTop.style.height);

        if(this.myScroll.y>10){
            this.setState({
                loadTopState : "刷新中..."
            });
        }
        if(this.myScroll.y<1){
            this.setState({
                loadTopState : "下拉刷新"
            });
        }
        if(this.myScroll.y<this.myScroll.maxScrollY-20){
            this.setState({
                loadBtmState : "加载中..."
            })
        }

    }
    scrollEnd(){
        console.log(this.myScroll);

        if(this.myScroll.y>40){
            this.refs.loadTop.style.height = 40+"px"
        }
        console.log("滚动结束");


        if(this.myScroll.startY>10||this.myScroll.startY<this.myScroll.maxScrollY-5){
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
                    if(this.myScroll.startY>10){
                        this.state.goodTypes.unshift.apply(this.state.goodTypes,data.result);
                        this.setState({
                            goodTypes : this.state.goodTypes
                        });
                        console.log(this.state.goodTypes)
                    }
                    if(this.myScroll.startY<this.myScroll.maxScrollY-5){
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


                }.bind(this),
                error: function () {
                    console.log("请求出错处理")
                }
            });
        }

        if(this.myScroll.y==this.myScroll.maxScrollY){
            this.setState({
                loadBtmState : "上拉加载"
            })
        }




    }

}

export default Iscroll