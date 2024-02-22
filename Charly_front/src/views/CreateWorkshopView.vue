<template>
  <div class="container">
    <h2>Créer un nouvel atelier</h2>
    <div class="card-container">
      <form @submit.prevent="createWorkshop">
        <div class="card">
          <input type="text" v-model="newWorkshop.title" placeholder="Titre">
          <input type="text" v-model="newWorkshop.description" placeholder="Description">
          <input type="number" v-model="newWorkshop.capacity" placeholder="0">
          <input type="date" v-model="newWorkshop.date" placeholder="Date">
          <button type="submit">Créer</button>
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
      newWorkshop: {
        title: '',
        description: '',
        capacity: null,
        date: ''
      }
    }
  },
  methods: {
    createWorkshop() {
      axios.post('http://localhost/api/ateliers', this.newWorkshop)
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