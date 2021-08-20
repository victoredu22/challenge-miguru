export const formatIdUrl = (param) =>{
  if(param){
    const urlParts = param.split("/");
    const id = urlParts[urlParts.length - 1];
    return id;
  }
}
