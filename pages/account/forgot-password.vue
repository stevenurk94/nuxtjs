<template>
    <main>
        <section>


            <form class="form" method="post" @submit.prevent="forgotPassword">
                <Loading />
                <ForgotPWConfirmation />
                <div class="fields-wrapper" v-if="!success">
                    <h1>Forgot Password</h1>                  
                    <Notification v-if="error" type="danger" :message="error" />
                    <span data-field="Emailadres *" class="form-field">
                        <input v-model="email" class="form-input" type="text" name="email" placeholder="Emailadres *" maxlength="80">
                        <p>Luister vriend! Dit gaat zo niet werken hé! Je moet wel een geldig emailadres invullen.</p>
                    </span>
                    <button class="submit button" type="submit" name="submit">Email me a reset link</button>
                </div>

            </form>

            <div class="account-links">
                <NuxtLink to="/account/login">Log In</NuxtLink>
                &nbsp;&nbsp;
                <p>or</p>
                &nbsp;&nbsp;
                <NuxtLink to="/account/register">Register now</NuxtLink>
            </div>

        </section>
    </main>
</template>


<script>

export default {

    layout: "empty",
    
    middleware: "guest",

    data() {
        return {
            email: "",
            success: null,
            error: null
        }
    },

    methods: {
        async forgotPassword() {
            this.error = null;

            try {
                await this.$axios.post("auth/forgot-password", {
                    email: this.email
                });

                document.querySelector(".loadingblock").style.display = "none";
                document.querySelector(".confirmation").style.display = "flex";
                this.success = true;
                

            } catch (e) {
                this.error = e.response.data.message[0].messages[0].message;
                document.querySelector(".loadingblock").style.display = "none";
            }
        }
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

