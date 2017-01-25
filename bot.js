/*
* @Author: Sushil Jain
* @Date:   2017-01-19 14:48:59
* @Last Modified by:   sushiljainam
* @Last Modified time: 2017-01-25 17:47:40
*/

'use strict';

var c = console;

var Bot = function(name, smartness){
	this.name = name || 'bot divis';
	this.smartness = smartness || 1;
	this.fname = getName.bind(null,this.name,1);
	this.lname = getName.bind(null,this.name,2);
	this.fullName = getName.bind(null,this.name);
	// return this;
}

/**
 * decides bot's move
 * @param  {Array}  matrix  Optional, board detail 2D-array
 * @param  {Array}  moves   list of all moves happend yet
 * @return {Object}         move response
 */
Bot.prototype.move = function(matrix,moves) {
	if (!moves) {
		moves = matrix;
		matrix = null;
	};
	moves = moves || [];
	if(!moves.length){
		//random move
		// return;
	}
	if (moves.length == 1) {
		var firstMove = moves[0];
		//3 cases
		// firstMove.isCorner();firstMove.isCenter();ELSE
	};
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
c.log(n);
