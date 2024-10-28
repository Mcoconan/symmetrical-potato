import app from "./app"
const main=()=>{
    app.listen(process.env.PORT || 3000)//app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
};
//
main();