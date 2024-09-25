import '../../styles/pages/book.css';
import './book/exo-book-flight-item';
import $ from 'jquery';

import {
	planets,
	bookedFlights
} from './book/booking-data';

const pageState = {
	"book-flight-form-open": false,
	"selected-planet-id": "europa",
	"selected-flight-id": -1,
	"flights": []
}

var flightsElement = $(".book-item-flights");
const formElement = $("#book-flight-form");

const updatePageState = (key, value) => observedPageState[key] = value;

$(() => {
	setFlights(planets[0])
	$("#book-open").on("click", () => updatePageState("book-flight-form-open", true));
	$("#book-close").on("click", () => updatePageState("book-flight-form-open", false));
});

// watch for page changes
var pageStateHandler = {
	set: function (obj, prop, value) {
		obj[prop] = value;
		console.log(`pageState changed: ${prop} = ${value}`, "\nnew pageState:", pageState);

		// open / close the flight form
		formElement.attr("data-visible", pageState["book-flight-form-open"]);
		$("#nav-container").css("z-index", pageState["book-flight-form-open"] ? "0" : "50")

		// set the selected planet
		/* TODO */

		// set the selected flight
		pageState.flights.forEach((flight) => {
			const flightId = $(flight).attr("id");
			const isSelectedId = flightId === pageState["selected-flight-id"];
			const closestSelectFlightBtnElement = $(flight).find(".select-flight");

			$(flight).attr("data-selected", isSelectedId);
			closestSelectFlightBtnElement.attr("data-light", isSelectedId);
			if (isSelectedId) {
				closestSelectFlightBtnElement.attr("data-light", "true");
				closestSelectFlightBtnElement.attr("data-title", "SELECTED");
			} else {
				closestSelectFlightBtnElement.removeAttr("data-light");
				closestSelectFlightBtnElement.attr("data-title", "SELECT");
			}
		});

		return true;
	}
};
var observedPageState = new Proxy(pageState, pageStateHandler);

const setFlights = (planet) => {
	pageState.flights = [];
	$(flightsElement).html("");

	bookedFlights[planet].forEach((flight, index) => {
		const id = `${planet}-flight-${index + 1}`;
		const flightItem = $(`
			<exo-book-flight-item id="${id}" data-selected="false" class="data-[selected='true']:pointer-events-none">
				<span slot="company">${flight.company}</span>
				<span slot="method">${flight.method}</span>
				<span slot="start-time">${flight.startTime}</span>
				<span slot="start-date">${flight.startDate}</span>
				<span slot="end-time">${flight.endTime}</span>
				<span slot="end-date">${flight.endDate}</span>
				<span slot="start-location">${flight.startLocation}</span>
				<span slot="start-airport">${flight.startAirport}</span>
				<span slot="end-location">${flight.endLocation}</span>
				<span slot="end-airport">${flight.endAirport}</span>
				<span slot="start-planet">${flight.startPlanet}</span>
				<span slot="end-planet">${flight.endPlanet}</span>
				<span slot="cost">${flight.cost}</span>
				<span slot="traveller-amount">${flight.travellerAmount}</span>
			</exo-book-flight-item>
		`);

		flightItem.on("click", ".select-flight", function (event) {
			event.stopPropagation();
			updatePageState("selected-flight-id", id);
		});

		pageState.flights.push(flightItem);
		flightsElement.append(flightItem);
	});
}

// $(".select-flight").each(function() {
// 	const closestFlightID = $(this).closest(".book-item-flight").attr("id");
// 	$(this).on("click", () => observedPageState["selected-flight-id"] = closestFlightID);
// })
