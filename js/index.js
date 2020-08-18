charset = 'UTF-8';
$(function(){
  function radioHandle(btn, classname){
    $(btn).click(function(){
      $(this).addClass(classname).siblings().removeClass(classname);
    })
  }
  radioHandle('.p-choice .c-row span', 'on');
  // 获取勾选的信息
  $('.p-choice .submit').click(function(){
    var text = '';
    $('.p-choice .on').each(function(){
      text += $(this).text() + '、'
    });
    $('.user-msg').val(text);
  });
});