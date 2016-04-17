document.body.onmousemove = function(e){
	e = e || window.event;

	var pageX = e.pageX;
	var pageY = e.pageY;
		// For good old Internet Explorer:
	if(pageX === undefined){
		pageX = e.clientX + document.body.scrolLeft + documentElement.scrolLeft;
		pageY = e.clientY + document.body.scrolTop + documentElement.scrolTop;
	}
		//
	var x = pageX/window.innerWidth;
	var y = pageY/window.innerHeight;

	function mouseSetUp(mouse, a){
		mouse.textContent = Math.ceil(100*a) + "%";
		mouse.style.opacity = 1 - x;
	}

	function circleSetUp(circle, a) {
		a = Math.tan(a);
		circle.style.opacity = 0 + a;
		circle.setAttribute("r", Math.ceil(300*a*2));
		circle.setAttribute("stroke-width",50*a);
	}

	mouseSetUp(document.getElementById('mouseX'), x);
	mouseSetUp(document.getElementById('mouseY'), y);

	circleSetUp(document.getElementById('circleX'), x);
	circleSetUp(document.getElementById('circleX1'), x*0.5);
	circleSetUp(document.getElementById('circleX2'), x*0.25);
	
	circleSetUp(document.getElementById('circleY'), y);
	circleSetUp(document.getElementById('circleY'), y);
	circleSetUp(document.getElementById('circleY1'), y*0.5);
	circleSetUp(document.getElementById('circleY2'), y*0.25);
};