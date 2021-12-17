<template>
    <div class="home">
        <header>
            <div class="container">
                <a href="index.html" class="animation__link"><img src="../assets/logo_white_nav.png" alt="Petit logo de l'entreprise Groupomania" title="C'est un petit logo de l'entreprise Groupomania." /></a>
                <ul>
                    <li>
                        <a href="connexion.html" class="animation__link">Connexion</a>
                    </li>
                    <li>
                        <a href="inscription.html" class="animation__link">Inscription</a>
                    </li>
                </ul>
            </div>
        </header>
        <main class="main__index">
            <div class="container">
                <section>
                    <p><img src="../assets/logo_white_home.png" alt="Logo de l'entreprise Groupomania" title="C'est un logo de l'entreprise Groupomania."/></p>
                    <p>Bienvenue sur votre réseau social d'entreprise</p>
                    <ul>
                        <li>
                            <a href="connexion.html" class="animation__link">Connexion</a>
                        </li>
                        <li>
                            <a href="inscription.html" class="animation__link">Inscription</a>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
        <footer>
            <div class="container">
                <ul>
                    <li>
                        <a href="a_propos.html" class="animation__link">À propos</a>
                    </li>
                    <li>
                        <a href="mentions_legales.html" class="animation__link">Mentions légales</a>
                    </li>
                    <li>
                        <a href="support.html" class="animation__link">Support</a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script>


export default {

}
</script>

<style scoped lang="scss">
    //home.scss
    .home {
        display: flex;
        flex-direction: column;
        min-height:100vh;
    }
    //header.scss
    header {
        border-bottom: 5px solid rgba(39, 72, 128, 1);
        height: 75px;
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
    }
    //footer.scss
    footer {
        border-top: 5px solid rgba(39, 72, 128, 1);
        position: sticky;
        bottom: 0;
        height: auto;
        .container {
            display: flex;
            justify-content: center;
            ul {
                display: flex;
                li {
                    margin: 10px 35px;
                }
            }
        }
    }
    //header_footer.scss
    header, footer {
        background-color: rgba(160, 160, 160, 1);
        font-size: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 1440px) {
            .container {
                width: 100%;
            }
        }
    }
    //index.scss
    .main__index {
        font-size: 30px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        li {
            margin-bottom: 20px;
        }
    }
</style>