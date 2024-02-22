<template>
    <nav>
		<routerLink to="/" id="logo"><img src="@/assets/logo.png" alt="Logo boite a cuisine"></routerLink>
		<ul>
			<li><routerLink to="/">Accueil</routerLink></li>
			<li><routerLink to="/list">Liste des cours</routerLink></li>
			<li><routerLink to="/profil"><img src="@/assets/user-line.svg" alt="image du profil" class="profil"></routerLink></li>
		</ul>
	</nav>
</template>
	
<script>
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');

body {
	margin: 0;
	padding: 0;
	
}

nav {
	background-color: #CBCBCB;
	padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Comfortaa", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;

}

#logo {
	display: inline-block;
	margin-right: 10px;
}

#logo img {
	height: 100px;
    width: 100px;
}

ul {
	display: inline;
	list-style-type: none;
	margin: 0;
	padding: 0;
    
}

li {
	display: inline;
	margin-right: 10px;
    margin: 0 50px;
}

li a {
	color: white;
	text-decoration: none;
}

li a:hover {
	color: #A43481;
}
.profil{
    height: 25px;
    color: #A43481;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }

  ul {
    width: 100%;
    flex-direction: column;
  }

  li {
    margin: 10px 0;
  }
}
</style>