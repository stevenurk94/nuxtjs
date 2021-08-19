<template>
    <main>
        <section>

            <form class="form" method="post" @submit.prevent="login">

                <div class="fields-wrapper">
                    <Loading />
                    <h1>Login</h1>
                    <Notification v-if="error" type="danger" :message="error" />
                    <span data-field="Emailadres *" class="form-field">
                        <input v-model="email" class="form-input" type="text" name="email" placeholder="Emailadres *" maxlength="80">
                        <p>Luister vriend! Dit gaat zo niet werken hé! Je moet wel een geldig emailadres invullen.</p>
                    </span>
                    <span data-field="Password *" class="form-field">
                        <input v-model="password" class="form-input" type="password" name="password" placeholder="Password *">
                        <p>Luister vriend! Dit gaat zo niet werken hé!</p>
                    </span>
                    <button class="submit button" type="submit" name="submit" placeholder="Verzenden">Log In</button>
                </div>
                
            </form>

            <div class="account-links">
                <NuxtLink to="/account/register">Register now</NuxtLink>
                &nbsp;&nbsp;
                <p>or</p>
                &nbsp;&nbsp;
                <NuxtLink to="/account/forgot-password">Forgot password</NuxtLink>
            </div>            


        </section>
    </main>
</template>




<script>

export default {

    middleware: "guest",

    data() {
        return {
            email: "",
            password: "",
            error: null,
        };
    },

    methods: {
        async login() {
            this.error = null;

            try {
                await this.$auth.loginWith("local", {
                    data: {
                        identifier: this.email,
                        password: this.password,
                    },
                });

                this.$router.push("/account");
                
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
};
</script>