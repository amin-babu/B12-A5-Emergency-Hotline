// heart number increasing
const heartButtons = document.getElementsByClassName('heart-button');
for (const heartBtn of heartButtons) {
  heartBtn.addEventListener('click', function () {
    let heartNumberDemo = parseInt(document.getElementById('heart-number').innerText);
    heartNumberDemo++;
    document.getElementById('heart-number').innerText = heartNumberDemo;
  })
}

// getting subtitle function
function getSubtitle(title) {
  const subTitle = document.getElementById(title).innerText;
  return subTitle;
}

// getting number function
function getNumber(number) {
  const phoneNumber = document.getElementById(number).innerText;
  return phoneNumber;
}

// call button function
function callButton(btnId, title, number){
  document.getElementById(btnId)
  .addEventListener('click', function () {
    let balance = parseInt(document.getElementById('call-balance-coin').innerText);
    if(balance <= 0){
      alert('❌ Not enough coins! Need minimum 20 coins to call.');
      return;
    }
    balance -= 20;
    document.getElementById('call-balance-coin').innerText = balance;
    let subTitle = getSubtitle(title);
    let phoneNumber = getNumber(number);
    alert(`📞 calling ${subTitle} ${phoneNumber}`);
  })
}

for (let i = 1; i <= 9; i++) {
  callButton(`callBtn-${i}`, `subtitle-${i}`, `phone-number-${i}`);
}


