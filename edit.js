
/* LIBRARY CODE */
  var canvas;  
  var ctx;
  var WIDTH = 1200;
  var HEIGHT = 500; 

  /*advanced */
  /*
  context.moveTo(10, 10); // give the (x,y) coordinates
  context.lineTo(100, 10);
  context.lineTo(10, 100);
  context.lineTo(10, 10);

  // Done! Now fill the shape, and draw the stroke.
  // Note: your shape will not be visible until you call any of the two methods.
  context.fill();
  context.stroke();
  context.closePath();

  */

  function circle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.fill();
  }

  function rect(x,y,w,h) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fill();
  }

  function person(x,y,size){
    circle(x+1.5*size, y+size, size); // head
    rect(x+1.5*size-size/6, y+2*size, size/3, size*3); // body
    rect(x, y+3*size, 3*size, size/3 ); // arms
    rect(x+.4*size, y+5*size, 2*size, size/3 ); // hips
    rect(x+.4*size, y+5*size, size/3, size*2 ); // left leg
    rect(x+2.4*size, y+5*size, size/3, size*2 ); // left leg
  }

  function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  function init(cb) {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    //return setInterval(draw, 10);
    cb();
  }

/* End Library code */
