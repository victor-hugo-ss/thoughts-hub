const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

// Template Engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Pasta pública para arquivos estáticos
app.use(express.static('public'));

// Receber resposta do body
app.use(express.urlencoded({ extended: true }));

// Permite a aplicação entender JSON no body
app.use(express.json());

app.listen(PORT, () => {
    console.log(`App rodando na porta: ${PORT}`);
});
