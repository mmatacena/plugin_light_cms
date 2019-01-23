'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');

server.get('Start', function (req, res, next) {
    var actionUrl = URLUtils.url('Story-Start');
    res.render('story/story', {actionUrl: actionUrl});
    next();
});


module.exports = server.exports();