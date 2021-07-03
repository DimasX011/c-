    //новый
    class User{
        constructor(name, id){
            this.name = name;
            this.id = id;
            this.human = true;
        }
        hello(){
            console.log(`Hello! ${this.name}`)
        }
        exit(){
            console.log(`Пользователь ${this.name} ушел`);
        }
    }
    
    let ivann = new User('Ivan', 23);
    let Alex = new User('Alex', 20);
    console.log(ivann);
    console.log(Alex);
    ivann.hello();
    alex.hello();
    