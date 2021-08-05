<template>
   

  <footer data-scroll-section>
    <div class="footer-links">
      <div>
        <h5>Lorem Ipsum</h5>
        <ul>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
        </ul>
      </div>
      <div>
        <h5>Lorem Ipsum</h5>
        <ul>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
        </ul>
      </div>
      <div>
        <h5>Lorem Ipsum</h5>
        <ul>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
          <li><a href="#">Lorem Ipsum</a></li>
        </ul>
      </div>
      <div>
        <ul class="social-icons">
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button type="button" name="button" class="button">Lorem Ipsum</button>

      </div>
    </div>
    <div class="footer-copyright">
      <a href="#" class="footer-brand">Genesis.</a>
      <ul>
        <li>
          <span>© 2021 </span>
          <a href="#">Genesis. Foundation</a>
        </li>
        <li><a href="#">Items 1</a></li>
        <li><a href="#">Items 2</a></li>
        <li><a href="#">Items 3</a></li>
        <li><a href="#">Items 4</a></li>
      </ul>
    </div>
  </footer>

</template>



<style scoped>

/*
#########################################################################
########################### FOOTER LINKS ################################
#########################################################################

NUXT: components;
*/


footer {
  font-family: 'Work Sans', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--darkblue);
  padding: 100px 2rem 0 2rem;
}

footer .footer-links {
  width: 90%;
  display: flex;
  background-color: var(--darkblue);
  flex-wrap: wrap;
}

footer .footer-links div {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 5rem;
}

footer .footer-links div h5 {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
}

footer .footer-links div ul li {
  padding: 6px 0;
}

footer .footer-links div ul li a {
  color: rgb(255 255 255 / 60%);
  font-weight: 400;
  transition: all ease-in 250ms;
  position: relative;
}

footer .footer-links div ul li a:hover {
  color: rgb(255 255 255 / 100%);
}

footer .footer-links div:not(:last-child) ul li a::after {
  content: "";
  position: absolute;
  background: var(--white);
  height: 1px;
  width: 100%;
  top: 100%;
  left: 0;
  opacity: 0;
  transition: opacity ease-in 250ms;
}

footer .footer-links div ul li a:hover::after {
  opacity: 1;
}



/* ########### SOCIAL ICONS ############# */
footer .footer-links div .social-icons {
  display: flex;
  margin-bottom: 24px;
}

footer .footer-links div .social-icons li {
  border: 1px solid rgb(255 255 255 / 50%);
  border-radius: 50%;
  height: 45px;
  width: 45px;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  transition: all ease-in 250ms;
}

footer .footer-links div .social-icons li a {
  font-family: fa-brands;
  font-size: 19px;
  color: rgb(255 255 255 / 90%);
  transition: all ease-in 250ms;
}

footer .footer-links div .social-icons li:not(:last-child) {
  margin: 0 10px 0 0;
}

footer .footer-links div .social-icons li:nth-child(1) a::after {
  content: "\F39E";
}

footer .footer-links div .social-icons li:nth-child(2) a::after {
  content: "\F099";
}

footer .footer-links div .social-icons li:nth-child(3) a::after {
  content: "\F16D";
}

footer .footer-links div .social-icons li:nth-child(4) a::after {
  content: "\F0E1";
}

footer .footer-links div .social-icons li:nth-child(5) a::after {
  content: "\F167";
}

footer .footer-links div .social-icons li:hover a {
  color: rgb(255 255 255 / 100%);
}

footer .footer-links div .social-icons li:hover {
  border: 1px solid rgb(255 255 255 / 100%);
  text-shadow: 0 0 1px #fff;
  box-shadow: 0 0 1px #fff;
}






/* ########### PARAGRAPH ############ */
footer .footer-links div p {

  color: #fff;
}



@media screen and (max-width: 991px) {
  footer {
    padding-bottom: 0.6rem;
  }

  footer .footer-links {
    justify-content: flex-start;
  }

  footer .footer-links div:not(:last-child) {
    flex: 0 50%;
  }

  footer .footer-links div:last-child {
    flex: 0 100%;
  }

  footer .footer-links div:nth-child(1) {
    order: 2;
  }

  footer .footer-links div:nth-child(2) {
    order: 3;
  }

  footer .footer-links div:nth-child(3) {
    order: 4;
  }

  footer .footer-links div:nth-child(4) {
    order: 1;
  }
}























/*
#########################################################################
########################### FOOTER COPYRIGHT ############################
#########################################################################
*/


footer > div:last-child {
  width: 90%;
  display: flex;
  background-color: var(--darkblue);
  border-top: 0.5px solid rgb(255 255 255 / 70%);
  padding: 20px 0 20px 0;
  align-items: center;
}


 /* ############################# FOOTER BRAND ############# */
footer .footer-copyright .footer-brand {
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  text-transform: uppercase;
  justify-content: center;
  display: flex;
  width: 33%;
  padding: 25px;
}

/* ############################# FOOTER COPYRIGHT ########## */


footer .footer-copyright ul {
  width: 66%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

footer .footer-copyright ul li {
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 1px;
}

footer .footer-copyright ul li span {
  color: #B5AEAE;
}

footer .footer-copyright ul li a {
  cursor: pointer;
  color: #B5AEAE;
  transition: all ease-in 250ms;
  line-height: 2rem;
}

/*
Optional: E8E8E8
*/



/* ############################# FOOTER ITEMS ########## */


footer .footer-copyright ul li a:hover {
  color: #fff;
  text-shadow: 0.5px 0.5px 1px #fff;
}

footer .footer-copyright ul li:not(:last-child) a::after {
  content: "|";
  margin: 0 0.375rem;
  opacity: 0.5;
}






@media screen and (max-width: 991px) {
  footer > div:last-child {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }

  footer > div:last-child .footer-brand {
    justify-content: flex-start;
    padding: 25px 0;
  }

  footer .footer-copyright ul {
    width: auto;
  }
}

@media screen and (max-width: 480px) {

  footer .footer-copyright ul li:not(:first-child) {
    width: 50%;
  }

  footer .footer-copyright ul li:not(:last-child) a::after {
    margin: 0;
    content: "";
  }
}




</style>