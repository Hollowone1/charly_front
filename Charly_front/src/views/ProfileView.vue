<template>
    <main>
        <div class="profil">
            <h2>Mon profil</h2>
            <form>
                <img src="@/assets/profil.png" alt="photo de profil">
                <label for="name">Votre nom</label>
                <input type="text">
                <label for="surname">Votre prénom</label>
                <input type="text">
                <label for="email">Votre email</label>
                <input type="text">
                <button type="submit">Modifier</button>
            </form>
        </div>
        <section class="demands">
            <h2>Mes demandes</h2>
            <div class="cards">
                <div class="card rounded" v-for="(demand, index) in demands" :key="index">
                    <div class="container-fluid">
                        <div class="row border-top-radius">
                            <div class="col-md-6">
                                <img src="@/assets/ragout.jpg" alt="image de la recette" class="img-fluid">
                            </div>
                            <div class="col-md-6 d-flex flex-column justify-content-center align-items-start">
                                <h5 class="card-title">Soupe à l'oignon</h5>
                                <h6 class="card-subtitle mb-2 text-muted">recette orientale</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <img src="@/assets/cuisine.png" alt="image du cours" class="img-fluid w-100">
                            </div>
                        </div>
                        <div class="row border-bottom-radius">
                            <div class="col-md-12">
                                <h3 class="card-title mt-3">Recettes de la soupe à l'oignon à l'orientale</h3>
                                <div class="card-status">
                                    <h5 class="status-btn">Status:
                                        <div class="state-status">Acceptée</div>
                                    </h5>
                                </div>
                                <p class="card-date">Date: 12/04/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="ateliers">
            <h2>Mes ateliers passés</h2>
            <div class="cards">
                <div class="card rounded" v-for="(atelier, index) in ateliers" :key="index">
                    <div class="container-fluid">
                        <div class="row border-top-radius">
                            <div class="col-md-6">
                                <img src="@/assets/ragout.jpg" alt="image de la recette" class="img-fluid">
                            </div>
                            <div class="col-md-6 d-flex flex-column justify-content-center align-items-start">
                                <h5 class="card-title">Soupe à l'oignon</h5>
                                <h6 class="card-subtitle mb-2 text-muted">recette orientale</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <img src="@/assets/cuisine.png" alt="image du cours" class="img-fluid w-100">
                            </div>
                        </div>
                        <div class="row border-bottom-radius">
                            <div class="col-md-12">
                                <h3 class="card-title mt-3">Recettes de la soupe à l'oignon à l'orientale</h3>
                                <p class="card-date">Date: 12/04/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            demands: [],
            ateliers: []
        };
    },
    created() {
        axios.get('https://backend.crazycharlyday.kiwigdc.fr/api/profile', {
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMGJhY2U2ZmQ3YzQ4MzE2YTQ3ZGU1OTliNjJmOTgwNjJmYWM4ZGNlNjBlZjk4YWZlNWQ3OGY1Yjg1OGNkZGYzNGRkNDVlZmEzMGEwMWMwMTEiLCJpYXQiOjE3MDg2MzU1MzUuNjQ4NjA1LCJuYmYiOjE3MDg2MzU1MzUuNjQ4NjA4LCJleHAiOjE3NDAyNTc5MzUuNDM2NDE3LCJzdWIiOiIyMiIsInNjb3BlcyI6W119.sl9Y2-GeyC9TWbHxU-frNloOVvRiUiR5nwZqDiicTj_RKL-oDMiEJaIeRP9yxJti-_Y2MmH-hDz9YEoY_MyUwBP62p2sr78GZk6rsCpvjmS34vsMfefk-f3Txr2D0QRd0vARWD5rN-AEPePbT7sOCWksfRXmZPIfY1iQgTzu-Y6zVp_r45ltP1Ay00TIBwDKiT0gIw4mTGtDJ4F__nVQCySiHiPe2mfiwxTF3ChGczygpAI_5hEA3VwZhlBkMWu7QKZ4B8FNvkPQhGfERn8TD2dnyDr0Ze6EIq69pC71Tg2b5MZEzSUS4dqfm3AkurGUN9Lcragl-ENinumalth5WPInTi_UFdlncVEm-rPT94uaBBfWR0I3OUBrZB9jly84n-zvBOHtah8twxB6PQeQen7aKMrT6Vrble8mrfMMGumRvasoGLkJ39v8xKmp7frMXmTjA6iaPmCIFJ2x3q2OubXD1GXFikIA995UMJLtL5-tE9nQhnBNZsflPDSyui1i16KXPTHTVxyPPlRHr6X4W7uVL5q-t-BNkD3uUWAfH-Oj9jP1Ti_rVKLSs3FjbLYGCQEFzAR2ubXPGOz6HEKlhXVt-GahwbpvStQl2lMtDIrF_h-O1Tbuk0K5mlAbObEN7zmyeVhAbAaE_vN3q2_0cLJ4fd2yuKZcHzal40JIf_0`
            }
        })
            .then(response => {
                this.demands = response.data.demands;
                this.ateliers = response.data.ateliers;
            })
            .catch(error => {
                console.error(error);
            });

    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');


.profil {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.profil h1 {
  margin-bottom: 20px;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 400;
}

.profil form {
  display: grid;
  gap: 20px;
  width: 100%;
  max-width: 300px;
}

.profil form label {
  display: block;
  margin-bottom: 5px;
}

.profil form input {
  width: 100%;
}

.profil form img {
  align-self: center;
  justify-self: center;
}

form img {
  height: 200px;
  width: 200px;
}

label {
  text-align: center;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 300;
}

input {
  max-width: 400px;
  height: 45px;
  border-radius: 5%;
}

form button {
  max-width: 200px;
  align-self: center;
  justify-self: center;
  background-color: #A43481;
  border-radius: 20px;
  height: 50px;
  color: #fff;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 300;
  margin-bottom: 30px;
}

.demands {
  background-color: #37A962;
  height: 600px;
}

.ateliers {
  height: 600px;
}

.card {
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  .container-fluid {
    padding: 0;

    .row {
      margin: 0;
      background-color: white;

      &:first-child {
        display: flex;
        align-items: bottom;
        justify-content: center;

        img {
          width: 50%;
          height: auto;
          object-fit: cover;
          border-radius: 100%;
        }

        .col-md-6 {
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 0;
          max-width: 130px;

          .card-title {
            margin-bottom: 5px;
            color: #000;
            text-align: start;
            font-family: 'Comfortaa', sans-serif;
            font-weight: 500;
          }

          .card-subtitle {
            margin-bottom: 5px;
            color: #000;
            text-align: start;
            font-family: 'Comfortaa', sans-serif;
            font-weight: 300;

          }
        }
      }

      &:nth-child(2) {
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      &:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;

        .card-title {
          margin-bottom: 10px;
          color: #000;
          font-family: 'Comfortaa', sans-serif;
          font-weight: 600;
          text-align: center;
        }

        .card-status {
          margin-bottom: 20px;
          color: #000;

          .status-btn {
            display: flex;
            justify-content: center;
            align-items: center;

            .state-status {
              margin-left: 5px;
              padding: 5px 10px;
              border-radius: 5px;
              background-color: #37A962;
            }
          }
        }

        .card-date {
          text-align: center;
          color: #000;
          font-family: 'Comfortaa', sans-serif;
          font-weight: 300;
        }
      }
    }
  }
}

.border-top-radius {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.border-bottom-radius {
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

h2 {
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

}
</style>