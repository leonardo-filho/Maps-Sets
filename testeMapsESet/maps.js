function getAdmins(map) {
    let admin=[];
    for([key,value] of map){
        if(value == 'Admin'){
        admin.push(key)
        }
    }
    return admin;
}
const usuarios = new Map();

usuarios.set('Leonardo', 'Admin');
usuarios.set('Davi', 'Admin');
usuarios.set('Paulo', 'User');

console.log(getAdmins(usuarios));