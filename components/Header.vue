<template>

  <header>
    <div class="nav-section">
      <NuxtLink to="/">Genesis.</NuxtLink>
      <div>
        <input type="checkbox" id="night-toggle">
        <label for="night-toggle">
          <div></div>
        </label>
      </div>

      <input type="checkbox" id="toggle" class="input">
      <label for="toggle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav>

        <ul>
          <li><NuxtLink to="/">Home<span></span></NuxtLink></li>
          <li><NuxtLink to="/mountains">Mountains<span></span></NuxtLink></li>
          <li><NuxtLink to="/cities">Cities<span></span></NuxtLink></li>
          <li><NuxtLink to="/beers">Beers<span></span></NuxtLink></li>
          <li><NuxtLink to="/contact">Contact<span></span></NuxtLink></li>

          <li v-if="isAuthenticated"><NuxtLink to="/account">My Profile</NuxtLink></li>
          <li v-if="isAuthenticated"><a to="/account/login" @click="logout">Logout</a></li>

        </ul>
        <div v-if="!isAuthenticated">
          <NuxtLink to="/account/login" class="button">Log In</NuxtLink>
          <NuxtLink to="/account/register" class="button">Register</NuxtLink>
        </div>
      </nav>
    </div>
  </header>

</template>




<script>

import { mapGetters } from "vuex";

export default {

  
  // Login Authentication
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"])
  },

  // Logout
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push("/account/login")
    }
  },


  mounted: function() {

    // SCROLL TRIGGER HEADER

    const header = document.querySelector("header");

    window.onscroll = function() {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };



    // TOGGLE FUNCTION

    const toggle = document.getElementById("night-toggle");
    
    toggle.addEventListener("change", function() {
      
      if (toggle.checked == false) {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
      }

      else if (toggle.checked == true) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
      }
    });
    

    // CHECKING OS / LS

    var t = localStorage.getItem("data-theme");

    if (t) {
      this.theme = t;
    } else {
      var n = window.matchMedia("(prefers-color-scheme: dark)");
      this.theme = n.matches ? "dark" : "light",
      t = this.theme
    }

    document.documentElement.setAttribute("data-theme", t);

    if (this.theme === "dark") {
      toggle.checked = true;
    }

    else if (this.theme === "light") {
      toggle.checked = false;
    }

    // NAV-open/close
    const navButton = document.getElementById("toggle");
    const navMenu = document.querySelector("header .nav-section nav");
    const navItems = document.querySelectorAll("header .nav-section nav ul li, header .nav-section nav ul button, header > div > a");

    let menuOpen = false;

    navButton.addEventListener("change", function() {

      if(!menuOpen) {
        navMenu.classList.add("open");
        menuOpen = true;
        navButton.checked = true;

      } else {
        navMenu.classList.remove("open");
        menuOpen = false;
        navButton.checked = false;
      }
    });


    navItems.forEach((item) => {
      item.onclick = function() {
        navMenu.classList.remove("open");
        menuOpen = false;
        navButton.checked = false;
      }
    });
  }
}

</script>





<style scoped>

/*
############################################################
########################## HEADER ##########################
############################################################

NUXT: components
*/


header {
  font-family: 'Work Sans', sans-serif;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 20;
  position: fixed;
  transition: all 400ms ease-in-out;
}

header.scrolled {
  background: var(--bg);
  box-shadow: var(--boxshadow);
}


/*
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }


  100% {
    opacity: 1;
    transform: translateY(0);
  }
} 
*/

header .nav-section {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}



/* ################################## BRAND/LOGO ############### */
header .nav-section > a {
  color: var(--darkblue-light);
  font-size: 35px;
  font-weight: bold;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;  
  display: flex;
  padding: 25px 0;
  transition: all 400ms ease-in-out;
}

header.scrolled .nav-section > a {
  padding: 15px 0;
  transition: all 400ms ease-in-out;
}

@media screen and (max-width: 991px) {
  header .nav-section > a {
    order: 2;
  }
}


/* ################################## NIGHT MODE TOGGLE  ###### */


header .nav-section div {
  display: flex;
  justify-content: center;
}


header .nav-section div input {
  display: none;
}

header .nav-section div label {
  display: flex;
  width: 45px;
  background: var(--darkblue);
  border-radius: 40px;
  padding: 3px;
  position: relative;
  cursor: pointer;
  transition: background-color 500ms ease;
  box-shadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0 / 12%);
  height: auto;
  align-items: flex-start;

}


@media screen and (max-width: 991px) {
  header .nav-section div label {
    order: 1;
  }
}


header .nav-section div input:checked ~ label {
  background: var(--white);
}

header .nav-section div label::before {
  content: "";
  height: 17px;
  width: 17px;
  border-radius: 30px;
  background-color: var(--white);
  position: absolute;
  cursor: pointer;
  top: 0.17rem;
  transition: transform 500ms ease, background-color 500ms ease;

}

header .nav-section div input:checked ~ label::before {
  background-color: var(--darkblue);
  transform: translateX(22.4px);
}


header .nav-section div label div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

header .nav-section div label div::before {
  content: "\F185";
  font-family: fa-solid;
  color: var(--darkblue);

}

header .nav-section div label div::after {
  content: "\F186";
  font-family: fa-solid;
  color: var(--white);
}




/* ################################## MENU BUTTON ############### */

header .nav-section input[type="checkbox"] {
  display: none;
}

header .nav-section label {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 25px;
  width: 35px;
  cursor: pointer;
}

@media screen and (max-width: 991px) {
  header .nav-section label {
    display: flex;
    order: 3;
  }
}

header .nav-section label span {
  position: absolute;
  background-color: var(--darkblue-light);
  transition: var(--trans);
  height: 3px;
  width: 100%;
  border-radius: 50px;
  transition: all ease-in 250ms;
}


header .nav-section label span:not(:nth-child(3)) {
  box-shadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0 / 12%);
}

header .nav-section label span:nth-child(1) {
  top: 0;
}
header .nav-section label span:nth-child(4) {
  bottom: 0;
}

/*
header .nav-section input:checked ~ label span:nth-child(1) {
  transform: translateY(75px);
  opacity: 0;
}

header .nav-section input:checked ~ label span:nth-child(4) {
  transform: translateY(-75px);
  opacity: 0;
}
*/

header .nav-section input:checked ~ label span:nth-child(1) {
  transform: translateY(27px);
  width: 0;
}

header .nav-section input:checked ~ label span:nth-child(4) {
  transform: translateY(-27px);
  width: 0;
}

header .nav-section input:checked ~ label span:nth-child(2) {
  transform: rotate(45deg);
}

header .nav-section input:checked ~ label span:nth-child(3) {
  transform: rotate(-45deg);
}








/* ################################## NAV ITEMS  ############### */
@media screen and (max-width: 991px) {
  header .nav-section {
    justify-content: space-between;
  }
}

header .nav-section nav {
  display: flex;
  align-items: center;
}


header .nav-section nav ul {
  display: flex;
  justify-content: center;
  height: 100%;
}

header .nav-section nav ul li {
  font-size: 19px;
  font-weight: 500;
  height: 100%;
  cursor: pointer;
  align-items: center;
  display: flex;
  line-height: 50px;
  margin: 0 1.25rem;
  transition: all ease-in 250ms;
  flex-wrap: nowrap;
}

header .nav-section nav ul button {
  display: none;
}

header .nav-section nav ul li a {
  color: var(--darkblue-light);
  position: relative;
  width: 100%;
  transition: all ease-in 250ms;
}

header .nav-section nav ul li a::after {
  content: "";
  width: 0;
  height: 1.5px;
  opacity: .2;
  border-radius: .5rem;
  background-color: var(--darkblue-light);
  display: block;
  border-radius: 50px;
  bottom: 8px;
  transition: all ease-in 250ms;
  position: absolute;
}

header .nav-section nav ul li:hover a::after {
  width: 100%;
  opacity: 1;
}

header .nav-section nav ul li a span {
  display: none;
}






@media screen and (max-width: 991px) {
  header {
    position: absolute;
  }

  header .nav-section nav {
    display: flex;
    flex-direction: column;
    background: var(--darkblue);
    border-bottom-left-radius: 50px;
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    right: 0;
    top: 0;
    opacity: 0;
    padding: 0;
    transition: 
      height ease-in 150ms, 
      width ease-in 150ms,
      top ease-in 150ms,
      padding ease-in 150ms,
      overflow ease-in 150ms,
      opacity ease-in 500ms;

    justify-content: center;
  }

  header .nav-section nav.open {
    width: 100%;
    height: 475px;
    overflow: visible;
    top: 84px;
    opacity: 1;
    padding: 30px 20px 50px 20px;
    transition: 
      height ease-in 150ms, 
      width ease-in 150ms,
      top ease-in 150ms,
      padding ease-in 150ms,
      overflow ease-in 150ms,
      opacity ease-in 500ms;
  }

  header .nav-section nav ul {
    flex-direction: column;
    max-width: 560px;
    width: 100%;
    flex: 0 1 auto;
    height: fit-content;

  }

  header .nav-section nav ul li {
    border-bottom: 1px solid var(--white-opace);
    padding: 0;

  }

  header .nav-section nav ul li a {
    color: var(--white);
    justify-content: space-between;
    display: flex;

  }


  header .nav-section nav ul li a span {
    display: flex;
    font-family: fa-solid;
    font-size: 20px;
    color: var(--white);
    align-items: center;
    justify-content: center;
    width: 30px;
  }




}




</style>

