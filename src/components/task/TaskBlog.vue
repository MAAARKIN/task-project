<template>
	<div class="panel panel-default">
		<div class="panel-heading">Task Blog</div>
		<div class="panel-body">
			<div v-for="post in posts">
				{{post.content | html}}
			</div >
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				posts: []
			}
		},

		ready() {
			// this.$http.get('https://public-api.wordpress.com/rest/v1.1/sites/publicvoidfilhow.wordpress.com/posts')
			// .then(function (response) {
			// 	// this.posts = $.parseHTML(response.data.posts);
			// 	this.posts = response.data.posts
			// 	console.log(response.data.posts);
			// }, function (error) {
			// 	console.log(error);
			// });
			let post = {
				content: '<h1>Teste</h1><br>mensagem'
			};
			this.posts.push(post);
		}
	}
</script>
