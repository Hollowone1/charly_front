<template>
    <nav>
		<routerLink to="/" id="logo"><img src="logo.png" alt="Logo"></routerLink>
		<ul>
			<li><routerLink to="/">Home</routerLink></li>
			<li><routerLink to="/list">Workshop</routerLink></li>
			<li><routerLink v-if="isConnected" to="/profil">Login</routerLink></li>
		</ul>
	</nav>
</template>
	
<script>
</script>

<style scoped lang="scss">
body {
	margin: 0;
	padding: 0;
	font-family: Arial, sans-serif;
}

nav {
	background-color: #333;
	padding: 10px;
}

#logo {
	display: inline-block;
	margin-right: 10px;
}

#logo img {
	height: 40px;
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
}

li a {
	color: white;
	text-decoration: none;
}

li a:hover {
	color: #ddd;
}

</style>