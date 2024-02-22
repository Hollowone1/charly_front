<template>
    <div class="container">
        <h2>Créer un nouvel atelier</h2>
        <div class="card-container">
            <form @submit.prevent="createWorkshop">
                <input type="text" v-model="newWorkshop.title" placeholder="Titre">
                <input type="text" v-model="newWorkshop.description" placeholder="Description">
                <input type="number" v-model="newWorkshop.capacity" placeholder="0">
                <input type="date" v-model="newWorkshop.date" placeholder="Date">
                <button type="submit">Créer</button>
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
            axios.post('https://backend.crazycharlyday.kiwigdc.fr/api/ateliers', this.newWorkshop)
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
  height: 100vh;
  width: 100%;
  margin: 50px auto;

  h2 {
    margin-bottom: 20px;

  }
}

.search-bar {
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 300px;

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 10px;
      border: 1px solid #ccc;


    }

    button {
      background-color: #37A962;
      color: white;
      padding: 10px 20px;
      border-radius: 20px;
      border: none;
      width: 100%;
    }

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