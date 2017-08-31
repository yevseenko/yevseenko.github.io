console.log('Page loaded');

jQuery(function($) {
  const $auto = $('#auto');
  const $mark = $('#mark');
  
  var markList = {
    'BMW': ['Тележка','Космический корабль','Без колес'],
    'Mers': ['Тележка','Космический корабль','Без колес'],
    'Mars': ['Тележка','Космический корабль','Без колес'],
    'Saturn': ['Тележка','Космический корабль','Без колес'],
    'Balkon': ['Тележка','Космический корабль','Без колес']
  }
  
  $auto.change(function() {
    var autoMark = $(this).val(), 
        auma = markList[autoMark] || [];
    
    var html = $.map(auma, function(lcn){
        return '<option value="' + lcn + '">' + lcn + '</option>'
    }).join('');
    $mark.html(html) 
  });
});

