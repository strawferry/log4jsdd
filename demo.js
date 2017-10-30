

const log4js = require('log4js');


log4js.configure({
    appenders: {
        out: { type: 'stdout'},
        dingding: {
            type: './index',
            hookUrl: 'webhookurl',
            title: 'Node 消息'
        }
    },
    categories: { default: { appenders: ['out', 'dingding'], level: 'debug' }}
});

let app = log4js.getLogger();
app.info('测试钉钉');


