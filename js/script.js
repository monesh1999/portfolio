document.addEventListener('DOMContentLoaded', function () {
    const words = document.querySelectorAll('.cd-words-wrapper b');
    let index = 0;

    setInterval(() => {
      words[index].classList.remove('is-visible');
      index = (index + 1) % words.length;
      words[index].classList.add('is-visible');
    }, 2000); // change every 2 seconds
  });

  // function toggleMenu() {
  //   document.getElementById("navLinks").classList.toggle("show");
  // }

  function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}
