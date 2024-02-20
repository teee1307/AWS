// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-1" });

// Create sendEmail params
var params = {
  Destination: {
    /* required */
    CcAddresses: [
      "placetocalltanaya@gmail.com",
      /* more items */
    ],
    ToAddresses: [
      "placetocalltanaya@gmail.com",
      /* more items */
    ],
  },
  Message: {
    /* required */
    Body: {
      /* required */
      Html: {
        Charset: "UTF-8",
        Data: "<h1 style='''color:green;font-size:46px;'''>Hi, recieving this from aws ses service</h1>",
      },
      Text: {
        Charset: "UTF-8",
        Data: "Hi , you are reciving this email from aws ses service",
      },
    },
    Subject: {
      Charset: "UTF-8",
      Data: "SES Test mail",
    },
  },
  Source: "placetocalltanaya@gmail.com" /* required */,
  ReplyToAddresses: [
    "placetocalltanaya@gmail.com",
    /* more items */
  ],
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
  .sendEmail(params)
  .promise();

// Handle promise's fulfilled/rejected states
sendPromise
  .then(function (data) {
    console.log(data.MessageId);
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });
