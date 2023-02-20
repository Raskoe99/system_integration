import json
import yaml
import xmltodict
import csv

def __name__():
    return "converter_py"

def txt_reader(file_name):
    d = {} # dictionary to store file data (each line)
    with open(file_name) as f:
        lines = f.readlines() # list containing lines of file
        columns = []

        i = 1
        for line in lines:
            line = line.strip() # remove leading/trailing white spaces
            if line:
                if i == 1:
                    columns = [item.strip() for item in line.split(',')]
                    i = i + 1
                else:
                    data = [item.strip() for item in line.split(',')]
                    for index, elem in enumerate(data):
                        d[columns[index]] = data[index]
    return d



def json_reader(file_name):
    with open(file_name) as f:
        data = json.load(f)
    return data



def yaml_reader(file_name):
    with open(file_name, "r") as stream:
        try:
            return yaml.safe_load(stream)
        except yaml.YAMLError as e:
            return e



def xml_reader(file_name):
    with open(file_name) as fd:
        doc = xmltodict.parse(fd.read())
    return doc



def csv_reader(file_name):
    i = 0
    lines = []
    with open(file_name) as f:
        for line in csv.DictReader(f, fieldnames=('title', 'genres')):
            if i == 0:
                i = i + 1
            else:
                lines.append(line)

    return lines
