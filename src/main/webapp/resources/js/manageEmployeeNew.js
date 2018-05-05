$(function(){

  $(".datepicker").datepicker();
  // $(".datepicker").datepicker("option", "showOn", 'button');
  // $(".datepicker").datepicker("option", "buttonImageOnly", true);
  // $(".datepicker").datepicker("option", "buttonImage", 'ico_calendar.png');

  calculateAge();

  $(document).on('change','.year',function(){
    (calculateAge());
  });
  $(document).on('change','.month',function(){
    (calculateAge());
  });
  $(document).on('change','.day',function(){
    (calculateAge());
  });

  $(".tel").blur(function(){
    $hyphen = $(this).val().replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi,''); $(this).val($hyphen)
    if(!$(this).val().match(/^[0-9]+$/)){
      alert("数字を入力してください");
      $(".tel").val("");
    }
  });

  $(".mobile").blur(function(){
    $hyphen = $(this).val().replace(/[━.*‐.*―.*－.*\–.*ー.*\-]/gi,''); $(this).val($hyphen)
    if(!$(this).val().match(/^[0-9]+$/)){
      alert("数字を入力してください");
      $(".mobile").val("");
    }
  });

  $(".mail").blur(function(){
    if(!$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
      alert("フォーマットが正しくありません");
      $(".mail").val("");
    }
  });



  //年齢計算
  function calculateAge() {
    var year = $(".year").val();
    var month = $(".month").val();
    var day = $(".day").val();

    if(year==""||month==""||day==""){
      $(".age").val("");
    } else {
  	   var _birth = parseInt("" + year + month + day);
  	   var  today = new Date();
  	   var _today = parseInt("" + today.getFullYear() + affixZero(today.getMonth() + 1) + affixZero(today.getDate()));
 	     var age = parseInt((_today - _birth) / 10000);
       $(".age").val(age);
    };

  };

  function affixZero(int) {
  	if (int < 10) int = "0" + int;
  	return "" + int;
  };


});
