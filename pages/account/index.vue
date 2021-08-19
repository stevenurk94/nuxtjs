<template>
    <main>
        <section>
            <h1>This is your profile-page</h1>
            <h1>Hi {{ loggedInUser.firstname }}!</h1>
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