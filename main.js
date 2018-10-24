
const dbWorker = require('./src/utils/dbWorker');
const {startBot} = require('./src/botLogic/Bot')



dbWorker.connect(startBot);


