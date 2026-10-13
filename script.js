const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = open ? '×' : '☰';
});

navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

// Keep the date picker from accepting past pick-up dates.
const pickupDate = document.getElementById('pickupDate');
const returnDate = document.getElementById('returnDate');
const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
pickupDate.min = localDate;
returnDate.min = localDate;

pickupDate.addEventListener('change', () => {
  returnDate.min = pickupDate.value || localDate;
  if (returnDate.value && returnDate.value < pickupDate.value) {
    returnDate.value = pickupDate.value;
  }
});

document.getElementById('bookingForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const pickup = form.get('pickup');
  const dropoff = form.get('return');
  const message = document.getElementById('bookingMessage');
  if (dropoff < pickup) {
    message.textContent = 'Return date must be the same as or later than pick-up date.';
    message.classList.add('message-error');
    return;
  }
  const details = {
    location: form.get('location'),
    pickup,
    return: dropoff,
    car: form.get('car')
  };
  const query = new URLSearchParams(details).toString();
  message.classList.remove('message-error');
  message.innerHTML = `Your request is ready. <a href="mailto:hello@moldovadrive.example?subject=${encodeURIComponent('Car rental request')}&body=${encodeURIComponent(
    `Hello Moldova Drive,\\n\\nI would like to request a rental.\\nPick-up location: ${details.location}\\nPick-up date: ${details.pickup}\\nReturn date: ${details.return}\\nCar type: ${details.car}\\n\\nPlease confirm availability and total price.`
  )}">Click here to email the request</a>. Replace the demo email address with your real one before publishing.`;
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const type = button.dataset.filter;
    document.querySelectorAll('.car-card').forEach(card => {
      card.hidden = type !== 'all' && card.dataset.type !== type;
    });
  });
});

document.querySelectorAll('[data-heart]').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('saved');
    button.textContent = button.classList.contains('saved') ? '♥' : '♡';
  });
});

document.querySelectorAll('.rent-btn').forEach(button => {
  button.addEventListener('click', () => {
    const car = button.dataset.car;
    const carSelect = document.querySelector('select[name="car"]');
    const type = document.querySelector(`.car-card[data-type] button[data-car="${CSS.escape(car)}"]`).closest('.car-card').dataset.type;
    carSelect.value = type;
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('bookingMessage').textContent = `${car} selected. Choose your dates and check availability.`;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
