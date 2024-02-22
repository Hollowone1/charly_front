<script>
export default {
    data() {
        return {
            isConneced: false
        }
    },
    methods: {
        checkConnexion() {
            if (localStorage.getItem('username') && localStorage.getItem('email')) {
                this.isConneced = true;
            }
        }
    },
    mounted() {
        this.checkConnexion();
    }
}
</script>

<template>
    <nav>
        <routerLink to="/" id="logo"><img src="@/assets/logo.png" alt="Logo boite a cuisine"></routerLink>
        <ul>
            <li>
                <routerLink to="/">Accueil</routerLink>
            </li>
            <li>
                <routerLink to="/list">Liste des ateliers</routerLink>
            </li>
            <li>
                <routerLink to="/connexion" v-if="!isConneced" class="connection">Se connecter</routerLink>
                <routerLink to="/profil" v-if="isConneced">Profil</routerLink>
            </li>
        </ul>
    </nav>
</template>


<style scoped lang="scss">
body {
  margin: 0;
  padding: 0;

}

.connection {
  background-color: #37A962;
  color: white;
  padding: 10px 15px;
  text-align: center;
  border-radius: 20px;

  &:hover {
    background-color: #1F282F;
    color: #37A962;

  }
}

nav {
  background-color: #CBCBCB;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;

  ul {
    display: inline;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      display: inline;
      margin: 0 50px;
      align-self: center;

      a {
        color: #1F282F;
        text-decoration: none;
        font-weight: bold;

        &:hover {
          color: #37A962;

        }
      }
    }
  }
}

#logo {
  display: inline-block;
  margin-right: 10px;

}

#logo img {
  height: 100px;
  width: 100px;
}


.profil {
  height: 25px;
  width: 40px;
  color: #A43481;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;

    ul {
      width: 100%;
      flex-direction: column;

      li {
        margin: 10px 0;
      }
    }
  }
}
</style>