<template>
<div>
        <input type="checkbox" v-model="done">
        <span v-bind:class="{ donetrue: done }">{{preand}}  {{index}}</span>
</div>
</template>
<script>
  export default {
      data(){
          return{
              done:false,
              cound:this.index
          }
      },
      methods:{
         

      },
      props:{
          preand:String,
          index:Number
      },
      watch:{
           done: function(){
              this.$emit('func',this.done,this.cound)
          }
      }
  };
</script>