document.addEventListener("DOMContentLoaded", () => {
  var currentTimeUTC = document.querySelector(".currentTimeUTC");

  // Get the current UTC time
  let now = new Date();

  let getPlusOneTime = new Date(now.getTime() + 60 * 60 * 1000);

  let utcTime = getPlusOneTime.toUTCString(); // Converts to a readable UTC format

  // Update the HTML element
  currentTimeUTC.innerText = utcTime;

  document.querySelectorAll(".allSocial span").forEach((icon) => {
    icon.addEventListener("click", () => {
      let platform = icon.getAttribute("data-platform");

      let urls = {
        facebook: "https://www.facebook.com/Sulayman.Adebayo.SMan/",
        twitter: "https://twitter.com",
        linkedin: "https://www.linkedin.com",
        instagram: "https://www.instagram.com",
        github: "https://github.com",
      };
      if (urls[platform]) {
        // window.location.href = urls[platform];
        window.open(urls[platform], "_blank");
      }
    });
  });
});
