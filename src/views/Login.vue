<template>
    <div class="container__vue">
        <Header/>       
        <main class="container__vue--login">
            <div class="container">
                <form @submit.prevent="login" class="container__vue--login--form">
                    <h1>Identifiez-vous</h1>
                    <p>
                        <label for="mail">Email</label>
                        <input type="email" v-model="email" name="mail" id="mail" size="100" maxlength="255" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,255}$" required />
                    </p>
                    <p>
                        <label for="password">Mot de passe</label>
                        <input type="password" v-model="password" name="password" id="password" size="40" maxlength="40" required />
                    </p>
                    <div class="container__vue--login--form--group">
                        <input class="container__vue--login--form--group--button" type="submit" value="Se connecter" />
                    </div>
                </form>
                <p class="container__vue--login--textend">Vous n'avez pas encore de compte ? <router-link to='/signup'>Créez un compte !</router-link></p>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import axios from 'axios'
    import { Notyf } from 'notyf'
    import 'notyf/notyf.min.css'

    export default {
        name: 'Login',
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                email: '',
                password: '',
            }
        },
        created() {
            this.notyf = new Notyf({
                duration: 3000,
                position: {
                    x: 'center',
                    y: 'bottom'
                }
            });
        },
        methods: {
            // Permet de se connecter et de recharger la page sans que l'utilisateur soit déconnecté
            login() {
                axios.post('http://localhost:3000/api/user/login', {
                    email: this.email,
                    password: this.password,
                })
                .then(response => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('userId', response.data.userId);
                    localStorage.setItem('lastName', response.data.lastName);
                    localStorage.setItem('firstName', response.data.firstName);
                    localStorage.setItem('isAdmin', response.data.isAdmin);
                    localStorage.setItem('imageProfile', response.data.imageProfile);
                    this.$router.push('post');
                })
                .catch(error => {
                    const msgerror = error.response.data
                    this.notyf.error(msgerror.error)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .container__vue--login, .container__vue--login--form p, .container__vue--login .container {
    display: flex;
    flex-direction: column;
    }

    .container__vue--login {
        justify-content: center;
        align-items: center;
        .container {
            align-items: center;
        }
        &--textend {
            margin-top: 20px;
        }
        &--form {
            width: 500px;
            background-color: rgba(255, 255, 255, 1);;
            border: 5px solid rgba(39, 72, 128, 1);
            h1 {
                color: rgba(39, 72, 128, 1);
                text-align: center;
                margin-bottom: 60px;
            }
            p {
                color: rgba(107, 102, 102, 1);
                margin: 20px;
                input {
                    border: none;
                    border-bottom: 2px solid rgba(39, 72, 128, 1);
                }
                label {
                    margin-bottom: 15px;
                }
            }
            &--asterisk {
                color: rgba(255, 66, 66, 1);
            }
            &--group {
                display: flex;
                justify-content: center;
                &--button {
                    width: 150px;
                    height: 40px;
                    margin: 0 20px 20px 20px;
                    background-color: rgba(190, 209, 243, 1);
                    border: 3px solid rgba(39, 72, 128, 1);;
                    border-radius: 5px;
                }
            }
        }
    }
</style>