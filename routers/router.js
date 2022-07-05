const router = require("express").Router()
const {PrismaClient}= require("@prisma/client")
const prisma = new PrismaClient({})

router.get("/",(req,res)=>{
    res.send({message:'ok api is working'})
})

router.post('/insert', async(req,res)=>{
    const {name,email,password} = req.body
    const data = await prisma.users.create({
        data:{name,email,password}
    })
    res.send(data)
})

router.get("/read",async(req,res)=>{
    const {email,password} = req.body
    try {
        const data = await prisma.users.findMany({
            where:{
                email,password
            }
        })
        console.log(data);
        res.send(data)
    } catch (error) {
        res.send("not find")
    }
})

router.get("/readall",async(req,res)=>{
    const data = await prisma.users.findMany()
    res.send(data)
})

router.get("/update/:email",async(req,res)=>{
    const {name,email,password} = req.body
    let data = await prisma.users.update({
        where:{email:req.params.email},
        data:{name,email,password}
    })
    res.send(data)
})

router.get("/delete",async(req,res)=>{
    const {email} = req.body
    let data = await prisma.users.delete({
        where:{email}
    })
    res.send("deleted")
})

module.exports = router;
