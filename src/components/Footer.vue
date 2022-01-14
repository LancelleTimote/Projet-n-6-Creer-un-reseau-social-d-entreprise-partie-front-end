<template>
    <footer>
        <nav class="container">
            <ul>
                <li>
                    <router-link to='/about' class="animation__zoom">À propos</router-link>
                </li>
                <li>
                    <router-link to='/legalnotice' class="animation__zoom">Mentions légales</router-link>
                </li>
                <li>
                    <router-link to='/support' class="animation__zoom">Support</router-link>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>


<style scoped lang="scss">
    footer {
        border-top: 5px solid rgba(39, 72, 128, 1);
        position: sticky;
        bottom: 0;
        height: auto;
        background-color: rgba(160, 160, 160, 1);
        font-size: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        ul {
            display: flex;
        }
        li {
            margin: 10px 35px;
        }
        .container {
            display: flex;
            justify-content: center;
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
            .container {
                justify-content: center;
                flex-direction: column;
                text-align: center;
            }
        }
    }
</style>