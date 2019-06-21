var axios = require('axios');

exports.handler = (event, context, callback) => {
    if(event.pathParameters.proxy !== '' && event.pathParameters.proxy !== undefined) {
        // console.log(JSON.stringify(event));
    }
    const response = {
        "statusCode": 200,
        "body": JSON.stringify(event)
    }
    callback(null, response);
    //Parse Event Object to get request and path params
//   if (event.context['resource-path'] === '/clients') {
      
    //   if (event.context['http-method'] === 'DELETE') {
    //   } else if (event.context['http-method'] === 'GET') {
    //   } else if (event.context['http-method'] === 'POST') {
    //   } else if (event.context['http-method'] === 'PUT') {
    //   }
//   };


    // //Get the Auth TOKEN 
    // axios({
    //     method: 'post',
    //     headers: { 'content-type': 'application/json' },
    //     url: `https://api.abacus.ac/api/v1/token_auth/`,
    //     data: {
    //         username: 'api@adaptivebrane.com',
    //         password: 'bP7,+]d]P[(9rKC{'
    //     }
    // })
    //     .then(function (response) {
    //         //Save the token to a reusable config element
    //         var config = {
    //             headers: { 'Authorization': 'JWT ' + response.data.token }
    //         };
    //         //Get the Company API    
    //         axios.get(`https://api.abacus.ac/api/v1/companies/?search=adaptivebrane`, config)
    //             .then(function (response) {
    //                 console.log(response);
    //                 const companyId = response.data.results[0].id;
    //                 //Get all Clients for Company
    //                 axios.get(`https://api.abacus.ac/api/v1/clients/?company=` + companyId, config)
    //                     .then((clientResponse) => {

    //                         var clientsData = clientResponse.data.results.map((obj, i) => {
    //                             return obj;
    //                         });

    //                         const lambdaResponse = {
    //                             isBase64Encoded: false,
    //                             statusCode: 200,
    //                             body: JSON.stringify(clientsData) 
    //                         };
    //                         //return the list of clients
    //                         callback(null, lambdaResponse);
    //                     })
    //                     .catch((clientErr) => {
    //                         console.log('Clients API Failed=> ', err);
    //                     });
    //             })
    //             .catch((err) => {
    //                 console.log('Company API Failed=> ', err);
    //             });
    //     })
    //     .catch(function (error) {
    //         console.log('Auth API Failed', error);
    //     });

}

