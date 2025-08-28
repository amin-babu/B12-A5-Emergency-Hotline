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
const callHistoryData = [];
function callButton(btnId, title, number) {
  document.getElementById(btnId)
    .addEventListener('click', function () {
      let balance = parseInt(document.getElementById('call-balance-coin').innerText);
      if (balance <= 0) {
        alert('❌ Not enough coins! Need minimum 20 coins to call.');
        return;
      }
      balance -= 20;
      document.getElementById('call-balance-coin').innerText = balance;
      let subTitle = getSubtitle(title);
      let phoneNumber = getNumber(number);
      const data = {
        title: subTitle,
        number: phoneNumber,
        date: new Date().toLocaleTimeString()
      }
      callHistoryData.push(data);
      callHistory(btnId);
      alert(`📞 calling ${subTitle} ${phoneNumber}`);
    })
}

for (let i = 1; i <= 9; i++) {
  callButton(`callBtn-${i}`, `subtitle-${i}`, `phone-number-${i}`);
}


// call history function
function callHistory(clickedId) {
  const callHistoryContainer = document.getElementById('call-history-container');
  callHistoryContainer.innerText = '';

  for (const data of callHistoryData) {
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="p-3 mt-3 bg-[#FAFAFA] rounded-md flex items-center justify-between">
        <div>
          <h3 class="font-semibold">${data.title}</h3>
          <p>${data.number}</p>
        </div>
        <p class="text-sm">${data.date}</p>
      </div>
    `;
    callHistoryContainer.appendChild(div);
  }
}

// clear button function
document.getElementById('clear-button')
  .addEventListener('click', function () {
    const callHistoryContainer = document.getElementById('call-history-container');
    callHistoryContainer.innerHTML = '';
    callHistoryData.length = 0;
  })


// copy button section
const copyBtns = document.getElementsByClassName('copy-btn');
const arrayCopyBtns = Array.from(copyBtns);

for (const copyBtn of copyBtns) {
  copyBtn.addEventListener('click', function () {
    let copyDemo = parseInt(document.getElementById('copy-demo').innerText);
    copyDemo++;
    document.getElementById('copy-demo').innerText = copyDemo;


    let copyBtnIndex = arrayCopyBtns.indexOf(copyBtn) + 1;
    const phoneNumber = getNumber(`phone-number-${copyBtnIndex}`);
    navigator.clipboard.writeText(phoneNumber);
    alert(`Number Copied - ` + phoneNumber);
  })
}