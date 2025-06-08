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
  // const cards = document.querySelectorAll(".card");

  // const cardObserver = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("visible");
  //         entry.target.classList.remove("hidden");
  //       } else {
  //         // Optional: remove class if you want animation on scroll back
  //         entry.target.classList.add("hidden");
  //         entry.target.classList.remove("visible");
  //       }
  //     });
  //   }, 
  //   {
  //     threshold: 0.1 // Adjust this to control how much of element must be visible
  //   }
  // );

  // cards.forEach(cards => cardObserver.observe(cards));
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