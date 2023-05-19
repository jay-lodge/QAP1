///the path module provides a way of working with directors and file paths
const path = require("node:path");

///represents full path to file
console.log(__filename);

///represents full path to the folder
console.log(__dirname);

///using "path.basename" used to get the last portion of a path
console.log(path.basename(__dirname));

/// "path.extname" returns the extension of a path
console.log(path.extname(__filename));

