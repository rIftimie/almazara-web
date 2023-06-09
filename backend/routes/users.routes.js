import { getAllUsers } from '../controllers/UserController.js';

import { pool } from '../database/index.js';

import express from 'express';
const router = express.Router();

// GET: Users[]
router.get('/', async (req, res) => {
	pool.getConnection(function (err, connection) {
		if (err) throw err; // not connected!

		// Use the connection
		getAllUsers(res, connection);
	});
});

export default router;
