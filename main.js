var canvas=new fabric.Canvas("_canvas");
var player_x=10;
var player_y=10;
var block_w=30;
var block_h=30;
var player_object="";
function player_add(){
    fabric.Image.fromURL("player.png",function(Img)
    {player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(200);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
}
    )
}
var block_image_object="";
function new_image(get_Image){
    fabric.Image.fromURL(get_Image,function(Img)
    {block_image_object=Img;
    block_image_object.scaleToWidth(150);
    block_image_object.scaleToHeight(200);
    block_image_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
}
    )
}