const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ref = urlParams.get('ref')
console.log(ref);
console.log(queryString);

fetch('https://backend.magentacashier.com/business/merchant-transaction-details/1676904667998403shalom-shalom-abeokuta-11011219009077112', {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'X-CSRFToken': 'nO8iYaoAfvFEQWAjvKSdWBqveJVsUnSEsEBsafnWFdw81IYlU0N8gqELXSYdVyaZ'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
