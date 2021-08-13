<template>
    <main>
        <section>
            <h1>This is your profile-page</h1>
            <h1>Name: {{ loggedInUser.username }}</h1>
            <h1>Email: {{ loggedInUser.email }}</h1>
        </section>
    </main>
    
</template>


<script>

import { mapGetters } from "vuex";

export default {
    middleware: "auth",
    
    computed: {
        ...mapGetters(["loggedInUser"],)
    }
}
</script>