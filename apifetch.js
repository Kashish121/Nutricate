document.getElementById('getjson').addEventListener('click', getjson());
function getjosn() {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "__cfduid=dcfeba49845c9812e1f7950280e3ac0cd1590416809");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://api.spoonacular.com/recipes/guessNutrition?title=milk&apiKey=35d3f922c81b4f0aa8297c313f1934cb", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}