<template>
  <div id="app" class="container">
    <Head></Head>
       <menus></menus>
     <layouts></layouts>
   
  
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  mounted(){
          this.$store.commit("Gainlist")
         //this.$store.commit("remaining")
      },
  components:{
    menus,
    layouts,
    Head
  }
}
import menus from './components/menus'
import layouts from './components/layouts'
import Head from './components/Head'

</script>

<style>
@import '.\common\style.css';
</style>
