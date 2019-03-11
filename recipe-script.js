let values = () => {

    $.getJSON('recipieTry1.json', function(result){
    $.each(result, function(index, choice){
        let methods = document.getElementsByName('method');
        let userLowCal = document.getElementById('calLow').value;
        if(methods === 'Vegan'&& choice.vegan === true) {
            if(userLowCal<500 && choice.lowCalories === true) {
                $('#results').html(choice.recipeName+" "+choice.directions);
            }
        }
    });
    });


}

$('#checkout').on('click', function(){
    values();
});

