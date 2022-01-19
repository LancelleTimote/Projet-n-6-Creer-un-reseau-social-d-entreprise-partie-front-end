<template>
    <div class="container__vue">
        <Header/>
        <main class="container__vue--post">
            <form @submit.prevent="createPost" aria-label="Nouveau message" class="container__vue--post--newPost">
                <h2>Quoi de neuf, {{ firstName }} ?</h2>
                <textarea v-model="content" name="message" id="message" placeholder="Écrivez quelque chose..." aria-label="Rédiger un nouveau message"/>     
                <div id="preview" style="display:block">
                    <img v-if="imagePreview" :src="imagePreview" id="preview" style="display:block" alt="Prévisualisation de l'image ajoutée au message"/>
                </div>        
                <div class="container__vue--post--newPost--buttonEnd">
                    <input type="file" name="file" ref="fileUpload" @change="onFileSelected"  accept="image/*" id="file">
                    <label for="file">
                        Choisir une image
                        <p class="file-name"></p>
                    </label>
                    <button type="submit" aria-label="Publier le message">Publier</button>
                </div> 
            </form>

            <h1>Dernières publications</h1>

        </main>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'

    import axios from 'axios'
    import { Notyf } from 'notyf'
    import 'notyf/notyf.min.css'

    export default {
        name: 'Post',
        components: {
            Header,
            Footer,
        },
        data() {
            return {
                firstName: localStorage.getItem('firstName'),
                imagePost: '',
                imagePreview: null,
                content: '',
            }
        },
        created() {
            this.notyf = new Notyf({
                duration: 3000,
                position: {
                    x: 'center',
                    y: 'bottom'
                }
            });
        },  
        methods: {
            //création d'un nouveau message
            onFileSelected(event) {
                this.imagePost = event.target.files[0];
                this.imagePreview = URL.createObjectURL(this.imagePost);
            },      
            createPost() {
                const formData = new FormData();
                formData.append("content", this.content);
                formData.append("image", this.imagePost);

                axios.post('http://localhost:3000/api/post', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then(() => {
                    window.location.reload()
                })
                .catch(error => {
                    const msgerror = error.response.data;
                    this.notyf.error(msgerror.error)
                    
                })
            },
        }
    }

</script>

<style scoped lang="scss">
    h1 {
        color: rgba(255, 255, 255, 1);
    }
    .container__vue {
        &--post {
            display: flex;
            flex-direction: column;
            align-items: center;
            &--newPost {
                padding: 25px;
                margin-top: 20px;
                width: 40em;
                height: 12.5em;
                border: 3px solid rgba(39, 72, 128, 1);
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                background-color: rgba(255, 255, 255, 1);
                h2 {
                    margin: 0 0 15px 0;
                    color: rgba(39, 72, 128, 1);
                }
                textarea {
                    resize: none;
                    min-height: 7em;
                    min-width: 45em;
                    border: 3px solid rgba(39, 72, 128, 1);
                    border-radius: 5px;
                }
                &--buttonEnd {
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-between;
                    input {
                        display: none;
                    }
                    label:hover, button:hover {
                        border: 3px solid rgba(39, 72, 128, 1);
                    }
                    label {
                        font-size: 14px;
                        cursor: pointer;
                        padding: 10px;
                        width: 115px;
                        background-color: rgba(190, 209, 243, 1);
                        border-radius: 5px;
                    }
                    button {
                        width: 100px;
                        height: 40px;
                        background-color: rgba(190, 209, 243, 1);
                        border: none;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
</style>