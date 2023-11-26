$(document).ready(function () {
  $(".repeater").repeater({
    initEmpty: false,
    defaultValue: {
      "text-input": "",
    },
    show: function () {
      $(this).slideDown();
    },
    hide: function () {
      $(this).slideUp(deleteElement);
      setTimeout(() => {
        generateCV(); 
      }, 500);
    },
    isFirstItemUndeletable: true,
  });
});
