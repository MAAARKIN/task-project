<template>
	<h1>Todo List</h1>
	<form @submit.prevent="eventMethod(task)">
		<div class="row">
			<div class="col-lg-12">
				<div class="input-group form-group">
					<span class="input-group-btn">
						<button class="btn btn-default" type="submit" >
							Add
						</button>
					</span>
					<input type="text" class="form-control" v-model="task" placeholder="Write a new task...">
				</div>
			</div>
		</div>
	</form>
</template>

<script>

	export default {
		data() {
			return {
				task: ''
			}
		},

		methods: {
			eventMethod(task){
				console.log('Adding a new task called: ' + task);
				this.$root.$broadcast('new-task', this.task);
				this.task = '';

			},
		},

        // created() {
        // 	console.log('created');
        // },

        ready() {
        	console.log('ready');
        	
        	
        	console.log('ready finish');
        }


    };
</script>