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
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/

html, body, div, span, object, iframe, dir,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
}

body {
  line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
  display:block;
}

nav ul {
  list-style:none;
}

blockquote, q {
  quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content:'';
  content:none;
}

a {
  margin:0;
  padding:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
}

/* change colours to suit your needs */
ins {
  background-color:#ff9;
  color:#000;
  text-decoration:none;
}

/* change colours to suit your needs */
mark {
  background-color:#ff9;
  color:#000;
  font-style:italic;
  font-weight:bold;
}

del {
  text-decoration: line-through;
}

abbr[title], dfn[title] {
  border-bottom:1px dotted;
  cursor:help;
}

table {
  border-collapse:collapse;
  border-spacing:0;
}

/* change border colour to suit your needs */
hr {
  display:block;
  height:1px;
  border:0;
  border-top:1px solid #cccccc;
  margin:1em 0;
  padding:0;
}

input, select {
  vertical-align:middle;
}




/*
############################################################
##################### GENERAL SETTINGS #####################
############################################################

NUXT: 
*/

@font-face {
  src: url(assets/fonts/fontawesome/fa-light-300.ttf);
  font-family: fa-light;
}

@font-face {
  src: url(assets/fonts/fontawesome/fa-brands-400.ttf);
  font-family: fa-brands;
}

@font-face {
  src: url(assets/fonts/fontawesome/fa-solid-900.ttf);
  font-family: fa-solid;
}

@font-face {
  src: url(assets/fonts/fontawesome/fa-regular-400.ttf);
  font-family: fa-regular;
}

@font-face {
  src: url(assets/fonts/fontawesome/fa-duotone-900.ttf);
  font-family: fa-duotone
}




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
  background: var(--darkblue);
}


header, body {
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
  padding: 90px 0 90px 0;
}




/*
#########################################################################
############################### SCROLLBAR ###############################
#########################################################################
*/













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
  margin-top: 25px;
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








</style>



