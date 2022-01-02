<template>
    <div class="container__vue">
        <Header/>        
        <main class="main__index">
            <div class="container">
                <section>
                    <p><img src="../assets/logo_white_home.png" alt="Logo de l'entreprise Groupomania" title="C'est un logo de l'entreprise Groupomania."/></p>
                    <p>Bienvenue sur votre réseau social d'entreprise</p>
                    <ul>
                        <li>
                            <router-link to='/login' class="animation__link">Connexion</router-link>
                        </li>
                        <li>
                            <router-link to='/signup' class="animation__link">Inscription</router-link>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Footer,
    }
}
</script>

<style scoped lang="scss">
    li {
        margin-bottom: 20px;
    }
    .main__index {
        font-size: 30px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 576px) {
        img {
            height: 150px;
        }
        .main__index {
            font-size: 25px;
        }
    }
</style>