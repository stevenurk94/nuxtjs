<template>
    <div :class="`is-${type}`" class="notification">
        <h2>
            {{ message }}
        </h2>
    </div>
</template>

<script>
export default {
    name: "Notification",
    props: {
        type: {
            type: String,
            default: "success",
            validator: (val) => ["danger", "success"].includes(val),
        },

        message: {
            type: String,
            default: "",
        },
    },
};
</script>

<style scoped>

.notification {
    border-radius: 10px;
    padding: 20px;
    max-width: 700px;
}

.notification.is-danger {
    background: red;
}

.notification.is-success {
    background: green;
}
</style>