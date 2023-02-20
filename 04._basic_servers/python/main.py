from fastapi import FastAPI
from converter import txt_reader, json_reader, yaml_reader, xml_reader, csv_reader

app = FastAPI()

@app.get("/")
def _():
    return { "message": "Welcome to the server" }

@app.get("/converter_txt")
def _():
    message = txt_reader("../data_types/data.txt")
    return { "message": message }

@app.get("/converter_json")
def _():
    message = json_reader("../data_types/data.json")
    return { "message": message }

@app.get("/converter_yaml")
def _():
    message = yaml_reader("../data_types/data.yaml")
    return { "message": message }

@app.get("/converter_xml")
def _():
    message = xml_reader("../data_types/data.xml")
    return { "message": message }

@app.get("/converter_csv")
def _():
    message = csv_reader("../data_types/data.csv")
    return { "message": message }
