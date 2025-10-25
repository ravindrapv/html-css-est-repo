// Small helper script for resume interactivity
document.addEventListener('DOMContentLoaded', function () {
  var printBtn = document.getElementById('printBtn');
  var themeToggle = document.getElementById('themeToggle');

  if (printBtn) {
    printBtn.addEventListener('click', function () {
      // Use print for simple download/print flow
      window.print();
    });
  }

  // Theme toggle: toggles body.dark and persists preference
  try {
    var prefersDark = localStorage.getItem('resume-dark') === 'true';
    if (prefersDark) document.body.classList.add('dark');
  } catch (e) {
    // ignore storage errors
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var isDark = document.body.classList.toggle('dark');
      try { localStorage.setItem('resume-dark', isDark); } catch (e) {}
    });
  }
});

// Small defensive export for testing in certain environments
if (typeof module !== 'undefined') module.exports = {};
