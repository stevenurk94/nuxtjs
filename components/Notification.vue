<template>
    <div :class="`is-${type}`" class="notification">
        <p>
            {{ message }}
        </p>
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
    width: 99%;
    justify-content: center;
    display: flex;
    margin: auto;
    left: 0;
    right: 0;
}

.notification.is-danger {
    background: rgba(248,81,73,0.1);
    color: #ff7b72;
    border: 1px solid rgba(248,81,73,0.4);
}

.notification.is-success {
    background: rgba(46,160,67,0.1);
    border: 1px solid rgba(46,160,67,0.4);
}

.notification.is-success p {
    color: #56d364;

}
</style>