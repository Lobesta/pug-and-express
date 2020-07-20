<template lang="pug">
	#app
		.header
			h1 Hello World, Vue and Express
		router-view.page
</template>

<style lang="scss" scoped>
$color: #CCFF33;
.header{
	border: 1px solid $color;
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>
