<template>
    <main>
        <section>

        
            <form class="form" method="post" @submit.prevent="resetPassword">
                <ResetPWConfirmation />
                <Loading />
                <div class="fields-wrapper" v-if="!success">
                    <h1>Reset Password</h1>
                    <Notification v-if="success" type="success" :message="success" />
                    <Notification v-if="error" type="danger" :message="error" />
                    <span data-field="New Password *" class="form-field">
                        <input v-model="password1" class="form-input" type="password" name="password" placeholder="New Password *" maxlength="80">
                        <p>Luister vriend! Dit gaat zo niet werken hé! Je moet wel een geldig emailadres invullen.</p>
                    </span>
                    <span data-field="Confirm New Password *" class="form-field">
                        <input v-model="password2" class="form-input" type="password" name="password" placeholder="Confirm New Password *">
                        <p>Luister vriend! Dit gaat zo niet werken hé!</p>
                    </span>
                    <button class="submit button" type="submit" name="submit">Reset Password</button>
                </div>

            </form>

        </section>
    </main>
</template>


<script>

export default {

    layout: "empty",
    middleware: "guest",

    asyncData(context) {
        if (!context.route.query.code) context.redirect("/account/forgot-password");
        else
        return {
            code: context.route.query.code,
        }
    },

    data() {
        return {
            password1: "",
            password2: "",
            success: null,
            error: null
        }
    },

    methods: {
        async resetPassword() {
            this.error = null;

            if (this.password1 !== this.password2) {
                this.error = "Passwords do not match.";
                document.querySelector(".loadingblock").style.display = "none";
                return;
            } try {
                await this.$axios.post("auth/reset-password", {
                    code: this.code,
                    password: this.password1,
                    passwordConfirmation: this.password2
                });

                document.querySelector(".confirmation").style.display = "flex";
                document.querySelector(".loadingblock").style.display = "none";
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