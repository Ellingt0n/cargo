// скрипт табов

document.addEventListener("DOMContentLoaded", function () {
  // Получаем все заголовки табов
  const tabTitles = document.querySelectorAll(".sverpopup-tab-title");

  // Добавляем обработчик клика на каждый заголовок
  tabTitles.forEach((title) => {
    title.addEventListener("click", function () {
      // Снимаем активный класс с всех заголовков и табов
      tabTitles.forEach((tab) => tab.classList.remove("active"));
      document
        .querySelectorAll(".sverpopup-tab-item")
        .forEach((item) => item.classList.remove("active"));

      // Добавляем активный класс к кликнутому заголовку и соответствующему табу
      title.classList.add("active");
      const targetTab = document.querySelector(
        `.sverpopup-tab--${title.classList[1].split("--")[1]}`
      );
      if (targetTab) {
        targetTab.classList.add("active");
      }
    });
  });

  // По умолчанию открываем первый таб
  tabTitles[0].classList.add("active");
  document.querySelector(".sverpopup-tab--girlhoodie").classList.add("active");
});
