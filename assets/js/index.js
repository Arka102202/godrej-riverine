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

  gsap.registerPlugin(ScrollTrigger)


  // Initialize a new Lenis instance for smooth scrolling
  const lenis = new Lenis();

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on('scroll', ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  console.log(getComputedStyle(document.querySelector(".g-box img")).height)

  gsap.to(".g-box img" , {
    top: "-50%",
    scrollTrigger : {
      trigger: ".g-box",
      start: "top bottom",
      end: () => "+=" + getComputedStyle(document.querySelector(".g-box")).height,
      scrub: 1
    }
  })


});
