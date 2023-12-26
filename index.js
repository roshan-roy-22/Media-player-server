const JSONServer = require('json-server');
const MPServer= JSONServer.create();
const router =JSONServer.router('db.json');
const middleware =JSONServer.defaults();
const PORT = 3001 || process.env.PORT
MPServer.use(middleware)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log(`MP Server started at port :${PORT} and waiting for client request !!!!!`);
})


//note: to create deployable JSON server