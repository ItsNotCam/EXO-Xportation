import $ from 'jquery';


// Create the form content
const formContent = /* html */ `
	<div class="flex flex-col justify-start border border-exo-light-100 p-4 bg-exo-dark-500/75">
		<label for="username" class="text-left">Please enter your name</label>
		<input type="text" class="
			px-2 pt-2 pb-1 bg-transparent outline-one text-exo-light-100
			border-b border-exo-light-100 focus:outline-none
		" placeholder="John Doe" name="username" id="username">
		<button type="submit" class="btn h-[2.5rem] w-[15rem] mt-4" data-title="Submit">
			Submit
		</button>
	</div>
`

// get the name from the local storage
localStorage.removeItem("exo-name");
const exoName = localStorage.getItem("exo-name");

// 
if(exoName !== null && exoName.length > 0) {
	$(function() {
		$(".display-name").text(`Welcome, ${exoName}`);
	})
} else {
	const form = $("<form>", {
		class: /* html */ `
			fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
			p-4 w-screen h-screen
			bg-white/1 backdrop-blur-sm text-center 
			z-[1000]
			grid place-items-center
		`,
		html: formContent
	})

	form.on("submit", function(event) {
		event.preventDefault();
		const exoName = $("#username").val().trim();
		if (exoName !== "") {
			localStorage.setItem("exo-name", exoName);
			form.remove();
			console.log("ok")
		}
		
		$(function() {
			$(".display-name").text(`Welcome, ${exoName}`);
		})
	});

	$("body").append(form)
}
