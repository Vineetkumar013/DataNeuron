const Data = require("../Model/dataModel");

let addCount = 0;
let updateCount = 0; // Initialize count


const createData = async (req, res) => {
        console.time('addData');
    try {
        const newData = new Data(req.body);
        await newData.save();
        console.timeEnd('addData');
        addCount++; // Increment count on API call
        res.json({ message: 'Data added successfully!',newData:newData });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getData = async (req, res) => {
    try {
        const get = await Data.find();
        res.json({ message: 'Get Data successfully!', GetData:get});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateData = async (req, res) => {
    console.time('editData');
    try {
        const { id } = req.params;
        const updatedData = await Data.findByIdAndUpdate(id, req.body, { new: true }); // Return updated document
        if (!updatedData) {
            return res.status(404).json({ error: 'Data not found' });
        }
        console.timeEnd('editData');
        updateCount++// Increment count on API call
        res.json({ message: 'Data updated successfully!',updatedData:updatedData });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCount = (req, res) => {
    res.json({ addCount, updateCount });
};


module.exports = {
    createData,
    updateData,
    getCount,
    getData
};
