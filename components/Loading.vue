<template>

<div class="loadingblock">
    <span></span>
    <span></span>
    <span></span>
</div>

</template>


<style scoped>



.loadingblock {
    display: none;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background: var(--bg);
    border-radius: 10px;
    z-index: 3;
}

.loadingblock span {
    width: 15px;
    height: 15px;
    margin: 0 7.5px;
    border-radius: 50%;
    animation: dots 1s ease 0ms infinite;
    transform: scale(0);
    background: var(--pink);
}

.loadingblock span:nth-child(1) {
    animation-delay: .3s;
}

.loadingblock span:nth-child(2) {
    animation-delay: .6s;
}

.loadingblock span:nth-child(3) {
    animation-delay: .9s;
}

@keyframes dots {
    50% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        opacity: 0;
    }   
}



</style>