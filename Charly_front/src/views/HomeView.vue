<template>
    <div>
      <h1>MON HI MON DEPLOIEMENT</h1>
        <section>
            <div class="content">
                <div class="description">
                    <h1>La boîte à cuisine</h1>
                    <p>Contre la précarité, un atelier gratuit pour les plus démunis</p>
                    <routerLink to="/list">Vers les ateliers</routerLink>
                </div>
                <div class="image">
                    <img src="@/assets/home/accueilBAC.jpg" alt="image de la cuisine de l'association">

                </div>
            </div>
        </section>

        <section>
            <div class="quote">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path>
                </svg>
                <p>L'idée est qu'ils peuvent tout de suite cuisiner pour leur famille ou pour eux-mêmes la même chose
                    que ce qu'ils ont fait ici.</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path>
                </svg>
            </div>
        </section>

        <section>
            <div class="content">
                <div class="description">
                    <p>"La boîte à cuisine" à Nancy, est un lieu initié par l'association Accueil et Réinsertion Sociale
                        (ARS), depuis le 10 janvier, pour cuisinier contre la précarité. Les ateliers sont solidaires et
                        gratuits sur inscription.</p>
                </div>
                <div class="image">
                    <img src="@/assets/home/CuisineEntreprise.webp  " alt="image de la cuisine de l'association">
                </div>
            </div>
        </section>
    </div>

</template>

<script>

</script>

<style scoped lang="scss">

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    width: 100%; // prend toute la largeur de l'écran
    display: flex;
    justify-content: center; // centre le contenu horizontalement
    padding: 50px 20px;

    &:nth-child(even) {
      background-color: #37A962;
      color: white;
      text-align: center;
    }

    .quote {
      margin: 50px 0;
      display: flex;
      flex-direction: row;

      svg {
        width: 40px;
        height: 28px;
        margin: 0 20px;
        color: white;

        &:first-child {
          transform: rotate(180deg);
          margin-top: 20px;
        }

        &:last-child {
          margin-bottom: 100px;
        }
      }

      p {
        font-style: italic;
        width: 40%;
      }
    }


    .content {
      width: 80%; // le contenu prend 80% de la largeur
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;


      > div {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px;
      }

      .description {
        h1 {
          text-transform: uppercase;
          text-align: left;
        }

        a {
          text-decoration: none;
          color: white;
          background-color: #A43481;
          padding: 10px 20px;
          border-radius: 20px;
        }
      }

      .image {
        img {
          width: 100%;
          height: auto;
          border-radius: 5px;
          box-shadow: 0 0 5px 1px #37A962;
        }
      }
    }
  }
}

</style>