<template>
	<div class="panel panel-default">
		<div class="panel-heading">Task Blog</div>
		<div class="panel-body" id="teste">
			<!-- <div v-for="post in posts" id="posts">
				{{post.content | html 'posts'}}
			</div > -->
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

		created() {
			console.log('created')
			this.$http.get('https://public-api.wordpress.com/rest/v1.1/sites/publicvoidfilhow.wordpress.com/posts')
			.then(function (response) {
				this.posts = response.data.posts;
				console.log(response.data.posts);
				console.log('recebeu');
				this.$dispatch('updatePosts');
			}, function (error) {
				console.log('error');
				console.log(error);
			});
		},

		ready() {
			console.log('ready')
			// console.log(this.posts.length);
			// // console.log(this.posts[0].content);
			// this.posts.forEach(function (element) {
			// 	console.log("percorrendo");
			// 	console.log(element.id);
			// })
			// console.log('terminou');
		},

		events: {
			'updatePosts': function() {
				console.log("new posts")
				console.log(this.posts.length)
				this.posts.forEach(function (post) {
					console.log('post id'+post.ID);
					$('#teste').append(post.content);
				})
			}
		}
	}
</script>
