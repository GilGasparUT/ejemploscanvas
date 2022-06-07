/*ANIMACION IMAGEN*/

        var imagenX = 300;
		var imagenY = 50;
		var imagen2X = 0;
		var imagen2Y = 50;

	
		var img = new Image;
		img.src = "img/logo.png";
		var img2 = new Image;
		img2.src = "img/logo2.png";
		
		function comenzar(){
			
 			animacion = document.getElementById('ani');
 			animacion.style.background='red';
 			gol = animacion.getContext('2d');

 			setInterval(mover, 50);
			

		}

		function mover(){

		 	imagenX = imagenX - 5;
		  	imagen2X = imagen2X + 5;
		 	
		 	if (imagenX == 0){
		 		imagenX = 300;
		 	}
		 	if (imagen2X >= 300){
		 		imagen2X = 0;
		 	}

		 
		 	gol.clearRect(0,0,animacion.width,animacion.height);
 			
 			gol.drawImage(img, imagenX, imagenY);
			gol.drawImage(img2, imagen2X, imagen2Y);
		 	
		}

