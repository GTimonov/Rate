
const dbWorker = require('./utils/dbWorker');
const {startBot} = require('./botLogic/Bot')



dbWorker.connect(startBot);


