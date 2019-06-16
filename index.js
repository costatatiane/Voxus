function submitForm(form) {

	let name = document.getElementById('name');
  let phone = document.getElementById('phone');
  let email = document.getElementById('email');
  let organizationName = document.getElementById('organizationName');
  let organizationSite = document.getElementById('organizationSite');
  let organizationBudget = document.getElementById('organizationBudget');
  let phoneFilter = /^\\([0-9]{2}\\)((3[0-9]{7})|(9[0-9]{8}))$/i;
  let emailFilter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  let siteFilter =  /http:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/;

  let count = 0;

	errorName = document.querySelector('.error-name');
	if(name.value == "") {
		errorName.innerHTML = "Este campo é obrigatório!";
    errorName.style.display = 'block';
    count += 1;
	} else {
		errorName.style.display = 'none';
  }

  errorPhone = document.querySelector('.error-phone');
	if(phone.value == "") {
		errorPhone.innerHTML = "Este campo é obrigatório!";
    errorPhone.style.display = 'block';
    count += 1;
  } else if(phone.value.length < 10 || phone.value.length > 11) {
    errorPhone.innerHTML = "Telefone inválido.";
    errorPhone.style.display = 'block';
    count += 1;
  } else if(phoneFilter.test(phone.value)) {
		errorPhone.innerHTML = "Telefone inválido.";
    errorPhone.style.display = 'block';
    count += 1;
  } else {
		errorPhone.style.display = 'none';
  }

  errorEmail = document.querySelector('.error-email');
	if(email.value == "") {
		errorEmail.innerHTML = "Este campo é obrigatório!";
    errorEmail.style.display = 'block';
    count += 1;
	} else if(emailFilter.test(email.value)){
		errorEmail.style.display = 'none';
	} else {
		errorEmail.innerHTML = "E-mail inválido.";
    errorEmail.style.display = 'block';
    count += 1;
  }

  errorOrganizationName = document.querySelector('.error-organization-name');
	if(organizationName.value == "") {
		errorOrganizationName.innerHTML = "Este campo é obrigatório!";
    errorOrganizationName.style.display = 'block';
    count += 1;
	} else {
		errorOrganizationName.style.display = 'none';
  }

  errorOrganizationSite = document.querySelector('.error-organization-site');
	if(organizationSite.value == "") {
		errorOrganizationSite.innerHTML = "Este campo é obrigatório!";
    errorOrganizationSite.style.display = 'block';
    count += 1;
  } else if(siteFilter.test(organizationSite.value)){
		errorOrganizationSite.innerHTML = "Domínio inválido.";
    errorOrganizationSite.style.display = 'block';
    count += 1;
	} else {
		errorOrganizationSite.style.display = 'none';
  }

  errorOrganizationBudget = document.querySelector('.error-organization-budget');
	if(organizationBudget.value == "") {
		errorOrganizationBudget.innerHTML = "Este campo é obrigatório!";
    errorOrganizationBudget.style.display = 'block';
    count += 1;
	} else {
		errorOrganizationBudget.style.display = 'none';
  }
  
  if (count == 0) {
    if (document.getElementById('submitButton').innerHTML == 'Experimentar gratuitamente') {
      document.getElementById('submitButton').setAttribute("class", "outline");
      document.getElementById('submitButton').innerHTML = 'Obrigado!';
      document.getElementById('submitButton').disabled = true;
      document.getElementById('submitted').setAttribute("class", "form-inputs submitted visible");
      document.getElementById('main-trial').setAttribute("class", "visible");
    }
  }
}