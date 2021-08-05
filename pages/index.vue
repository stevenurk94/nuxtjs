<template>

  <main data-scroll-section>

    <section>




      <div class="typewriter">
        <h2 class="typewriter-h2"></h2>
      </div>



    </section>
  </main>
  
</template>


<script>


export default {
  transition: "pages",
}


</script>


<style scoped>

/*
################################################################
######################### MAIN HEADER ##########################
################################################################
*/


main section .typewriter {
  display: flex;
  padding: 50px 0;
  align-items: center;
  justify-content: center;
  background: var(--darkblue);
  width: 100%;
  border-radius: 100px;
  text-align: center;
  margin: 300px auto 300px auto;
}

main section .typewriter h2 {
  position: relative;
  width: max-content;
  color: #fff;
  font-family: 'Work Sans', serif;
  font-size: 40px;
}




/*
############## COOKIE BANNER ##########################
*/

.cookie_melding {
  margin-top: 50px;
}










</style>
