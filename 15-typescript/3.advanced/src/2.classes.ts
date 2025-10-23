class User {
    private email: string
    private name: string
    private online: boolean

    constructor(email : string, name: string){
        this.email = email
        this.name = name
        this.online = false
    }


    public login() {
        this.online = true
        console.log(this.email + ' has logged in');
        
    }

    logout() {
        this.online = false
        console.log(this.email + ' has logged out');
        
    }

    displayProps(){
        console.log(this.email);
        console.log(this.name);
        console.log(this.online);
        
    }


}

const user = new User('hjsdbhjwaed@g.com', 'Yossi')

user.displayProps()

user.login()

user.displayProps()

// user.online = false


console.log('******');

user.displayProps()
