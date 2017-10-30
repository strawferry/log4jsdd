





'use strict';

const request = require('request');
const _ = require('lodash');

function dingAppender(_config, layout) {
    return (loggingEvent) => {
        const dingding = _config.hookUrl;
        const title = _.get(_config, 'title', 'Msg From log4js');
        let text = layout(loggingEvent, _config.timezoneOffset);
        sendToDingding(dingding, title, text);
    };
}

function configure(_config, layouts) {

    let layout = layouts.basicLayout;
    if (_config.layout) {
        layout = layouts.layout(_config.layout.type, _config.layout);
    }

    return dingAppender(_config, layout);
}

/*
* 发送钉钉接口
* */

function sendToDingding(dingding, title, text) {
    let rqbody = {
        msgtype: "markdown",
        markdown: {
            title:title,
            text: text
        }
    };
    let options = {
        url: dingding,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rqbody)
    };
    request.post(options, (err, res, body)=>{
        if(!err && res.statusCode == 200){
            let info = JSON.parse(body);
            console.log(info);
        }
    });
}

module.exports.configure = configure;
