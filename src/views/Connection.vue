<template>
    <div class="container__vue">
        <Header/>
        
        <main class="main__inscription__connexion">
            <div class="container">
                <form class="main__inscription__connexion--form">
                    <h1>Identifiez-vous</h1>
                    <p>
                        <label for="mail">Email</label>
                        <input type="email" name="mail" id="mail" size="50" maxlength="50" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$" required />
                    </p>
                    <p>
                        <label for="pass">Mot de passe</label>
                        <input type="password" name="pass" id="pass" size="40" maxlength="40" required />
                    </p>
                    <div class="main__inscription__connexion--form--group">
                        <input class="main__inscription__connexion--form--group--button" type="submit" value="Se connecter" />
                    </div>
                </form>
                <p class="main__inscription__connexion--textend">Vous n'avez pas encore de compte ? <router-link to='/signup'>Créez un compte !</router-link></p>
            </div>
        </main>

        <Footer/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Connection',
    components: {
        Header,
        Footer,
    }
}
</script>

<style scoped lang="scss">
    .main__inscription__connexion, .main__inscription__connexion--form p, .main__inscription__connexion .container {
    display: flex;
    flex-direction: column;
    }

    .main__inscription__connexion {
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