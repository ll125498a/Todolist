<template>
    <div>
        <section class="app-body"> 
            <section class="archive-control">
        <span>{{seen}} of {{list.length}} remaining</span>
        <p>[ <a href="" @click.prevent="Remove">Remove Completed Items</a> ]</p>
        </section>
        <ul class="unstyled">
            <li v-for="(item,index) in list" :key="item.index">
                <menus :preand="item.text" :index="index" @func="Inputshow"></menus>
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
            seen:0
        }  
    },
    methods:{
        Addtask(){
            var car={text:this.todo,done:false}
            this.list.push(car)
            this.todo=''
            this.seen++
        },
        Remove(){
            console.log(this.list)

                    for(var j =this.list.length-1;j>=0;j--)
                    {
                        if(this.list[j].done)
                        {
                            console.log(j)
                            this.list.splice(j,1)
                        }
                
                    } 
        },
        Inputshow(data,index){
            if(data)
            {
                this.list[index].done=data
                this.seen--
            }else
            {
                this.list[index].done=data
                this.seen++
            }
            
        }

    },
    watch:{
            list:function()
            {
            const parsed=JSON.stringify(this.list)
            localStorage.setItem('todos',parsed)
            },
},
    mounted(){
            if(localStorage.getItem('todos'))
            {
            this.list=JSON.parse(localStorage.getItem('todos'))
            this.seen=this.list.length
            }

        },
        components:{
            menus
        }
        
}

import menus from './menus'
</script>
<style>
</style>
