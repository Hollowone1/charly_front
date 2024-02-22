<template>
  <div class="container">
    <h2>Modifier l'atelier</h2>
    <div class="card-container">
      <form @submit.prevent="updateItem">
        <div class="card">
          <input type="text" v-model="editedItems.title" placeholder="Titre">
          <input type="text" v-model="editedItems.description" placeholder="Description">
          <input type="date" v-model="editedItems.date" placeholder="Date">
          <button type="submit">Mettre à jour</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      editedItems: {
        title: '',
        description: '',
        date: ''
      }
    }
  },
  methods: {
    updateItem() {
      axios.put(`http://localhost/api/ateliers/${this.$route.params.id}`, this.editedItems)
        .then(response => {
          console.log(response);
          this.$router.push('/back-office');
        })
        .catch(error => {
          console.error(error);
        });
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
  margin-bottom: 20px;
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
      height: auto;
    }

    h2, p {
      margin: 0;
      padding: 10px 0;
    }
  }
}
</style>