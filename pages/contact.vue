<template>

<main class="form-main" data-scroll-section>
  <section>
    <form action="~/assets/php/main.php" method="POST" class="form">
      <h1>Contact me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <span data-field="Voornaam *" class="form-field">
        <input type="text" name="firstName" placeholder="Voornaam *" maxlength="30" class="form-input">
        <p>Luister vriend! Dit klopt niet hé.</p>
      </span>
      <span data-field="Tussenvoegsel" class="form-field">
        <input type="text" name="middleName" placeholder="Tussenvoegsel" maxlength="20" class="form-input">
        <p>Luister vriend! Dit klopt niet hé.</p>
      </span>
      <span data-field="Achternaam *" class="form-field">
        <input type="text" name="lastName" placeholder="Achternaam *" maxlength="40" class="form-input">
        <p>Luister vriend! Dit klopt niet hé.</p>
      </span>
      <span data-field="Emailadres *" class="form-field">
        <input type="text" name="email" placeholder="Emailadres *" maxlength="80" class="form-input">
        <p>Luister vriend! Dit gaat zo niet werken hé! Je moet wel een geldig emailadres invullen.</p>
      </span>
      <span data-field="Message *"><textarea name="message" placeholder="Message * (max 350 characters)" maxlength="350" class="form-field"></textarea>
        <p>Luister vriend! Dit klopt niet hé.</p>
      </span>
      <input type="submit" name="submit" placeholder="Verzenden" class="submit button">
    </form>
  </section>
</main>

</template>


<script>

export default {
  mounted: function() {

    const form = document.querySelector("form");
    const formChilds = document.querySelectorAll("form span input, form span textarea");
    const formChildsM = document.querySelectorAll("form span input:not([name='middleName']), form span textarea");
    const regexLetter = /^[a-zA-Z -]*$/i;
    const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    const regexMessage = /^[a-zA-Z0-9 -.,:;!\n/]*$/i;

    form.addEventListener("submit", (e) => {

      formChildsM.forEach((item) => {
        item.parentNode.classList.remove("invalid");
        item.nextElementSibling.style.display = "none";
        formChilds[1].nextElementSibling.style.display = "none";

        if(!item.value) {
          item.parentNode.classList.add("invalid");
          e.preventDefault();
        }

        if (formChilds[0].value && !regexLetter.test(formChilds[0].value)) {
          formChilds[0].nextElementSibling.style.display = "flex";
          formChilds[0].parentNode.classList.remove("filled");
          formChilds[0].parentNode.classList.add("invalid");
          e.preventDefault();
        }

        if (formChilds[1].value && !regexLetter.test(formChilds[1].value)) {
          formChilds[1].nextElementSibling.style.display = "flex";
          formChilds[1].parentNode.classList.remove("filled");
          formChilds[1].parentNode.classList.add("invalid");
          e.preventDefault();
        }

        if (formChilds[2].value && !regexLetter.test(formChilds[2].value)) {
          formChilds[2].nextElementSibling.style.display = "flex";
          formChilds[2].parentNode.classList.remove("filled");
          formChilds[2].parentNode.classList.add("invalid");
          e.preventDefault();
        }

        if (formChilds[3].value && !regexEmail.test(formChilds[3].value)) {
          formChilds[3].nextElementSibling.style.display = "flex";
          formChilds[3].parentNode.classList.remove("filled");
          formChilds[3].parentNode.classList.add("invalid");
          e.preventDefault();
        }

        if (formChilds[4].value && !regexMessage.test(formChilds[4].value)) {
          formChilds[4].nextElementSibling.style.display = "flex";
          formChilds[4].parentNode.classList.remove("filled");
          formChilds[4].parentNode.classList.add("invalid");
          e.preventDefault();
        }
      });
    });

    formChilds.forEach((item) => {

      item.onfocus = function () {
        item.parentNode.classList.add("active");
      }

      item.onblur = function () {
        item.parentNode.classList.remove("active");
      }
    });

    form.addEventListener("input", () => {

    formChilds.forEach((item) => {
      item.parentNode.classList.remove("filled");

        if(item.value) {
          item.parentNode.classList.add("filled");
        }
      });
    });
  }
}

</script>




