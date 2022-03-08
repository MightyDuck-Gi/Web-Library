const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

/*//==================================================\\
    This is model schema on how a books gets stores into 
        the database
*/
const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "waiting"
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Book", bookSchema);