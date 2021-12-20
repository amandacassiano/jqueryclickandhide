$(document).mouseup(function(e) {

  var coluna = $("coluna");

  if (!coluna.is(e.target) && coluna.has(e.target).length === 0){
    coluna.hide();
  };
  });

  $(document).mouseover(function(e) {

    var coluna = $("coluna");

    $('#coluna').mouseover(function(e){
      if (!coluna.is(e.mouseover) && coluna.has(e.mouseover).length === 0){
        coluna.show();
      };
      
      $('#coluna').show();
    });
  });

/* Another way: 

function inicio(){
  $('#show').click(function(){
    $('#amanda').show(2000);
  });
  $('#hide').click(function(){
    $('#amanda').hide(2000);
  });
}; */
/* ---

function inicio() {
    $('#aparece').click(function(){
      $('#amanda').toggle(1000);
    });
--
*/