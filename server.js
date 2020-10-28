const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 8888

const dotenv = require('dotenv');
dotenv.config();

const REDIRECT_URL = 'http://localhost:3000/results';
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

if (CLIENT_ID == null || CLIENT_SECRET == null) {
  console.log('Create .env file in the root of the project with CLIENT_ID and CLIENT_SECRET variables. You will find their values in the Customer Dashboard (https://customer-dashboard.app.authenteq.com/)\n');
  process.exit(-1);
}

app.use(cors())

app.get('/verification', (req, res) => {
  var config = {
    method: 'get',
    url: `https://api.app.authenteq.com/web-idv/verification-url?redirectUrl=${REDIRECT_URL}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: CLIENT_ID,
      password: CLIENT_SECRET,
    }
  };

  axios(config)
  .then(response => {
    res.status(response.status).json(response.data);
  })
  .catch(error => {
    res.status(error.response.status).json(error.response.data);
  });
})

app.get('/results', (req, res) => {
  const code = req.query.code;

  var config = {
    method: 'get',
    url: `https://api.app.authenteq.com/web-idv/verification-result?code=${code}&redirectUrl=${REDIRECT_URL}`,
    auth: {
      username: CLIENT_ID,
      password: CLIENT_SECRET,
    }
  };

  axios(config)
  .then(response => {
    res.status(response.status).json(response.data);
  })
  .catch(error => {
    res.status(error.response.status).json(error.response.data);
  });
});

app.listen(port, () => console.log(`Demo server listening at http://localhost:${port}...`))
