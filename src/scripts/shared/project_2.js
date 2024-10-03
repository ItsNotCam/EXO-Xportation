import $ from "jquery";

// Create the form element with jQuery
const transitionDurationMs = 200;
const form = $("<form>", {
	class: `
		z-[1000]
		fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
		place-items-center
		p-4 w-screen h-screen
		bg-white/1 backdrop-blur-sm text-center 
		transition-opacity
	`,
	css: {
		display: "grid",
		transitionDuration: `${transitionDurationMs}ms`,
		opacity: 0,
		pointerEvents: "none"
	},
	"data-visible": "false",
	html: /* html */ `
	<div class="flex flex-col justify-start border border-exo-light-100 p-4 bg-exo-dark-500/75">
		<label for="username" class="text-left">Please enter your name</label>
		<input type="text" autocomplete="off" class="
			px-2 pt-2 pb-1 bg-transparent outline-one text-exo-light-100
			border-b border-exo-light-100 focus:outline-none
		" placeholder="John Doe" name="username" id="username">
		<button type="submit" class="btn h-[2.5rem] w-[15rem] mt-4" data-title="Submit">
			Submit
		</button>
	</div>
	`,
	appendTo: "body"
});

// handle form submission event to change the display name
form.on("submit", (e) => {
	e.preventDefault(); // Prevent the form from
	const username = $("#username"); // Get the username element
	if(username.val().length > 0) {
		setDisplayName(username.val()); // Set the display name with the input value
		setFormVisible(false); // Hide the form
	} else {
		alert("No name was given"); // Alert the user if no name was provided
	}
})


/**
 * Sets the visibility of a form element by adjusting its CSS properties, then hiding it
 * after 'transitionDurationMs' has elapsed
 * @param {boolean} visible - A boolean indicating whether the form should be visible.
 */
const setFormVisible = (visible) => {
	// set the visibility of the form
	form.css({
		"display": "grid",
		"opacity": visible ? "100%" : "0",
		"pointerEvents": visible ? "auto" : "none"
	})

	if(!visible) {
		setTimeout(() => 
			form.css({"display": "none"}), transitionDurationMs
		); // set its diaplay to none after the opacity transition duration has elapsed
	} else {
		// set the user to focus and select all text within the element
		$("#username")
			.trigger("focus")
			.trigger("select");
	}
}

/**
 * Sets the display name in the local storage
 * Update each of the elements that display the welcome message.
 * @param {string} name - The name to be set as the display name.
 */
const setDisplayName = (name) => {
	// Set the name in local storage
	localStorage.setItem("exo-name", name);

	// Update each of the elements that display the welcome message
	$(".display-name").each(function() {
		// Find the span with class "username" and set its text to the inputted name
		$(this).find(".username").html(/* html */ `
			<span class="text-base">Welcome,</span>
			<span class="username text-exo-light-100 text-lg"> ${name}</span>
		`);
	});
};



/**************************/
/* ASSIGNMENT REQUIREMENT */
/*   FULFILLMENT SECTION  */
/**************************/

// JQuery function to wait for the entire page to load
$(function() {
	/*************************************/
	/* SET THE DISPLAY NAME FROM STORAGE */
	/* OR SHOW DISPLAY NAME INPUT FORM   */
	/*************************************/
	const exoName = localStorage.getItem("exo-name");	// get the name from the local storage
	if (exoName !== null && exoName.length > 0) {
		setDisplayName(exoName); // set the display name 
		setFormVisible(false);   // hide the name editing form
		form.find("input[type='text']").val(exoName); // set the form's text to the current name
	} else {
		setFormVisible(true); // show the name editing form
	}

	// Each of these buttons will show the name editing form
	$(".display-name").find("button").each(function() {
		$(this).on("click", function() {
			setFormVisible(true);
		})}
	);


	/**************************/
	/* SET LAST TIME MODIFIED */
	/**************************/
	$("#last-modified").text(`Last Updated: ${document.lastModified}`)


	/**********************/
	/* OPEN A NEW WINDOW  */
	/**********************/
	$("#open-window-btn").on("click", function() {
		window.open(
			$(this).attr("href"), 
			$(this).attr("target")
		);
	})
})