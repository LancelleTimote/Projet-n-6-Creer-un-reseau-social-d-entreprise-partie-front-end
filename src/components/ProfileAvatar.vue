<template>
	<img :src="src || defaultAvatar" alt="Photo de profil"/>
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

</style>