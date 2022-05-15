const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

/*mongoose.connect('mongodb://localhost/letsGetSocial');
/*{
    useFindAndModify: false,  
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//for mongo queries
//mongoose.set('useFindAndModify', false);
//mongoose.set('useNewUrlParser', true);
//mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));*/
