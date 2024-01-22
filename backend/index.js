const express=require('express');
const {todo}=require('./db');
const {createTodo}=require('./types');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res)=>{
     const createPayload=req.body;
     const parseedPayload=createTodo.safeParse(createPayload);
     if(!parseedPayload.success){
        res.status(411).json({
            msg:"u send wrong input",
        });

       return;
     }

     await  todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
     })

     res.json({
        msg:"todo created"
     }) 

});

app.get("/todos", async(req, res)=>{
     const todos= await todo.find({});

     res.json({
        todos
     })
});

app.put("/completed", async (req, res)=>{
      const updatePayload=req.body;
      const parseedPayload=updatePayload.safeParse(updatePayload);
      if(!parseedPayload.success){
         res.status(411).json({
             msg:"u send wrong input",
         });
 
        return;
      }

      await todo.update({
          _id:req.body.id
      },{
        success:true
      }
      )

      res.json({
        msg:"todo updated done"
      })
})

app.listen(3000, ()=>{
    console.log('server is connected');
})