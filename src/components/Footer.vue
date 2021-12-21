<template>
    <footer>
        <div class="container">
            <ul>
                <li>
                    <a href="a_propos.html" class="animation__link">À propos</a>
                </li>
                <li>
                    <router-link to='/legalnotice' class="animation__link">Mentions légales</router-link>
                </li>
                <li>
                    <a href="support.html" class="animation__link">Support</a>
                </li>
            </ul>
        </div>
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
        @media (max-width: 1440px) {
            .container {
                width: 100%;
            }
        }
    }
</style>