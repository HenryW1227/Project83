canvas = document.getElementById("mycanvas")
ctx = canvas.getContext("2d")
var lpx = 0
var lpy = 0
newwidth = screen.width - 70
newheight = screen.height - 300
if(screen.width < 992)
{
    document.getElementById("mycanvas").width = newwidth 
    document.getElementById("mycanvas").height = newheight
    document.body.style.overflow="hidden"
}


canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
   lpx = e.touches[0].clientX-canvas.offsetLeft;
   lpy = e.touches[0].clientY-canvas.offsetTop;
}


canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    cpx = e.touches[0].clientX-canvas.offsetLeft;
    cpy = e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;
        ctx.moveTo(lpx,lpy);
        ctx.lineTo(cpx,cpy);
        ctx.stroke();
    
    lpx = cpx;
    lpy = cpy;
}