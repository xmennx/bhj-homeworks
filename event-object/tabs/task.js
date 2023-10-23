document.addEventListener("DOMContentLoaded", function() {
    const tabsContainer = document.getElementById("tabs1");
    const tabs = Array.from(tabsContainer.querySelectorAll(".tab"));
    const tabContents = Array.from(tabsContainer.querySelectorAll(".tab__content"));
  
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function() {
        tabs.forEach(t => t.classList.remove("tab_active"));
        tabContents.forEach(c => c.classList.remove("tab__content_active"));
  
        tab.classList.add("tab_active");
        tabContents[index].classList.add("tab__content_active");
      });
    });
  });
  