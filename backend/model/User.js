const mongoose = require("mongoose");
/*//==================================================\\
    This is model schema on how a user gets stores into 
        the database
*/
const userSchema = new mongoose.Schema({
    email: { 
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "customer",
    },
});
//populating books the user requested
userSchema.virtual("books", {
    ref: "Book",
    foreignField: "createdBy",
    localField: "_id",
});

userSchema.set( 'toJSON', { virtuals: true });

const User = mongoose.model("user", userSchema);

module.exports = User;