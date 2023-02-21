const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ref = urlParams.get('ref')
console.log(ref);
console.log(queryString);

const merchant_name = document.getElementById("merchant")
const merchant_address = document.getElementById("address")
const amount = document.getElementById("amount")
const trx_date = document.getElementById("date")


var populate = (data=>{
    date = new Date(data.created_at);
    console.log(data)
    merchant_name.innerHTML = "Payment to " + data.merchant.company_name
    merchant_address.innerHTML = data.branch_address
    amount.innerHTML += (data.billed_amount).toLocaleString()
    trx_date.innerHTML = date.toDateString()
    document.getElementById("email-address").value = data.client_email
    document.getElementById("amount").value = data.billed_amount
    document.getElementById("ref").value = data.local_reference
})

const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
        // e.preventDefault();

        let handler = PaystackPop.setup({
            key: 'pk_live_c2948535846ef1012400bfeabf45ab02fe350e8c', // Replace with your public key
            email: document.getElementById("email-address").value,
            amount: document.getElementById("amount").value * 100,
            // label: "Optional string that replaces customer email"
            ref:document.getElementById("ref").value,
            onClose: function(){
            alert('Window closed.');
            },
            callback: function(response){
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
            }
        });

        handler.openIframe();
        }

fetch('https://backend.magentacashier.com/business/merchant-transaction-details/1676904667998403shalom-shalom-abeokuta-11011219009077112', {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'X-CSRFToken': 'nO8iYaoAfvFEQWAjvKSdWBqveJVsUnSEsEBsafnWFdw81IYlU0N8gqELXSYdVyaZ'
  }
})
.then(response => response.json())
.then(data => populate(data))
.catch(error => console.error(error));
