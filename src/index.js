const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');
const path = require('path');
require('dotenv').config();

const conn = require('./config/db');
const PORT = process.env.PORT;

const app = express();

// Models
const Tought = require('./models/Thought');
const User = require('./models/User');

// Routes
const thoughtRoutes = require('./routes/thoughtsRoutes');

// Controllers
const ThoughtController = require('./controllers/ThoughtController');

// Template Engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

// Pasta pública para arquivos estáticos
app.use(express.static('./src/public'));

// Receber resposta do body
app.use(express.urlencoded({ extended: true }));

// Permite a aplicação entender JSON no body
app.use(express.json());

// Rotas
app.use('/thoughts', thoughtRoutes);
app.get('/', ThoughtController.showThought);

conn.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App rodando na porta: ${PORT}`);
        });
    })
    .catch((err) => console.log(err));
