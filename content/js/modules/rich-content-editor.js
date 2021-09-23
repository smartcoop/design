/* rich-content-editor
   ========================================================================== */

$('.c-rich-content-editor-toolbar').hide();

// @todo don't hide the toolbar when we click a button
$('.c-rich-content-editor-toolbar .c-button').click(function(e) {
  $('.c-rich-content-editor textarea').focus();
});

$('.c-rich-content-editor textarea').focus(function(e) {
  $(this).parents('.c-rich-content-editor').find('.c-rich-content-editor-toolbar').show();
});

$('.c-rich-content-editor textarea').blur(function(e) {
  $(this).parents('.c-rich-content-editor').find('.c-rich-content-editor-toolbar').hide();
});