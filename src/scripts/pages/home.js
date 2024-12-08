import '../../styles/pages/home.css';
import $ from 'jquery';
import 'datatables';

$(function() {
  const disclaimer = $("#disclaimer");
  $("#open-disclaimer-btn").on("click", function() {
    disclaimer.attr("data-visible", "true");
  });

  $("#close-disclaimer-btn").on("click", function() {
    disclaimer.attr("data-visible", "false");
  });
  
  const attribution = $("#attribution");
  $("#open-attribution-btn").on("click", function() {
    attribution.attr("data-visible", "true");
  });

  $("#close-attribution-btn").on("click", function() {
    attribution.attr("data-visible", "false");
  });
});

const links = [
	{
		link: "https://www.freepik.com/free-ai-image/money-fantasy-scene_236590393.htm#fromView=search&page=1&position=39&uuid=04bd67d2-4553-47c1-ae1b-59a76094f174",
		title: "Cryo Sleep"
	},
	{
		link: "https://www.freepik.com/free-ai-image/view-astronaut-spacesuit-snowboarding-moon_152374631.htm#fromView=image_search&page=1&position=26&uuid=1fe54a3e-968d-4a7f-a1fb-617e19c4cee9",
		title: "Snowboarding astronaut 3"
	},
	{
		link: "https://www.freepik.com/free-ai-image/astronaut-with-spacesuit-practicing-snowboarding-moon_152374899.htm#fromView=image_search&page=1&position=5&uuid=f1a50d12-dacd-4703-bac6-74c0ec7b28a8",
		title: "Snowboarding astronaut 2"
	},
	{
		link: "https://www.freepik.com/free-ai-image/astronaut-with-spacesuit-practicing-snowboarding-moon_152374905.htm#fromView=image_search&page=1&position=0&uuid=99c8ca95-71c5-4115-9fd3-a5c5daa07411",
		title: "Snowboarding astronaut 1"
	},
	{
		link: "https://www.freepik.com/free-photo/adorable-kids-with-popcorn-watching-tv_1976608.htm#fromView=search&page=1&position=13&uuid=6b8f86d7-5b5d-4bf3-9382-970f8f4720e0",
		title: "Kids watching movie"
	},
	{
		link: "https://www.freepik.com/free-photo/people-having-happy-retirement-activity_20136353.htm#fromView=search&page=1&position=51&uuid=2ceec2ec-244f-4226-aa53-e8170cd165f1",
		title: "People playing tennis"
	},
	{
		link: "https://www.freepik.com/free-ai-image/delicious-food-prepared-jewish-hanukkah-celebration_133761145.htm#fromView=image_search&page=1&position=7&uuid=81501120-ad3d-4787-898d-e24d874a1082",
		title: "Delicious Food for Hanukkah Celebration"
	},
	{
		link: "https://www.freepik.com/free-ai-image/anthropomorphic-robot-performing-regular-human-job-future_94214682.htm#fromView=search&page=1&position=14&uuid=da562e5b-e222-4cae-96ff-f5d353beb98a",
		title: "AI performing Chores"
	},
	{
		link: "https://www.freepik.com/free-ai-image/futuristic-kitchen-interior-design_320252041.htm#fromView=search&page=2&position=14&uuid=08795428-b383-411e-8e45-fe8e6b25f1fd",
		title: "Spaceship Interior"
	},
  {
    link: "https://www.freepik.com/free-ai-image/exploration-settlements-different-planets_279273198.htm",
    title: "Moon Settlement"
  },
  {
    link: "https://www.freepik.com/free-ai-image/astronaut-with-spacesuit-practicing-snowboarding-moon_152374905.htm",
    title: "Space suit on mars"
  },
  {
    link: "https://www.freepik.com/free-ai-image/high-tech-futuristic-urban-travel-people_133785133.htm",
    title: "Airport"
  },
  {
    link: "https://www.freepik.com/free-ai-image/technological-exploration-settlement_279272199.htm",
    title: "Moon Base"
  },
  {
    link: "https://www.freepik.com/free-ai-image/technological-exploration-settlement_279272331.htm",
    title: "Mars Base"
  },
  {
    link: "https://www.freepik.com/free-photo/robot-is-standing-bustling-street-futuristic-city_225720138.htm#fromView=search&page=2&position=29&uuid=752e3b71-fa1d-419b-b623-e797de89befd",
    title: "Robot in a market"
  },
  {
    link: "https://www.freepik.com/free-ai-image/technological-exploration-settlement_279272199.htm",
    title: "Floating City"
  },
  {
    link: "https://www.freepik.com/free-ai-image/turkey-evening-narrow-street-background_126535269.htm#fromView=search&page=1&position=7&uuid=1ca2ae3b-d7e6-479a-ad2e-58bf4feedfcf",
    title: "Night City"
  },
  {
    link: "https://www.freepik.com/free-ai-image/exploration-settlements-different-planets_279273254.htm#fromView=search&page=1&position=1&uuid=634dc158-f9b5-4eb9-b2d3-e845772e1e07",
    title: "Mars Base 2"
  },
  {
    link: "https://www.freepik.com/free-ai-image/exploration-settlements-different-planets_279273254.htm#fromView=search&page=1&position=1&uuid=634dc158-f9b5-4eb9-b2d3-e845772e1e07",
    title: "Mars Base 2"
  },
  {
    link: "https://www.freepik.com/free-ai-image/blending-futuristic-building-seamlessly-into-desert-landscape_138548670.htm#fromView=search&page=1&position=31&uuid=d853f0f1-a579-4064-bc4f-5bed4dc9b456",
    title: "Futuristic Desert Building"
  },
  {
    link: "https://www.freepik.com/free-ai-image/futuristic-moon-background_83186188.htm#fromView=search&page=1&position=14&uuid=d853f0f1-a579-4064-bc4f-5bed4dc9b456",
    title: "Futuristic Moon Background"
  },
  {
    link: "https://www.freepik.com/free-photo/robot-is-standing-bustling-street-futuristic-city_225720138.htm#fromView=search&page=2&position=29&uuid=752e3b71-fa1d-419b-b623-e797de89befd",
    title: "Robot in Futuristic City"
  },
  {
    link: "https://www.freepik.com/free-ai-image/digital-city-life-shines-futuristic-sunset-generated-by-ai_41438711.htm#fromView=search&page=1&position=0&uuid=ed4f7e68-02c0-42df-a24d-97e7f73b70ae",
    title: "Digital City at Sunset"
  },
  {
    link: "https://www.freepik.com/free-ai-image/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_186037907.htm#fromView=search&page=1&position=8&uuid=ce50491c-bc8d-4f84-88de-5d8f1b78d5e6",
    title: "Pre-prepared Food"
  },
  {
    link: "https://www.freepik.com/free-ai-image/cozy-modern-living-room-illuminated-with-elegance-generated-by-ai_42130102.htm#fromView=search&page=4&position=21&uuid=06fc1190-0e8e-4fcb-9cc8-ff68db739d4a",
    title: "Cozy Modern Living Room"
  },
  {
    link: "https://www.freepik.com/free-ai-image/modern-architecture-illuminates-empty-corridor-with-futuristic-design-generated-by-ai_41317145.htm#fromView=search&page=3&position=42&uuid=06fc1190-0e8e-4fcb-9cc8-ff68db739d4a",
    title: "Futuristic Corridor"
  },
  {
    link: "https://www.freepik.com/free-ai-image/view-bedroom-with-futuristic-decor-style_133536253.htm#fromView=search&page=2&position=1&uuid=06fc1190-0e8e-4fcb-9cc8-ff68db739d4a",
    title: "Futuristic Bedroom Decor"
  },
  {
    link: "https://www.freepik.com/free-ai-image/minimal-amazing-interior-design_48002458.htm#fromView=search&page=1&position=31&uuid=06fc1190-0e8e-4fcb-9cc8-ff68db739d4a",
    title: "Minimal Interior Design"
  },
  {
    link: "https://www.freepik.com/free-ai-image/view-bedroom-with-futuristic-decor-style_133536299.htm#fromView=search&page=1&position=7&uuid=06fc1190-0e8e-4fcb-9cc8-ff68db739d4a",
    title: "Futuristic Bedroom Style"
  },
  {
    link: "https://www.freepik.com/free-ai-image/view-bedroom-with-futuristic-decor-style_133536248.htm#fromView=search&page=3&position=22&uuid=63038576-fb4f-43bd-b184-40f511de1151",
    title: "Futuristic Bedroom View"
  },
  {
    link: "https://www.freepik.com/free-ai-image/ordinary-human-job-performed-by-robot_94948823.htm#fromView=search&page=3&position=0&uuid=aa18eb10-765f-400f-b039-21773d3a15a0",
    title: "Robot Performing Human Job"
  },
  {
    link: "https://www.freepik.com/free-ai-image/robotic-human-heart-futuristic-representation_266512577.htm#fromView=search&page=11&position=43&uuid=aa18eb10-765f-400f-b039-21773d3a15a0",
    title: "Robotic Human Heart"
  },
  {
    link: "https://www.freepik.com/free-ai-image/regular-human-job-performed-by-anthropomorphic-futuristic-robot_94213593.htm#fromView=search&page=5&position=8&uuid=aa18eb10-765f-400f-b039-21773d3a15a0",
    title: "Anthropomorphic Robot Job"
  },
  {
    link: "https://www.freepik.com/free-ai-image/blending-futuristic-building-seamlessly-into-desert-landscape_138548670.htm#fromView=search&page=1&position=31&uuid=d853f0f1-a579-4064-bc4f-5bed4dc9b456",
    title: "Futuristic Desert Building"
  },
  {
    link: "https://www.freepik.com/free-ai-image/exploration-settlements-different-planets_279273254.htm#fromView=search&page=1&position=1&uuid=634dc158-f9b5-4eb9-b2d3-e845772e1e07",
    title: "Exploration Settlements"
  }
];

$.getJSON("public/data/credits.json", function(data) {
	const links = data.credits;
	console.log(links);

	const truncate = (text, len) => {
		return text.length > len ? text.substring(0, len) + '...' : text;
	}

	$("#attribution-list").html(/*html*/`
		<thead>
			<tr>
				<th>Name</th>
				<th>Link</th>
			</tr>
		</thead>
		<tbody>
	` + links.map(link => /* html */`
			<tr>
				<td>
					${link.title}
				</td>
				<td> 
					<a class="hover:text-white visited:text-blue-400 underline flex-grow" href="${link.link}" target="_blank">
					${truncate(link.link.replace("https://www.freepik.com/free-ai-image/", "").replace("https://www.freepik.com/free-photo/", ""), 30)}
					</a>
				</td>
			</tr>
			`).join('') + /* html */ `
		</tbody>
	`);
	
	$("#attribution-list").dataTable({
		paginate: true,
		scrollY: 325
	});
});


// $("#attribution-list").html(links.map(link => /* html */`
//   <li>
//     <a class="hover:text-white visited:text-blue-400 underline flex-grow" href="${link.link}" target="_blank">${link.title}</a>
//   </li>
// `).join(''));