pub contract proj2
{
    pub var greetings : [String]

    init(){
        self.greetings=[]
    }

    pub fun change(new : String , ac : String){
        self.greetings[0] = new
        self.greetings[1] = ac
    }
}