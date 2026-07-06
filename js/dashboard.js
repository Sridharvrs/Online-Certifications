// Shared UI script for both dashboards
document.addEventListener('DOMContentLoaded', () => {

  // Sidebar module accordion
  document.querySelectorAll('.module-title').forEach(t => {
    t.addEventListener('click', () => {
      const mod = t.parentElement;
      const open = mod.classList.contains('open');
      // close others (optional single-open behavior)
      // document.querySelectorAll('.module').forEach(m => m.classList.remove('open'));
      mod.classList.toggle('open', !open);
    });
  });

  // Section link active state + swap content
  document.querySelectorAll('.sections a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.sections a').forEach(x => x.classList.remove('active'));
      a.classList.add('active');
      const target = a.dataset.target;
      if (target) {
        document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
        const el = document.getElementById(target);
        if (el) el.style.display = 'block';
        const head = document.getElementById('page-title');
        if (head) head.textContent = a.textContent.trim();
        const sub = document.getElementById('page-sub');
        if (sub) sub.textContent = a.dataset.sub || '';
      }
      if (window.innerWidth < 900) document.body.classList.remove('sidebar-open');
    });
  });

  // Toggle sidebar
  const toggle = document.getElementById('toggle-btn');
  if (toggle) {
    toggle.addEventListener('click', () => {
      if (window.innerWidth < 900) document.body.classList.toggle('sidebar-open');
      else document.body.classList.toggle('collapsed');
    });
  }

  // Open first module + activate first link
  const firstModule = document.querySelector('.module');
  if (firstModule) firstModule.classList.add('open');
  const firstLink = document.querySelector('.sections a');
  if (firstLink) firstLink.click();
});


// ===============================
document.getElementById("logoutBtn").addEventListener("click", () => {

    if(confirm("Are you sure you want to logout?")){

        currentUser = null;

        // If you store login in localStorage
        localStorage.removeItem("currentUser");

        // Redirect to Home page
        window.location.href = "index.html";

    }

});