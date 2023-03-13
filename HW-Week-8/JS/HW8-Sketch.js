var moy; 
function setup()
{
    createCanvas(900, 900);
    moy = loadAni('./IMAGES/moy1.jpg', 5);
}
function draw()
{
    animation(moy, 150, 300);
}