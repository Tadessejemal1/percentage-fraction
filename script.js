function convert() {
  const percent = document.getElementById('percent').value;
  const decimal = parseFloat(percent) / 100;
  const fraction = math.fraction(decimal);
  document.getElementById('fraction').value = fraction.n + '/' + fraction.d;
}