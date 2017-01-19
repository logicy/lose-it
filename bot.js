/*
* @Author: Sushil Jain
* @Date:   2017-01-19 14:48:59
* @Last Modified by:   sushiljainam
* @Last Modified time: 2017-01-19 15:15:17
*/

'use strict';

var c = console;

var Bot = function(name, smartness){
	this.name = name || 'bot divis';
	this.smartness = smartness || 1;
	this.fname = getName.bind(null,this.name,1);
	this.lname = getName.bind(null,this.name,2);
	this.fullName = getName.bind(null,this.name);
}

Bot.prototype.move = function(matrix,moves) {
	var moves = moves || [];
	if(moves)
	return "move";
};

function getName(name, part){
	return part ? name.split(' ')[part-1] : name;
}


var n = new Bot();
c.log(n.fname());
c.log(n.lname());
c.log(n.fullName());
c.log(n.move());