(function IIFE() {
  // need Only DOM load event to call the init function
  $(document).ready(init);

  // Call all needed function for the functionality fo this website
  function init() {
    menuFunc();
  }

  // The functionality of the menu (hum click and submenus)
  function menuFunc() {
    let humIcon = $(".header__hum-icon");
    let nav = $("nav");

    let linksWithSubMenus = $(`a[data-next-sibling-submenu="true"`);

    // hum Icon and menu opening
    humIcon.click(function () {
      humIcon.toggleClass("open");
      nav.toggleClass("open");
    });

    // submenus showing
    linksWithSubMenus.each(function () {
      $(this).click(function () {
        const currentSubmenu = $(this).next();
        const currentSubmenuHeight = $(currentSubmenu)[0].scrollHeight;

        $(this).toggleClass("open");
        $(currentSubmenu).toggleClass("open");

        if ($(currentSubmenu).hasClass("open")) {
          $(currentSubmenu).css("height", `${currentSubmenuHeight + (17 * 2)}px`);
        } else {
          $(currentSubmenu).removeAttr("style");
        }
      });
    });
  }
})();
