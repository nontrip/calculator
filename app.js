var ans = "";
var res;
var clear = true;
var dots=false;
var calc = 0;
var qwer;
var numbers;
var qwer=false;
var actions=[];
var reverse=false;
var windowHeight=$(window).height();
$(document).ready(function() {
  var check = function(str){
    str=str.join('');
    str = str.split(actions[actions.length-1]);
    str=str[str.length-1];
    for (i=0;i<str.length; i++){
      if(str[i]=="."){
        qwer = false;
        break;
    } else{qwer=true;}
    }
  }
  //$('#main').css('margin-top', (windowHeight-650)/2)
  $("#result").val(calc);
  $("h1").click(function() {
    var text = $(this).text();
     if(parseInt(text, 10) == text || text === "÷" || text === "×" || text === "-" || text === "+") {
     
     if(parseInt(text, 10) == text){
      if(clear === false) {
        calc = $("#result").val();
        calc=calc.split('');
        if(calc.length==1 && calc[0]==0){
          calc=calc.join('');
          calc=text;
          $("#result").val(calc);
        } else {
          if(reverse===false){
            calc=calc.join('');
            calc += text;
            $("#result").val(calc);
            clear=false;}
          else {
          calc.splice(calc.length-1, 0, text);
          calc=calc.join('');
          $('#result').val(calc);
        }
             }
      } else {
        calc = text;
        $("#result").val(calc);
        clear = false;
      }
    } else{
        calc = $("#result").val();
        calc=calc.split(''); 
        if(calc[calc.length-1]=="÷" || calc[calc.length-1]=="×" || calc[calc.length-1]=="-" || calc[calc.length-1]=="+" || calc[calc.length-1]==".") {
          if(calc[calc.length-1]==text){
            calc=calc.join('');
            dots=true;
            $("#result").val(calc);
          }else if(calc[calc.length-1]=="÷" || calc[calc.length-1]=="×" || calc[calc.length-1]=="-" || calc[calc.length-1]=="+"){
            calc[calc.length-1]=text;
            actions.push(text);
            calc=calc.join('');
            $("#result").val(calc);
          } else{ 
            actions.push(text);
            calc=calc.join('');
            $('#result').val(calc);
            } 
          } else if(calc.length==1 && calc[0]==0){
            calc=calc.join('');
            $("#result").val(calc);
          } else if(calc[calc.length-1]=="R"){
            calc=calc.join('');
            $("#result").val(calc);
          }else if(calc[calc.length-1]==")" && calc[calc.length-2]=="."){
              calc=calc.join('');
              $('#result').val(calc);
            }else {
            reverse=false;
            actions.push(text);
            clear=false;
            calc=calc.join('');
            dots=false;
            calc += text;
            $("#result").val(calc);
            }
      }
    } if(text === "C") {
        calc = "0";
        $("#result").val(calc);
        reverse=false;
        dots=false;
        clear = true;
    } else if(text === "=") {
        calc=calc.replace(/÷/g, "/").replace(/×/g, "*");
        ans = eval(calc);
        ans=ans.toFixed(5);
        ans=String(ans);
        res= parseFloat(ans);
        $("#result").val(res);
        clear = true;
        dots=false;
    } else if(text==="+/-"){
        calc = $("#result").val();
        calc=calc.split('');
        if(calc.length==1 && calc[0]==0){
          calc=calc.join('');
          $("#result").val(calc); 
          clear=false;
      } else{
          if(calc[calc.length-1]!==actions[actions.length-1]){
            if(reverse===false){
              calc=calc.join('');
              var ind=calc.lastIndexOf(actions[actions.length-1]);
              calc=calc.split('');
              calc.splice(ind+1, 0, "(-")
              calc.push(')');
              calc=calc.join('');
              reverse=true;
              $("#result").val(calc);
          } else{
              calc=calc.join('');
              var ind=calc.lastIndexOf("-");
              calc=calc.split('');
              calc.splice(ind-1, 2);
              calc.pop();
              calc=calc.join('');
              reverse=false;
              $("#result").val(calc);
          }
        }else{
          calc=calc.join('');
          $("#result").val(calc);
        }
}

     } else if(text==="CE"){
        calc = $("#result").val();
        calc=calc.split('');
        if(calc.length!=1){
          if(calc[calc.length-1]=="R"){
            dots=false;
            calc=0;
            calc=calc.join('');
            $("#result").val(calc);
        } else{
            var deleted=calc.pop();
            if(deleted=="."){
              dots=false;
              calc=calc.join('');
              $("#result").val(calc); 
          } else if(deleted=="+" || deleted=="-" || deleted=="×" || deleted=="÷"){
              if(calc[calc.length-1]==")"){
                reverse=true;
              }
              actions.pop();
              check(calc);
              if(qwer==false){
                dots=true;
                calc=calc.join('');
            } else {
                dots=false;
                calc=calc.join('');
            }
              $("#result").val(calc);
          } else if(deleted==")"){
              calc=calc.join('');
              var ind=calc.lastIndexOf("(");
              calc=calc.split('');
              calc.splice(ind, 2);
              calc=calc.join('');
              reverse=false;
              $("#result").val(calc)
          } else if(deleted=="1" || deleted=="2" || deleted=="3" || deleted=="4" || deleted=="5" || deleted=="6" || deleted=="7" || deleted=="8" || deleted=="9" || deleted=="0" ){
              calc=calc.join('');
              $("#result").val(calc);
          }
      
          $("#result").val(calc); 
          clear=false;
      
    }}  else{
          calc=calc.join('');
          dots=false;
          calc=0;
          $("#result").val(calc); 
    }}
      else if(text === ".") {
        calc = $("#result").val();
        if (calc==""){
          $("#result").val("");
          clear=false;
      } else {
          if(reverse===false){
            calc=calc.split('');
            if(calc[calc.length-1]=="." || calc[calc.length-1]=="+" || calc[calc.length-1]=="-" || calc[calc.length-1]=="×" || calc[calc.length-1]=="÷"){
              calc=calc.join('');
              $("#result").val(calc);
          } else if(dots===true){
              calc=calc.join('');
              $("#result").val(calc);
          } else {
              calc=calc.join('');
              clear=false;
              dots=true;
              calc += text;
              $("#result").val(calc);
    }}  else{
          calc=calc.split('');
          check(calc);
          if(qwer===true){
            calc.splice(calc.length-1, 0, text);
            calc=calc.join('');
            $('#result').val(calc);
      } else {
          calc=calc.join('');
          $('#result').val(calc);
      }}}
    }
  numbers=$("#result").val();
  if (numbers.length>13){
    $("#result").val("ERROR");
    clear=true;
  }
  });

});