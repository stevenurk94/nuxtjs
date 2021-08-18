<template>
    <main>
        <section>

            <form class="form" method="post" @submit.prevent="register">

                <AccountConfirmation />

                <div class="fields-wrapper" v-if="!success">
                    <h1>Register</h1>
                    <Loading />
                    
                    <Notification v-if="success" type="success" :message="success" />
                    <Notification v-if="error" type="danger" :message="error" />
                    <span data-field="First name *" class="form-field">
                        <input v-model="username" class="form-input" type="text" name="username" placeholder="First name *" maxlength="80">
                        <p>Luister vriend! Dit gaat zo niet werken hé!</p>
                    </span>
                    <span data-field="Emailadres *" class="form-field">
                        <input v-model="email" class="form-input" type="text" name="email" placeholder="Emailadres *" maxlength="80">
                        <p>Luister vriend! Dit gaat zo niet werken hé! Je moet wel een geldig emailadres invullen.</p>
                    </span>
                    <span data-field="Password *" class="form-field">
                        <input v-model="password" class="form-input" type="password" name="password" placeholder="Password *">
                        <p>Luister vriend! Dit gaat zo niet werken hé!</p>
                    </span>
                    <button class="submit button" type="submit" name="submit">Register</button>
                </div>

                
                
             </form>

        </section>

    </main>
</template>

<script>

export default {

    layout: "empty",
    middleware: "guest",

    data() {
        return {
            username: "",
            email: "",
            password: "",
            success: null,
            error: null,
        };
    },

    methods: {
        async register() {
            this.error = null;

            try {
                this.$axios.setToken(false);
                await this.$axios.post("auth/local/register", {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                });

                document.querySelector(".loadingblock").style.display = "none";
                document.querySelector(".confirmation").style.display = "flex";
                this.success = true;


            } catch (e) {
                this.error = e.response.data.message[0].messages[0].message;
                document.querySelector(".loadingblock").style.display = "none";
            }
        },
    },

    mounted: function() {
        const button = document.querySelector("form button");

        button.addEventListener("click", () => {
            document.querySelector(".loadingblock").style.display = "flex";
        });
    }
}
</script>

<style scoped>

main {
    background: var(--darkblue);
    height: 100vh;
    width: 100vw;
}

</style>