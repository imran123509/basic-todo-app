const express=require('express');
const {createTodo}=require('./types');
const app=express();

app.use(express.json());

app.post("/todo", (req, res)=>{
     const createPayload=req.body;
     const parseedPayload=createTodo.safeParse(createPayload);
     if(!parseedPayload.success){
        res.status(411).json({
            msg:"u send wrong input",
        });


     }

});

app.get("todos", (req, res)=>{
    
});

app.put("/completed", (req, res)=>{
      const updatePayload=req.body;
      const parseedPayload=updatePayload.safeParse(updatePayload);
      if(!parseedPayload.success){
         res.status(411).json({
             msg:"u send wrong input",
         });
 
 
      }
})

app.listen(3000, ()=>{
    console.log('server is connected');
})