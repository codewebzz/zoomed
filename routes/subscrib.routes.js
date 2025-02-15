import express from 'express';
import { AuthenticationJWT, Authorization } from '../middlewares/auth.middleware.js';
import { getAllSubscribersAndSearch, getSubscribers, subscribe } from '../controllers/subscrib.controller.js';

const route = express.Router();

route.route("/").post(AuthenticationJWT, subscribe);
route.route("/getusersub").get(AuthenticationJWT, getSubscribers);
route.route("/getAllSubscribers").get(AuthenticationJWT, Authorization("admin"), getAllSubscribersAndSearch);

export default route;