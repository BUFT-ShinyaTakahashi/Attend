$(function(){

  $(".datepicker").datepicker();
  // $(".datepicker").datepicker("option", "showOn", 'button');
  // $(".datepicker").datepicker("option", "buttonImageOnly", true);
  // $(".datepicker").datepicker("option", "buttonImage", 'ico_calendar.png');

  $('.transDate').val("");
  $('.transDate').prop('disabled', true);
  $('.free').prop('disabled', true);

  $(document).on('change','.transKbn',function(){
    var kbn = $(this).val();
    switch (kbn) {
      case "1":
        $('.transDate').val("");
        $('.transDate').prop('disabled', false);
        $('.free').prop('disabled', true);
        break;
      case "2":
        $('.transDate').val("");
        $('.transDate').prop('disabled', true);
        $('.free').prop('disabled', false);
        break;
      };
    });

    $(document).on('change','.transDate',function(){
      var kbn = $('.transKbn').val();
      if (kbn == "1") {
          var day1 = new Date($('.wkDate').val());
          var day2 = new Date($('.transDate').val());

          if(day1 == "" || day2 ==""){
          } else {
            var termDay = Math.ceil((day2 - day1) / 86400000);
            if (termDay > 40){
              var comment = "作業日から40日以内の日付を設定してください";
              var title = "入力エラー";
              $("#show_dialog").html(comment);
              $("#show_dialog").dialog({
                        modal: true,
                        title: title,
                        buttons: {
                          "OK": function() {
                            $('.transDate').val("");
                            $(this).dialog( "close" );
                          }
                        }
              });
            };
          };
        };
      });

});
