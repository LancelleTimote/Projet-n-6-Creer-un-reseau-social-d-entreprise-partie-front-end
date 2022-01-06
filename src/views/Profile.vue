<template>
    <div class="container__vue">
        <HeaderConnect/>
        <main class="container__vue--profil">
            <h1>Bienvenue sur votre profil {{ user.lastName }} {{ user.firstName }} !</h1>
            <ProfileAvatar :src="user.profileAvatar"/>
            <button @click="uploadFile" type="button" class="container__vue--profil--button--edit--avatar"><i class="fas fa-edit"></i> Modifier la photo de profil</button>
            <input type="file" ref="fileUpload" @change="onFileSelected"  accept="image/*" id="file-input" aria-label="Modifier la photo de profil">
            <ul>
                <li>Nom : {{ user.lastName }}</li>
                <li>Prénom : {{ user.firstName }}</li>
                <li>Email : {{ user.email }}</li>
                <li>Compte crée le : {{ user.createdAt }}</li>
                <li v-if="user.admin == false">Rôle : Utilisateur</li>
                <li v-else>Rôle : Modérateur</li>
            </ul>
            <button @click="modifyProfile"><i class="fas fa-check-circle"></i> Enregister les modifications</button>
			<button v-on:click="displayDelete" class="container__vue--profil--button--delete"><i class="far fa-trash-alt"></i> Supprimer le compte</button>
			<DeleteAccount v-bind:revele="revele" v-bind:displayDelete='displayDelete'/>
        </main>
        <Footer/>
    </div>
</template>

<script>
    import HeaderConnect from '../components/HeaderConnect.vue'
    import Footer from '../components/Footer.vue'
    import axios from 'axios'
    import { Notyf } from 'notyf'
    import 'notyf/notyf.min.css'
    import ProfileAvatar from '../components/ProfileAvatar.vue'
    import DeleteAccount from '../components/DeleteAccount.vue'

    export default {
        name: 'Profile',
        components: {
            HeaderConnect,
            Footer,
            ProfileAvatar,
            DeleteAccount,
        },
        data(){
			return {
			revele: false,
			user: "",
			profileAvatar: null,
			}
		},
		created() {
			this.displayProfile();  
			this.notyf = new Notyf({
			duration: 3000,
			position: {
				x: 'center',
				y: 'top'
			}
			}); 
		},
		methods: {
			// Permet d'afficher les informations de profil
			displayProfile() {
				const userId = localStorage.getItem('userId');

				axios.get('http://localhost:3000/api/user/' + userId, {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token')
					}
				})
				.then(response => {
					this.user = response.data;
					localStorage.setItem('profileAvatar', response.data.profileAvatar);
				})
				.catch(error => {
					const msgerror = error.response.data
					this.notyf.error(msgerror.error)
				})
			},

			// Permet de modifier la photo de profil
			uploadFile () {
				this.$refs.fileUpload.click()
			},
			onFileSelected(event) {
				this.imageProfile = event.target.files[0]
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
					this.notyf.success('Votre profil a bien été modifié !')
					this.displayProfile();
				})
				.catch(error => {
					const msgerror = error.response.data
					this.notyf.error(msgerror.error)
				})
			},

			// Permet d'afficher la boîte modale pour la suppression du compte
			displayDelete() {
				this.revele = !this.revele
			}
		}
    }
</script>

<style scoped lang="scss">
	.container__vue--profil {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		h1, li {
			color: rgba(255, 255, 255, 1);
		}
		i {
			color: rgba(39, 72, 128, 1);
		}
		li {
			line-height: 25px;
		}
		button {
			width: 200px;
			height: 40px;
			background-color: rgba(190, 209, 243, 1);
			border: 3px solid rgba(39, 72, 128, 1);
			border-radius: 5px;
		}
		&--button--edit--avatar {
			margin: 15px 0;
		}
		&--button--delete {
			margin: 25px 0;
		}
	}
</style>