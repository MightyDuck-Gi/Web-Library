const mongoose = require("mongoose");

/*//==================================================\\
    This is model schema on how a customer gets stores into 
        the database
*/
const customerSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;