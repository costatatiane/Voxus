function submitForm() {
  if (document.getElementById('submitButton').innerHTML == 'Experimentar gratuitamente') {
    document.getElementById('submitButton').setAttribute("class", "outline");
    document.getElementById('submitButton').innerHTML = 'Obrigado!';
    document.getElementById('submitButton').disabled = true;
    document.getElementById('submitted').setAttribute("class", "form-inputs submitted visible");
  }
}