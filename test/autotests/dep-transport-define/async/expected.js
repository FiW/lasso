$_mod.def("/autotest$0/foo", function(require, exports, module, __filename, __dirname) { require('/lasso-loader$x.x.x/src/index'/*'lasso-loader'*/).async("_HASH", function() {
    var bar = require('/autotest$0/bar'/*'./bar'*/);
    bar.sayHello();
});
});