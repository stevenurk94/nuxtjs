<template>
    <main>
        <section>

            <div v-for="beer in beers" :key="beer.id">
                <p>BeerName: {{ beer.name }}</p>
                <p>Tagline: {{ beer.tagline }}</p>
                <p>Description: {{beer.description }}</p>
                <p>Volume: {{ beer.volume.value }} {{ beer.volume.unit }}</p>
                <br>
                <br>
                <p>Ingredients - Malt</p>
                <br>
                <div v-for="malt in beer.ingredients.malt" :key="malt.id">
                    <p>Name: {{ malt.name }} - Amount: {{ malt.amount.value }} {{ malt.amount.unit }}</p>
                </div>
                <br>
                <br>
                <p>Ingredients - Hops</p>
                <br>
                <div v-for="hops in beer.ingredients.hops" :key="hops.id">
                    <p>Name: {{ hops.name }} - Amount: {{ hops.amount.value }} {{ hops.amount.unit }} - Add: {{ hops.add }} - Attribute: {{ hops.attribute }}</p>
                </div>
                <br>
                <br>
                <p>Ingredients - Yeast</p>
                <br>
                <p>Yeast: {{ beer.ingredients.yeast }}</p>
                <br>
                <p>Tips: {{ beer.brewers_tips }}</p>
            </div>
            
        </section>
    </main>
    
</template>


<script>

import beers from "~/assets/json/beers.json";



export default {

    data () {
        return {
            beers
        }
    }
}

</script>


<style scoped>

section > div {
    width: 100%;
    border-bottom: 1px solid var(--white);
    padding: 30px 0;
}


</style>