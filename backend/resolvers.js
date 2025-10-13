import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./models/User";
import { JWT_SECRET } from "./config";

export const resolvers = {
    Query: {
        me: async (_, __, { user }) => {
            if (!user) throw new Error("Not authenticated");
            return await User.findById(user.id);
        }
    },

    Mutation: {
        register: async (_, { name, email, password }) => {
            const existing = await User.findOne({ email });
            if (existing) throw new Error("User aleary exists");

            const hashed = await bcrypt.hash(password, 10);
            const user = await User.create({ name, email, password: hashed });

            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });
            return { ...user._doc, id: user.id, token };
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) throw new Error("Invalid credentials");

            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1d" });
            return { ...user._doc, id: user.id, token };
        }
    }
}