import $ from 'jquery';
import '../../styles/pages/flights.css';
import './flights/exo-launch-item';
import './flights/exo-launch-item-more';

$(function() { $("main").css("display", "block")  });

const carouselControls = $("#img-selectors");
$("#exo-launches").children().each(function(index) {
  $(carouselControls).html(
    $(carouselControls).html() + 
    /*html*/ `<button class="circle" data-selected="${index === 0}" id="img-select-${index}"></button>`
  );
});

$(function() {
/* Page State */
const pageState = {
  imgNext: $('#img-next'),
  imgBack: $('#img-back'),
  carouselControls: $('#carousel-controls'),
  imgSelectors: $('#img-selectors > *'),
  images: $('.exo-launch'),
  curSelectedImg: 0
};

function setSelectedImg(newSelectedImg) {
  if (newSelectedImg === pageState.curSelectedImg) {
    return;
  }

  pageState.carouselControls.css("pointer-events", "none");
  pageState.images.each(function (imgIdx) {
    let curState = $(this).attr("data-state");
    if (imgIdx === newSelectedImg) {
      $(this).attr("data-state", "visible");
    } else if (curState !== "enter") {
      $(this).attr("data-state", "hidden");
    }
  });

  setTimeout(() => {
    pageState.carouselControls.css("pointer-events", "auto");
  }, 350);

  pageState.curSelectedImg = newSelectedImg;
}

/* Image selectors */
const updateImgSelectors = (nextIdx) => {
  if (nextIdx === pageState.curSelectedImg) {
    return;
  }

  pageState.imgSelectors.each(function () {
    $(this).attr("data-selected", false);
  });
  $(pageState.imgSelectors[nextIdx]).attr("data-selected", true);

  pageState.imgBack.attr("data-enabled", nextIdx !== 0);
  pageState.imgNext.attr("data-enabled", nextIdx !== pageState.images.length - 1);
}

pageState.imgSelectors.each(function (index) {
  $(this).on('click', () => {
    if (index === pageState.curSelectedImg) {
      return;
    }

    updateImgSelectors(index);
    setSelectedImg(index);
  });
});

/* Image next and back buttons */
pageState.imgNext.on('click', () => {
  let nextIdx = pageState.curSelectedImg + 1;
  if (nextIdx > pageState.images.length - 1) {
    nextIdx = 0;
  }

  updateImgSelectors(nextIdx);
  setSelectedImg(nextIdx);

  pageState.curSelectedImg = nextIdx;
});

pageState.imgBack.on('click', () => {
  let nextIdx = pageState.curSelectedImg - 1;
  if (nextIdx < 0) {
    nextIdx = pageState.images.length - 1;
  }

  updateImgSelectors(nextIdx);
  setSelectedImg(nextIdx);

  pageState.curSelectedImg = nextIdx;
});
})

$(function () {
  /* Details Toggles */
  for (let i = 0; i < 100; i++) {
    const launchContainerId = `#launch${i}`;
    const container = $(launchContainerId);

    const launchDetailsContainer = $(`${launchContainerId}-more`);
    const launchMoreBtn = $(container).find("button");
    $(launchMoreBtn).on("click", function () {
      launchDetailsContainer.attr("data-visible", "true");

      $(launchDetailsContainer).find('.text-type-in').each(function() {
        const height = $(this).height();
        $(this).css('height', height);

        const element = $(this);
        const text = element.text();
        element.text('');

        text.split('').forEach((char, index) => {
          setTimeout(() => {
            element.text(element.text() + char)
          }, 2 * index + 1000);
        });
      });
    });

    const launchCloseBtn = $(`${launchContainerId}-close`);
    $(launchCloseBtn).on("click", function () {
      console.log("clicked", launchContainerId)
      launchDetailsContainer.attr("data-visible", "false");
    });
  }
})
