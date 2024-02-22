<template>
  <div class="container">
    <div class="search-bar">
      <input type="text" v-model="search" placeholder="Rechercher...">
    </div>
    <button @click="create" id="create">Créer un nouvel atelier</button>
    <div class="card-container">
      <div class="card" v-for="item in filteredItems" :key="item.id">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <p>{{ item.date }}</p>
        <button @click="editItem(item)" id="edit">Modifier</button>
        <button @click="deleteItem(item.id)" id="delete">Supprimer</button>
      </div>
    </div>
    <div class="centrer">
      <button type="submit" class="algorithme">Lancer l'algorithme</button>
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
          date: '2022-01-01'
        },
        {
          id: 2,
          title: 'Titre 2',
          description: 'Description 2',
          date: '2022-02-02'
        },
        {
          id: 3,
          title: 'Titre 3',
          description: 'Description 3',
          date: '2022-03-03'
        }
      ],
      search: '',
      error: ''
    }
  },
  methods: {
    create() {
      this.$router.push('/back-office/create-workshop');
    },
    editItem(item) {
      this.$router.push(`/back-office/edit-workshop/${item.id}`);
    },
    deleteItem(id) {
      this.$api.delete(`/back-office/${id}`)
          .then(() => {
            this.items = this.items.filter(item => item.id !== id);
          })
          .catch(error => {
            console.error(error);
            this.error = 'Une erreur est survenue lors de la suppression de l\'atelier.';
          });
    },
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
  padding: 20px;
}

.search-bar {
  margin-bottom: 20px;
}

#create {
  background-color: #37A962;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  width: 30%;
  margin: 20px auto;

}

#edit {
  background-color: #A43481;
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  width: 30%;
  margin-bottom: 10px;

}

#delete {
  background-color: #cc0836;
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  width: 50%;


}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card {
    flex: 0 0 calc(33.3333% - 20px);
    margin-bottom: 20px;
    padding: 20px;

    img {
      width: 100%;
      height: auto;
    }

    h2, p {
      margin: 0;
      padding: 10px 0;
    }
  }
}

.centrer{
  display: flex;
  justify-content: center;
}

.algorithme{
  background-color: #A43481;
  border-radius: 5px;
}
</style>