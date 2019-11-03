<template>
 <ul class="unstyled">
            <li v-for="item in $store.state.list" :key="item.id">
               <input type="checkbox" @click="item.show=!item.show;count()">
                <span :class="{donetrue:item.show}">{{item.text}}</span>
                </li>
</ul>
</template>
<script>
  export default {
      data(){
          return{
          }
      },
      methods:{
          count()
          {
              this.$store.commit("remaining")
          }
      },
      props:{
      },

  }
</script>