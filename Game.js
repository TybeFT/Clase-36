class Game{
    constructor(){
        
    }

    //esta funcion sirve para servir leer el estado del juego de la base de datos
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            form = new Form();
            
            player.getCount();
            form.display();
        }
    }
}