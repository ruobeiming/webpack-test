import '../style/footer.less';

export default {
    data() {
        return {
            author: 'Ruobeiming'
        }
    },
    render() {
        return(
            <div class="todo-footer">
                <span>Written By {this.author}</span>
            </div>
        )
    }
}