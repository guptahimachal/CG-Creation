const fs = require('fs');

function getFiles(testFolder, files_) {
    files_ = files_ || [];
    fs.readdirSync(testFolder).forEach(folder => {
        files_.push([folder,fs.readdirSync(testFolder + '/' + folder).length]);        
        // Folder inside THUMBNAIL , no. of images inside that folder
    });
    files_.sort(function(a,b) { return a[0] - b[0]; });
    return files_;

}

const testFolder = './images/THUMBNAILS/';
console.log(getFiles(testFolder))