var axios = require('axios');

exports.handler = (event, context, callback) => {
    //Parse Event Object to get request and path params
    if(event.pathParameters !== "" && event.pathParameters !== undefined) {
        console.log(event.pathParameters);
    }
    if (event.body !== null && event.body !== undefined) {
        let body = JSON.parse(event.body);
        //your code
        console.log(body);
    }

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

