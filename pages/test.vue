<template>
    <main>
        <section>
            {{ cities }}

        </section>
    </main>
</template>

<script>


export default {


    asyncData({ $axios }) {
        return $axios.get(options).then(response => {

            return { cities: response.data  }
        })
    }
}



</script>