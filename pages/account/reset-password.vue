<template>
    <main>
        <section>

            <Notification v-if="success" type="success" :message="success" />
            <Notification v-if="error" type="danger" :message="error" />

            <form v-if="!success" class="form" method="post" @submit.prevent="resetPassword">
                <h1>Reset Password</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quas saepe eveniet dicta impedit vero assumenda facere eaque iusto dolor.</p>
                <span data-field="New Password *" class="form-field">
                    <input v-model="password1" class="form-input" type="password" name="password" placeholder="New Password *" maxlength="80">
                    <p>Luister vriend! Dit gaat zo niet werken hé! Je moet wel een geldig emailadres invullen.</p>
                </span>
                <span data-field="Confirm New Password *" class="form-field">
                    <input v-model="password2" class="form-input" type="password" name="password" placeholder="Confirm New Password *">
                    <p>Luister vriend! Dit gaat zo niet werken hé!</p>
                </span>
                <button class="submit button" type="submit" name="submit">Reset Password</button>


            </form>

        </section>
    </main>
</template>


<script>

export default {
    middleware: "guest",

    asyncData(context) {
        if (!context.route.query.code) context.redirect("/forgot-password");
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
                return;
            } try {
                await this.$axios.post("auth/reset-password", {
                    code: this.code,
                    password: this.password1,
                    passwordConfirmation: this.password2
                });

                document.querySelector("form button").classList.remove("loading");
                this.success = "Password updated succesfully. You can now use it to log in to your account.";

            } catch (e) {
                this.error = e.response.data.message[0].messages[0].message;
                document.querySelector("form button").classList.remove("loading");
            }
        }
    },

    mounted: function() {
        const button = document.querySelector("form button");

        button.addEventListener("click", () => {
            button.classList.add("loading");
        });
    }
}
</script>