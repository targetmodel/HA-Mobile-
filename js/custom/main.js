$(document).ready(function(){
  $('.control').change(function(){
    if($(this).is(':checked')){
      $(this).closest('form').find('.controlContent :input').prop("disabled", false);
    }
    else{
      $(this).closest('form').find('.controlContent :input').prop("disabled", true);
    }
  });
//  filter item switcher
  $('.filterNext').on('click', function(){
    var flyPacket =  $('.excludeFilterResult li').eq([0]);
    $('.includeFilterResult ul').prepend(flyPacket);
    return false;
  });
  $('.filterPrev').on('click', function(){
    var flyPacket =  $('.includeFilterResult li').eq([0]);
    $('.excludeFilterResult ul').prepend(flyPacket);
    return false;
  });
  $('.filterNextAll').on('click', function(){
     var flyPacket = $('.excludeFilterResult li');
    $('.includeFilterResult ul').prepend(flyPacket);
    return false;
  });
  $('.filterPrevAll').on('click', function(){
    var flyPacket = $('.includeFilterResult li');
    $('.excludeFilterResult ul').prepend(flyPacket);
    return false;
  });
  $('.accordion-heading').on('click', function(){
     $('.accordion-inner li').removeClass('active');
  });

//  datepicker
  $('#datepicker01, #datepicker02').datepicker();

//  timepicker
  $('#fromTime1,#fromTime2,#fromTime3,#fromTime4,#fromTime5,#fromTime6,#fromTime7,#fromTime8,#fromTime9,#fromTime10,#fromTime11,#fromTime12,#fromTime13,#fromTime14,#toTime1,#toTime2,#toTime3,#toTime4,#toTime5,#toTime6,#toTime7,#toTime8,#toTime9,#toTime10,#toTime11,#toTime12,#toTime13,#toTime14, #timepicker03, #timepicker04').timepicker();





  $('.eventWrapper select').change(function(){
    var SelectVal = $(this).val();
    if(SelectVal==0){
      $("#awardReferralLimitCheck").prop('disabled', false);
    }
    else{
      $("#awardReferralLimitCheck").prop('disabled', true);
      $("#awardReferralLimitCheck").prop('checked', false);
      $('.radioControls input').prop("disabled", true);
      $('.radioControls input').prop("checked", false);
    }
  });
  $("#awardReferralLimitCheck").on('change', function(){
    if($(this).is(':checked')){
      $('.radioControls input').prop("disabled", false);
    }
    else{
      $('.radioControls input').prop("disabled", true);
      $('.radioControls input').prop("checked", false);
    }
  });
});


