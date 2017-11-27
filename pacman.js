var square = {
  x:20,
  y:40,
  display: function(){

    for (var row = 0; row <= 40; row++) {
    push(); //save state of canvas
    console.log("row " + row);
    for (var col = 0; col <= 40; col++) {
      fill(66, 134, 244);
      rect(this.x,this.y,45, 30);

      translate(Math.floor(Math.random() * ((999-91)+1) + 91), 0); //translate in X (left-right)
      console.log("drawing shape in row: " + row + " and column: " + col);
    }
    pop(); //restore state of canvas before the x translations
    translate(0, Math.floor(Math.random() * ((999-91)+1) + 91));
    if(row % 2 == 0) {
      translate(35, 0);
    } else {
      translate(-35, 0);
      }
    }
  }

 };





function setup() {
createCanvas(1680,1050);

}


function draw() {
  square.display();
  

}
