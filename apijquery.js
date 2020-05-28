// document.getElementById('getjson').addEventListener('click', getjson());
function getjson1(){
var settings = {
    "url": "https://api.spoonacular.com/recipes/guessNutrition?title=milk&apiKey=35d3f922c81b4f0aa8297c313f1934cb",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Cookie": "__cfduid=dcfeba49845c9812e1f7950280e3ac0cd1590416809"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    var obj=response;
    document.getElementById('output').innerHTML=obj.carbs.value;
  });
}