// Invoke Functions Call on Document Loaded
document.addEventListener("DOMContentLoaded", function () {
  hljs.highlightAll();
});

let alertWrapper = document.querySelector(".alert");

alertWrapper.addEventListener("hover", () => alertWrapper.remove());
