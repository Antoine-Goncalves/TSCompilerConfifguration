let logger;

function sendAnalystic(data: string) {
  console.log(data);

  logger = true;
}

sendAnalystic("The data !");
