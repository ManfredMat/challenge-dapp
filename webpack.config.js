module.exports = {
    target: 'node',
    resolve: {
        fallback: {
          "stream": require.resolve("stream-browserify") 
          
        } 
}
}
//"crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
/*
"crypto": require.resolve("crypto-browserify"),
          "assert": require.resolve("assert/"),
          "http": require.resolve("stream-http"),
          "url": require.resolve("url/"),
          "os": require.resolve("os-browserify/browser"),
*/