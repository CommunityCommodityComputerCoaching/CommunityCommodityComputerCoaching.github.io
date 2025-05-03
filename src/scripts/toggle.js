const toggleButton = document.getElementById('toggle-button');
const configOptions = document.getElementById('config');

if (toggleButton) {
  toggleButton.addEventListener('change', () => {
    configOptions?.classList.toggle('hide')
    if (toggleButton.checked) {
      const rentOrBuyLabel = document.getElementById('rent-or-buy');
      if (rentOrBuyLabel) {
        rentOrBuyLabel.innerText = "Buy";
      }
    } else {
      const rentOrBuyLabel = document.getElementById('rent-or-buy');
      if (rentOrBuyLabel) {
        rentOrBuyLabel.innerText = "Rent";
      }
    }
  });
}