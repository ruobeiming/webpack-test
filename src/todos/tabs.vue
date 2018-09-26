<template>
    <div class="todo-tabs">
        <div>
            2 items left
        </div>
        <div>
            <div :class="[state === item ? 'active': '']"
                 v-for="item in states"
            @click="chooseState(item)">
                {{item}}
            </div>
        </div>
        <div>
            clear completed
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabs",
        props: {
            state: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                states: ['all', 'active', 'completed']
            }
        },
        methods: {
            chooseState(state) {
                this.$emit('stateChange', state);
            }
        }
    }
</script>

<style lang="less" scoped>
    .todo-tabs {
        display: flex;
        width: 100%;
        > div {
            flex: 1;
            &:nth-of-type(2) {
                display: flex;
                div {
                    margin: 0 10px;
                }
                .active {
                    padding: 0 10px;
                    border: 1px solid darkred;
                }
            }
        }
    }
</style>