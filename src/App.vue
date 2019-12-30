<template>
  <div id="app">
    <div id="nav">
  <router-link to='/home'>首页</router-link>
  <router-link to='/list'>热门</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
html,body, #app{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
display: flex;
flex-direction: column;
  color: #2c3e50;
}
#nav{
width: 100%;
height: 45px;
border-bottom: 1px solid #000;
display: flex;
a{
     width: 50%;
     height: 45px;
     display: flex;
     justify-content: center;
     align-items: center;
     &.router-link-exact-active{
       background: aqua;
     }
}
}
</style>
