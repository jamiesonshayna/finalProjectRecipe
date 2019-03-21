let calValidate = (lowCal, highCal) => {
    let btn = document.getElementById("checkout");
    btn.disabled = true;
// for push
    if(lowCal<0 || isNaN(lowCal) || lowCal>highCal) {
        document.getElementById("calLow").classList = "errorInput";
        document.getElementById("errorInput1").classList = "errorSpan";
    } else {
        document.getElementById("calLow").classList.remove("errorInput");
        document.getElementById("errorInput1").classList = "hidden";
    }
    
    if(highCal<=0 || highCal<lowCal || isNaN(highCal)) {
        document.getElementById("calHigh").classList = "errorInput";
        document.getElementById("errorInput2").classList = "errorSpan";
    } else {
        document.getElementById("calHigh").classList.remove("errorInput");
        document.getElementById("errorInput2").classList = "hidden";
    }

    if((highCal>0 && highCal>lowCal) && (lowCal>=0 && lowCal<highCal)) {
        btn.disabled = false;
    }
}

let values = () => {
    $.getJSON('recipieTry1.json', function(result){
        $.each(result, function(index, choice){
                /* get input min and max calories */
            let userHighCal = document.getElementById('calHigh').value;
            // let userLowCal = document.getElementById('calLow').value;
            //hello delete me
            let validLowCal;

            if(userHighCal < 500) {
                validLowCal = true;
            }
            if(userHighCal > 500) {
                validLowCal = false;
            }
            
                /* get radio button checked 'on' or not */
            let radioVegan = document.getElementById("veganRad");
            let radioCarb = document.getElementById("lowCarbRad");
            let radioSugar = document.getElementById("lowSugarRad");
            let radioGluten = document.getElementById("glutenFreeRad");
            let radioDairy = document.getElementById("dairyFreeRad");
            let radioProtein = document.getElementById("highProteinRad");

            // get the output so that it can be reused with just a variable
            let output = "<h3>Recipe: "+choice.recipeName+"<br>Directions: "+choice.directions+"</h3>";


            if(radioVegan.checked && validLowCal == true) {
                if(choice.vegan == "true" && choice.lowCalories == "true")
                    $('#results').html(output);
            } 
            else if(radioVegan.checked && validLowCal == false) {
                if(choice.vegan == "true" && choice.lowCalories == "false")
                    $('#results').html(output);
            }
            else if(radioCarb.checked && validLowCal == true) {
                if(choice.lowCarb == "true" && choice.lowCalories == "true")
                    $('#results').html(output);
            }
            else if(radioCarb.checked && validLowCal == false) {
                if(choice.lowCarb == "true" && choice.lowCalories == "false")
                    $('#results').html(output);
            }
            else if(radioSugar.checked && validLowCal == true) {
                if(choice.lowSugar == "true" && choice.lowCalories == "true")
                    $('#results').html(output);
            }
            else if(radioSugar.checked && validLowCal == false) {
                if(choice.lowSugar == "true" && choice.lowCalories == "false")
                    $("#results").html(output);
            }
            else if(radioGluten.checked && validLowCal == true) {
                if(choice.glutenFree == "true" && choice.lowCalories == "true")
                    $('#results').html(output);
            }
            else if(radioGluten.checked && validLowCal == false) {
                if(choice.glutenFree == "true" && choice.lowCalories == "false")
                    $('#results').html(output);
            }
            else if(radioDairy.checked && validLowCal == true) {
                if(choice.dairyFree == "true" && choice.lowCalories == "true")
                    $('#results').html(output);
            }
            else if(radioDairy.checked && validLowCal == false) {
                if(choice.dairyFree == "true" && choice.lowCalories == "false")
                    $('#results').html(output);
            }
            else if(radioProtein.checked && validLowCal == true) {
                if(choice.highProtein == "true" && choice.lowCalories == "true")
                    $('#results').html(output);
            }
            else if(radioProtein.checked && validLowCal == false) {
                if(choice.highProtein == "true" && choice.lowCalories == "false")
                    $('#results').html(output);
            }
        });
    });
}

//$('.calories').on("mouseleave", event => {
//   $(event.currentTarget).calValidate(document.getElementById("calLow").value, document.getElementById("calHigh").value);
//});

$('#calInputs').on("mouseleave", function() {
    calValidate(document.getElementById("calLow").value, document.getElementById("calHigh").value);
});

$('#checkout').on('click', function(){
    values();
});