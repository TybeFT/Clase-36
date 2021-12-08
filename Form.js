class Form{
    constructor(){

    }

    display(){
        var titulo = createElement('h2');
        titulo.html('Juego De Carreras');
        titulo.position(450,100);

        var input = createInput("Name");
        input.position(450,250);

        var button = createButton("Play");
        button.position(550,300);

        var greeting = createElement('h3');

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount += 1;

            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hola " + name);
            greeting.position(250,250);
        })
    }

}