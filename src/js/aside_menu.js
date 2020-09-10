const subMenuContainer = document.querySelectorAll('.sidebar #leftside-navigation .sub-menu>a');

for (let i = 0; i < subMenuContainer.length; i++) {
  subMenuContainer[i].addEventListener("click", function () {
    // remove all old active element
    document.querySelectorAll('.sub-menu').forEach(item => item.classList.remove('active'));
    const lastActiveUl = document.querySelectorAll("ul[style]");
    if (this.parentElement.classList.value.includes('active')) {
      console.log('click 2 times')
      this.parentElement.classList.remove('active')
      return this.nextElementSibling.style.maxHeight = null;
    }
    // dang co loi cho nay do set maxHeight 2 lan
    if (lastActiveUl.length !== 0) {
      lastActiveUl.forEach(item => item.style.maxHeight = null);
    }
    subMenuContainer.forEach(item => item.parentElement.classList.remove('active'))
    // add new active status to element
    this.parentElement.classList.toggle("active");
    const deeperSubMenu = this.nextElementSibling;
    // bugs in here
    if (deeperSubMenu.style.maxHeight) {
      deeperSubMenu.style.maxHeight = null;
    } else {
      deeperSubMenu.style.maxHeight = deeperSubMenu.scrollHeight + "px";
    }
  });
}