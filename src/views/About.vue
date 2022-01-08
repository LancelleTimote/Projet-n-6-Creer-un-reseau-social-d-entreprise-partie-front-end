<template>
    <div class="container__vue">
        <Header/>      
        <main class="container__vue--about">
            <div class="container">
                <h1>À PROPOS DE GROUPOMANIA</h1>
                <h2>Notre histoire</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius molestiae cupiditate quae. Earum ullam itaque in doloremque <br>
                    eaque incidunt accusantium sequi pariatur blanditiis, aliquid, cum architecto voluptatum dolore unde?
                </p>
                <h2>Nos engagements</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius molestiae cupiditate quae. Earum ullam itaque in doloremque <br>
                    eaque incidunt accusantium sequi pariatur blanditiis, aliquid, cum architecto voluptatum dolore unde?
                </p>
                <h2>Nos collaborateurs</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius molestiae cupiditate quae. Earum ullam itaque in doloremque <br>
                    eaque incidunt accusantium sequi pariatur blanditiis, aliquid, cum architecto voluptatum dolore unde?
                </p>
                <h2>L'international</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius molestiae cupiditate quae. Earum ullam itaque in doloremque <br>
                    eaque incidunt accusantium sequi pariatur blanditiis, aliquid, cum architecto voluptatum dolore unde?
                </p>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'About',
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
    .container__vue--about {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 25px;
    }
    @media (max-width: 576px) {
        h1 {
            font-size: 25px;
        }
        h2 {
            font-size: 20px;
        }
        p {
            font-size: 10px;
        }
    }
</style>