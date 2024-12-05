const bookingDataPath = "/public/booking-data.json";

export default function LoadBookingData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", bookingDataPath, true);
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
