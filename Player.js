class Player{
    constructor(){

    }
    //esta funcion sirve para servir leer el estado del juego de la base de datos
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
        playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
        playerCount: count
        })
    }

    update(name){
        var playerIndex = "Jugador " + playerCount;
        database.ref(playerIndex).set({
            name: name
        })
    }
}