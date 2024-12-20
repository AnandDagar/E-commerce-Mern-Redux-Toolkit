const bcrypt = require("bcryptjs");
const User = require("../../models/User");
// const jwt = require("jsonwebtoken");

//register user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    //   expiresIn: "1d",
    // });

    // res.cookie("token", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   maxAge: 24 * 60 * 60 * 1000, // 1 day
    // });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

//login user
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res
//         .status(400)
//         .json({ success: false, message: "User not found" });
//     }
//     const isPasswordCorrect = await bcrypt.compare(password, user.password);
//     if (!isPasswordCorrect) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Invalid password" });
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "strict",
//       maxAge: 24 * 60 * 60 * 1000, // 1 day
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Login successful",
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ success: false, message: "Internal server error" });
//   }
// };

//logout user

//auth middleware

module.exports = { registerUser };
