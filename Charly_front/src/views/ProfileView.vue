<template>
    <main>
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