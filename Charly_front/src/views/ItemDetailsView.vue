<template>
    <div class="container">
        <div class="card">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <p>{{ item.date }}</p>
            <p>{{ item.capacity }}</p>
            <button>Participer</button>
        </div>

        <div class="card">
            <h2>Liste des participants - {{users.length}} / {{ item.capacity}}</h2>
            <ul>
                <li v-for="user in users" :key="user.id">{{ user.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            item: {},
            users: [
            ]
        }
    },
    created() {
        const id = this.$route.params.id;
        this.fetchItem(id);
    },
    methods: {
        fetchItem(id) {
            axios.get(`http://localhost/api/ateliers/${id}`)
                .then(response => {
                    this.item = response.data.data;
                    this.users = response.data.data.users;
                })
                .catch(error => {
                    console.error('Error fetching item:', error);
                });
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100vh;
    padding: 20px;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 1px solid #37A962;
    border-radius: 10px;
    box-shadow: 0 0 10px #37A962;
    width: 45%; /* Adjust this value as needed */

    img {
        object-fit: contain;
        height: auto;
    }

    h2 {
        text-transform: uppercase;
        text-align: left;
    }

    button {
        background-color: #37A962;
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        border: none;
        margin-top: 20px;
        cursor: pointer;
    }

    button:hover {
        background-color: #1F282F;
    }
}
</style>