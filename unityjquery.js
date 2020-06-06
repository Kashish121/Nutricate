function getnut() {
    $(".form").hide();
    document.getElementById('output').innerHTML = ""
    var sample = document.getElementById('ip').value; //TAKE UNITY OUTPUT AS SAMPLE VALUE
    var main = "https://api.spoonacular.com/recipes/findByNutrients?"
    var end = "offset=1&number=5&random=true&limitLicense=true&apiKey=35d3f922c81b4f0aa8297c313f1934cb"

    if (sample == "P") {
        url = main + "minProtein=16&maxProtein=50&" + end;
    }
    else if(sample == "Cal")
    {
        url = main + "minCalories=500&maxCalories=875&" + end;
    }
    else if(sample == "F")
    {
        url = main + "minFat=19.25&maxFat=32.5&" + end;
    }
    else if(sample == "Caf")
    {
        url = main + "minCaffeine=10&maxCaffeine=62.5&" + end;
    }
    else if(sample == "Cu")
    {
        url = main + "minCopper=1.25&maxCopper=2.5&" + end;
    }
    else if(sample == "Ca")
    {
        url = main + "minCalcium=250&maxCalcium=350&" + end;
    }
    else if(sample == "Chol")
    {
        url = main + "minCholesterol=75&maxCholesterol=125&" + end;
    }
    else if(sample == "SF")
    {
        url = main + "minSaturatedFat=35&maxSaturatedFat=60&" + end;
    }
    else if(sample == "A")
    {   url = main + "minVitaminA=225&maxVitaminA=325&" + end;

    }
    else if(sample == "C")
    {
        url = main + "minVitaminC=11.25&maxVitaminC=15&" + end;
    }
    else if(sample == "D")
    {
        url = main + "minVitaminD=30&maxVitaminD=200&" + end;
    }
    else if(sample == "E")
    {
        url = main + "minVitaminE=3.75&maxVitaminE=4&" + end;
    }
    else if(sample == "K")
    {
        url = main + "minVitaminK=22.5&maxVitaminK=30&" + end;
    }
    else if(sample == "B")
    {
        url = main + "minVitaminB6=0.325&maxVitaminB6=0.5&minVitaminB12=0.15&maxVitaminB12=0.75&" + end;
    }
    else if(sample == "Fi")
    {
        url = main + "minFiber=7.5&maxFiber=15&" + end;
    }
    else if(sample == "Fe")
    {
        url = main + "minIron=2&maxIron=3&" + end;
    }
    else if(sample == "Mg")
    {
        url = main + "minMagnesium=105&maxMagnesium=130&" + end;
    }
    else if(sample == "Mn")
    {
        url = main + "minManganese=0.45&maxManganese=0.575&" + end;
    }
    else if(sample == "Ph")
    {
        url = main + "minPhosphorus=175&maxPhosphorus=312.5&" + end;
    }
    else if(sample == "KP")
    {
        url = main + "minPotassium=509&maxPotassium=1050&" + end;
    }
    else if(sample == "Se")
    {
        url = main + "minSelenium=13.75&maxSelenium=15&" + end;
    }
    else if(sample == "Na")
    {
        url = main + "minSodium=115&maxSodium=230&" + end;
    }
    else if(sample == "Sug")
    {
        url = main + "minSugar=6.25&maxSugar=9&" + end;
    }
    else if(sample == "Zn")
    {
        url = main + "minZinc=3.5&maxZinc=4.5&" + end;
    }
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
        var obj = response;
        obj.forEach(element => {
            document.getElementById('output').innerHTML += "<h3>"+element.title+"</h3><br><img src='"+element.image+"'><br>Calories contained : "+element.calories+"<br>Proteins contained :"+element.protein+"<br>Fat contained : "+element.fat+"<br>Carbs contained : "+element.carbs;
        });
    });
}