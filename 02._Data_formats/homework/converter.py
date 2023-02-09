# Parse txt files
d = {} # dictionary to store file data (each line)

with open('data.txt') as f:
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

print(d)



# Parse yaml files
import yaml

with open("data.yaml", "r") as stream:
    try:
        print(yaml.safe_load(stream))
    except yaml.YAMLError as exc:
        print(exc)



# Parse json files
import json

with open('data.json') as json_file:
    data = json.load(json_file)
print(data)



# Parse xml files
import xmltodict
  
# Open the file and read the contents
with open('data.xml', 'r', encoding='utf-8') as file:
    my_xml = file.read()
  
# Use xmltodict to parse and convert the XML document
my_dict = xmltodict.parse(my_xml)
  
print(my_dict)



# Parse csv files
import csv

i = 0
with open('data.csv') as f:
    for line in csv.DictReader(f, fieldnames=('title', 'genres')):
        if i == 0:
            i = i + 1
        else:
            print(line)