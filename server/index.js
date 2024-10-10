require('dotenv').config();
const { default: mongoose } = require('mongoose');
const app = require('./app');


const DB_URI=process.env.MONGODB_URI || 'mongodb://localhost:27017';
const PORT= process.env.PORT


mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('DB connected Successfully'))
.catch(() => console.log('DB failed to connect'))


app.listen(PORT, () => console.log("Server running on port", PORT));
