<template>
    <main>
        <section>

            <Notification v-if="success" type="success" :message="success" />
            <Notification v-if="error" type="danger" :message="error" />

            <form class="form" v-if="!success" method="post" @submit.prevent="forgotPassword">
                <h1>Forgot Password</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quas saepe eveniet dicta impedit vero assumenda facere eaque iusto dolor.</p>
                <span data-field="Emailadres *" class="form-field">
                    <input v-model="email" class="form-input" type="text" name="email" placeholder="Emailadres *" maxlength="80">
                    <p>Luister vriend! Dit gaat zo niet werken hé! Je moet wel een geldig emailadres invullen.</p>
                </span>
                <button class="submit button" type="submit" name="submit">Email me a reset link</button>


            </form>

        </section>
    </main>
</template>


<script>

export default {
    
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
            
            try {
                await this.$axios.post("auth/forgot-password", {
                    email: this.email
                });

                this.error = null;
                this.success = `A reset password link has been sent to your email account. Please click on the link to complete the password reset.`;
                

            } catch (e) {
                this.error = e.response.data.message[0].messages[0].message;
            }
        }
    }
}
</script>


