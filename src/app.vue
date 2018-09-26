<template>
	<div id="todos-container">
        <div class="cover"></div>
        <Header></Header>
        <todos/>
        <Footer></Footer>
	</div>
</template>

<script type="text/javascript">
    import Header from './todos/header.vue';
    import Footer from './todos/footer.jsx';
    import todos from './todos/todos.vue';
    let id = 0;
	 export default {
		data() {
			return {
			}
		},
         components: {
             Header,
             Footer,
             todos
         }
	}
</script>
<style lang="less" scoped>
	#todos-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        .cover {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: .7;
            z-index: -1;
            background-color: aliceblue;
        }
    }

</style>