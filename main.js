canvas=document.getElementById("mycanvas");
pen=canvas.getContext("2d");

pen.beginPath();
pen.strokeStyle="red";
pen.lineWidth=4;
pen.rect(150,143,430,200);
pen.stroke();

pen.beginPath();
pen.strokeStyle="Blue";
pen.lineWidth=5;
pen.arc(250,210,40,0,2*Math.PI);
pen.stroke();

pen.beginPath();
pen.strokeStyle="Orange";
pen.lineWidth=5;
pen.arc(300,230,40,0,2*Math.PI);
pen.stroke();

pen.beginPath();
pen.strokeStyle="Black";
pen.lineWidth=5;
pen.arc(350,210,40,0,2*Math.PI);
pen.stroke();

pen.beginPath();
pen.strokeStyle="Green";
pen.lineWidth=5;
pen.arc(400,230,40,0,2*Math.PI);
pen.stroke();

pen.beginPath();
pen.strokeStyle="Red";
pen.lineWidth=5;
pen.arc(450,210,40,0,2*Math.PI);
pen.stroke();