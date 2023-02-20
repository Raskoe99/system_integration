// Parse txt files
import { open } from 'node:fs/promises';

function txtReader(filename) {
    async function myFileReader() {
        const file = await open(filename);

        for await (const line of file.readLines()) {
            return line;
        }
    }
    myFileReader();
}


// Parse yaml files
import yaml from 'js-yaml';

function yamlReader(filename) {
    try {
        let data = yaml.load(fs.readFileSync(filename, 'utf8'));
        return data;
    } catch (e) {
        return e;
    }
}


// Parse json files
import fs from 'fs';

function jsonReader(filename) {
    return JSON.parse(fs.readFileSync(filename, 'utf8'));
}


// Parse xml files
import xml2js from 'xml2js';

function xmlReader(filename) {
    let parser = new xml2js.Parser();
    fs.readFile(filename, function(err, data) {
        parser.parseString(data, function (err, result) {
            return result;
        });
    });
}


// Parse csv files
import csv from 'csvtojson';

function csvReader(filename) {
    csv().fromFile(filename).then((jsonObj)=>{
        return jsonObj[0];
    });
}

export default { txtReader, yamlReader, jsonReader, xmlReader, csvReader };