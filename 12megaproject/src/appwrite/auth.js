import conf from '../conf/conf.js'
import { Client,Account,ID } from 'appwrite'

export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount ({email, password, name }){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password, name );

            if (userAccount) {
                // call another method;
                return this.login({email, password});

            } else {
                return userAccount;      
            }
        } catch (error) {
            throw error;
        }
                
    }

    async login ({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("AuthService :: login :: Error:", error.message);
            throw error; 
        }
    }
    

    async getCurrentUser(){
        try {
            const session = await this.account.getSession("current");

            // If session exists, get user details
            if (session) {
                return await this.account.get();
            }
        } catch (error) {
            if (error.code === 401) {
                console.warn("No active session — user is logged out.");
                return null;
            }
            console.error("AuthService :: getCurrentUser :: Error:", error.message);
            
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions("current")
        } catch (error) {
            console.error("AuthService :: logout :: Error:", error.message);
        }
        return null;
    }
    
}

const authService = new AuthService();

export default authService;