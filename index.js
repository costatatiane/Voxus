function submitForm(form) {

	let name = document.getElementById('name');
  let phone = document.getElementById('phone');
  let email = document.getElementById('email');
  let organizationName = document.getElementById('organizationName');
  let organizationSite = document.getElementById('organizationSite');
  let organizationBudget = document.getElementById('organizationBudget');
  let phoneFilter = '^\\([0-9]{2}\\)((3[0-9]{7})|(9[0-9]{8}))$';
  let emailFilter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	errorName = document.querySelector('.error-name');
	if(name.value == "") {
		errorName.innerHTML = "Este campo é obrigatório!";
		errorName.style.display = 'block';
	} else {
		errorName.style.display = 'none';
  }

  errorPhone = document.querySelector('.error-phone');
	if(phone.value == "") {
		errorPhone.innerHTML = "Este campo é obrigatório!";
		errorPhone.style.display = 'block';
  } else if(phone.value.match(phoneFilter)) {
		errorPhone.innerHTML = "Telefone inválido.";
    errorPhone.style.display = 'block';
  } else {
		errorPhone.style.display = 'none';
  }

  errorEmail = document.querySelector('.error-email');
	if(email.value == "") {
		errorEmail.innerHTML = "Este campo é obrigatório!";
		errorEmail.style.display = 'block';
	} else if(emailFilter.test(email.value)){
		errorEmail.style.display = 'none';
	} else {
		errorEmail.innerHTML = "E-mail inválido.";
		errorEmail.style.display = 'block';
  }

  errorOrganizationName = document.querySelector('.error-organization-name');
	if(name.value == "") {
		errorOrganizationName.innerHTML = "Este campo é obrigatório!";
		errorOrganizationName.style.display = 'block';
	} else {
		errorOrganizationName.style.display = 'none';
  }

  errorOrganizationSite = document.querySelector('.error-organization-site');
	if(name.value == "") {
		errorOrganizationSite.innerHTML = "Este campo é obrigatório!";
		errorOrganizationSite.style.display = 'block';
	} else {
		errorOrganizationSite.style.display = 'none';
  }
  
  if (form.name.valid) {
    if (document.getElementById('submitButton').innerHTML == 'Experimentar gratuitamente') {
      document.getElementById('submitButton').setAttribute("class", "outline");
      document.getElementById('submitButton').innerHTML = 'Obrigado!';
      document.getElementById('submitButton').disabled = true;
      document.getElementById('submitted').setAttribute("class", "form-inputs submitted visible");
    }
  }
}