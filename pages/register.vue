<template>
    <main>
        <section>

            <Notification v-if="success" type="success" :message="success" />
            <Notification v-if="error" type="danger" :message="error" />

            <form class="form" v-if="!success" method="post" @submit.prevent="register">
                <h1>Register</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quas saepe eveniet dicta impedit vero assumenda facere eaque iusto dolor.</p>
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
            </form>

        </section>

    </main>
</template>

<script>

export default {

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

                document.querySelector("form button").classList.remove("loading");
                this.success = `A confirmation link has been sent to your email account. \ 
                Please click on the link to complete the registration process.`;

            } catch (e) {
                this.error = e.response.data.message[0].messages[0].message;
                document.querySelector("form button").classList.remove("loading");
            }
        },
    },

    mounted: function() {
        const button = document.querySelector("form button");

        button.addEventListener("click", () => {
            button.classList.add("loading");
        });
    }
}
</script>