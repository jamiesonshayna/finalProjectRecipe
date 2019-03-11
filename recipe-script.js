let values = () => {
    $.getJSON('recipieTry1.json', function(result){
        $.each(result, function(index, choice){
                /* get input min and max calories */
            let userLowCal = document.getElementById('calLow').value;
            let userHighCal = document.getElementById('calHigh').value;
            
                /* get radio button checked 'on' or not */
            let radioVegan = document.getElementById("veganRad");
            let radioCarb = document.getElementById("lowCarbRad");
            
            
            if(radioVegan.checked && userLowCal < 500) {
                if(choice.vegan == "true" && choice.lowCalories == "true") {
                $('#results').html(choice.recipeName+" "+choice.directions);
                }
            }
            if(radioVegan.checked && userLowCal > 500) {
                if(choice.vegan == "true" && choice.lowCalories == "false") {
                $('#results').html(choice.recipeName+" "+choice.directions);
                }
            }
            if(radioCarb.checked && userLowCal < 500) {
                if(choice.lowCarb == "true" && choice.lowCalories == "true") {
                $('#results').html(choice.recipeName+" "+choice.directions);
                }
            }
        });
    });
}

$('#checkout').on('click', function(){
    values();
});