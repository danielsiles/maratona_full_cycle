'use strict';

module.exports.soma = async event => {
  const { queryStringParameters } = event
  let result = {
    resultado: "Parâmetros inválidos"
  }
  if(queryStringParameters && queryStringParameters.a && queryStringParameters.b) {
    result = {
      resultado: parseFloat(queryStringParameters.a) + parseFloat(queryStringParameters.b)
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      result,
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
