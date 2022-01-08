<template>
    <div class="container__vue">
        <Header/>     
        <main class="container__vue--support">
            <div class="container">
                <img src="../assets/support.png" alt="Image support" title="C'est une image montrant une personne avec un casque, entouré de logos en lien avec le support." />
                <h1>En cas de problème, contactez le support via :</h1>
                <ul>
                    <li>Email : support@groupomania.fr</li>
                    <li>Téléphone : 01 02 03 04 05</li>
                </ul>
                <h2>Le support est disponible aux jours et horaires suivantes :</h2>
                <ul>
                    <li>Lundi : 8h - 12h / 13h - 17h</li>
                    <li>Mardi : 8h - 12h / 13h - 17h</li>
                    <li>Mercredi : 8h - 12h / 13h - 17h</li>
                    <li>Jeudi : 8h - 12h / 13h - 17h</li>
                    <li>Vendredi : 8h - 12h / 13h - 17h</li>
                </ul>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'Support',
        components: {
            Header,
            Footer,
        },
    }
</script>

<style scoped lang="scss">
    h1, h2, li {
        color: rgba(255, 255, 255, 1);
    }
    li {
        margin-bottom: 20px;
    }
    h2 {
        font-size: 2em;
        margin-top: 50px;
    }
    .container__vue--support {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 25px;
    }
    @media (max-width: 576px) {
        h1, h2 {
            font-size: 25px;
        }
        li {
            font-size: 10px;
        }
    }
</style>