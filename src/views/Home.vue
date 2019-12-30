<template>
  <div class="home">
   <div class="homeone">
     <dl v-for='(item,index) in list' :key='index'>
       <dt>
     <img :src='item.img' alt="">

       </dt>
       <dd>{{item.title}}</dd>
     </dl>
   </div>
  </div>
</template>

<script>
export default {
data(){
  return {
    list:[]
  }
},
created(){
   this.getlist()
},
methods:{
  getlist(){
    this.$http.get('/api/getlist').then(res=>{
      this.list=res.data.onelist
      console.log(res.data.onelist)
    })
  }
}
}
</script>
<style lang="scss">
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .homeone{
     width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
 
  dl{
    width: 100%;
    height: 100px;
    display: flex;
    dt{
      width: 50%;
      height: 100px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    dd{
      width:50%;
      height: 100px;
      display: flex;
      
    }
  }
   }
}
</style>
