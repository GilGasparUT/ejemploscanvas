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

/*CREACION DE CUADRADOS*/

            const canvas = document.getElementById("lienzo");
            const ctx = canvas.getContext("2d");
            ctx.fillStyle ="yellow";
            ctx.lineWidth=1;
            ctx.fillRect(100, 100, 300, 300);
            ctx.strokeRect(100, 100, 300, 300);



            const kanvas = document.getElementById("lienzo");
            const agg = kanvas.getContext("2d");
            agg.fillStyle ="white";
            agg.lineWidth=1;
            agg.fillRect(125, 125, 250, 250);
            agg.strokeRect(125, 125, 250, 250);



            const qanvas = document.getElementById("lienzo");
            const agil = qanvas.getContext("2d");
            agil.fillStyle ="green";
            agil.lineWidth=1;
            agil.fillRect(175, 175, 150, 150);
            agil.strokeRect(175, 175, 150, 150);
            agil.clearRect(175, 175, 150, 150);
