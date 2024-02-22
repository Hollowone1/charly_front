<template>
    <main>
        <div class="profil">
            <h1>Mon profil</h1>
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
            <div class="card">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="@/assets/ragout.jpg" alt="image de la recette" class="img-fluid">
                        </div>
                        <div class="col-md-6 d-flex flex-column justify-content-center align-items-start">
                            <h5 class="card-title">Title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Subtitle</h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <img src="@/assets/cuisine.png" alt="image du cours" class="img-fluid w-100">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <h3 class="card-title mt-3">Main Title</h3>
                            <h5 class="card-status">Status: <span class="status-btn">
                            <button class="btn btn-success btn-sm">Accepted</button>
                            <button class="btn btn-warning btn-sm">Pending</button>
                            <button class="btn btn-danger btn-sm">Rejected</button>
                            </span></h5>
                            <p class="card-date">Date: 12/04/2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="ateliers">
            
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
.card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
}

.card-title {
    margin-bottom: 10px;
}

.card-subtitle {
    margin-bottom: 20px;
}

.card-status {
    margin-bottom: 10px;
}

.card-date {
    margin-top: 10px;
}

.status-btn {
    display: inline-flex;
    gap: 5px;
}

.img-fluid {
    max-width: 100%;
    height: auto;
}

.w-100 {
    width: 100%;
}
</style>