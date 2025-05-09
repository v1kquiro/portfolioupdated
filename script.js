
// ===== Loading Screen Logic =====
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById('loading-screen');
  const loadingBar = document.getElementById('loading-bar');
  const loadingText = document.getElementById('loading-text');
  const mainContent = document.getElementById('main-content');

  let progress = 0;

  const loadingInterval = setInterval(() => {
    progress += 1;
    loadingBar.style.width = `${progress}%`;

    if (progress === 35) {
      loadingText.innerText = "Loading .exe files";
    } else if (progress === 65) {
      loadingText.innerText = "Uploading data";
    } else if (progress === 85) {
      loadingText.innerText = "Downloading your info";
    }

    if (progress >= 100) {
      clearInterval(loadingInterval);
      loadingText.innerText = "Access Approved";

      // Auto-hide the loading screen after brief delay
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'flex';
        runHeaderEffect(); // Trigger the animated header after loading
      }, 1000); // optional delay to let "Access Approved" show briefly
    }
  }, 30);
});


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1"); // Select the <h1> element
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    heading.innerText = heading.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return heading.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= heading.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
});

//scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


