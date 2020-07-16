window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let container = document.getElementById("container");

            //sort by hours in space
            json.sort((a,b) =>{
                return a.hoursInSpace - b.hoursInSpace;
            });

            // for loop populate inner html with astronauts
            let fontColor = "black";
            for(let i=0; i< json.length; i++){
            fontColor = "black";

            //set check active status and set font color
            if(json[i].active){fontColor = "green";}
            container.innerHTML += `
            <div class="astronaut">
            <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li><div style="color:${fontColor}">Active: ${json[i].active}</div></li>
                    <li>Skills: ${json[i].skills}</li>
                </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
            </div>

            `;
            }

        });
    });
});