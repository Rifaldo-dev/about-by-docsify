document.addEventListener('DOMContentLoaded', function () {
  fetch('data/links.json')
    .then((response) => response.json())
    .then((links) => {
      const container = document.getElementById('links');
      links.forEach((link) => {
        const btn = document.createElement('a');
        btn.href = link.url;
        btn.className = `btn btn-${link.color} link-button d-block`;
        btn.innerText = link.title;
        btn.target = '_blank';

        // Analytics
        btn.onclick = () => {
          console.log(`Clicked: ${link.title}`);
        };

        container.appendChild(btn);
      });
    });
});

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
