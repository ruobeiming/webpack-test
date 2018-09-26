<template>
    <div class="todo-wrapper">
        <input type="text"
               autofocus="true"
               placeholder="接下去要做什么"
               @keyup.enter="addTodo"
        />
        <item
                v-for="todo in filterdTodos"
                :item="todo"
                @delTodo="delTodo"

        />
        <tabs :state="state"
              @stateChange="changeState"
        />
    </div>

</template>
<script>
    import item from './item.vue';
    import tabs from './tabs.vue';
    let id = 0;
    export default {

        data() {
            return {
                todos: [],
                state: 'all'
            }
        },
        methods: {
            addTodo(e) {
                this.todos.unshift({
                    id: id++,
                    content: e.target.value.trim(),
                    completed: false
                });
                e.target.value = '';
            },
            delTodo(id){
                this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
            },
            changeState(state) {
                console.log(state);
                this.state = state;
            }
        },
        computed: {
            filterdTodos() {
                if(this.state === 'all') {
                    return this.todos;
                }
                const isFilterCompleted = this.state === 'completed';

                return this.todos.filter(todo => todo.completed === isFilterCompleted)

            }
        },
        components: {
            item,
            tabs
        }
    }
</script>
<style lang="less" scoped>
    .todo-wrapper {
        margin: 20px;
        padding: 10px;
        box-sizing: border-box;
        background-color: white;
        box-shadow: 5px 5px 5px 5px darkgray;

        input {
            margin: 10px;
            padding: 20px;
            width: 90%;
            border: 0;
            font-size: 36px;
            &:focus {
                outline: none;
                caret-color: red;
            }
        }
    }
</style>