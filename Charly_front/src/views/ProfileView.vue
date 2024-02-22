<template>
    <main>
        <div class="profil">
            <h2>Mon profil</h2>
            <form>
                <img src="@/assets/profil.jpg" alt="photo de profil">
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
            <div class="card">
                <div class="container-fluid">
                    <div class="row">
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
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="card-title mt-3">Recettes de la soupe à l'oignon à l'orientale</h3>
                            <div class="card-status"> <h5 class="status-btn">Status:
                            <div class="state-status">Acceptée</div>
                            </h5></div>
                            <p class="card-date">Date: 12/04/2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="ateliers">
            <h2>Mes ateliers passés</h2>
        </section>
    </main>

</template>

<script>

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
    font-family: 'Comfortaa',sans-serif;
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

form img{
    height: 200px;
    width: 200px;
}

label{
    text-align: center;
    font-family: 'Comfortaa',sans-serif;
    font-weight: 300;
}

input{
    max-width: 400px;
    height: 45px;
    border-radius: 5%;
}
form button{
    max-width: 200px;
    align-self: center;
    justify-self: center;
    background-color: #A43481;
    border-radius: 10%;
    height: 50px;
    color: #fff;
    font-family: 'Comfortaa',sans-serif;
    font-weight: 300;
}
.demands{
    background-color: #37A962;
    height: 800px;
}
.ateliers{
    height:800px
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
        justify-content:center;
        img {
            width: 50%;
            height: auto;
            object-fit: cover;
            border-radius: 100%;
        }
        .col-md-6 {
          display: flex;
          flex-direction: column;
          justify-content:center;
          align-items:flex-start;
          padding: 0;
          max-width: 130px;
          .card-title {
            margin-bottom: 5px;
            color: #000;
            text-align: start;
            font-family: 'Comfortaa',sans-serif;
            font-weight: 500;
          }
          .card-subtitle {
            margin-bottom: 5px;
            color: #000;
            text-align: start;
            font-family: 'Comfortaa',sans-serif;
            font-weight: 300;
            position: relative;
            bottom: 25px;
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
          font-family: 'Comfortaa',sans-serif;
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
          font-family: 'Comfortaa',sans-serif;
          font-weight: 300;
        }
      }
    }
  }
}
</style>