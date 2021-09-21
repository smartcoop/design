/* Accordion
   ========================================================================== */

$('.c-accordion__item-header').on('click', function() {
  $(this).closest('.c-accordion__item').toggleClass('c-accordion__item--closed')
  if($(this).attr('aria-expanded') === 'false') {
    $(this).attr('aria-expanded', 'true')
    $(this).siblings(".c-accordion__item-content").attr('aria-hidden', 'false')
  }else{
    $(this).attr('aria-expanded', 'false')
    $(this).siblings(".c-accordion__item-content").attr('aria-hidden', 'true')
  }
});
