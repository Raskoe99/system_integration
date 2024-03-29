import { Router } from "express";
const router = Router();

const users = [{
    id: 1,
    name: "John Doe"
}];

/**
 * @openapi
 * /api/users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns all users
 */
router.get("/api/users", (req, res) => {
    res.send({ data: users });
});

/**
 * @openapi
 * /api/users:
 *   post:
 *     description: Create a new user
 *     responses:
 *       200:
 *         description: Returns the users that was created
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              id:
 *               type: integer
 *               description: The user's id.
 *               example: 1
 *              name:
 *               type: string
 *               description: The user's name.
 *               example: John Doe
 */
router.post("/api/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send({ data: user });
});
    

export default router;
