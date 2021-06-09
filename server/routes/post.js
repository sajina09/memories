import express from 'express';
import { create, getPosts } from '../controllers/post.js';
const router = express.Router();

router.get('/',getPosts);
router.get('/',create);

export default router ;