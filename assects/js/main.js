/*var Button = document.querySelector('.btn');
var forma = document.querySelector('.form_position');

Button.addEventListener('click', function (){
  Button.classList.toggle('btn');
  forma.classList.toggle('form_position_active');
})

function CheckClick(e){
  t=e.previousSibling.previousSibling;
  //alert(t.tagName+' '+t.type);
  if( (t.tagName=='INPUT')&&(t.type=='checkbox')) t.click();
}*/
$(function(){
  
  $('.btn').click(function(){
    $('.form_position').fadeIn(1000);
  });

  $('.close_form').click(function(){
    $('.form_position').fadeOut(1000);
  });

  $('form').submit(function(){
    alert('Заявка отправлена!');
  });


});