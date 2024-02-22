<template>
    <div class="container">
        <div class="search-bar">
            <input type="text" v-model="search" placeholder="Rechercher...">
        </div>
        <div class="card-container">
            <div class="card" v-for="item in filteredItems" :key="item.id">
                <img :src="item.image" alt="Image de l'item">
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
                <p>{{ item.date }}</p>
                <routerLink :to="`/atelier/${item.id}`">Voir plus</routerLink>
            </div>

        </div>

        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: 'Titre 1',
                    description: 'Description 1',
                    image: 'https://via.placeholder.com/150',
                    date: '2022-01-01'
                },
                {
                    id: 2,
                    title: 'Titre 2',
                    description: 'Description 2',
                    image: 'https://via.placeholder.com/150',
                    date: '2022-02-02'
                },
                {
                    id: 3,
                    title: 'Titre 3',
                    description: 'Description 3',
                    image: 'https://via.placeholder.com/150',
                    date: '2022-03-03'
                },
                {
                    id: 4,
                    title: 'Titre 4',
                    description: 'Description 4',
                    image: 'https://via.placeholder.com/150',
                    date: '2022-03-03'
                }
            ],
            selectedItem: null,
            showModal: false,
            search: '',
            error: ''
        }
    },
    methods: {
        searchItem(keyword) {
            return this.items.filter(item => item.title.includes(keyword) || item.description.includes(keyword));
        },
    },
    computed: {
        filteredItems() {
            return this.search ? this.searchItem(this.search) : this.items;
        }
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

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>