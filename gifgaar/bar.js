/* SET RANDOM LOADER COLORS FOR DEMO PURPOSES */	

	

	/* RANDOM LARGE IMAGES FOR DEMO PURPOSES */	
var myimages=new Array()
//specify random images below. You can have as many as you wish
myimages[1]="space/s1.gif"
myimages[2]="space/s2.gif"
myimages[3]="space/s3.gif"
myimages[4]="space/s4.gif"
myimages[5]="space/s5.gif"
myimages[6]="space/s6.gif"
myimages[7]="space/s7.gif"
myimages[8]="space/s8.gif"
myimages[9]="space/s9.gif"
myimages[10]="space/s10.gif"
myimages[11]="space/s11.gif"
myimages[12]="space/s12.gif"
myimages[13]="space/s13.gif"
myimages[14]="space/s14.gif"
myimages[15]="space/s15.gif"
myimages[16]="space/s16.gif"
myimages[17]="space/s17.gif"
myimages[18]="space/s18.gif"
myimages[19]="space/s19.gif"
myimages[20]="space/s20.gif"
myimages[21]="space/s21.gif"
myimages[22]="space/s22.gif"
myimages[23]="space/s23.gif"
myimages[24]="space/s24.gif"
	// Stripes interval
	var stripesAnim;
	var calcPercent;
	
	$progress = $('.progress-bar');
	$percent = $('.percentage');
	$stripes = $('.progress-stripes');
	$stripes.text('////////////////////////');
	
	/* CHANGE LOADER SKIN */

	
	// Call function to load array of images
	preload(myimages);
	
	// Call function to animate stripes
	stripesAnimate(); 
	
	/* WHEN LOADED */
	$(window).load(function() {
		loaded = true;
		$progress.animate({
			width: "100%"
		}, 100, function() {
			$('span').text('adjust volume').addClass('loaded');
			$percent.text('100%');
			clearInterval(calcPercent);
			clearInterval(stripesAnim);
				function random_imglink(){
		var ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
document.body.style.backgroundImage = "url("+myimages[ry]+")";
}


(function loop() {
    var rand = Math.round(Math.random() * (3000)) + 500;
    setTimeout(function() {
            random_imglink();
            loop();  
    }, rand);
}());
		});
	});
	
	/*** FUNCTIONS ***/

	/* LOADING */
	function preload(imgArray) {
		var increment = Math.floor(100 / imgArray.length);
		$(imgArray).each(function() {
			$('<img>').attr("src", this).load(function() {
				$progress.animate({
					width: "+=" + increment + "%"
				}, 100);
			});
		});
		calcPercent = setInterval(function() {
			
			//loop through the items
			$percent.text(Math.floor(($progress.width() / $('.loader').width()) * 100) + '%');
			
		});
	}
	
	/* STRIPES ANIMATION */
	function stripesAnimate() {
		animating();
		stripesAnim = setInterval(animating, 2500);
	}

	function animating() {
		$stripes.animate({
			marginLeft: "-=30px"
		}, 2500, "linear").append('/');
	} 
	
	