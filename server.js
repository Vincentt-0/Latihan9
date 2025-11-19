const express = require('express');
const app = express();
const PORT = 8001;
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
