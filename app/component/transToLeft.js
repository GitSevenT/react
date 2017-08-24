import React , {Component}from 'react';
class transToLeft extends Component {
    constructor(props){
        super(props);
        this.state = {
            subContent : null
        }
    }
    render() {
        return (
            <div className="leftTrans">
                <div className="shade" style={{display:this.props.isLeft ? "block" : "none"}}
                     onClick={this.props.isLeFt.bind(this)}>
                </div>
                <div className="container-full transToLeft" style={{transform:this.props.isLeft ? "translateX(0)" : "translateX(130%)"}}>
                    <div className="clearfix" style={{margin:"0 3%"}}>
                        <input type="text" placeholder="请输入内容"/>
                        <button type="submit" className="glyphicon glyphicon-search"/>
                    </div>
                    <div className="subContent">
                        <div className="text-center">{
                            this.state.subContent==null ? "加载中..." : this.props.subContent
                        }</div>

                    </div>
                </div>
            </div>
        );
    }
    /*渲染完成后发送ajax请求*/
    submit() {
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
                //     subContent = data.result
            }.bind(this),
            complete: function () {
                //请求完成的处理
            },
            error: function () {
                //请求出错处理
            }
        });

    }
    componentWillUnmount(){
        // this.ajax.abort();
    }
}
transToLeft.propTypes = {
    subContent: React.PropTypes.string
};
transToLeft.defaultProps = {
    subContent: 'i'
};

export default transToLeft