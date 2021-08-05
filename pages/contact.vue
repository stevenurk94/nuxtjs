<template>

    <main class="form-main" data-scroll-section>
      <section>
        <form action="/main.php" method="POST">
          <h1>Contact me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <span data-field="Voornaam *">
            <input type="text" name="firstName" placeholder="Voornaam *" maxlength="30">
            <p>Luister vriend! Dit klopt niet hé.</p>
          </span>
          <span data-field="Tussenvoegsel">
            <input type="text" name="middleName" placeholder="Tussenvoegsel" maxlength="20">
            <p>Luister vriend! Dit klopt niet hé.</p>
          </span>
          <span data-field="Achternaam *">
            <input type="text" name="lastName" placeholder="Achternaam *" maxlength="40">
            <p>Luister vriend! Dit klopt niet hé.</p>
          </span>
          <span data-field="Emailadres *">
            <input type="text" name="email" placeholder="Emailadres *" maxlength="80">
            <p>Luister vriend! Dit gaat zo niet werken hé! Je moet wel een geldig emailadres invullen.</p>
          </span>
          <span data-field="Message *"><textarea name="message" placeholder="Message * (max 350 characters)" maxlength="350"></textarea>
            <p>Luister vriend! Dit klopt niet hé.</p>
          </span>
          <input type="submit" name="submit" placeholder="Verzenden" class="button">
        </form>
      </section>
    </main>


</template>


<script>
export default {
  transition: 'pages'
}
</script>

<style scoped>


/*
############## CONTACT FORM ##########################
*/


.form-main {
  background:
  linear-gradient(rgba(28 47 92 / 0%), rgba(28 47 92 / 100%));
  /*background: url("/img/contact-background.svg");*/
  background-size: cover;
  will-change: background-color;

}


.form-main form {
  display: flex;
  padding: 60px;
  border-radius: 10px;
  flex-wrap: wrap;
  max-width: 550px;
  background: var(--white);
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), 0 -18px 60px -10px rgb(0 0 0 / 3%);
  justify-content: space-between;

}

.form-main div::before {
  content: "\f658";
  font-family: fa-light;
  font-weight: 100;
  left: 100px;
  font-size: 300px;
  color: var(--darkblue);
  align-items: flex-end;
}

.form-main form h1 {
  margin-bottom: 15px;
  color: var(--darkblue);
}

.form-main form p {
  color: var(--darkblue);
  margin-bottom: 30px;
}

.form-main form span {
  position: relative;
  width: 100%;
  margin-bottom: 15px;
}

.form-main form span:nth-child(3), .form-main form span:nth-child(4) {
  width: calc(50% - 2.5px);
}


.form-main form span::before  {
  content: attr(data-field);
  opacity: 0;
  font-family: 'Work Sans', serif;
  color: var(--darkblue);
  font-size: 11px;
  padding: 2px 5px 2px 2px;
  top: -8px;
  left: 22px;
  position: absolute;
  background: var(--white);
  z-index: 2;
  transition: all ease-in 400ms;
}

.form-main form span input,
.form-main form span textarea {
  border-radius: 1.5rem;
  font-family: 'Work Sans', serif;
  width: 100%;
  cursor: text;
  padding: 15px 22px 15px 22px;
  width: 100%;
  outline: none;
}

.form-main form span input[type="text"],
.form-main form span textarea {
  border: 1px solid var(--grey-2);
  background: var(--white);
  transition: border ease-in 400ms;
  position: relative;
}

.form-main form span input[type="text"]::placeholder,
.form-main form span textarea::placeholder {
  color: var(--grey-3);
  transition: color ease-in 400ms;
}


.form-main form span textarea {
  min-height: 100px;
  max-height: 250px;
  resize: none;
}


@media screen and (max-width: 767px) {
  .form-main form {
    margin: 0 40px 0 40px;
    padding: 50px;
  }

  .form-main form span:nth-child(3), .form-main form span:nth-child(4) {
    width: 100%;
  }

}



@media screen and (max-width: 576px) {
  .form-main {
    padding-top: 100px;

  }

  .form-main form {
    padding: 5%;
    width: 95%;
    margin: 0;
  }
}



.form-main form input[name="submit"] {
  background: var(--pink);
  width: 100%;
  justify-content: center;
  height: 48px;
  cursor: pointer;
}

/* WHEN FIELD IS HOVERED */
.form-main form span:hover::before {
  opacity: 1;
}

.form-main form span input[type="text"]:hover,
.form-main form span textarea:hover {
  border: 1px solid var(--darkblue);
}

/* WHEN FIELD IS ACTIVE */
.form-main form span.active::before {
  opacity: 1;
}

.form-main form span.active input[type="text"],
.form-main form span.active textarea {
  border: 1px solid var(--darkblue);
}

/* WHEN FIELD IS INVALID */
.form-main form span.invalid::before {
  opacity: 1;
  color: var(--red);
  transition: all ease-in 400ms;
}

.form-main form span.invalid input[type="text"],
.form-main form span.invalid textarea {
  border: 1px solid var(--red);
}

.form-main form span.invalid input[type="text"]::placeholder,
.form-main form span.invalid textarea::placeholder {
  color: var(--red);
}

/* WHEN FIELD IS VALID AND FILLED */
.form-main form span.filled::before {
  opacity: 1;
  color: var(--darkblue);
}

.form-main form span.filled input[type="text"],
.form-main form span.filled textarea {
  border: 1px solid var(--darkblue);
}

/* WHEN EMAIL IS INVALID */
.form-main form span p {
  display: none;
  color: var(--red);
  font-size: 10px;
}


</style>