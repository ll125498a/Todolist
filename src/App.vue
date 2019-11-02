<template>
  <div id="app" class="container">
    <header class="app-header">
      <h1 class="app-title">{{ appTitle }}</h1>
      <h1 class="app-headline">{{ appHeadline }}</h1>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
    appTitle:"Katie's Awesome ToDo App",
    appHeadline:"This one will save to local storage!"
    }
  }
}
</script>

<style>
@import '.\common\style.css';
</style>
