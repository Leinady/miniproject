import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const res = await fetch("https://www.mecallapi.com/api/login" ,{
            method : 'POST',
            body: JSON.stringify(credentials),
            headers: {'Content-Type': 'application/json'}
          })
          const data = await res.json()

          if(data.status == 'ok'){
            return data.user
          }

          return null
         // const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
    
          // if ( res.ok && user) {
          //   // Any object returned will be saved in `user` property of the JWT
          //   return user
          // } else {
          //   // If you return null then an error will be displayed advising the user to check their details.
          //   return null
    
          //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          // }
        }
      })
  ],
  secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
  
callbacks: {
  async jwt({ token, account ,user}) {
    console.log(user)
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
      token.user = user
    }
    return token
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    session.user = token.user
    return session
  }
}

})