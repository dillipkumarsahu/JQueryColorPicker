

$(document).ready(function(){
  $("#red").slider({
    max:255,
    range:'min',
    value:200,
    slide:result,
    change:result,
  });

  $("#green").slider({
    max:255,
    range:'min',
    value:90,
    slide:result,
    change:result,
  });

  $("#blue").slider({
    max:255,
    range:'min',
    value:170,
    slide:result,
    change:result,
  });
  function result(){
    var red = $("#red").slider("value");
    var green = $("#green").slider("value");
    var blue = $("#blue").slider("value");
    var hexa_code = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
    $("#color-bg").val(hexa_code);
    $("#hexa").html(hexa_code);
    $("#red-input").val(red);
    $("#green-input").val(green);
    $("#blue-input").val(blue);
    $("#rgb-value").html('rgb('+red+','+green+','+blue+')');
  }
  result();

  $("input[name='color']").keypress(function(){
    var x = this.id.replace("-input","");
    $("#"+x).slider("value",this.value);
  });
  $("input[name='color']").keyup(function(){
    var x = this.id.replace("-input","");
    $("#"+x).slider("value",this.value);
  })
});

///copy rgb or hexa value coding

$(document).ready(function(){
  $("#copy-rgb").click(function(){
    document.execCommand("copy");
  });
  $("#copy-hexa").click(function(){
    document.execCommand("copy");
  });
  $(document).tooltip({
    show:{
      effect:'explode',
      delay:200,
    },
    hide:{
      effect:'explode',
      delay:200,
    }
  });
});
