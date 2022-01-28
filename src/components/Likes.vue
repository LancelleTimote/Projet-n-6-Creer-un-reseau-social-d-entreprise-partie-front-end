<template>
    <button class="buttonLike"><i :id="post.id" @click="likePost()" aria-label="Aimer le message" class="fas fa-heart heartIcon"></i><span v-if="post.likes > 0" class="likeCount">{{ post.likes }}</span></button>
</template>

<script>
    import axios from 'axios'
    import { Notyf } from 'notyf'
    import 'notyf/notyf.min.css'

    export default {
        name: 'Likes',
        props:['post'],
        data(){
            return {
                userId: localStorage.getItem('userId'),
                notyf : new Notyf({
                    duration: 2000,
                    position: {
                        x: 'center',
                        y: 'bottom'
                    },
                    dismissible: true
                })
            }
        },
        mounted() {
            this.displayHeartColor();  
        },
        methods:{
            //aimer un message
            likePost() {
                const postId = this.post.id;
                const userId = this.userId;
                axios.get('http://localhost:3000/api/post/' + postId + '/like', {
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then(response => {
                    this.postLikes = response.data;                    
                    if(this.postLikes.length == 0) {
                        this.like = false  
                        axios.post('http://localhost:3000/api/post/' + postId + '/like', {
                            like: this.like,
                        },{
                            headers: {
                                'Content-Type' : 'application/json',
                                'Authorization': 'Bearer ' + localStorage.getItem('token')
                            }
                        })
                        .then(() => {
                            console.log("Votre j'aime a été ajouté avec succès !");
                            window.location.reload()
                        })
                        .catch(error => {
                            const msgerror = error.response.data
                            this.notyf.error(msgerror.error)
                        })
                    } else {                     
                        if(this.postLikes.find(x => x.userId == userId)) {
                            this.like = true     
                            axios.post('http://localhost:3000/api/post/' + postId + '/like', {
                                like: this.like,
                            },{
                                headers: {
                                    'Content-Type' : 'application/json',
                                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                                }
                            })
                            .then(() => {
                                console.log("Votre j'aime a été retiré avec succès !");
                                window.location.reload()
                            })
                            .catch(error => {
                                const msgerror = error.response.data
                                this.notyf.error(msgerror.error)
                            })
                        } else {
                            this.like = false
                            axios.post('http://localhost:3000/api/post/' + postId + '/like', {
                                like: this.like,
                            },{
                                headers: {
                                    'Content-Type' : 'application/json',
                                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                                }
                            })
                            .then(() => {
                                console.log("Votre j'aime a été ajouté avec succès !");
                                window.location.reload()
                            })
                            .catch(error => {
                                const msgerror = error.response.data
                                this.notyf.error(msgerror.error)
                            })
                        }
                    }
                })
                .catch(error => {
                    const msgerror = error.response.data
                    this.notyf.error(msgerror.error)
                })
            },
            //affichage d'un coeur vide ou plein en couleur en fonction de si l'utilisateur aime le message ou non
            displayHeartColor(){
                const postId = this.post.id;
                const userId = localStorage.getItem('userId');
                axios.get('http://localhost:3000/api/post/' + postId + '/like', {
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then(response => {
                    this.postLikes = response.data;
                                
                    if(this.postLikes.find(x => x.userId == userId)) {
                        document.getElementById(this.post.id).classList = "fas fa-heart heartIcon postLiked"; 
                    } else {  
                        document.getElementById(this.post.id).classList = "far fa-heart heartIcon"; 
                    }
                })
                .catch(error => {
                    const msgerror = error.response.data
                    this.notyf.error(msgerror.error)
                })
            }
        }
    }
</script>

<style lang="scss">
    .postLiked {
        color: rgba(227, 25, 51, 1);
    }
    .likeCount {
        margin-left: 10px;
    }
    .buttonLike {
        background-color: rgba(190, 209, 243, 1);
        border: none;
        border-radius: 5px;
        width: 120px;
        height: 35px;
    }
    .buttonLike:hover {
        border: 3px solid rgba(39, 72, 128, 1);
    }
</style>