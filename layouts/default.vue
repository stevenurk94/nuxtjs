<template>
  <dir>
    <Header />
    <Nuxt />
    <Footer />
  </dir>
</template>


<script>


</script>

<style>


/*
############################################################
##################### GENERAL SETTINGS #####################
############################################################

NUXT: 
*/



:root {
  --bg: #fff;
  --darkblue-light: #1C2F5C;
  --dark: #232323;
  --grey: #EBEBEB;

  --grey-2: #dbdbdb;
  --grey-3: #aaa;
  --pink: #e6007a;
  --blue: #0034ad;
  --darkblue: #1C2F5C;
  --white-opace: rgba(255, 255, 255, 0.25);

  --gold: #A37810;
  --dark-gold: #70520B;
  --red: #b30e0e;
  --cb-blue: #1C60FF;

  --white: #fff;
  --overlay: #9FB9F8;
  --bg-dark: #232323;
  --trans: background-color ease-in 300ms, color ease-in 300ms;
  --boxshadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0 / 12%);
  --cbf-boxshadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.05);
  --cbf2-boxshadow: 0 2px 6px rgba(0, 0, 0, 0.5), 0 10px 30px rgba(0, 0, 0, 0.1);
}

* {
  text-decoration: none;
  list-style: none;
}

*, *::before, *::after {
  box-sizing: border-box;
}



html[data-theme="dark"] {
  --bg: #232323;
  --darkblue-light: #fff;
  --darkblue-light-opace: rgba(255, 255, 255, 0.25);
  --blue: #fff;
  --cb-blue: #406DD6;
  --boxshadow: 0px 0.125rem 0.25rem 0px rgb(256 256 256 / 12%);
  --cbf-boxshadow: 0 2px 6px rgba(255, 255, 255, 0.1), 0 10px 30px rgba(255, 255, 255, 0.05);
  --cbf2-boxshadow: 0 2px 6px rgba(255, 255, 255, 0.1), 0 10px 30px rgba(255, 255, 255, 0.05);

  --dark: #fff;
  --grey: #383838;
  --grey-2: #aaa;
  --grey-3: #dbdbdb;
}




::selection {
  color: var(--white);
  background: var(--dark-gold);
}


body {
  background: var(--bg);
  transition: var(--trans);
}


main {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
}


main section {
  max-width: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0 90px 0;
}

/*
#########################################################################
################################ BUTTONS ################################
#########################################################################
*/

/* #################################### BUTTON 1 ############## */
.button {
  align-items: center;
  background-color: inherit;
  border: solid 1px var(--pink);
  border-radius: 1.5rem;
  color: #fff;
  display: flex;
  position: relative;
  overflow: hidden;

  font-weight: 600;
  font-size: 17px;
  font-family: 'Work Sans', sans-serif;
  line-height: 1.5;
  width: fit-content;
  z-index: 1;
  padding: 8px 16px;
  white-space: nowrap;
  cursor: pointer;

  transition: all 0.2s ease, border 1ms ease;
  will-change: transform;
  transform: scale(0.999);
}

.button::before {
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  background-color: var(--pink);
  transition: all 0.2s ease;
  will-change: transform;
  z-index: -1;
  border: 1px solid var(--pink);
  border-radius: 1.5rem;
  width: 42px;
  left: -42px;
}

.button:hover {
  will-change: transform;
  transform: scale(1.05);
  border: 1px solid transparent;
}

.button:hover::before {
  left: 0;
  width: 100%;
  border: 1px solid var(--pink);
}

.button:active {
  box-shadow: 0 0 0.2rem 0.2rem rgb(214 76 168 / 50%);
}

.button:focus {
  will-change: transform;
  transform: scale(1.05);
  border: 1px solid transparent;
}

.button:focus::before {
  left: 0;
  width: 100%;
  border: 1px solid var(--pink);
}

.button.loading {
  color: transparent;
  box-shadow: 0 0 0.2rem 0.2rem rgb(214 76 168 / 50%);
}

.button.loading::after {
  content: "";
  position: absolute;
  width: 28px;
  height: 28px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spinner 1s infinite;
}

@keyframes spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}


/*
#########################################################################
################################ HEADINGS ###############################
#########################################################################
*/

/* ############################################### H1 ############## */

h1 {
  font-family: 'Work Sans', sans-serif;
  font-size: 50px;
  font-weight: 600;
  color: var(--darkblue-light);
  line-height: 1;
}


@media screen and (max-width: 767px) {
  h1 {
    font-size: 40px;
  }
}


@media screen and (max-width: 576px) {
  h1 {
    font-size: 30px;
  }
}

h2 {
  font-family: 'Work Sans', sans-serif;
  font-size: 30px;
  font-weight: 500;
  color: var(--darkblue-light);
  line-height: 1;
}


p {
  font-weight: 300;
  font-size: 15px;
  line-height: 1.2rem;
  font-family: 'Work Sans', serif;
  color: var(--darkblue-light);
}






/* CONFIRMATION BLOCK */

.confirmation {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: var(--bg);
  border-radius: 10px;
  z-index: 2;
  padding: 0 25px;
}

.confirmation span {
  font-family: fa-solid;
  color: var(--pink);
  font-size: 80px;
}

.confirmation p {
  text-align: center;
}

.confirmation div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}


/* Account links */
.account-links {
  display: flex;
}


.account-links a {
  font-weight: bold;
  font-size: 15px;
  line-height: 1.2rem;
  letter-spacing: .5px;
  font-family: 'Work Sans', serif;
  color: var(--darkblue-light);
}




/* ############################################################ */
/* ############################ FORMS ######################### */
/* ############################################################ */


.form {
  background: var(--bg);
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  box-shadow: var(--cbf-boxshadow);
  transition: var(--trans);
  position: relative;
}

.fields-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.form-field {
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  
}

.form-field::before  {
  content: attr(data-field);
  opacity: 0;
  font-family: 'Work Sans', serif;
  color: var(--darkblue);
  font-size: 11px;
  padding: 2px 5px 2px 2px;
  top: -8px;
  left: 22px;
  position: absolute;
  background: var(--bg);
  z-index: 2;
  transition: all ease-in 400ms;
  border-radius: .8rem;
}

.form-input {
  border-radius: 1.5rem;
  font-family: 'Work Sans', serif;
  width: 100%;
  cursor: text;
  padding: 15px 22px 15px 22px;
  width: 100%;
  outline: none;
  border: 1px solid var(--grey-2);
  background: var(--bg);
  transition: border ease-in 400ms;
  position: relative;
  transition: var(--trans);

}

.form-input::placeholder {
  color: var(--grey-3);
  transition: color ease-in 400ms;
}

.submit.button {
  background: var(--pink);
  width: 100%;
  justify-content: center;
  height: 48px;
  cursor: pointer;
}



/* ####### FIELD VALIDATION ############################# */



/* WHEN FIELD IS HOVERED */
.form-field:hover::before {
  opacity: 1;
}

.form-input:hover {
  border: 1px solid var(--darkblue);
}




/* WHEN FIELD IS ACTIVE */
.form-field.active::before {
  opacity: 1;
}

.form-field.active input[type="text"],
.form-field.active textarea {
  border: 1px solid var(--darkblue);
}


/* WHEN FIELD IS INVALID */
.form-field.invalid::before {
  opacity: 1;
  color: var(--red);
  transition: all ease-in 400ms;
}

.form-field.invalid input[type="text"],
.form-field.invalid textarea {
  border: 1px solid var(--red);
}

.form-field.invalid input[type="text"]::placeholder,
.form-field.invalid textarea::placeholder {
  color: var(--red);
}


/* WHEN FIELD IS INVALID & ILLEGAL */
.form-field p {
  display: none;
  color: var(--red);
  font-size: 10px;
}


/* WHEN FIELD IS VALID AND FILLED */
.form-field.filled::before {
  opacity: 1;
  color: var(--darkblue);
}

.form-field.filled input[type="text"],
.form-field.filled textarea {
  border: 1px solid var(--darkblue);
}




</style>



