import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import {login} from "../login";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const {username, password} = credentials;
                const userInfor = await login(username, password)

                if (username !== "huutuong999" || password !== "tuongtuong")
                    throw new Error("Username or Password is incorrect");

                console.log('userInfor:', userInfor)
                return userInfor;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks:{
        async jwt(params) {
            if(params?.user?.role){
                params.token.role = params.user.role;
                console.log('params.user.role:', params.user.role)
            }
            return params.token;
        }
    },

    // pages:{
    //     signIn: "/account/login"
    // },

    // secret: process.env.JWT_SECRET
}

export default NextAuth(authOptions)