class loader {

    fetch_festival_api(url, options){
        return fetch('https://backend.crazycharlyday.kiwigdc.fr/' + url, options)
            .then(response => {
                if (response.ok) return response.json();
                return Promise.reject(new Error(response.statusText));
            });
    }
}

export default new loader();