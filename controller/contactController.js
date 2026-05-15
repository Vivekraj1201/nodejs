const getContact = (req, res) => {
    res.status(200).send('get all contacts !')
};

const createContact = (req, res) => {
    console.log("req.body", req.body);
    const { name, phone, email} = req.body;
    if(!name || !phone || !email){
        res.status(400);
        throw new Error("All fields are mandatory man !")
    }
    res.status(201).json({ message: "create a new contact" });
};

const updateContact = (req, res) => {
    res.status(201).json({ message: "update successfully !" })
};

const deleteContact = (req, res) => {
    console.log("here req body is ");
    res.status(200).json({ message: `delete id is ${req.params.id}` })
};

module.exports = { getContact, createContact, updateContact, deleteContact };