import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '../../../lib/prismadb'

export const authOptions = {
    adapter:PrismaAdapter(prisma),
    providers:[

        CredentialsProvider({
            name:"Credentials",

            credentials:{
                email:{label:"Email", type:"email"},
                password:{label:"Password", type:"password"}
            },
            async authorize(credentials) {
                // Add logic here to look up the user from the credentials supplied
                const user = { id: "1", /* name: "J Smith", email: "jsmith@example.com" */ } 
          
                if (credentials?.email==="eyob@gmail.com" ) {
                  // Any object returned will be saved in `user` property of the JWT
                  return {id:"1"}
                } else {
                  // If you return null then an error will be displayed advising the user to check their details.
                  return null
          
                }
            }
        })
    ]
}

export default NextAuth(authOptions)