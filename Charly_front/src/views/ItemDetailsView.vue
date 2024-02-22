<template>
    <div class="container">
        <div class="card">
            <h2>{{ item.title }}</h2>
            <p>Description : {{ item.description }}</p>
            <p>Date de l'atelier : {{ item.date }}</p>
            <p>Nombre de place : {{ item.capacity }}</p>
            <button @click="participate('john doe')">Participer</button>
        </div>

        <div class="card">
            <h2>Liste des participants - {{ users.length }} / {{ item.capacity }}</h2>
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
            users: []
        }
    },
    created() {
        const id = this.$route.params.id;
        this.fetchItem(id);
    },
    methods: {
        fetchItem(id) {
            axios.get(`https://backend.crazycharlyday.kiwigdc.fr/api/ateliers/${id}`)
                .then(response => {
                    this.item = response.data.data;
                    this.users = response.data.data.users;
                })
                .catch(error => {
                    console.error('Error fetching item:', error);
                });
        },
        participate(name) {
            if (this.users.includes(name)) {
                alert('Vous participez déjà à cet atelier');
            } else if (this.users.length >= this.item.capacity) {
                alert('Atelier complet');
            } else {
                this.users.push({name: name});
            }


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

  &:last-child {
    border: 1px solid #A43481;
    box-shadow: 0 0 10px #A43481;

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 5px;

      }
    }
  }
}
</style>