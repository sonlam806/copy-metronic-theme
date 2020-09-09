const subMenuContainer = document.querySelectorAll('.sidebar #leftside-navigation .sub-menu>a');

for (let i = 0; i < subMenuContainer.length; i++) {
  subMenuContainer[i].addEventListener("click", function () {
    subMenuContainer.forEach(item => item.parentElement.classList.remove('active'))
    this.parentElement.classList.toggle("active");
    const deeperSubMenu = this.nextElementSibling;
    if (deeperSubMenu.style.maxHeight) {
      deeperSubMenu.style.maxHeight = null;
    } else {
      deeperSubMenu.style.maxHeight = deeperSubMenu.scrollHeight + "px";
    }
  });
}