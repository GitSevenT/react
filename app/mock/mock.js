var Mock = require('mockjs');
//调用mock方法模拟数据
Mock.mock(
    'http://mockjs', {
        'result|10': [{
            'id|+1': 1,
            "userName": '@cname',     //模拟名称
            "age|1-100": 100,          //模拟年龄(1-100)
            "color": "@color",    //模拟色值
            "date": "@date('yyyy-MM-dd')",  //模拟时间
            "url": "@url()",     //模拟url
            "content": "@cparagraph()", //模拟文本
            "image": "@image('200x100', '@color', '#FFF', 'png', 'hello world!')",
            "dataImage": "@dataImage()",
            "text": "@cword(3, 5)",//模拟3-5个汉字
            "province": "@province",//模拟省
            "number": "@integer(100, 999)"//100-999
        }]
    }
);