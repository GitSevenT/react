import React , {Component}from 'react';
import  Header from '../header.js';
import {Media, Image} from 'react-bootstrap';
class Commit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerL : '<a href="javascript:history.go(-1)" class="goBack"><span class="glyphicon glyphicon-menu-left"></span>返回</a>',
            headerR : false
        };
    }
    render() {
        return (
            <div>
                <Header headerL={this.state.headerL} headerC={"说说"} headerR={''}/>
                <div className="container-full" style={{backgroundColor:"#fff"}}>
                    <Media.List style={{padding:"5%"}}>
                        <Media.ListItem>
                            <Media.Left>
                                <Image width={60} height={60} src="/assets/thumbnail.png" alt="Image" circle/>
                            </Media.Left>
                            <Media.Body>
                                <Media.Heading style={{fontSize:"1.2rem"}}>
                                    浮动
                                </Media.Heading>
                                <div style={{margin:"1rem 0"}}>
                                    <span style={{marginRight:"1.2rem"}}><i className="glyphicon glyphicon-heart-empty marginL"></i>喜欢</span>
                                    <span><i className="glyphicon glyphicon-thumbs-up marginL"></i>点赞</span>
                                </div>
                            </Media.Body>
                        </Media.ListItem>
                    </Media.List>
                    <div className="container">
                        <p>说说你的心情</p>
                        <textarea name="comTextarea" id="comTextarea" placeholder="请输入内容"></textarea>
                        <div className="clearfix">
                            <span>显示图片</span>
                            <div className="comFile">
                                <input type="file" id="comFile" onClick={this.filePath.bind(this)}/>
                                <p>上传文件</p>
                            </div>
                        </div>
                        <input type="submit" id="comSub" value="确定发布"/>
                    </div>
                </div>
            </div>
        );
    }
    filePath(e){
        console.log(e.target.files)
    }
}

export default Commit