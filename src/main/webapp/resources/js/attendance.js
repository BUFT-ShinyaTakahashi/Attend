$(function(){

  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  $('.nowYM').val(y + '年' + m + '月');

  // 初期値設定
  $(document).on('click','.init',function(){

    var len = $(".table tbody").children().length;

    for (var i=1; i<len+1; i++){

      var wd = $(".table tr").eq(i).find('.wd').text();

      if (wd == "土" || wd == "日"){
        $(".table tr").eq(i).find('.sel').val("2");
        $(".table tr").eq(i).find('.sel2').val("none");
        $(".table tr").eq(i).find('.sel2').prop('disabled', true);
        $(".table tr").eq(i).find('.sel3').val("none");
        $(".table tr").eq(i).find('.sel3').prop('disabled', true);
        $(".table tr").eq(i).find('.sel4').val("none");
        $(".table tr").eq(i).find('.sel4').prop('disabled', true);
        $(".table tr").eq(i).find('.sel5').val("none");
        $(".table tr").eq(i).find('.sel5').prop('disabled', true);
        $('.table tr').eq(i).find('.break').val("");
        $(".table tr").eq(i).find('.break').prop('disabled', true);
        $('.table tr').eq(i).find('.breakMd').val("");
        $(".table tr").eq(i).find('.breakMd').prop('disabled', true);
        $('.table tr').eq(i).find('.wkTime').val("");
        $('.table tr').eq(i).find('.wkTimeMd').val("");
        $('.table tr').eq(i).find('.free').val("");
      } else {
        $(".table tr").eq(i).find('.sel').val("1");
        $(".table tr").eq(i).find('.sel2').val("9");
        $(".table tr").eq(i).find('.sel2').prop('disabled', false);
        $(".table tr").eq(i).find('.sel3').val("00");
        $(".table tr").eq(i).find('.sel3').prop('disabled', false);
        $(".table tr").eq(i).find('.sel4').val("18");
        $(".table tr").eq(i).find('.sel4').prop('disabled', false);
        $(".table tr").eq(i).find('.sel5').val("00");
        $(".table tr").eq(i).find('.sel5').prop('disabled', false);
        $('.table tr').eq(i).find('.break').val("1:00");
        $(".table tr").eq(i).find('.break').prop('disabled', true);
        $('.table tr').eq(i).find('.breakMd').val("0:00");
        $('.table tr').eq(i).find('.wkTime').val("8:00");
        $('.table tr').eq(i).find('.wkTimeMd').val("0:00");
        $('.table tr').eq(i).find('.free').val("");
      };
    };
    totalTime();
  });


  // 休憩時間設定(通常勤務の場合のみ)
  $(document).on('change','.sel',function(){
    var kbn = $(this).val();
    var tr = $(this).closest('tr').index();
    $(".total").val("");

    switch (kbn) {
      case "1":
        $(".table tr").eq(tr+1).find('.sel2').val("none");
        $(".table tr").eq(tr+1).find('.sel2').prop('disabled', false);
        $(".table tr").eq(tr+1).find('.sel3').val("none");
        $(".table tr").eq(tr+1).find('.sel3').prop('disabled', false);
        $(".table tr").eq(tr+1).find('.sel4').val("none");
        $(".table tr").eq(tr+1).find('.sel4').prop('disabled', false);
        $(".table tr").eq(tr+1).find('.sel5').val("none");
        $(".table tr").eq(tr+1).find('.sel5').prop('disabled', false);
        $('.table tr').eq(tr+1).find('.break').val("1:00");
        $(".table tr").eq(tr+1).find('.break').prop('disabled', true);
        $('.table tr').eq(tr+1).find('.breakMd').val("0:00");
        $(".table tr").eq(tr+1).find('.breakMd').prop('disabled', false);
        $('.table tr').eq(tr+1).find('.wkTime').val("");
        $('.table tr').eq(tr+1).find('.wkTimeMd').val("");
        $('.table tr').eq(tr+1).find('.free').val("");
        $(".total").val("");
        break;
      case "3":
      case "4":
      case "5":
        $(".table tr").eq(tr+1).find('.sel2').val("none");
        $(".table tr").eq(tr+1).find('.sel2').prop('disabled', false);
        $(".table tr").eq(tr+1).find('.sel3').val("none");
        $(".table tr").eq(tr+1).find('.sel3').prop('disabled', false);
        $(".table tr").eq(tr+1).find('.sel4').val("none");
        $(".table tr").eq(tr+1).find('.sel4').prop('disabled', false);
        $(".table tr").eq(tr+1).find('.sel5').val("none");
        $(".table tr").eq(tr+1).find('.sel5').prop('disabled', false);
        $('.table tr').eq(tr+1).find('.break').val();
        $('.table tr').eq(tr+1).find('.break').prop('disabled',false);
        $('.table tr').eq(tr+1).find('.breakMd').val("0:00");
        $('.table tr').eq(tr+1).find('.breakMd').prop('disabled',false);
        $('.table tr').eq(tr+1).find('.wkTime').val("");
        $('.table tr').eq(tr+1).find('.wkTimeMd').val("0:00");
        $('.table tr').eq(tr+1).find('.free').val("");
        $(".total").val("");
        break;
      case "7":
      case "9":
      case "11":
      case "13":
        $(".table tr").eq(tr+1).find('.sel2').val("none");
        $(".table tr").eq(tr+1).find('.sel2').prop('disabled', false);
        $(".table tr").eq(tr+1).find('.sel3').val("none");
        $(".table tr").eq(tr+1).find('.sel3').prop('disabled', false);
        $(".table tr").eq(tr+1).find('.sel4').val("none");
        $(".table tr").eq(tr+1).find('.sel4').prop('disabled', false);
        $(".table tr").eq(tr+1).find('.sel5').val("none");
        $(".table tr").eq(tr+1).find('.sel5').prop('disabled', false);
        $('.table tr').eq(tr+1).find('.break').val("0:00");
        $(".table tr").eq(tr+1).find('.break').prop('disabled', true);
        $('.table tr').eq(tr+1).find('.breakMd').val("0:00");
        $('.table tr').eq(tr+1).find('.wkTime').val("");
        $('.table tr').eq(tr+1).find('.wkTimeMd').val("0:00");
        $('.table tr').eq(tr+1).find('.free').val("");
        $(".total").val("");
        break;
      default:
        $(".table tr").eq(tr+1).find('.sel2').val("none");
        $(".table tr").eq(tr+1).find('.sel2').prop('disabled', true);
        $(".table tr").eq(tr+1).find('.sel3').val("none");
        $(".table tr").eq(tr+1).find('.sel3').prop('disabled', true);
        $(".table tr").eq(tr+1).find('.sel4').val("none");
        $(".table tr").eq(tr+1).find('.sel4').prop('disabled', true);
        $(".table tr").eq(tr+1).find('.sel5').val("none");
        $(".table tr").eq(tr+1).find('.sel5').prop('disabled', true);
        $('.table tr').eq(tr+1).find('.break').val("");
        $(".table tr").eq(tr+1).find('.break').prop('disabled', true);
        $('.table tr').eq(tr+1).find('.breakMd').val("");
        $(".table tr").eq(tr+1).find('.breakMd').prop('disabled', true);
        $('.table tr').eq(tr+1).find('.wkTime').val("");
        $('.table tr').eq(tr+1).find('.wkTimeMd').val("");
        $('.table tr').eq(tr+1).find('.free').val("");
        totalTime();
        break;
      };
    });

    // 勤務時間設定
    $(document).on('change','.staHH',function(){
      $(".total").val("");
      var tr = $(this).closest('tr').index();
      calc(tr)
      // $(".table tr").eq(tr+1).find('.wkTime').val(calc(tr));
    });

    $(document).on('change','.staMM',function(){
      $(".total").val("");
      var tr = $(this).closest('tr').index();
      calc(tr)
      // $(".table tr").eq(tr+1).find('.wkTime').val(calc(tr));
    });

    $(document).on('change','.endHH',function(){
      $(".total").val("");
      var tr = $(this).closest('tr').index();
      calc(tr)
      // $(".table tr").eq(tr+1).find('.wkTime').val(calc(tr));
    });

    $(document).on('change','.endMM',function(){
      $(".total").val("");
      var tr = $(this).closest('tr').index();
      calc(tr)
      // $(".table tr").eq(tr+1).find('.wkTime').val(calc(tr));
    });

    $(document).on('change','.break',function(){
      $(".total").val("");
      var tr = $(this).closest('tr').index();
      calc(tr)
//      $(".table tr").eq(tr+1).find('.wkTime').val(calc(tr));
    });

    $(document).on('change','.breakMd',function(){
      $(".total").val("");
      var tr = $(this).closest('tr').index();
      calc(tr)
//      $(".table tr").eq(tr+1).find('.wkTime').val(calc(tr));
    });

    //勤務時間計算
    function calc(tr) {
      var staHH = $(".table tr").eq(tr+1).find('.sel2 option:selected').text();
      var staMM = $(".table tr").eq(tr+1).find('.sel3 option:selected').text();
      var endHH = $(".table tr").eq(tr+1).find('.sel4 option:selected').text();
      var endMM = $(".table tr").eq(tr+1).find('.sel5 option:selected').text();
      var breakDt = $(".table tr").eq(tr+1).find('.break').val();
      var breakMd = $(".table tr").eq(tr+1).find('.breakMd').val();

      if (staHH == "" || staMM == "" || endHH == "" || endMM == "" || breakDt == "" || breakMd == ""){
        return "";
      } else {
        s1 = breakDt.split(':');
        s2 = breakMd.split(':');
        v1 = 60*parseInt(staHH)+parseInt(staMM);
        v2 = 60*parseInt(endHH)+parseInt(endMM);
        v3 = 60*parseInt(s1[0])+parseInt(s1[1]);
        v4 = 60*parseInt(s2[0])+parseInt(s2[1]);

        sabun = Math.abs( v1-v2+v3+v4 );
        xhh = Math.floor( sabun/60 );
        xmm = sabun%60 ;
        if(xmm<10){
          xmm = '0' +xmm;
        }
        var result = xhh+":"+xmm;
        $(".table tr").eq(tr+1).find('.wkTime').val(result);
        calcMd(tr);

        totalTime();
      };
    };

    //深夜勤務時間計算
    function calcMd(tr) {
      var endHH = $(".table tr").eq(tr+1).find('.sel4 option:selected').text();
      var endMM = $(".table tr").eq(tr+1).find('.sel5 option:selected').text();
      var breakMd = $(".table tr").eq(tr+1).find('.breakMd').val();

      if (endHH == "" || endMM == "" || breakMd == ""){
        return "";
      } else {
        s2 = breakMd.split(':');
        v1 = 60*22+00;

        if (endHH > 30 ){
          v2 = 60*31+00;
        } else {
          v2 = 60*parseInt(endHH)+parseInt(endMM);
        };

        v4 = 60*parseInt(s2[0])+parseInt(s2[1]);

        sabun = Math.abs( v1-v2+v4 );
        xhh = Math.floor( sabun/60 );
        xmm = sabun%60 ;
        if(xmm<10){
          xmm = '0' +xmm;
        }
        var result = xhh+":"+xmm;
        $(".table tr").eq(tr+1).find('.wkTimeMd').val(result);
      };
    };



    //勤務時間合計
    function totalTime() {
      var len = $(".table tbody").children().length;
      thh = 0;
      tmm = 0;
      mhh = 0;
      mmm = 0;
      for (var i=1; i<len+1; i++){
        var time = $(".table tr").eq(i).find('.wkTime').val();
        var timeMd = $(".table tr").eq(i).find('.wkTimeMd').val();
        if (time == ""){
        } else {
          var s1 = time.split(':');
          thh += parseInt(s1[0]);
          tmm += parseInt(s1[1]);
        };

        if (timeMd == ""){
        } else {
          var s1 = timeMd.split(':');
          mhh += parseInt(s1[0]);
          mmm += parseInt(s1[1]);
        };
      };

      sabun = Math.floor(tmm/60);
      amari = tmm%60;
      thh += sabun;
      if(amari==30){
        tmm = '30';
      }
      if(amari==0){
        tmm = '00';
      }
      $(".total").val(thh+":"+tmm);

      sabun = Math.floor(mmm/60);
      amari = mmm%60;
      mhh += sabun;
      if(amari==30){
        mmm = '30';
      }
      if(amari==0){
        mmm = '00';
      }
      $(".totalMd").val(mhh+":"+mmm);

    };


    // 「＋」ボタン ※動作確認用(実際にははずす)
    // 行を追加
    $(document).on("click", ".addList", function () {
      $("#line > tr").eq(0).clone(true).insertAfter(
        $("#line > tr:last")
      );
      $("#line > tr:last").find('.sel2').prop('disabled', false);
      $("#line > tr:last").find('.sel3').prop('disabled', false);
      $("#line > tr:last").find('.sel4').prop('disabled', false);
      $("#line > tr:last").find('.sel5').prop('disabled', false);
      $("#line > tr:last").find('.break').val("");
      $("#line > tr:last").find('.break').prop('disabled', false);
      $("#line > tr:last").find('.break').val("");
      $("#line > tr:last").find('.break').prop('disabled', false);
      $("#line > tr:last").find('.breakMd').val("");
      $("#line > tr:last").find('.breakMd').prop('disabled', false);
      $("#line > tr:last").find('.wkTime').val("");
      $("#line > tr:last").find('.wkTimeMd').val("");
      $("#line > tr:last").find('.free').val("");
      var tr = $("#line > tr:last").closest('tr').index();
      $("#line > tr:last").find('.date').text(tr);

      var week = ["日","月","火","水","木","金","土"]
      $("#line > tr:last").find('.wd').text(week[tr-1]);

    });


    // 「ー」ボタン
    // 行を削除
    // $(document).on("click", ".delList", function () {
    //   $("#line > tr:last").remove();
    // });


    // 現在の月初を取得
    function getFirstDate (date) {
      return new Date(date.getFullYear(), date.getMonth(), 1);
    };

});
