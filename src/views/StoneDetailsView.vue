<template>
    <div class="stoneInfo">
        <div class="stoneInfo__image">
            <img 
                class="d-block stoneInfo__pic" 
                src="../assets/falling.jpg" 
                alt="Камень"
            >
        </div>
        <div class="stoneInfo__info">
            <div class="stoneInfo__description">
                <h6 class="title">
                    Описание:
                </h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, assumenda aut autem dignissimos dolore eum impedit magnam magni molestias necessitatibus nihil officia officiis quis similique, soluta vitae voluptates? Consequuntur cumque dolore earum eum quas tempora temporibus veritatis? A asperiores atque consequatur corporis ducimus ea error id labore nam quae quaerat quo repellat repudiandae sapiente, sint veniam voluptatibus? Ab aspernatur, delectus ea explicabo, facere id ipsa magni maiores maxime modi odio officia officiis quas ratione repellendus, reprehenderit tempore voluptas! Aperiam asperiores commodi consequuntur ex fuga, ipsam laboriosam minima modi, nam non possimus praesentium quis, ratione reprehenderit suscipit tempore voluptatum. Nihil?
                </p>
            </div>
            <div class="stoneInfo__location">
                    <span class="title">Местонахождение:</span> Приморье, Лесозаводск
            </div>
            <div class="stoneInfo__author">
                <span class="title" >
                    Автор:
                </span> Иванов Иван Иванович

            </div>
        </div>
    </div>
</template>

<style>
.stoneInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
}

.stoneInfo__pic {
    margin: 20px;
    width: calc(100%);
    height: 60vh;
}

.stoneInfo__info {
    margin: 20px;
    display: flex;
    flex-direction: column;
    width: 50%;
}

.title {
    font-size: 16px;
    font-weight: bolder;
    color: black;
}

.nav-link:hover {
    color: blue;
    text-decoration: underline;
}
</style>

<script>
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
            stone: {}
        }
    },
    mounted() {
        const route = useRoute()
        // this.axios.get("http://localhost:5001/api/stone/" + route.params.id)
        //     .then(response => this.stone = response.data)
        //     .catch(error => console.log(error));
    }
}

</script>