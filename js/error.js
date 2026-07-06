function goToPage(url) {
  fetch(url)
    .then(res => {
      if (res.ok) {
        window.location.href = url;
      } else {
        window.location.href = "error.html";
      }
    })
    .catch(() => {
      window.location.href = "error.html";
    });
}