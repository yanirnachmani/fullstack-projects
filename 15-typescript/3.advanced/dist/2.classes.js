// class User {
//     // private email: string
//     // private name: string
//     private online = false 
//     constructor(private email : string, private name: string){
//         this.email = email
//         this.name = name
//     }
//     public login() {
//         this.online = true
//         console.log(this.email + ' has logged in');
//     }
//     logout() {
//         this.online = false
//         console.log(this.email + ' has logged out');
//     }
//     displayProps(){
//         console.log('******');
//         console.log(this.email);
//         console.log(this.name);
//         console.log(this.online);
//     }
// }
// const user = new User('hjsdbhjwaed@g.com', 'Yossi')
// user.displayProps()
// user.login()
// user.displayProps()
// // user.online = false
// user.displayProps()
// class Admin extends User {
//     private role :string
//     constructor(email: string, name: string, role: string){
//         super(email, name)
//         this.role = role
//     }
//     override displayProps(){
//         super.displayProps()
//         console.log(this.role)
//     }
// }
// const admin = new Admin('avi@gmail.com',  'avi', 'Selector')
// admin.displayProps()
// admin.login()
// admin.displayProps()
// const users: User[] = [user, admin]
// for(const user of users){
//     user.displayProps()
// }
