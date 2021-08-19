<template>
    <main>
        <section>

            <h1>GENESISNOW</h1>

            <form class="form" method="post" @submit.prevent="register">

                <AccountConfirmation />

                <div class="fields-wrapper" v-if="!success">
                    <h1>Register</h1>
                    <Loading />
                    
                    <Notification v-if="success" type="success" :message="success" />
                    <Notification v-if="error" type="danger" :message="error" />
                    <span data-field="First name *" class="form-field">
                        <input v-model="firstname" class="form-input" type="text" name="firstname" placeholder="First name *" maxlength="80">
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

                    <span class="agreements">
                        <input type="checkbox" id="checkbox">
                        <label for="checkbox"></label>
                        <p>I agree with the terms and conditions.</p>
                    </span>


                    
                    <button class="submit button" type="submit" name="submit">Register</button>
                </div>
                
            </form>

            <div class="account-links">
                <NuxtLink to="/account/login">Log In</NuxtLink>
                &nbsp;&nbsp;
                <p>or</p>
                &nbsp;&nbsp;
                <NuxtLink to="/account/forgot-password">Forgot password</NuxtLink>
            </div>

        </section>

    </main>
</template>


<style scoped>

main {
    background: var(--darkblue);
    height: 100vh;
    width: 100vw;
}


input[type=checkbox] {
    display: none;    
}

label {
    width: 30px;
    height: 30px;
    border: 1px solid var(--grey-2);
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: fa-solid;
    font-size: 17px;
    transition: all .25s cubic-bezier(.4,0,.23,1);
    cursor: pointer;
}



input:checked ~ label {
    background: var(--darkblue);
    border: 1px solid var(--darkblue);
}


label::before {
    content: "\F00C";
    color: transparent;
    opacity: 0;
    transition: all .25s cubic-bezier(.4,0,.23,1);
}

input:checked ~ label::before {
    content: "\F00C";
    color: var(--white);
    opacity: 1;
}

.agreements {
    display: flex;
    align-items: center;
}


</style>


<script>

export default {

    layout: "empty",
    middleware: "guest",

    data() {
        return {
            firstname: "",
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
                    firstname: this.firstname,
                    username: this.email,
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

