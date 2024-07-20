import bcrypt from "bcrypt";

export default async function registerUser(req, res) {
  const { username, email, password } = req.body;
  const saltRounds = 10;

  const hashedPassword = bcrypt.hashSync(password, saltRounds);
}
