<template>
    <div class="container">
        <div class="card">
            <h2>{{ item.title }}</h2>
            <p>Description : {{ item.description }}</p>
            <p>Date de l'atelier : {{ item.date }}</p>
            <p>Nombre de place : {{ item.capacity }}</p>
            <button @click="participate()">Participer</button>
        </div>

        <div class="card">
            <h2>Liste des participants - {{users.length}} / {{ item.capacity}}</h2>
            <ul>
                <li v-for="user in users" :key="user.id">{{ user.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            item: {},
            users: [
            ]
        }
    },
    created() {
        const id = this.$route.params.id;
        this.fetchItem(id);
    },
    methods: {
        fetchItem(id) {
            axios.get(`http://localhost/api/ateliers/${id}`)
                .then(response => {
                    this.item = response.data.data;
                    this.users = response.data.data.users;
                })
                .catch(error => {
                    console.error('Error fetching item:', error);
                });
        },
        participate() {
            axios.get(`http://localhost/api/ateliers/${id}/participate`, {
                headers: {
                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMGJhY2U2ZmQ3YzQ4MzE2YTQ3ZGU1OTliNjJmOTgwNjJmYWM4ZGNlNjBlZjk4YWZlNWQ3OGY1Yjg1OGNkZGYzNGRkNDVlZmEzMGEwMWMwMTEiLCJpYXQiOjE3MDg2MzU1MzUuNjQ4NjA1LCJuYmYiOjE3MDg2MzU1MzUuNjQ4NjA4LCJleHAiOjE3NDAyNTc5MzUuNDM2NDE3LCJzdWIiOiIyMiIsInNjb3BlcyI6W119.sl9Y2-GeyC9TWbHxU-frNloOVvRiUiR5nwZqDiicTj_RKL-oDMiEJaIeRP9yxJti-_Y2MmH-hDz9YEoY_MyUwBP62p2sr78GZk6rsCpvjmS34vsMfefk-f3Txr2D0QRd0vARWD5rN-AEPePbT7sOCWksfRXmZPIfY1iQgTzu-Y6zVp_r45ltP1Ay00TIBwDKiT0gIw4mTGtDJ4F__nVQCySiHiPe2mfiwxTF3ChGczygpAI_5hEA3VwZhlBkMWu7QKZ4B8FNvkPQhGfERn8TD2dnyDr0Ze6EIq69pC71Tg2b5MZEzSUS4dqfm3AkurGUN9Lcragl-ENinumalth5WPInTi_UFdlncVEm-rPT94uaBBfWR0I3OUBrZB9jly84n-zvBOHtah8twxB6PQeQen7aKMrT6Vrble8mrfMMGumRvasoGLkJ39v8xKmp7frMXmTjA6iaPmCIFJ2x3q2OubXD1GXFikIA995UMJLtL5-tE9nQhnBNZsflPDSyui1i16KXPTHTVxyPPlRHr6X4W7uVL5q-t-BNkD3uUWAfH-Oj9jP1Ti_rVKLSs3FjbLYGCQEFzAR2ubXPGOz6HEKlhXVt-GahwbpvStQl2lMtDIrF_h-O1Tbuk0K5mlAbObEN7zmyeVhAbAaE_vN3q2_0cLJ4fd2yuKZcHzal40JIf_0`
                }
            })
                .then(response => {
                    if (localStorage.getItem('username') === null) {
                        this.$router.push('/connexion');
                    } else if (this.users.includes(localStorage.getItem('username'))) {
                        alert('Vous participez déjà à cet atelier');
                    } else if (this.users.length >= this.item.capacity) {
                        alert('Atelier complet');
                    } else {
                        this.users.push({ name: localStorage.getItem('username') });
                    }

                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100vh;
    padding: 20px;
}

.card {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #37A962;
    border-radius: 10px;
    box-shadow: 0 0 10px #37A962;
    width: 45%; /* Adjust this value as needed */

    img {
        object-fit: contain;
        height: auto;
    }

    h2 {
        text-transform: uppercase;
        text-align: left;
    }

    button {
        background-color: #37A962;
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        border: none;
        margin-top: 20px;
        cursor: pointer;
    }

    button:hover {
        background-color: #1F282F;
    }

    &:last-child {
        border: 1px solid #A43481;
        box-shadow: 0 0 10px #A43481;

        ul {
            list-style: none;
            padding: 0;

            li {
                margin-bottom: 5px;

            }
        }
    }
}
</style>