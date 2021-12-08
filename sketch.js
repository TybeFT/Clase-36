var gameState = 0;
var playerCount = 0;
var database;

var game;
var form;
var player; 

function setup(){
    createCanvas(500,500);
    
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    
}

function draw(){
    background("white");
    //drawSprites();
}
