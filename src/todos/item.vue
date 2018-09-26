<template>
    <div :class="['todo-checkbox', item.completed ? 'completed': '']" v-model="item.isCompleted">
        <input type="checkbox"
               v-model="item.completed" />
        <span>{{item.content}}</span>
        <span @click="deleteTodo(item.id)">
            删除
        </span>
    </div>
    
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        methods: {
            deleteTodo(id) {
                this.$emit('delTodo', id);
            }
        }
    }
</script>

<style lang="less" scoped>
    .todo-checkbox {
        padding: 15px;
        font-size: 30px;
        color: darkolivegreen;
        input {
            border: 1px solid red;
            border-radius: 5px;
            font-size: 20px;
        }
        &.completed {
            color: gray;
            span {
                text-decoration: line-through darkgray;
            }
        }
        span {
            display: inline-block;
            padding-left: 20px;
        }
    }
</style>