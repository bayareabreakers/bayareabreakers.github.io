backgrounds = ["https://i.giphy.com/media/CeGL4W0SSOniU/source.gif",
"https://gifimage.net/wp-content/uploads/2018/05/spirited-away-feels-gif.gif",
"https://media1.tenor.com/images/41aa2c4e6f1e2ddba09d11095d88d83e/tenor.gif?itemid=8655400"];

window.onload = function() {
	var time = new Date().getTime();
	document.body.style.backgroundImage= "url('"+backgrounds[time % backgrounds.length]+"')";
}