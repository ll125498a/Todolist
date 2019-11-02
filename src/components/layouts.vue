<template>
    <div>
        <section class="app-body"> 
            <section class="archive-control">
        <span>{{list.length-seen.length}} of {{list.length}} remaining</span>
        <p>[ <a href="" @click.prevent="Remove">Remove Completed Items</a> ]</p>
        </section>
        <ul class="unstyled">
            <li v-for="item in list" :key="item.id">
               <input type="checkbox" v-model="seen" v-bind:value="item.id" @click="item.show=!item.show">
                <span :class="{donetrue:item.show}">{{item.text}}</span>
                </li>
        </ul>
        <form class="todo-form">
        <input type="text" v-model="todo" placeholder="Enter new ToDo item">
        <br/>
        <input type="button" @click="Addtask" value="Add Task">
    </form>
    </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            todo:'',
            list:[],
            seen:[],
            cound:0,
        }
    },
    methods:{
        Addtask(){
            var car={text:this.todo,id:this.cound,show:false}
            this.cound++
            this.list.push(car)
            this.todo=''
        },
        Remove(){
                for (var i in this.seen)
                {
                    for(var j =0;j<this.list.length;j++){
                        if(this.seen[i]===this.list[j].id)
                        {
                            this.list.splice(j,1)
                        }
                }
        } 
        this.seen=[]
        }
    },
    watch:{
            list:function()
            {
                const parsed=JSON.stringify(this.list)
            localStorage.setItem('todos',parsed)
            },
            seen:function()
            {

            }
},
    mounted(){
            if(localStorage.getItem('todos'))
            {
            this.list=JSON.parse(localStorage.getItem('todos'))
            this.cound=this.list[this.list.length-1].id+1
            }

        },
}

</script>
<style>
</style>
