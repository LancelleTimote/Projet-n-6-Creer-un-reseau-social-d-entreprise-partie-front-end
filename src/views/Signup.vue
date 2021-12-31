<template>
    <div class="container__vue">
        <Header/>       
        <main class="container__vue--signup">
            <div class="container">
                <form @submit.prevent="signup" class="container__vue--signup--form">
                    <h1>Créer un compte</h1>
                    <p>
                        <label for="lastName">Nom<span class="container__vue--signup--form--asterisk">*</span></label>
                        <input type="text" v-model="lastName" name="lastName" id="lastName" size="50" maxlength="100" required />
                    </p>
                    <p>
                        <label for="firstName">Prénom<span class="container__vue--signup--form--asterisk">*</span></label>
                        <input type="text" v-model="firstName" name="firstName" id="firstName" size="50" maxlength="100" required />
                    </p>
                    <p>
                        <label for="mail">Email<span class="container__vue--signup--form--asterisk">*</span></label>
                        <input type="email" v-model="email" name="mail" id="mail" size="100" maxlength="255" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$" required />
                    </p>
                    <p>
                        <label for="password">Mot de passe<span class="container__vue--signup--form--asterisk">*</span></label>
                        <input type="password" v-model="password" name="password" id="password" size="30" maxlength="30" required />
                    </p>
                    <!-- <p>
                        <label for="confirm_password">Confirmer le mot de passe<span class="container__vue--signup--form--asterisk">*</span></label>
                        <input type="password" name="confirm_password" id="confirm_password" size="30" maxlength="30" required />
                    </p> -->
                    <div class="container__vue--signup--form--group">
                        <input class="container__vue--signup--form--group--button" type="submit" value="S'inscrire" />
                        <input class="container__vue--signup--form--group--button" type="reset" value="Remise à zéro" />
                    </div>
                </form>
                <p class="container__vue--signup--textend">Vous avez déjà un compte ? <router-link to='/login'>Identifiez-vous !</router-link></p>
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
        name: 'Signup',
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                lastName: '',
                firstName: '',
                email: '',
                password: '',
            }
        },
        created () {
            this.notyf = new Notyf({
                duration: 4000,
                position: {
                    x: 'center',
                    y: 'bottom'
                }
            });
        },
        methods: {
            signup() {
                axios.post('http://localhost:3000/api/user/signup', {
                    lastName: this.lastName,
                    firstName: this.firstName,
                    email: this.email,
                    password: this.password,
                })
                .then(() => {
                    this.notyf.success('Votre compte a été créé avec succès !')
                    this.$router.push('/');
                })
                .catch(error => {
                    const msgerror = error.response.data
                    this.notyf.error(msgerror.error)
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    .container__vue--signup, .container__vue--signup--form p, .container__vue--signup .container {
    display: flex;
    flex-direction: column;
    }

    .container__vue--signup {
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