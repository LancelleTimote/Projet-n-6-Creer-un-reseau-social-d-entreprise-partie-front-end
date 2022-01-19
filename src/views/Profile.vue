<template>
    <div class="container__vue">
        <Header/>
        <main class="container__vue--profile">
            <h1>Bienvenue sur votre profil {{ user.firstName }} !</h1>
            <ProfileAvatar :src="user.profileAvatar"/>
            <input type="file" name="file" ref="fileUpload" @change="onFileSelected"  accept="image/*" id="file">
			<label for="file" class="animationZoomButton">
				Choisir une nouvelle image de profil
				<p class="file-name"></p>
			</label>
            <ul>
                <li>Nom : {{ user.lastName }}</li>
                <li>Prénom : {{ user.firstName }}</li>
                <li>Email : {{ user.email }}</li>
                <li>Compte crée le : {{ user.createdAt | moment("DD.MM.YYYY") }}</li>
                <li v-if="user.admin == false">Rôle : Utilisateur</li>
                <li v-else>Rôle : Modérateur</li>
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
		mounted : function () {
			const file = document.querySelector('#file');
			file.addEventListener('change', (e) => {
				const [file] = e.target.files;							//on obtient le fichier séléctionné
				const { name: fileName, size } = file;					//on obtient le nom et la taille du fichier
				const fileSize = (size / 1000).toFixed(2);				//on converti la taille de octet à ko
				const fileNameAndSize = `${fileName} - ${fileSize}KB`;	//défini le contenu du texte
				document.querySelector('.file-name').textContent = fileNameAndSize;
			});
		},
		methods: {
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
			//modification de l'image de profil
			onFileSelected(event) {
				this.profileAvatar = event.target.files[0]
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
			&--button--delete {
				margin: 25px 0;
			}
		}
	}
</style>