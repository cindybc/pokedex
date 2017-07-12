$(document).ready(function(){
  $(".button-collapse").sideNav();


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