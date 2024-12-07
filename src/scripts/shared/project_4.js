import "../../styles/pages/book.css";
import "../pages/book/exo-book-flight-item";
import $ from "jquery";
import LoadBookingData from "../pages/book/load-booking-data";

// all of this code only applies to the "books.html" page

// setup the page state
const pageState = {
  bookFlightFormOpen: false,
  selectedPlanets: "europa",
  selectedFlightId: -1,
  flights: [],
  bgImage: $("#bg-image"),
  currentLocation: $("#current-location"),
  bookLocation: $("#book-location"),
  bgImages: $("#bg-img-selectors").children(),
};

// watch for page changes
const observedPageState = new Proxy(pageState, {
  set: function (obj, prop, value) {
    obj[prop] = value;
    console.log(
      `pageState changed: ${prop} = ${value}`,
      "\nnew pageState:",
      pageState
    );

    // open / close the flight form
    $("#book-flight-form").attr(
      "data-visible",
      pageState.bookFlightFormOpen
    );
    $("#nav-container").css(
      "z-index",
      pageState.bookFlightFormOpen ? "0" : "50"
    );

    // set the selected flight
    pageState.flights.forEach((flight) => {
      const flightId = $(flight).attr("id");
      const isSelectedId = flightId === pageState.selectedFlightId;
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
  },
});

// abstract out updating the observed page state
const updatePageState = (key, value) => (observedPageState[key] = value);

const setFlights = (planet, bookedFlights) => {
  pageState.flights = [];

  planet = planet.toLowerCase();

  var flightsElement = $(".book-item-flights");
  flightsElement.html("");

  bookedFlights[planet].forEach((flight, index) => {
    const id = `${planet}-flight-${index + 1}`;
    const flightItem = $(/* html */`
      <exo-book-flight-item data-id="${id}" data-selected="false" class="data-[selected='true']:pointer-events-none">
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
      updatePageState("selectedFlightId", id);
    });

    pageState.flights.push(flightItem);
    flightsElement.append(flightItem);
  });
};

// on page load
$(async () => {
	// get planets and booked flights using raw ajax
	var planets = [];
	var bookedFlights = {};
	try {
		const result = await LoadBookingData();
		planets = result.planets;
		bookedFlights = result.bookedFlights;
	} catch(e) {
		console.error(e);
	}

	// set initial flights
  setFlights(planets[0], bookedFlights);

	// when clicking open or close buttons, change page state
  $("#book-open").on("click", () =>
    updatePageState("bookFlightFormOpen", true)
  );
  $("#book-close").on("click", () =>
    updatePageState("bookFlightFormOpen", false)
  );

	// update the page state with the data cooresponding to the clicked image
	// these images are the preview images on the bottom right of the "book" page
  pageState.bgImages.on("click", function () {
		// get relevant data from the current page state
    const { bgImage, currentLocation, bookLocation } = pageState;
		
		// get the information of the currently clicked image
    const clickedImageSrc = $(this).find("img").attr("src");
    const clickedImageLocation = $(this).find("h1").text();
    if (bgImage.attr("src") === clickedImageSrc) {
      return;
    }

		////////////////////////
		// Blending Animation //
		////////////////////////

		// hide the current image and location elements in order 
    bgImage.css("opacity", 0);
    currentLocation.css("opacity", 0);

		// after 200ms (the duration of the opacity transition property) swap the images
    setTimeout(() => {
      currentLocation.text(clickedImageLocation); // update page state
      bgImage.attr("src", clickedImageSrc); // update background image src
      bookLocation.find("h1").text(clickedImageLocation); // change the title on the bottom left of the page
      bookLocation.find("img").attr("src", clickedImageSrc); // update the form element image

			// now that all of the properties have been set, show elements
      bgImage.css("opacity", 1);
      currentLocation.css("opacity", 1);
    }, 200);

		// update the flights to the current one
    setFlights(clickedImageLocation, bookedFlights);
  });
});
