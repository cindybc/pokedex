$(document).ready(function(){
  $(".button-collapse").sideNav();

 function pokemones(data){
     for(var data = 1; data < 20; data++){
		console.log(data);
		var lista= $('<li/>');
		var botton = $('<button/>',{'class' : 'button-poke button-img'});
		var span = $('<span/>'); 
		var pokemones =  $('<img/>',{'src': 'https://pokeapi.co/media/img/' + data + '.png'});

        lista.append(botton);
        lista.append(span);
        botton.append(pokemones);
		$('.lista-pokemones').append(lista);
	}
}
  $.ajax({
  	url:  'http://pokeapi.co/api/v2/pokedex/',
  	type: 'GET',
  	dataType: 'json',
  	data: {"limit": '802'}
  })
  .done(function(res){
  	console.log(res);
  	pokemones(res);
  })
  .fail(function(){
  	console.log("error")
  })
});