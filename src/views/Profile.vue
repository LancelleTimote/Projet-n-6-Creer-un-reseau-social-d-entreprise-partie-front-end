<template>
    <div class="container__vue">
        <Header/>
        <main class="container__vue--profile">
            <h1>Bienvenue sur votre profil {{ user.firstName }} !</h1>
            <ProfileAvatar :src="user.profileAvatar"/>
			<input type="file" name="profileAvatar" @change="onFileSelected"  accept="image/*" id="profileAvatar">
			<label for="profileAvatar" class="animationZoomButton">
				Choisir une nouvelle image de profil
			</label>
			<img class="container__vue--profile--profileAvatarPreview" v-if="profileAvatarPreview" :src="profileAvatarPreview" id="preview" alt="Prévisualisation de l'image ajoutée au message"/>
            <ul>
                <li>Nom : {{ user.lastName }}</li>
                <li>Prénom : {{ user.firstName }}</li>
                <li>Email : {{ user.email }}</li>
                <li>Compte crée le : {{ user.createdAt | moment("DD.MM.YYYY à HH:mm") }}</li>
                <li v-if="user.admin === false">Rôle : Utilisateur</li>
                <li v-else>Rôle : Administrateur</li>
            </ul>
            <button @click="modifyProfile" class="animationZoomButton"><i class="fas fa-check-circle"></i> Enregister les modifications</button>
			<button v-on:click="displayDelete" class="container__vue--profile--button--delete animationZoomButton"><i class="far fa-trash-alt"></i> Supprimer le compte</button>
			<DeleteAccount v-bind:revele="revele" v-bind:displayDelete='displayDelete'/>
        </main>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import ProfileAvatar from '../components/ProfileAvatar.vue'
    import DeleteAccount from '../components/DeleteAccount.vue'

	import axios from 'axios'
    import { Notyf } from 'notyf'
    import 'notyf/notyf.min.css'

    export default {
        name: 'Profile',
        components: {
            Header,
            Footer,
            ProfileAvatar,
            DeleteAccount,
        },
        data(){
			return {
				revele: false,
				user: "",
				profileAvatar: null,
				profileAvatarPreview: null,
			}
		},
		created() {
			this.displayProfile();  
			this.notyf = new Notyf({
				duration: 3000,
				position: {
					x: 'center',
					y: 'bottom'
				}
			});
		},
		methods: {
			//modification de l'image de profil
            onFileSelected(event) {
                this.profileAvatar = event.target.files[0];
                this.profileAvatarPreview = URL.createObjectURL(this.profileAvatar);
            },
			//affichage des informations du compte
			displayProfile() {
				const userId = localStorage.getItem('userId');
				axios.get('http://localhost:3000/api/user/' + userId, {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token')
					}
				})
				.then(response => {
					this.user = response.data;
					localStorage.setItem('imageProfile', response.data.profileAvatar);
				})
				.catch(error => {
					const msgerror = error.response.data
					this.notyf.error(msgerror.error)
				})
			},
			modifyProfile() {
				const userId = localStorage.getItem('userId');
				const formData = new FormData();
				formData.append("image", this.profileAvatar);
				axios.put('http://localhost:3000/api/user/' + userId, formData, {
					headers: {
						'Authorization': 'Bearer ' + localStorage.getItem('token'),
						'Content-Type': 'multipart/form-data'
					}
				})
				.then(() => {
					window.location.reload() 
				})
				.catch(error => {
					const msgerror = error.response.data
					this.notyf.error(msgerror.error)
				})
			},
			//affichage du message pour la suppression du compte
			displayDelete() {
				this.revele = !this.revele
			},
		}
    }
</script>

<style scoped lang="scss">
	h1, li {
		color: rgba(255, 255, 255, 1);
	}
	i {
		color: rgba(39, 72, 128, 1);
	}
	p {
		margin-top: 5px;
	}
	li {
		line-height: 25px;
	}
	button {
		width: 200px;
		height: 40px;
		background-color: rgba(190, 209, 243, 1);
		border: none;
		border-radius: 5px;
	}
	input {
		display: none;
	}
	label {
		font-size: 14px;
		margin-top: 10px;
		cursor: pointer;
		padding: 10px;
		width: 200px;
		background-color: rgba(190, 209, 243, 1);
		border-radius: 5px;
	}
	.container__vue {
		&--profile {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			&--profileAvatarPreview {
				object-fit: cover;
				width: 10em;
				height: 10em;
				border-radius: 100%;
				margin-top: 25px;
			}
			&--button--delete {
				margin: 25px 0;
			}
		}
	}
</style>