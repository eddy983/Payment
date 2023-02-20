const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ref = urlParams.get('ref')
console.log(ref);
console.log(queryString);