const empModel= require("../models/empModel");
const dataSave=async(req, res)=>{
    const { empno, empname, department, salary} = req.body;
 const Data= await  empModel.create({
        empno:empno,
        empname:empname,
        department:department,
        salary:salary
       })
res.send("Data Submit");
}
const Display=async(req,res)=>{
   const data = await empModel.find();
   res.send(data)

}
const empSearch=async(req, res)=>{
    const {empno} =req.body;
    const Data=await empModel.find({empno:empno});
    console.log(Data);
    res.send(Data);
  }
  
//   const empDelete=async(req,res)=>{
//  const{empid}=req.query;
//  await empModel.findByIdAndDelete(empid);
//  res.send("data deleted")
//   }

//   const empEditshow=async(req,res)=>{
//     const{empid}=req.body;
//     const Data =await empModel.findById(empid);
//     res.send(Data)
//   }

//   const empEditSave=async(req,res)=>{
//     const{_id}=req.body;
//     await empModel.findByIdAndUpdate(_id,req.body);
//   }

module.exports={
    dataSave,
    Display,
    empSearch,
    // empDelete,
    // empEditshow,
    // empEditSave
}