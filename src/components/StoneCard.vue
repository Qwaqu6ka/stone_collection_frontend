<template>
    <div class="card" @click="pushToId">
        <img
            class="card-img-top"
            src="../assets/stone-example.jpg"
            alt="Card image cap"
        />
        <div class="card-body">
            <h5 class="card-title">{{ card.description }}</h5>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    margin: 10px;
    width: 18rem;
}

.card-body {
    height: 100px;
}

.card-img-top {
    width: 100%;
    height: calc(100% - 50%);
    background-repeat: no-repeat;
    background-size: 100%;
    background-size: contain;
}
</style>

<script>
import { useRouter } from 'vue-router';

export default {
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            router: useRouter(),
        }
    },
    methods: {
        pushToId(){
            this.router.push("/rock/"+this.card.id)
        }
    }
};
</script>
