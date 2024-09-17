import '../../styles/pages/book.css';
import './book/exo-book-flight-item';
import $ from 'jquery';

const form = $("#book-flight-form");
const flights = $("exo-book-flight-item")

const pageState = {
	"book-fligh-form-open": false,
	"selected-planet-id": "europa",
	"selected-flight-id": undefined
}

// watch for page changes
const pageStateHandler = {
	set: function(obj, prop, value) {
		obj[prop] = value;
		console.log(`pageState changed: ${prop} = ${value}`);

		// open / close the flight form
		form.attr("data-visible", pageState["book-flight-form-open"]);
		$("#nav-container").css("z-index", pageState["book-flight-form-open"] ? "0" : "50")

		// set the selected flight
		flights.each(function() {
			const isSelectedId = this.id === pageState["selected-flight-id"];
			const closestSelectFlightBtn = $(this).find(".select-flight");
			$(this).attr("data-selected", isSelectedId);
			closestSelectFlightBtn.attr("data-light", isSelectedId);
			if(isSelectedId) {
				closestSelectFlightBtn.attr("data-light", "true");
				closestSelectFlightBtn.attr("data-title", "SELECTED");
			} else {
				closestSelectFlightBtn.removeAttr("data-light");
				closestSelectFlightBtn.attr("data-title", "SELECT");
			}
		});

		return true;
	}
};

const observedPageState = new Proxy(pageState, pageStateHandler);

$("#book-open").on("click", () => observedPageState["book-flight-form-open"] = true);
$("#book-close").on("click", () => observedPageState["book-flight-form-open"] = false);
$(".select-flight").each(function() {
	const closestFlightID = $(this).closest(".book-item-flight").attr("id");
	$(this).on("click", () => observedPageState["selected-flight-id"] = closestFlightID);
})