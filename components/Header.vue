<template>


  <header data-scroll-section>
    <div class="nav-container">
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
          <li><NuxtLink to="/mountains2">Lorem Ipsum<span></span></NuxtLink></li>
          <li><NuxtLink to="/beers">Beers<span></span></NuxtLink></li>
          <li><NuxtLink to="/contact">Contact<span></span></NuxtLink></li>
          <button type="button" name="button" class="button">Lorem Ipsum Dolor</button>
        </ul>

      </nav>
    </div>
  </header>

</template>




<script>


export default {


  mounted: function() {

    document.body.setAttribute("data-scroll-container", "");


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
    const navMenu = document.querySelector("header .nav-container nav");
    const navItems = document.querySelectorAll("header .nav-container nav ul li, header .nav-container nav ul button, header > div > a");

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
  box-shadow: var(--boxshadow);
  z-index: 20;
}

header .nav-container {
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}


/* ################################## BRAND/LOGO ############### */
header .nav-container > a {
  color: var(--darkblue-light);
  transition: var(--trans);
  font-size: 35px;
  font-weight: bold;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;  
  display: flex;
  padding: 25px 0;
}

@media screen and (max-width: 991px) {
  header .nav-container > a {
    order: 2;
  }
}


/* ################################## NIGHT MODE TOGGLE  ###### */


header .nav-container div {
  display: flex;
  justify-content: center;
}


header .nav-container div input {
  display: none;
}

header .nav-container div label {
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
  header .nav-container div label {
    order: 1;
  }
}


header .nav-container div input:checked ~ label {
  background: var(--white);
}

header .nav-container div label::before {
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

header .nav-container div input:checked ~ label::before {
  background-color: var(--darkblue);
  transform: translateX(22.4px);
}


header .nav-container div label div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

header .nav-container div label div::before {
  content: "\F185";
  font-family: fa-solid;
  color: var(--darkblue);

}

header .nav-container div label div::after {
  content: "\F186";
  font-family: fa-solid;
  color: var(--white);
}




/* ################################## MENU BUTTON ############### */

header .nav-container input[type="checkbox"] {
  display: none;
}

header .nav-container label {
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
  header .nav-container label {
    display: flex;
    order: 3;
  }
}

header .nav-container label span {
  position: absolute;
  background-color: var(--darkblue-light);
  transition: var(--trans);
  height: 3px;
  width: 100%;
  border-radius: 50px;
  transition: all ease-in 250ms;
}


header .nav-container label span:not(:nth-child(3)) {
  box-shadow: 0px 0.125rem 0.25rem 0px rgb(0 0 0 / 12%);
}

header .nav-container label span:nth-child(1) {
  top: 0;
}
header .nav-container label span:nth-child(4) {
  bottom: 0;
}

/*
header .nav-container input:checked ~ label span:nth-child(1) {
  transform: translateY(75px);
  opacity: 0;
}

header .nav-container input:checked ~ label span:nth-child(4) {
  transform: translateY(-75px);
  opacity: 0;
}
*/

header .nav-container input:checked ~ label span:nth-child(1) {
  transform: translateY(27px);
  width: 0;
}

header .nav-container input:checked ~ label span:nth-child(4) {
  transform: translateY(-27px);
  width: 0;
}

header .nav-container input:checked ~ label span:nth-child(2) {
  transform: rotate(45deg);
}

header .nav-container input:checked ~ label span:nth-child(3) {
  transform: rotate(-45deg);
}








/* ################################## MENU ITEMS  ############### */
@media screen and (max-width: 991px) {
  header .nav-container {
    justify-content: space-between;
  }
}



header .nav-container nav ul {
  display: flex;
  justify-content: center;
  height: 100%;
}

header .nav-container nav ul li {
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

header .nav-container nav ul button {
  display: none;
}

header .nav-container nav ul li a {
  color: var(--darkblue-light);
  position: relative;
  width: 100%;

}

header .nav-container nav ul li a::after {
  content: "";
  width: 0;
  height: 1.5px;
  background-color: var(--darkblue-light);
  display: block;
  border-radius: 50px;
  bottom: 0;
  transition: all ease-in 250ms;
  position: absolute;
}

header .nav-container nav ul li:hover a::after {
  width: 100%;
}



header .nav-container nav ul li a::before {
  content: "";
  width: 4px;
  height: 4px;
  background-color: var(--darkblue-light);
  display: block;
  border-radius: 50%;
  opacity: 0;
  left: 0;
  position: absolute;
}

header .nav-container nav ul li:hover a::before {
  animation: move-element 350ms ease-in;
}

@keyframes move-element {
  5% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translate(60px);
  }
}


header .nav-container nav ul li a span {
  display: none;
}

header .nav-container nav ul .button {
  display: none;
}






@media screen and (max-width: 991px) {
  header {
    position: absolute;
  }

  header .nav-container nav {
    display: flex;
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
    transition: all ease-in 250ms;
    justify-content: center;
  }

  header .nav-container nav.open {
    width: 100%;
    height: 475px;
    overflow: visible;
    top: 84px;
    opacity: 1;
    padding: 30px 20px 50px 20px;
  }

  header .nav-container nav ul {
    flex-direction: column;
    max-width: 560px;
    width: 100%;
    flex: 0 1 auto;
    height: fit-content;

  }

  header .nav-container nav ul li {
    border-bottom: 1px solid var(--white-opace);
    padding: 0;

  }

  header .nav-container nav ul li a {
    color: var(--white);
    justify-content: space-between;
    display: flex;

  }


  header .nav-container nav ul li a span {
    display: flex;
    font-family: fa-solid;
    font-size: 20px;
    color: var(--white);
    align-items: center;
    justify-content: center;
    width: 30px;
  }



  header .nav-container nav ul .button {
    display: flex;
    margin-top: 50px;

  }
}




</style>

