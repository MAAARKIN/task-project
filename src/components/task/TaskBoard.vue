<template>
	<div class="panel panel-default">
		<div class="panel-heading">Task Board - Tasks cadastradas: {{quantidade}}</div>
		<div class="panel-body">
			<ul>
				<li v-for="task in tasks" track-by="$index">{{task}}</li>

				<div v-if="!tasks.length">No tasks</div>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tasks: []
			}
		},

		computed: {
			quantidade: function () {
				return this.tasks.length
			}
		},

		events: {
			'new-task': function (task) {
				console.log('broadcast recebida: '+task )
				this.tasks.push(task)
			}
		}
	}
</script>
