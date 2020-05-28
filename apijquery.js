// document.getElementById('getjson').addEventListener('click', getjson());
function getjson1(){
    var query = document.getElementById('findfor').value;
    var url = "https://api.spoonacular.com/recipes/guessNutrition?title="+query+"&apiKey=35d3f922c81b4f0aa8297c313f1934cb"
var settings = {
    "url": url,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Cookie": "__cfduid=dcfeba49845c9812e1f7950280e3ac0cd1590416809"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    var obj=response;
    document.getElementById('1').innerHTML=obj.calories.value+" "+obj.calories.unit;
    document.getElementById('2').innerHTML=obj.fat.value+" "+obj.fat.unit;
    document.getElementById('3').innerHTML=obj.protein.value+" "+obj.protein.unit;
    document.getElementById('4').innerHTML=obj.carbs.value+" "+obj.carbs.unit;
  });
}