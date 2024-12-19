document.addEventListener('DOMContentLoaded', function () {
    const loanAmount = document.getElementById('loan-amount');
    const advancePayment = document.getElementById('advance-payment');
    const duration = document.getElementById('duration');
    const interestRate = document.getElementById('interest-rate');
    
    const loanAmountValue = document.getElementById('loan-amount-value');
    const advancePaymentValue = document.getElementById('advance-payment-value');
    const advancePaymentAmount = document.getElementById('advance-payment-amount');
    const durationValue = document.getElementById('duration-value');
    const interestRateValue = document.getElementById('interest-rate-value');
    const emiValue = document.getElementById('emi-value');
    
    const updateEMI = () => {
      const principal = loanAmount.value - (loanAmount.value * advancePayment.value / 100);
      const rate = interestRate.value / 12 / 100;
      const n = duration.value * 12;
      const emi = (principal * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
      emiValue.textContent = Math.round(emi);
    };
    
    loanAmount.addEventListener('input', () => {
      loanAmountValue.textContent = Number(loanAmount.value).toLocaleString();
      updateEMI();
    });
    
    advancePayment.addEventListener('input', () => {
      advancePaymentValue.textContent = `${advancePayment.value}%`;
      advancePaymentAmount.textContent = Number((loanAmount.value * advancePayment.value) / 100).toLocaleString();
      updateEMI();
    });
    
    duration.addEventListener('input', () => {
      durationValue.textContent = `${duration.value} Years`;
      updateEMI();
    });
    
    interestRate.addEventListener('input', () => {
      interestRateValue.textContent = `${interestRate.value}%`;
      updateEMI();
    });
    
    // Initial Calculation
    updateEMI();
    
  });
  