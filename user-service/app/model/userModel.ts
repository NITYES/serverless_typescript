export interface UserModel{
    user_id?:string
    email:string
    phone:string
    password:string
    salt:string
    user_type:'BUYER' | 'SELLER'
}