//var https = require('https');

function convertCurrency(amount, fromCurrency, toCurrency, cb) {

  fromCurrency = encodeURIComponent(fromCurrency);
  toCurrency = encodeURIComponent(toCurrency);
  var query = fromCurrency + '_' + toCurrency;

  var url = 'https://free.currencyconverterapi.com/api/v5/convert?q='
            + query + '&compact=ultra';

  
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url , true);
  xhr.send();

  xhr.onreadystatechange = processRequest;

  function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        console.log(query);
        var amountCOnvertedTo = response.query.valueOf();
        console.log(amountCOnvertedTo*amount);
        console.log(response);
        alert(response.ip);

    }
}
}

convertCurrency(10, 'USD', 'PHP', function(err, amount) {
  console.log(amount);
});
