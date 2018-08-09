var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    }
}
var buttonID;

$(document).ready(function(){

element.addEventListener('click', function() { 
    
}, false);

});