import { defineStore } from 'pinia';

export const useSigninStore = defineStore({
    state: () => ({
        isConnected: false,
        user: null,
        errorMessage: null,
        token: null,
    }),
    actions: {
        async signin(username, password) {
            try {
                const baseUrlSignIn = '...'
                const base64Credentials = btoa(`${username}:${password}`)
                const response = await fetch(baseUrlSignIn, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${base64Credentials}`,
                    },
                })

                if (!response.ok) {
                    const data = await response.json()
                    throw new Error(data.message)
                }

                const data = await response.json()

                window.localStorage.setItem('username', data.user.username);
                window.localStorage.setItem('email', data.user.email);

                this.isConnected = true
                this.user = data.user
                this.token = data.token
                this.errorMessage = null
            } catch (error) {
                console.error('Error during authentication:', error.message)
                this.isConnected = false
                this.user = null
                this.errorMessage = 'An error occurred during authentication'
            }
        }
    }
});

export const useRegisterStore = defineStore({
    state: () => ({
        username: '',
        email: '',
        password: '',
    }),
    actions: {
        async register() {
            try {
                const baseUrlSignUp = '...'
                const base64Credentials = btoa(`${this.username}:${this.password}`)
                const formData = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                }

                const response = await fetch(baseUrlSignUp, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${base64Credentials}`,
                    },
                    body: JSON.stringify(formData),
                })

                if (!response.ok) {
                    const data = await response.json()
                    throw new Error(data.message)
                }

                const data = await response.json()
                console.log(data)
            } catch (error) {
                console.error('Error during registration:', error.message)
            }
        }
    }
});