export const UserUpdate = async (req, res, next) => {
  try {
    //Logic here
    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All Field Required");
      error.statusCode = 400;
      next(error);
    }
    console.log("OldData:",currentUser); //old user data in Json format

    currentUser.fullName = fullName;
    currentUser.email = email;
    currentUser.mobileNumber = mobileNumber;
    await currentUser.save();

    console.log("NewData:",currentUser);

    res.status(200).json({message:"User updated Successfully",data:currentUser})
    

    console.log("Updateing the User");
  } catch (error) {
    next(error);
  }
};
