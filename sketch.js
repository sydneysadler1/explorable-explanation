
var myP;
var button;

var square = {
  x:500,
  y:800,
  display: function(){
    fill(66, 134, 244);
    rect(this.x,this.y,45, 30);
  }
};


function setup() {
  var cnv = createCanvas(1680,8000);
  cnv.position(0,0);
  cnv.style('z-index',"1");
  img = createImg('https://www.wallies.com/filebin/images/loading_apple.gif');
  img.size(100,100);
  img.position(800,200);
  myP = createP('Loading');
  myP.position(790,300);
  myP.style("font-size", "40px");
  myP2 = createP('Please pay to continue:');
  myP2.position(780,400);
  var inp = createInput('$');
  inp.position(785,440);
  inp.input(myInputEvent);
  button = createButton('Submit');
  button.position(820, 470);
  rect(800,800,45, 30);

}

function draw() {
  rect(800,800,45, 30);
  square.display();

}


function myInputEvent(){
  console.log('you are typing: ', this.value());
}
