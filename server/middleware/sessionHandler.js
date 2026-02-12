import session from "express-session";
import MongoStore from "connect-mongo";
import express from "express";

const sessionHandler = session({
    name: `ClubSession`,

    secret: process.env.SESSION_SECRET || "datawiz",

    resave: false,
    saveUninitialized: false,

    store: MongoStore.create({
        mongoUrl: process.env.MONGO_UR || `mongodb+srv://tejas:tejas123@cluster0.daqsqsc.mongodb.net/DataWiz-Backend`,
        collectionName: "sessions",
        ttl: 60 * 15,
    }),

    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "lax",

        maxAge: 1000 * 60 * 15,
    },

    rolling: true,
});

export default sessionHandler;
