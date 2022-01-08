<template>
    <div class="container__vue">
        <Header/>
        <main class="container__vue--post">
            <div class="container__vue--post--newPost">
                <form @submit.prevent="createPost" aria-label="Nouveau message">
                    <h2>Quoi de neuf ?</h2>
                    <textarea v-model="content" class="newPost__content__text" name="message" id="message" placeholder="Écrivez quelque chose..." aria-label="Rédiger un nouveau message"/>
                </form>
                <h1>Dernières publications</h1>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    // import axios from 'axios'
    // import { Notyf } from 'notyf'
    // import 'notyf/notyf.min.css'

    export default {
        name: 'Post',
        components: {
            Header,
            Footer,
        }
    }

</script>

<style scoped lang="scss">

</style>