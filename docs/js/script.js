$(function () {
    $('#callback-button, #callback-button-1').click(function () {
      event.preventDefault()
      $('.modal').addClass('modal_active');
    });
  });

$('.modal').mouseup(function (e) {
    let modalContent = $(".modal__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
    }
  });