$.getJSON(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    function(data){
        $('#EURrate').html(data.bpi.EUR.rate_float);
        $('#GBPrate').html(data.bpi.GBP.rate_float);
        $('#USDrate').html(data.bpi.EUR.rate_float);
    }
);