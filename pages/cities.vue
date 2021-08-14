<template>
    <main>
        <section>
            <div v-for="city in cities" :key="city.id">
                <img :src="`https://genesisnow.herokuapp.com${ city.Image.formats.small.url }`" :alt="city.name">
                <div>
                    <h2>{{ city.Province }}</h2>
                    <h2>{{ city.Name }}</h2>
                    <p>{{ city.Description }}</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

export default {

    asyncData({ $axios }) {
        return $axios.get("https://genesisnow.herokuapp.com/cities").then(response => {

            return { cities: response.data  }
        })

    }
}
//Test
</script>



<style scoped>

section > div {
    max-width: 80%;
    display: flex;
    height: fit-content;
    padding: 25px 0;
    border-bottom: solid 1px var(--grey);
    width: 100%;
}


section div img {
    border-radius: 10px;
    height: 200px;
    min-width: 350px;
    object-fit: cover;
    object-position: top;
    margin-right: 30px;
    max-width: 200px;
}

section div div {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

section div div h2:first-child {
    font-size: 15px;
    text-transform: uppercase;
    margin: 5px 0;
}

section div div p {
    margin-top: 20px;
}

section div div p:nth-child(4) {
    font-style: italic;
}

@media screen and (max-width: 991px) {
    section > div {
        flex-direction: column;
    }

    section div div {
        padding: 10px 0 10px 0;
    }

    section div img {
        height: 180px;
        min-width: 290px;
    }
}


</style>
