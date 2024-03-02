var talk = function(name){
    console.log(name + " can talk");
}
var walk = function(name){
    console.log(name + " can walk");
}

module.exports.talk =talk;
module.exports.walk = walk;
