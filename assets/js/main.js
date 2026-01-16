document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("helloBtn");
  const text = document.getElementById("helloText");
  if (!btn || !text) return;

  btn.addEventListener("click", () => {
    text.textContent = "按钮生效：JavaScript 正在工作。";
  });
});