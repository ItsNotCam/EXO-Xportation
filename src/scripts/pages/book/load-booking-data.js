// const root = "~cyoung35/exo"
const root = "~cyoung35";
export default function LoadBookingData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `./public/data/booking-data.json`, true);
    xhr.responseType = "json";

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject("Error loading booking data:", xhr.statusText);
      }
    };

    xhr.onerror = function () {
      reject("Error loading booking data:", xhr.statusText);
    };

    xhr.send();
  });
}
