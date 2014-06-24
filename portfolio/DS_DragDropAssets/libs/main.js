/*
	Main js file for DS Raphael Drag&Drop Demo	
	Janette Yuen (2014)
*/

// $(document).ready(function () {
//     alert("Hello World!");
// });

/* Loading canvas, floorplan and fixtures as global variables. */
var canvas;
var background;
var floorplan;
// var walls, topWall, rightWall, bottomWall, leftWall;
var fixtures;
var toilet, sink, bath;

  
window.onload = function () {
    canvas = Raphael("canvas", "100%", 600);
    background = canvas.rect(0,0,500,500).attr({fill:"#777", stroke:"#333", "stroke-width":2});

    /* Floorplan*/
    floorplan = canvas.rect(20,20,396,324).attr({fill:"#FFF", stroke:"#111", "stroke-width":13.5});
    // topWall = canvas.path("m 20,20 h 396 z").attr({stroke: "green"});
    // rightWall = canvas.path("m 416,20 v 324 z").attr({stroke: "green"});
    // bottonWall = canvas.path("m 20,344 h 396 z").attr({stroke: "green"});
    // leftWall = canvas.path("m 20,20 v 324 z").attr({stroke: "green"});

    // walls = canvas.set();
    // walls.push(
    // 	topWall,
    // 	rightWall, 
    // 	bottomWall, 
    // 	leftWall
    // );


 	/* Toilet */
    toilet = canvas.path("m 89.443685,19.248597 c 0,12.0122 -11.19288,21.75 -25,21.75 -13.80712,0 -25,-9.7378 -25,-21.75 0,-12.0121902 11.19288,-21.7500005 25,-21.7500005 13.80712,0 25,9.7378103 25,21.7500005 z M 28.250495,1.8912068 c 7.07476,-10.5239503 20.38496,-17.6144708 35.63874,-17.6144708 22.66724,0 41.042675,15.65744087 41.042675,34.971861 l 0,0 c 0,19.31443 -18.375435,34.97187 -41.042675,34.97187 -15.25378,0 -28.56398,-7.09052 -35.63874,-17.61447 m -27.57045995,-52.623221 27.72333995,0 0,70.531651 -27.72333995,0 z");

    toilet.attr({
    	id: 'toilet',
    	fill: 'white',
    	stroke: '#000000',
    	"stroke-width": '1.36',
    	"stroke-linecap": 'round',
    	"stroke-miterlimit": '4',
    	"stroke-dashoffset": '0',
    	"stroke-opacity": '1',
    });

    toilet.transform("t552,18.6875");

    var toilet_label = canvas.text(550,100, "Toilet");

 
    /* Sink */
	sink = canvas.path("m 2.484596,2.2729311 68.011329,0 0,47.0113339 -68.011329,0 z m 57.63864,23.6418279 c 0,10.42305 -10.580843,18.872603 -23.632975,18.872603 -13.052132,0 -23.632975,-8.449553 -23.632975,-18.872603 0,-10.423051 10.580843,-18.8726039 23.632975,-18.8726039 13.052132,0 23.632975,8.4495529 23.632975,18.8726039 z m -19.455761,-4.61495 c 0,2.307011 -1.870201,4.177214 -4.177213,4.177214 -2.307012,0 -4.177215,-1.870203 -4.177215,-4.177214 0,-2.307013 1.870203,-4.177214 4.177215,-4.177214 2.307012,0 4.177213,1.870201 4.177213,4.177214 z m -1.88252,-0.05333 c 0,1.267324 -1.027369,2.294694 -2.294694,2.294694 -1.267325,0 -2.294694,-1.02737 -2.294694,-2.294694 0,-1.267324 1.027369,-2.294693 2.294694,-2.294693 1.267325,0 2.294694,1.027369 2.294694,2.294693 z");
	sink.attr({
		id: 'sink',
		fill: 'white',
		stroke: '#000000',
		"stroke-width": '1',
		"stroke-linecap": 'round',
		"stroke-miterlimit": '4',
		"stroke-opacity": '1',
		"stroke-dashoffset": '0'
	});
    sink.transform('t550,150');

    var sink_label = canvas.text(550,220, "Sink");



    /* Bathtub */
	bath = canvas.path("m 49.653617,46.706578 c 0,3.255209 -2.638869,5.894077 -5.894078,5.894077 -3.255209,0 -5.894077,-2.638868 -5.894077,-5.894077 0,-3.25521 2.638868,-5.894078 5.894077,-5.894078 3.255209,0 5.894078,2.638868 5.894078,5.894078 z m -2.357631,0 c 0,1.953125 -1.583322,3.536446 -3.536447,3.536446 -1.953125,0 -3.536446,-1.583321 -3.536446,-3.536446 0,-1.953125 1.583321,-3.536447 3.536446,-3.536447 1.953125,0 3.536447,1.583322 3.536447,3.536447 z m -18.271641,-35.364465 153.246005,0 c 9.79597,0 17.68223,7.886276 17.68223,17.682232 l 0,35.364464 c 0,9.795956 -7.88626,17.682231 -17.68223,17.682231 l -153.246005,0 c -9.795956,0 -17.682232,-7.886275 -17.682232,-17.682231 l 0,-35.364464 c 0,-9.795956 7.886276,-17.682232 17.682232,-17.682232 z M 2.5009966,2.5009966 l 206.2927034,0 0,88.4111634 -206.2927034,0 z");
	bath.attr({
		fill: 'white',
		stroke: '#000',
		"stroke-width": '1',
		"stroke-miterlimit": '4',
		"stroke-dasharray": 'none',
		'stroke-opacity': '1'
	});
    bath.transform('t550,300');

    /*Group Fixtures*/
    fixtures = canvas.set();
    fixtures.push(
    	toilet,
    	sink,
    	bath
    );


    var bath_label = canvas.text(550,410, "Bath");

    /* Label Styles */
    var labels = canvas.set();
    labels.push(
    	toilet_label,
    	sink_label,
    	bath_label
    );

    labels.attr({
    	"font-family":"arial", 
        "font-size":"30",
        "text-anchor":"start"
    });

    /*Hover fixtures*/
    var hoverIn = function() {
        this.attr({fill: 'yellow', cursor:"move"});
    };
    
    var hoverOut = function() {
        this.attr({fill:'white'});    
    }
    
    toilet.hover(hoverIn, hoverOut, toilet, toilet);
    sink.hover(hoverIn, hoverOut, sink, sink);
    bath.hover(hoverIn, hoverOut, bath, bath);


    /*Drag and Drop*/
    var start = function (x, y) {
        this.ox = 0;
        this.oy = 0;
        this.animate({fill	:'yellow'}, 0, ">");
        
    },
    move = function (dx, dy) {

        this.attr({x: this.ox + dx, y: this.oy + dy});
        var trans_x = dx-this.ox;
	    var trans_y = dy-this.oy;
	    this.translate(trans_x,trans_y);
	    this.ox = dx;
	    this.oy = dy;

	    /* Hover/Drag fixture over floorplan will turn floor red */
	    if(Raphael.isBBoxIntersect(floorplan.getBBox(), fixtures.getBBox())){
	    	floorplan.attr({fill:'#D0E1F7'});
    	} else{
    		floorplan.attr({fill:'white'});
    	}	
	

    },

    up = function () {
        this.animate({fill:'white'}, 300, ">");

        var fixtureBBox = this.getBBox();
        var floorplanBBox = floorplan.getBBox();

        /* Snap-to-wall if fixture is straddling a wall */
        var straddling = false;
        straddling = straddling || (fixtureBBox.x < floorplanBBox.x && fixtureBBox.x2 >= floorplanBBox.x);
        straddling = straddling || (fixtureBBox.x < floorplanBBox.x2 && fixtureBBox.x2 >= floorplanBBox.x2);
        straddling = straddling || (fixtureBBox.y < floorplanBBox.y && fixtureBBox.y2 >= floorplanBBox.y);
        straddling = straddling || (fixtureBBox.y < floorplanBBox.y2 && fixtureBBox.y2 >= floorplanBBox.y2);

        if( straddling && Raphael.isBBoxIntersect(floorplanBBox, fixtureBBox)){
        	// console.log("straddling");
        	var xsnap = Math.min(Math.max(fixtureBBox.x,floorplanBBox.x), (floorplanBBox.x2-fixtureBBox.width));
        	var ysnap = Math.min(Math.max(fixtureBBox.y,floorplanBBox.y), (floorplanBBox.y2-fixtureBBox.height));
        	this.transform("t"+ xsnap + "," + ysnap);
        }

    };

    fixtures.drag(move, start, up);
 
};


