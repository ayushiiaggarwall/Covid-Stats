$.ajax({

    type: 'get',
    url: 'https://covid-19.dataflowkit.com/v1',
    success: function(response){
        
        var lastupdated = `<h5 class="text-center text-white bg-dark mb-4">Last Updated On - ${response[0]["Last Update"]}</h5>`
        $('#lastupdatedon').append(lastupdated);
        
        var worldconfirmeddata = `<h5 class="text-center">Total Confirmed Cases - <h5 class="text-light text-center">${response[0]["Total Cases_text"]}</h5></h5>`
        $('#card1').append(worldconfirmeddata);
        
        var worldactivedata = `<h5 class="text-center">Total Active Cases - <h5 class="text-light text-center">${response[0]["Active Cases_text"]}</h5></h5>`
        $('#card2').append(worldactivedata);
        
        var worldrecovereddata = `<h5 class="text-center">Total Recovered Cases - <h5 class="text-light text-center">${response[0]["Total Recovered_text"]}</h5></h5>`
        $('#card3').append(worldrecovereddata);
        
        var worlddeaths = `<h5 class="text-center">Total Deaths - <h5 class="text-light text-center">${response[0]["Total Deaths_text"]}</h5></h5>`
        $('#card4').append(worlddeaths);
        
        for(var i=1; i < response.length-1; i++){
            if(response[i]["Active Cases_text"] === ""){
                response[i]["Active Cases_text"] = 0;
            }
            if(response[i]["Total Deaths_text"] === ""){
                response[i]["Total Deaths_text"] = 0;
            }
            var tablerow = `<tr><td>${response[i].Country_text}</td>
            <td>${response[i]["Total Cases_text"]}</td>
            <td>${response[i]["Active Cases_text"]}</td>
            <td>${response[i]["Total Recovered_text"]}</td>
            <td>${response[i]["Total Deaths_text"]}</td>
            </tr>`

            $('#tbody').append(tablerow);
        }
        $('#covidtable').DataTable();
    },
    error: function(error){
        console.log(error)
    }

})