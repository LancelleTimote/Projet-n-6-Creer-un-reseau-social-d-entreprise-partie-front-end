<template>
    <div v-if="revele" class="container__delete">
        <div @click="displayDelete">
        </div>
        <h2>Attention vous allez supprimer votre compte !</h2>
        <p>Étes-vous sûre de vouloir supprimer votre compte ?<br>
        Attention une fois la suppression effectuée, aucun retour en arrière n'est possible.</p>
        <button @click="deleteAccount" class="container__delete--button--delete"><i class="fas fa-check-circle"></i> Oui je veux supprimer mon compte !</button>
        <button @click="displayDelete" class="container__delete--button--cancel"><i class="fas fa-times"></i> Annuler</button>
    </div>
</template>

<script>
    import axios from 'axios'
    import { Notyf } from 'notyf'
    import 'notyf/notyf.min.css'

    export default {
        name: 'DeleteAccount',
        props: ['revele', 'displayDelete'],
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
            deleteAccount() {
                const userId = localStorage.getItem('userId');
                axios.delete('http://localhost:3000/api/user/' + userId, {
                    headers: {
                        'Content-Type' : 'application/json',
                        'Authorization' : 'Bearer ' + localStorage.getItem('token')
                    }
                })
                .then(() => {
                    this.notyf.success('Votre compte a été supprimé avec succès !')
                    localStorage.clear();
                    this.$router.push('/');
                })
                .catch(error => {
                    const msgerror = error.response.data
                    this.notyf.error(msgerror.error)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .container__delete {
        background-color: rgba(255, 255, 255, 1);
        border: 5px solid rgba(39, 72, 128, 1);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40em;
        height: 17em;
        button {
            height: 40px;
            background-color: rgba(190, 209, 243, 1);
            border: 3px solid rgba(39, 72, 128, 1);;
            border-radius: 5px;
        }
        h2, i {
            color: rgba(39, 72, 128, 1);
        }
        p {
            color: rgba(107, 102, 102, 1);
            line-height: 25px;
            margin-bottom: 20px;
        }
        &--button--cancel {
            width: 200px;
        }
        &--button--delete {
            width: 250px;
            margin-bottom: 25px;
        }
    }
</style>