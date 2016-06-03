<template>
	<div id="app">
		<div class="container">
			<div class="center">
				<task-form></task-form>
				<task-board></task-board>
			</div>
		</div>
	</div>
</template>

<script>
	import TaskForm from './components/task/TaskForm.vue'
	import TaskBoard from './components/task/TaskBoard.vue'

	export default {
		components: {
			TaskForm,
			TaskBoard
		}
	}
</script>

<style>
	body {
		font-family: Helvetica, sans-serif;
	}

	.center {
		width: 60%;
		margin: 0 auto;
	}
</style>
