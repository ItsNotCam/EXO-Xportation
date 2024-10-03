# Parallax Effect
The first section of the Journey page makes use of a four-layer parallax effect in which three different images and the main heading move at various speeds as the user scrolls down the page which creates a feeling of depth. The JavaScript for this can be found on lines [41-83 of this file](https://github.com/ItsNotCam/EXO-Xportation/blob/3905cf1aacbd79bec9cd81a0de0857974faafee2/src/scripts/pages/journey.js#L41).

The magic here is in the JavaScript: In order to keep the animation smooth, the four elements are all set to position: fixed and as the user scrolls down, the images are translated up at various rates. 

The difficulty with this approach comes from the position: fixed property and the fact that it removes the entire section from the DOM flow, which causes the rest of the page to “start too early”. In order to fix this, I created an invisible block-level element whose height is equal to the height of the visible portion of the parallax elements’ containing div. As the user scrolls, the height of this element is decreased at a rate that is exactly equal to the relative change in vertical position of the parallax elements’ containing div. This allows the rest of the page to “start” at the correct location. 

A neat side-effect of this setup is that I can easily control the amount of influence the user’s scrolling has on the “speed” of the parallax effect without having to manually offset the rest of the page. It’s my favorite part of the site 😊

(Note: This method makes use of translate3d to move the elements because translate3d runs on the GPU which results in notable increases in performance and smoothness on some systems)
