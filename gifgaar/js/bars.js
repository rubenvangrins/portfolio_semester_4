var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height, kleur;

function frameLooper(){
	window.webkitRequestAnimationFrame(frameLooper);
	fbc_array = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(fbc_array);
	ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
	ctx.fillStyle = /*'rgba('+color[0]+', '+color[1]+', '+color[2]+', 1)'*/'#ffffff'; //kleur; // Color of the bars
	bars = 1000;
	
	for (var i = 0; i < bars; i++) {
		bar_x = i * 3;
		bar_width = 2;
		bar_height = -(fbc_array[i] / 2);
		ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
	}
}