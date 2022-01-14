<template>
	<img :src="src || defaultAvatar" class="profileAvatar" alt="Photo de profil"/>
</template>


<script>
	export default {
		name: 'ProfileAvatar',
		props: ['src'],
		data() {
			return {
				defaultAvatar: require("../assets/profile_avatar.png")
			}
		}
	}
</script>


<style lang="scss">
	.profileAvatar {
		object-fit: cover;
		width: 10em;
		height: 10em;
		border-radius: 100%;
		margin-bottom: 10px;
	}
</style>