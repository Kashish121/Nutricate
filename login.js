

var emails = ["ishikadubey2000@gmail.com", "kashishiskishu@gmail.com", "gaurang@gmail.com"];
var pass = ["admin1", "admin2", "admin3"];
console.log("daf");

function login()
{
    
    document.getElementById("form").addEventListener("click", function(event){
        event.preventDefault()});
    
    var x=document.forms["form"]["email"].value;
    console.log(x);
    var y=document.forms["form"]["password"].value;
    elen=emails.length;
    plen=pass.length;
    for (i = 0; i < elen; i++) {
        if(emails[i].localeCompare(x)==0)
        {
            for(j=0;j<plen;j++)
            {
                if(pass[j].localeCompare(y)==0)
                {
                   
                    
                        location.replace("api.html");
                         
                    //alert("error");
                    
                }
            }
        }
      }
      alert("Welcome back "+x);


}


