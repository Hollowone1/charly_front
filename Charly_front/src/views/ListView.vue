<template>
    <div class="container">
        <div class="search-bar">
            <input type="text" v-model="search" placeholder="Rechercher...">
        </div>
        <div class="card-container">
            <div class="card" v-for="item in filteredItems" :key="item.id">
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <p>Date : {{ item.date }}</p>
                <p>Nombre de places : {{ item.capacity }}</p>
                <routerLink :to="`/atelier/${item.id}`">Voir plus</routerLink>
            </div>

        </div>

        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>

import axios from "axios";
export default {
    data() {
        return {
            items: [],
            search: '',
            error: ''
        }
    },
    methods: {
        searchItem(keyword) {
            return this.items.filter(item => item.title.includes(keyword) || item.description.includes(keyword));
        },
        fetchAteliers() {
            axios.get('http://localhost/api/ateliers')
                .then(response => {
                    this.items = response.data.data;
                    console.log(this.items);
                })
                .catch(error => {
                    this.error = 'Error fetching items: ' + error;
                });

        }
    },
    computed: {
        filteredItems() {
            return this.search ? this.searchItem(this.search) : this.items;
        }
    },
    mounted() {
        this.fetchAteliers();
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap');

.container {
  font-family: 'Comfortaa', cursive;
}

.search-bar {
  margin: 20px 0;

  input {
    width: 30%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #A43481;
  }
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    flex: 0 0 calc(33.3333% - 20px);
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }

    h2, p, a {
      margin: 0;
      padding: 10px;
    }

    a {
      background-color: #A43481;
      color: white;
      padding: 10px 20px;
      border-radius: 20px;
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;
      display: block;
      margin: 10px auto;
      width: 50%;
    }
  }
}
</style>