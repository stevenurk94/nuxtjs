<template>

  <main>

    <section class="home-hero">

      <div>

        <h1>Some text</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ipsam odit molestiae necessitatibus perspiciatis, consequatur quibusdam minima incidunt ex a.</p>
        <input type="text" placeholder="Search here..." name="search">

      </div>
    </section>

    <section>

      <div class="prestige">
        <div>
          <h2>Some text</h2>
          <p>More text</p>
        </div>
        <div>
          <h2>Some text</h2>
          <p>More text</p>
        </div>      
        <div>
          <h2>Some text</h2>
          <p>More text</p>
        </div>
      </div>

    </section>
    <section class="section">
      

    </section>



  </main>

  
</template>


<script>


export default {
  transition: "pages",
}


</script>


<style scoped>


.home-hero {
  background: yellowgreen;
  max-width: 100%;
}

.home-hero div {
  margin-top: 25%;
}

.home-hero input {
  height: 3.5rem;
  border-radius: 2.8rem;
  width: 40rem;
  border: 1px solid var(--darkblue);
  font-family: 'Work Sans', serif;
  padding-left: 1.5rem;
  outline: none;
}






main .prestige {
  display: flex;
  transform: translateY(-50px);
}


main .prestige div {
  width: 50%;
  background: var(--dark-gold);
  height: 120px;
  margin: 0 15px;
  border-radius: 15px;
  padding: 35px;
}




















</style>
