const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
Query: {
    me: async (parent, { username }) => {
      const user = await User.findOne({ username });
      const token = signToken(user);  
      return { token, user };

    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
    saveBook: async(parent, { username, criteria }) => {
        const updatedUser = await User.findOneAndUpdate(
            { username },
            { $addToSet: { savedBooks: criteria } },
            { new: true }
          );

        if (!updatedUser) {
            throw new AuthenticationError('No user found with this username');
        }

        return updatedUser;
    },
    removeBook: async(parent, { username, bookId }) => {
        const updatedUser = await User.findOneAndUpdate(
            { username },
            { $pull: { savedBooks: { bookId } } },
            { new: true }
          );
          if (!updatedUser) {
            throw new AuthenticationError('No user found with this username');
          }

        return updatedUser;
    }
  }
}

module.exports = resolvers;