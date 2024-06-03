module.exports.sendResponse = (res,statusCode,msg,data)=>{
    try {
res.statusCode(statusCode);
return res.send({
statusCode:statusCode,
message:msg,
data
})
    } catch (error) {
        res.statusCode(statusCode);
        return res.send({
        statusCode:statusCode,
        message:msg,
        data
        })   
    }

}