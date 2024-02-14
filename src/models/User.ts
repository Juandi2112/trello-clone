import {Schema, model, models} from "mongoose"

export type UserType={
    name:string,
    email:string,
    image:string,

}

type ModelsType={
    User: any
}

const userSchema = new Schema({
    name:String,
    email:String,
    image:String,
    emailVerified:Date,
})

export const User = (models as ModelsType)?.User || model("User",userSchema)