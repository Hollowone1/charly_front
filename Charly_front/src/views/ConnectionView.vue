<template>
    <div class="connexion">
        <p class="error"></p>
        <div class="container" id="container">
            <div id="signup-form" class="form-container sign-up">
                <div class="form">
                    <h1>Créer un compte</h1>
                    <input id="last_name" type="text" placeholder="Nom de famille">
                    <input id="first_name" type="text" placeholder="Prénom">
                    <input id="signup-email" type="email" placeholder="Email">
                    <input id="signup-password" type="password" placeholder="Mot de passe">
                    <button id="signup-button" class="button-register">Inscrivez-vous</button>
                </div>
            </div>
            <div id="signin-form" class="form-container sign-in">
                <div class="form">
                    <h1>Se connecter</h1>
                    <input id="signin-email" type="email" placeholder="Email">
                    <input id="signin-password" type="password" placeholder="Mot de passe">
                    <button id="signin-button" class="login">Connexion</button>
                </div>
            </div>

            <div class="toggle-container">
                <div class="toggle">
                    <div class="toggle-pannel toggle-left">
                        <h1>Vous avez déjà un compte ?</h1>
                        <p>Entrez vos coordonnées personnelles et reprennez votre voyage.</p>
                        <button class="hiden" id="login">Se connecter</button>
                    </div>
                    <div class="toggle-pannel toggle-right">
                        <h1>Salut et bienvenue !</h1>
                        <p>Entrez vos coordonnées personnelles et commencez votre voyage avec nous !</p>
                        <button class="hiden" id="register">S'inscrire</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import connexionForm from "@/js/modules/connexion_form.js";
import inscriptionForm from "@/js/modules/inscription_form.js";

export default {
    name: 'ConnectionView',
    mounted() {
        connexionForm.initializeEventListeners();
        inscriptionForm.initializeEventListeners();
        this.initializeEventListeners();
    },
    methods: {
        initializeEventListeners() {
            const container = document.getElementById('container');
            const registerBtn = document.getElementById('register');
            const loginBtn = document.getElementById('login');

            registerBtn.addEventListener('click', () => {
                container.classList.add("active");
            });

            loginBtn.addEventListener('click', () => {
                container.classList.remove("active");
            });
        }
    }
}
</script>

<style scoped lang="scss">
$primary-color: #37A962;

.connexion {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1F282F;
    color: white;
    font-family: Comfortaa, sans-serif;
}

.container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  position: relative;
  width: 768px;
  max-width: 100%;
  min-height: 480px;

  p {
    margin: 20px 0;
  }

  button {
    background-color: $primary-color;
    color: #fff;
    padding: 10px 45px;
    border-radius: 8px;
    border: 1px solid transparent;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    margin-top: 10px;

    &.hiden {
      background-color: transparent;
      border-color: #fff;
    }
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;

    .form {
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0 40px;
      height: 100%;
    }

    input {
      background-color: #d9d9d9;
      border: none;
      border-radius: 8px;
      margin: 8px;
      padding: 10px 15px;
      width: 100%;
      outline: none;
    }

    button:hover {
      background-color: #fff;
      color: $primary-color;
      border-color: $primary-color;
    }

    &.sign-in {
      left: 0;
      width: 50%;
      z-index: 2;
    }

    &.sign-up {
      left: 0;
      width: 50%;
      opacity: 0;
      z-index: 1;
    }
  }

  &.active {
    .sign-in {
      transform: translateX(100%);
    }

    .sign-up {
      transform: translateX(100%);
      opacity: 1;
      z-index: 5;
      animation: move 0.6s;

      @keyframes move {
        0%, 49.99% {
          opacity: 0;
          z-index: 1;
        }
        50%, 100% {
          opacity: 1;
          z-index: 5;
        }
      }
    }

    .toggle-container {
      transform: translateX(-100%);
      border-radius: 0 150px 150px 0;

      .toggle {
        transform: translateX(50%);

        .toggle-left {
          transform: translateX(0);
        }

        .toggle-right {
          transform: translateX(200%);
        }
      }
    }
  }

  .toggle-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-radius: 150px 0 0 150px;
    z-index: 1000;

    h1::after {
      content: none;
    }

    .toggle {
      height: 100%;
      color: #fff;
      position: relative;
      left: -100%;
      width: 200%;
      transform: translateX(0);
      transition: all 0.6s ease-in-out;

      .toggle-pannel {
        position: absolute;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 30px;
        text-align: center;
        top: 0;
        transform: translateX(0);
        transition: all 0.6s ease-in-out;

        &.toggle-right {
          right: 0;
          transform: translateX(0);
          background: $primary-color linear-gradient(to right, $primary-color, #338f55);

        }

        &.toggle-left {
          background: $primary-color linear-gradient(to right, $primary-color, #338f55);

        }

        button:hover {
          background-color: #fff;
          color: $primary-color;
          border-color: $primary-color;
        }
      }
    }
  }
}
</style>