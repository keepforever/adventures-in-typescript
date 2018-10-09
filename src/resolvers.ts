import { IResolvers } from 'graphql-tools';
import { User } from './entity/User';
import * as bcrypt from 'bcryptjs';

export const resolvers: IResolvers = {
  Query: {
    hello: () => "hi"
  }, 
  Mutation: {
    // first arg, "parent", we pass "_" because don't care about it
    register: async (_, {email, password}) => {
      // hash password for security, bcrypt.hash() is async func
      const hashedPassword = await bcrypt.hash(password, 10 )
      await User.create({
        email, 
        password: hashedPassword
      // must call save to persist user in the Database. 
      }).save()
      // return true because we specified a "Boolean" in Mutation def
      return true
    }
  }
}