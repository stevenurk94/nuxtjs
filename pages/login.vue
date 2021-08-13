<template>
    <main>
        <section>

            <Notification v-if="error" type="danger" :message="error" />

            <form method="post" class="form" @submit.prevent="login">
                <h1>Login</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quas saepe eveniet dicta impedit vero assumenda facere eaque iusto dolor.</p>
                <span data-field="Emailadres *" class="form-field">
                    <input v-model="email" class="form-input" type="text" name="email" placeholder="Emailadres *" maxlength="80">
                    <p>Luister vriend! Dit gaat zo niet werken hé! Je moet wel een geldig emailadres invullen.</p>
                </span>
                <span data-field="Password *" class="form-field">
                    <input v-model="password" class="form-input" type="password" name="password" placeholder="Password *">
                    <p>Luister vriend! Dit gaat zo niet werken hé!</p>
                </span>
                <button class="submit button" type="submit" name="submit" placeholder="Verzenden">Log In</button>


            </form>

        </section>
    </main>
</template>


<script>

import Notification from "~/components/Notification";

export default {
    components: {
        Notification,
    },

    // middleware: "guest",

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

                this.$router.push("/profile");
                
            } catch (e) {
                this.error = e.response.data.message[0].messages[0].message;
            }
        },
    },
};
</script>