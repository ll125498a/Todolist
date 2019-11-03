<template>
 <ul class="unstyled">
            <li v-for="item in $store.state.list" :key="item.text">
               <input type="checkbox" @click="item.show=!item.show;count()" :checked="false"/>
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