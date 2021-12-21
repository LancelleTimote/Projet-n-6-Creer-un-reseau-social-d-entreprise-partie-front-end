<template>
    <header>
        <div class="container">
            <router-link to="/" class="animation__link"><img src="../assets/logo_white_nav.png" alt="Petit logo de l'entreprise Groupomania" title="C'est un petit logo de l'entreprise Groupomania." /></router-link>
            <ul>
                <li>
                    <router-link to='/connection' class="animation__link">Connexion</router-link>
                </li>
                <li>
                    <router-link to='/signup' class="animation__link">Inscription</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>


<style scoped lang="scss">
    header {
        border-bottom: 5px solid rgba(39, 72, 128, 1);
        height: 75px;
        background-color: rgba(160, 160, 160, 1);
        font-size: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .container {
            display: flex;
            justify-content: space-between;
            ul {
                display: flex;
                li {
                    margin: 0 35px;
                }
            }
        }
        @media (max-width: 1440px) {
            .container {
                width: 100%;
            }
        }
    }
</style>