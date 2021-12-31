<template>
    <header>
        <nav class="container">
            <router-link to="/post" class="animation__link"><img src="../assets/logo_white_nav.png" alt="Petit logo de l'entreprise Groupomania" title="C'est un petit logo de l'entreprise Groupomania." /></router-link>
            <ul>
                <li>
                    <router-link to='/post' class="animation__link">Accueil</router-link>
                </li>
                <li>
                    <router-link to='/profile' class="animation__link">Profil</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderConnect',
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