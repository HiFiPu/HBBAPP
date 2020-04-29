const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function (app) {
    app.use('/hbb',createProxyMiddleware({
        target:'https://api.hongbeibang.com/',
        changeOrigin:true,
        pathRewrite:{
            '^/hbb':''
        }
    }))
}