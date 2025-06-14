const dockItem = document.getElementsByClassName('dockItem');
for (let i = 0; i <dockItem.length; i++) {
    dockItem[i].addEventListener('click', () => {
    dockItem[i].classList.add('clicked');
    setTimeout(() => {
      dockItem[i].classList.remove('clicked');
    }, 3000);
});
};
document.addEventListener("DOMContentLoaded", () => {
  const page2Heading = document.getElementById('page2Heading');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            page2Heading.classList.add("visible");
            page2Heading.classList.remove("hidden");
        } else {
            page2Heading.classList.add("hidden");
            page2Heading.classList.remove("visible");
        }
      });
    },
    { threshold: 0.9 } // Adjust as needed
  );
  observer.observe(page2Heading);
  // NOTE: This removes the tilt effect when not in use
  // TODO: add data-tilt to subclasses
    const page3 = document.getElementById('page3');
  const page3Observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            page3.classList.add("visible");
            page3.classList.remove("hidden");
        } else {
            page3.classList.add("hidden");
            page3.classList.remove("visible");
        }
      });
    },
    { threshold: 0.5 } // Adjust as needed
  );
  page3Observer.observe(page3);
const card = document.querySelector('#cardContainer');

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      card.classList.add('visible');
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
      card.classList.remove('visible');
    }
  });
}, {
  threshold: 0.3
 // Adjust this if you want it to trigger earlier/later
});

cardObserver.observe(card);
});
const githubDock = document.getElementById('githubDock');
const discordDock = document.getElementById('discordDock');
const emailDock = document.getElementById('emailDock');
const myJourneyDock = document.getElementById('myJourneyDock')
const discordTag = document.getElementById('githubTag')
githubDock.addEventListener('click', e => {
  window.location.href = 'https://github.com/rainbowdesert57';
  console.log("redirecting to github...")
});
discordDock.addEventListener('click', e => {
  window.open('/pages/contacts.html', '_blank');
  console.log("redirecting to github...")
});
emailDock.addEventListener('click', e => {
  window.open('/pages/contacts.html', '_blank');
  console.log("redirecting to github...")
});
myJourneyDock.addEventListener('click', e => {
  window.open('/pages/contacts.html', '_blank');
  console.log("redirecting to github...")
});
githubDock.addEventListener('click', e => {
  window.open('/pages/contacts.html', '_blank');
  console.log("redirecting to github...")
});
