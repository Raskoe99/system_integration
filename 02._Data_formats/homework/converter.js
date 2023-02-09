// Parse txt files
import { open } from 'node:fs/promises';

//let txtFile = fs.readFileSync('data.txt', 'utf8').toString().split("\r");
async function myFileReader() {
    const file = await open('data.txt');
    let i = 0;

    for await (const line of file.readLines()) {
        for (const word of line.split('\n')) {
            if (i == 0) {
                
            }
        }
        
    }
}
myFileReader();
/*let columns = []

for (let i=0; i<txtFile.length; i++) {
    if (i >= 1) {
        for (let j=0; j<txtFile[i].length; j++) {
            columns.push(txtFile[i].split(","))
        }
    } else {
        for (let j=0; j<txtFile[i].length; j++) {
            console.log(txtFile[i][j].split(","))
        }
    }
}*/



// Parse yaml files
import yaml from 'js-yaml';

try {
    let data = yaml.load(fs.readFileSync('data.yaml', 'utf8'));
    console.log(data);
} catch (e) {
    console.log(e);
}



// Parse json files
import fs from 'fs';

console.log(JSON.parse(fs.readFileSync('data.json', 'utf8')));

    

// Parse xml files
import xml2js from 'xml2js';

let parser = new xml2js.Parser();
fs.readFile('data.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.log(result);
    });
});



// Parse csv files
import csv from 'csvtojson';

csv().fromFile('data.csv').then((jsonObj)=>{
    console.log(jsonObj[0]);
});