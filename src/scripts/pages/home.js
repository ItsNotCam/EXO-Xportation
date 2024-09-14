import '../../styles/pages/home.css';
import $ from 'jquery';

$(function() {
	const disclaimer = $("#disclaimer");
	$("#open-disclaimer-btn").on("click", function() {
		disclaimer.attr("data-visible", "true");
	});

	$("#close-disclaimer-btn").on("click", function() {
		disclaimer.attr("data-visible", "false");
	});
});