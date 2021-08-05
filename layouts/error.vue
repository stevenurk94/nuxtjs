<template>
    <main data-scroll-section>
        <section class="section-404">
            <h1>Woepsss... 404</h1>
            <h2>De pagina die je probeert te bereiken bestaat niet!</h2>
            <NuxtLink to="/" class="button">Terug naar de homepagina</NuxtLink>

        </section>
    </main>
</template>


<style scoped>



.section-404 h1 {
    font-size: 100px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-404 h1::before {
    content: "\F5B4";
    font-family: fa-regular;
    font-size: 160px;
    color: var(--dark-gold);
    line-height: 1;

}

.section-404 .button {
    margin: 90px 0 30px 0;
    font-size: 25px;
    border-radius: 2.5rem;
    padding: 18px 32px;
}

.section-404 .button:active {
  box-shadow: 0 0 1rem 0.5rem rgb(214 76 168 / 50%);
}



@media screen and (max-width: 767px) {
  .section-404 h1 {
    font-size: 70px;
  }

  .section-404 h1::before {
    font-size: 100px;
  }

  .section-404 h2 {
    font-size: 20px;
  }
}


@media screen and (max-width: 576px) {
  .section-404 h1 {
    font-size: 50px;
  }

  .section-404 h2 {
    font-size: 15px;
  }
}


</style>