function transformer() {
	var final = [];
	_.each(data, function (el, i, list) {
		if (i === 0) return false;
		final.push(_.object(list[0], list[i]));
	});
	console.log(JSON.stringify(final));
}

$(document).ready(function () {
	transformer();
	$(document).on('click', '.what', function () {
		$(document).find('.overlay').fadeIn(1000);

	});
	$(document).on('click', '.close', function () {
		$(document).find('.overlay').fadeOut(1000);
	});

	$(document).on('click', '#submitter', function () {
		$(document).find('.result').fadeIn(1000);

	});
	$(document).on('click', '#exitSubmit', function () {
		$(document).find('.result').fadeOut(1000);
	});

	$(function slider() {
		$('#sliders').slider({
			max: 100,
			min: 0,
			orientation: "vertical",

		})

	});
	$(function slider() {
		$('#slider1').slider({
			max: 100,
			min: 0,
			orientation: "vertical",

		})

	});
	$(function slider() {
		$('#slider2').slider({
			max: 100,
			min: 0,
			orientation: "vertical",

		})

	});
	$(function slider() {
		$('#slider3').slider({
			max: 100,
			min: 0,
			orientation: "vertical",

		})

	});
	$(function slider() {
		$('#slider4').slider({
			max: 100,
			min: 0,
			orientation: "horizontal",

		})

	});
	$(function slider() {
		$('#slider5').slider({
			max: 100,
			min: 0,
			orientation: "horizontal",

		})

	});

	/*selecting data from array
	var selection= data[2][4];
alert();
*/

});