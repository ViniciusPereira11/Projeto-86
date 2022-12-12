

var canvas = new fabric.Canvas('canvas');
var x= document.getElementById("musica");


function novaImagem()
{

    fabric.Image.fromURL('aranha.jpg', function(Img){
    blockImageObject = Img;

    blockImageObject.scaleToWidth(700);
    blockImageObject.scaleToHeight(510)
    blockImageObject.set({
        top:0,
        left:0
    });
    canvas.add(blockImageObject);
});
	
}


    //é aqui que coloca o som para tocar a musica
   
    function playSound(){
        x.play();
    }
