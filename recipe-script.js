/*
	Final Project Recipe Getter
    Shayna Jamieson
    Bridget Black
    2019-03-09
    Last Updated: 2019-03-20

	File: recipe-script.js	

    Associated File: index.html
*/

let mealOptions = (buttons) => {
    let btn = document.getElementById("checkout");

            //radio button validation
        let count = 0;
        for(var i in buttons) {
            if(buttons[i].checked === true) {
                btn.disabled = false;
                count++;
            }
        }
            if(count===0) {
                btn.disabled = true;
            }
};

let mealTypes = (buttons) => {
    let btn = document.getElementById("checkout");
    let count = 0;
    
            //radio button validation
        for(var i in buttons) {
            if(buttons[i].checked === true) {
                btn.disabled = false;
                count++;
            }
        }
            if(count===0) {
                btn.disabled = true;
            }
};

let calValidate = (lowCal, highCal) => {
    let btn = document.getElementById("checkout");
    btn.disabled = true;

        //Low Cal validation
    if(lowCal<0 || isNaN(lowCal) || lowCal>highCal) {
        document.getElementById("calLow").classList = "errorInput";
        document.getElementById("errorInput1").classList = "errorSpan";
    } else {
        document.getElementById("calLow").classList.remove("errorInput");
        document.getElementById("errorInput1").classList = "hidden";
    }
    
        //High Cal validation
    if(highCal<0 || highCal<lowCal || isNaN(highCal)) {
        document.getElementById("calHigh").classList = "errorInput";
        document.getElementById("errorInput2").classList = "errorSpan";
    } else {
        document.getElementById("calHigh").classList.remove("errorInput");
        document.getElementById("errorInput2").classList = "hidden";
    }

        //Re-enable checkout button
    if((highCal>0 && highCal>lowCal) && (lowCal>=0 && lowCal<highCal)) {
        btn.disabled = false;
    }
};


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
            if(userHighCal >= 500) {
                validLowCal = false;
            }
            
                /* get radio button checked 'on' or not */
            let radioVegan = document.getElementById("veganRad");
            let radioCarb = document.getElementById("lowCarbRad");
            let radioSugar = document.getElementById("lowSugarRad");
            let radioGluten = document.getElementById("glutenFreeRad");
            let radioDairy = document.getElementById("dairyFreeRad");
            let radioProtein = document.getElementById("highProteinRad");
            let radioBFast = document.getElementById("breakfastRad");
            let radioLunch = document.getElementById("lunchRad");
            let radioDinner = document.getElementById("dinnerRad");

            // get the output so that it can be reused with just a variable
            let output = "<h3><strong>Recipe: "+choice.recipeName+"</strong><br><br>Directions:<br>"+choice.directions+"</h3>";

                /* Breakfast */
            if(radioBFast.checked && choice.breakfast == "true") {
                if(radioVegan.checked && validLowCal == true) {
                    if(choice.vegan == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                } 
                else if(radioVegan.checked && validLowCal == false) {
                    if(choice.vegan == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
                else if(radioCarb.checked && validLowCal == true) {
                    if(choice.lowCarb == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioCarb.checked && validLowCal == false) {
                    if(choice.lowCarb == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
                else if(radioSugar.checked && validLowCal == true) {
                    if(choice.lowSugar == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioSugar.checked && validLowCal == false) {
                    if(choice.lowSugar == "true" && choice.lowCalories == "false")
                        $("#results").append(output);
                }
                else if(radioGluten.checked && validLowCal == true) {
                    if(choice.glutenFree == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioGluten.checked && validLowCal == false) {
                    if(choice.glutenFree == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
                else if(radioDairy.checked && validLowCal == true) {
                    if(choice.dairyFree == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioDairy.checked && validLowCal == false) {
                    if(choice.dairyFree == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
                else if(radioProtein.checked && validLowCal == true) {
                    if(choice.highProtein == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioProtein.checked && validLowCal == false) {
                    if(choice.highProtein == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
            }
                /* Lunch */
            else if(radioLunch.checked && choice.lunch == "true") {
                if(radioVegan.checked && validLowCal == true) {
                    if(choice.vegan == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                } 
                else if(radioVegan.checked && validLowCal == false) {
                    if(choice.vegan == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
                else if(radioCarb.checked && validLowCal == true) {
                    if(choice.lowCarb == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioCarb.checked && validLowCal == false) {
                    if(choice.lowCarb == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
                else if(radioSugar.checked && validLowCal == true) {
                    if(choice.lowSugar == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioSugar.checked && validLowCal == false) {
                    if(choice.lowSugar == "true" && choice.lowCalories == "false")
                        $("#results").append(output);
                }
                else if(radioGluten.checked && validLowCal == true) {
                    if(choice.glutenFree == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioGluten.checked && validLowCal == false) {
                    if(choice.glutenFree == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
                else if(radioDairy.checked && validLowCal == true) {
                    if(choice.dairyFree == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioDairy.checked && validLowCal == false) {
                    if(choice.dairyFree == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
                else if(radioProtein.checked && validLowCal == true) {
                    if(choice.highProtein == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioProtein.checked && validLowCal == false) {
                    if(choice.highProtein == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
            }
                /* Dinner */
            else if(radioDinner.checked && choice.dinner == "true") {
                if(radioVegan.checked && validLowCal == true) {
                    if(choice.vegan == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                } 
                else if(radioVegan.checked && validLowCal == false) {
                    if(choice.vegan == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
                else if(radioCarb.checked && validLowCal == true) {
                    if(choice.lowCarb == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioCarb.checked && validLowCal == false) {
                    if(choice.lowCarb == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
                else if(radioSugar.checked && validLowCal == true) {
                    if(choice.lowSugar == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioSugar.checked && validLowCal == false) {
                    if(choice.lowSugar == "true" && choice.lowCalories == "false")
                        $("#results").append(output);
                }
                else if(radioGluten.checked && validLowCal == true) {
                    if(choice.glutenFree == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioGluten.checked && validLowCal == false) {
                    if(choice.glutenFree == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
                else if(radioDairy.checked && validLowCal == true) {
                    if(choice.dairyFree == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioDairy.checked && validLowCal == false) {
                    if(choice.dairyFree == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
                else if(radioProtein.checked && validLowCal == true) {
                    if(choice.highProtein == "true" && choice.lowCalories == "true")
                        $('#results').append(output);
                }
                else if(radioProtein.checked && validLowCal == false) {
                    if(choice.highProtein == "true" && choice.lowCalories == "false")
                        $('#results').append(output);
                }
            }
        });
    });
};

    /* Validates radio btn inputs, disables checkout btn if not valid */
$('#radioBtn').on('mouseleave', function() {
    mealOptions(document.getElementsByName("method"));
});

    /* Validates radio btn inputs, disables checkout btn if not valid */
$('#mealBtn').on('mouseleave', function(){
    mealTypes(document.getElementsByName("mealType"));
});

    /* Validates low and high calorie inputs, disables checkout btn if not valid */
$('#calInputs').on("mouseleave", function() {
    calValidate(document.getElementById("calLow").value, document.getElementById("calHigh").value);
});

    /* Runs selection from JSON file and output to div HTML */
$('#checkout').on('click', function(){
    document.getElementById("results").innerHTML = "";
    values();
});

