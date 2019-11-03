<template>
<div>
<header class="app-header">
      <h1 class="app-title">{{ appTitle }}</h1>
      <h1 class="app-headline">{{ appHeadline }}</h1>
 </header>
      <section class="app-body"> 
            <section class="archive-control">
        <span> {{$store.state.count}} of {{$store.state.list.length}} remaining</span>
        <p>[ <a href="" @click.prevent="Remove()">Remove Completed Items</a> ]</p>
        </section>
        </section>
   </div>
</template>

<script>
export default {
  data () {
    return {
      appTitle:"Katie's Awesome ToDo App",
    appHeadline:"This one will save to local storage!"

    }
  },
  methods:{
    Remove(){
     this.$store.commit('Removelist')
     this.$forceUpdate();
    },
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
