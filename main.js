function tempConv(){
  var temp=document.getElementById('temperature').value;
  var con = document.getElementsByName('conversion');
  var conVal;
  if(con[0].checked)
      conVal = con[0].value;
    else {
      conVal = con[1].value;
      }
  // converts F to C if true
  if (conVal === '1') {
    temp = (temp-32)*(5/9);
    document.getElementById('answer').innerHTML="Temperature is "+temp+" degrees Centigrade.";
  }
  // converts C to F
  else {
    temp = temp*(9/5)+32;
    document.getElementById('answer').innerHTML="Temperature is "+temp+" degrees Fahrenheit.";
  }
}
