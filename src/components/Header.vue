<template>
    <header>
        <div v-if="token == null" class="container">
            <router-link to="/" class="animation__link"><img src="../assets/logo_white_nav.png" alt="Petit logo de l'entreprise Groupomania" title="C'est un petit logo de l'entreprise Groupomania." /></router-link>
            <nav>
                <ul>
                    <li>
                        <router-link to='/login' class="animation__link">Connexion</router-link>
                    </li>
                    <li>
                        <router-link to='/signup' class="animation__link">Inscription</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div v-else class="container">
            <router-link to="/post" class="animation__link"><img src="../assets/logo_white_nav.png" alt="Petit logo de l'entreprise Groupomania" title="C'est un petit logo de l'entreprise Groupomania." /></router-link>
            <nav>
                <ul>
                    <li>
                        <router-link to='/post' class="animation__link"><i class="fas fa-home"></i> Accueil</router-link>
                    </li>
                    <li>
                        <router-link to='/profile' class="animation__link"><i class="fas fa-user"></i> Profil</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                token: localStorage.getItem('token')
            }
        },
    }
</script>


<style scoped lang="scss">
    header {
        border-bottom: 5px solid rgba(39, 72, 128, 1);
        background-color: rgba(160, 160, 160, 1);
        min-height: 75px;
        font-size: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        ul {
            display: flex;
        }
        li {
            margin: 0 35px;
        }
        .container {
            display: flex;
            justify-content: space-between;
        }
        @media (max-width: 1440px) {
            .container {
                width: 100%;
            }
        }
        @media (max-width: 576px) {
            ul {
                margin: 0;
                flex-direction: column;
            }
            li {
                margin: 0 0 10px 0;
            }
            .container {
                justify-content: center;
                flex-direction: column;
                text-align: center;
            }
        }
    }
</style>