<template>
    <div class="container__vue">
        <Header/>       
        <main class="container__vue--signup">
            <div class="container">
                <form @submit.prevent="signup" class="container__vue--signup--form">
                    <h1>Créer un compte</h1>
                    <div class="container__vue--signup--form--field">
                        <label for="lastName">Nom<span class="container__vue--signup--form--field--asterisk">*</span></label>
                        <input type="text" v-model="lastName" name="lastName" id="lastName" size="50" maxlength="100" required />
                    </div>
                    <div class="container__vue--signup--form--field">
                        <label for="firstName">Prénom<span class="container__vue--signup--form--field--asterisk">*</span></label>
                        <input type="text" v-model="firstName" name="firstName" id="firstName" size="50" maxlength="100" required />
                    </div>
                    <div class="container__vue--signup--form--field">
                        <label for="mail">Email<span class="container__vue--signup--form--field--asterisk">*</span></label>
                        <input type="email" v-model="email" name="mail" id="mail" size="100" maxlength="255" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,255}$" required />
                    </div>
                    <div class="container__vue--signup--form--field">
                        <label for="password">Mot de passe<span class="container__vue--signup--form--field--asterisk">*</span></label>
                        <input type="password" v-model="password" name="password" id="password" size="30" maxlength="30" required :class="{ 'is-invalid': submitted && $v.password.$error }" />
                        <div v-if="submitted && $v.password.$error" class="invalid-feedback">
                            <span v-if="!$v.password.required">Un mot de passe est requis.</span>
                            <span v-if="!$v.password.minLength">Le mot de passe doit comporter entre 8 et 30 caractères, dont au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.</span>
                        </div>
                    </div>
                    <div class="container__vue--signup--form--field">
                        <label for="confirmPassword">Confirmez le mot de passe<span class="container__vue--signup--form--field--asterisk">*</span></label>
                        <input type="password" name="confirmPassword" id="confirmPassword" size="30" maxlength="30" required :class="{ 'is-invalid': submitted && $v.confirmPassword.$error }" />
                        <div v-if="submitted && $v.confirmPassword.$error" class="invalid-feedback">
                            <span v-if="!$v.confirmPassword.required">Vous devez confirmer votre mot de passe.</span>
                            <span v-else-if="!$v.confirmPassword.sameAsPassword">La confirmation du mot de passe doit être identique au mot de passe.</span>
                        </div>
                    </div>
                    <div class="container__vue--signup--form--group">
                        <button class="container__vue--signup--form--group--button animationZoomButton" type="submit"><i class="fas fa-check-circle"></i> S'inscrire</button>
                        <button class="container__vue--signup--form--group--button animationZoomButton" type="reset"><i class="fas fa-times-circle"></i> Annuler</button>
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
    import { required, minLength, sameAs } from "vuelidate/lib/validators";

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
                confirmPassword: "",
                submitted: false
            };
        },
        validations: {
            password: { required, minLength: minLength(8) },
            confirmPassword: { required, sameAsPassword: sameAs('password') }
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
                this.submitted = true;
                //stop ici si le formulaire est invalide
                this.$v.$touch();
                if (this.$v.$invalid) {
                    axios.post('http://localhost:3000/api/auth/signup', {
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
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    button {
        width: 150px;
        height: 40px;
        margin: 0 20px 20px 20px;
        background-color: rgba(190, 209, 243, 1);
        border: none;
        border-radius: 5px;
    }
    .container__vue--signup, .container__vue--signup--form p, .container__vue--signup .container {
        display: flex;
        flex-direction: column;
    }
    .container__vue {
        &--signup {
            justify-content: center;
            align-items: center;
            .container {
                align-items: center;
            }
            .invalid-feedback {
                margin-top: 10px;
            }
            &--textend {
                margin: 20px 0;
            }
            &--form {
                margin-top: 20px;
                width: 500px;
                background-color: rgba(255, 255, 255, 1);
                border: 5px solid rgba(39, 72, 128, 1);
                h1, i {
                    color: rgba(39, 72, 128, 1);
                }
                h1 {
                    text-align: center;
                    margin-bottom: 60px;
                }
                &--field {
                    display: flex;
                    flex-direction: column;
                    color: rgba(107, 102, 102, 1);
                    margin: 20px;
                    input {
                        border: none;
                        border-bottom: 2px solid rgba(39, 72, 128, 1);
                    }
                    label {
                        margin-bottom: 15px;
                    }
                    &--asterisk, .invalid-feedback {
                        color: rgba(255, 66, 66, 1);
                    }
                }
                &--group {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
            }
        }
    }
    @media (max-width: 576px) {
        .container__vue--signup--form {
            width: 275px;
        }
        .container__vue--signup--textend {
            font-size: 12px;
        }
    }
</style>