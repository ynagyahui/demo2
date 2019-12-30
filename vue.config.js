const onelist=require('./public/mock/index')
 module.exports={
    lintOnSave:false,
    devServer:{
        before:function(app){
     app.get('/api/getlist',(req,res)=>{
         res.json(onelist)
         console.log(onelist)
     })
        }
    }
}