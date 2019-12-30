const Mock=require('mockjs')
const onelist=[];
for(let i=0;i<20;i++){
   onelist.push({
       id:Mock.Random.id(),
       img:Mock.Random.image(('80x80'),`${Mock.Random.color()}`),
       title:Mock.Random.ctitle(3)
   })
}
module.exports={
    onelist
}
console.log(onelist)