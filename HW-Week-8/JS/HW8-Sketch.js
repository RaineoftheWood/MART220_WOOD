

let sprite1, sprite2, sprite3, coin, wall1, wall2, wall3, wall4, gems;
//let ghostAni
function setup() {
	new Canvas(1000, 1500);
    //ghostAni = loadAni('./IMAGES/idle/Idle (1).png', './IMAGES/idle/Idle (16).png');

	coin = new Sprite(400, 500, 30);
	coin.color = 'yellow';
	sprite1 = new Sprite(50, 50);
    //sprite1.addAni('idle','./IMAGES/idle/Idle (1).png', './IMAGES/idle/Idle (16).png');
    //sprite1.addAni('walk', './IMAGES/walk/Walk (1).png', './IMAGES/walk/Walk (20).png')
    sprite2 = new Sprite(500, 500);
    sprite3 = new Sprite( 800, 30, 60, 4);
    wall1 = new Sprite(990, 0, 10, 1500, 's');
    wall1.color = 'blue'; 
    wall2 = new Sprite(5,0, 10, 1500, 's');
    wall2.color = 'green';
    wall3 = new Sprite(0, 5, 2000, 10, 's');
    wall3.color = 'teal';
    wall4 = new Sprite(0, 700 , 2000, 10, 's');
    wall4.color = 'violet';
    gems = new Group();
	gems.diameter = 10;
	gems.x = () => random(0, width);
	gems.y = () => random(0, height);
	gems.amount = 80;
    sprite1.overlaps(gems, collect)
    
    /*if (kb.pressing('left')) {
		sprite1.ani = 'walk';
		sprite1.vel.x = -2;
		sprite1.mirror.x = true;
	} else if (kb.pressing('right')) {
		sprite1.ani = 'walk';
		sprite1.vel.x = 2;
		sprite1.mirror.x = false;
	} else {
		sprite1.ani = 'idle';
		sprite1.vel.x = 0;
	}
*/


}
function collect(sprite1, gem) {
	gem.remove();
}


function draw() {
	clear();
    //animation(ghostAni,300, 300);
	sprite1.moveTowards(mouse);
		
	if (sprite1.overlaps(coin)) coin.remove();
    if (kb.pressing('space')) {
		sprite1.overlaps(wall1);
		sprite1.color = 'blue';
	} else {
		sprite1.collides(wall1);
		sprite1.color = 'orange';
	}
    //           (position, tracking, facing)
    sprite3.rotateTowards(mouse, 0.1, 0);
}