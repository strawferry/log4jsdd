## 项目说明

在一些 Node 的项目中,一直使用 `log4js` 的做日志插件,然后发现里面有个 `appenders ` 插件,可以发送消息到国外软件 `slack` 里,这样就可以便捷的做一些扩展,可是本人最近在用钉钉,而且那个接触也少,所以本着东西(接口文档的)都有,就找了时间自己撸了一个出来.

## 准备工作
找了一下两家的文档
> [`log4js` 文档](https://github.com/log4js-node/log4js-node)

> [`Log4js - Appenders`](https://log4js-node.github.io/log4js-node/appenders.html)

> [`Slack Appender`](https://log4js-node.github.io/log4js-node/slack.html)

> [钉钉自定义机器人文档](https://open-doc.dingtalk.com/docs/doc.htm?spm=a219a.7629140.0.0.V8Wb2O&treeId=257&articleId=105735&docType=1)

## 安装

`npm install --save log4jsdd log4js`

## 配置 log4js

```js

    const log4js = require('log4js');
    log4js.configure({
        appenders: {
            out: { type: 'stdout'},
            dingding: {
                type: 'log4jsdd',
                hookUrl: '填写获取钉钉里面设置的 webhook 地址',
                title: 'Node 消息'
            }
        },
        categories: { default: { appenders: ['out', 'dingding'], level: 'debug' }}
    });
    
    let app = log4js.getLogger();
    app.info('测试发送到钉钉');

```
## 钉钉机器人配置

![](https://ws1.sinaimg.cn/large/8bbf0afbly1fotncinog2j21hc0xgwjw.jpg)
![](https://ws1.sinaimg.cn/large/8bbf0afbly1fotncimouoj21hc0xggpf.jpg)
![](https://ws1.sinaimg.cn/large/8bbf0afbly1fotncinqkwj21hc0xg0yf.jpg)
![](https://ws1.sinaimg.cn/large/8bbf0afbly1fotncimw5kj21280uumz6.jpg)
![](https://ws1.sinaimg.cn/large/8bbf0afbly1fotncin1ebj212a0uutbn.jpg)
![](https://ws1.sinaimg.cn/large/8bbf0afbly1fotncipj81j21hc0xg7a3.jpg)

## 地址

> [**GitHub 仓库地址**](https://github.com/strawferry/log4jsdd)

> [**npm 地址**](https://www.npmjs.com/package/log4jsdd)

# 个人博客
### **博客地址: [`https://cblog.ferryvip.com/`](https://cblog.ferryvip.com/)**