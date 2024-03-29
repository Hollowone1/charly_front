class ConnexionForm {

    initializeEventListeners() {
        const button = document.getElementById("signin-button");
        button.addEventListener('click', () => {
            button.disabled = true;
            const error = document.getElementsByClassName("error")[0];
            const form = document.getElementById("signin-form");
            const email = form.querySelector("#signin-email").value;
            const password = form.querySelector("#signin-password").value;

            const options = {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(email + ':' + password)
                }
            };

            festivalLoader.fetch_festival_api('/auth/signin', options)
                .then(response => {
                    window.location.href = 'list_show.html';
                    localStorage.setItem('access_token', response.access_token);
                    localStorage.setItem('refresh_token', response.refresh_token);
                })
                .catch(() => {
                    button.disabled = false;
                    // afficher l'erreur
                    error.innerHTML = '<p class="error">Erreur de connexion : les informations fournies ne nous on pas permis de vous authentifier</p>';
                    error.classList.add('active');
                });
        });
    }
}

export default new ConnexionForm();