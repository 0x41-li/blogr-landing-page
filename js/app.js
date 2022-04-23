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

    if (isMobileDevice()) {
      // check if the device is mobile
      humIcon.click(function () {
        humIcon.toggleClass("open");
        nav.toggleClass("open");
      });
    }

    if (isMobileDevice()) {
      // check if the device is mobile
      // submenus showing
      linksWithSubMenus.each(function () {
        $(this).click(function () {
          const currentSubmenu = $($(this).next()).next();
          const currentSubmenuHeight = $(currentSubmenu)[0].scrollHeight;

          $(this).toggleClass("open");
          $(currentSubmenu).toggleClass("open");

          if ($(currentSubmenu).hasClass("open")) {
            $(currentSubmenu).css(
              "height",
              `${currentSubmenuHeight + 17 * 2}px`
            );
          } else {
            $(currentSubmenu).removeAttr("style");
          }
        });
      });
    } else {
      // hover event
      linksWithSubMenus.each(function () {
        const liParent = $(this).parent();
        $(liParent).hover(function () {
          const anchorEl = $(this).find(">:first-child");
          const currentSubmenu = $($(anchorEl).next()).next();
          const divOfTheSpaceBetween = $(anchorEl).next();
          const currentSubmenuHeight = $(currentSubmenu)[0].scrollHeight;

          console.log($($(currentSubmenu)[0]).width());
          

          $(anchorEl).toggleClass("open");
          $(currentSubmenu).toggleClass("open");
          $(divOfTheSpaceBetween).toggle();

          if ($(currentSubmenu).hasClass("open")) {
            $(currentSubmenu).css(
              "height",
              `${currentSubmenuHeight + 24 * 2}px`
            );
            $(currentSubmenu).css(
              "width",
              `${$($(currentSubmenu)[0]).width() + 30 * 2}px`
            );
          } else {
            $(currentSubmenu).removeAttr("style");
          }
        });
      });
    }
  }
})();

function isMobileDevice() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    return true;
  }
  return false;
}
