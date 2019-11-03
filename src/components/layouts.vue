<template>
    <div>

        <form class="todo-form">
        <input type="text" v-model="todo" placeholder="Enter new ToDo item">
        <br/>
        <input type="button" @click="Addtask()" value="Add Task">
    </form>

    
    </div>
</template>
<script>
export default {
    data(){
        return{
            todo:'',
            cound:0
        }
    },
    methods:{
        Addtask(){
            this.$store.commit("Addlist",{text:this.todo,show:false,})
            this.$store.commit("remaining")
            this.todo=''
            
        },
    }
}

</script>
<style>
</style>