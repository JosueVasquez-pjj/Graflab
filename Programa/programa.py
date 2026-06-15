#from google.oauth2 import service_account
#from googleapiclient.discovery import build

import requests
import json
import re

#url_index = "https://drive.google.com/uc?export=download&id=1AAwANWNYD6A16tEVvs-shHcNytyfEqwG"
#url_index = "https://drive.google.com/file/d/1AAwANWNYD6A16tEVvs-shHcNytyfEqwG/view"
url_index = "https://drive.google.com/file/d/1AAwANWNYD6A16tEVvs-shHcNytyfEqwG/view?usp=drive_link"


#esta funcion limpia el url para hacerlo compatible
def remplazar_url (url): 
    patron1 = r'https://drive\.google\.com/file/d/'
    patron2 = r'/view\?usp=drive_link|/view'

    remplazo1 = "https://drive.google.com/uc?export=download&id="
    remplazo2 = ""

    url = re.sub(patron1,remplazo1,url)
    url = re.sub(patron2,remplazo2,url)
    return url

#como dice, convierte un archivo en un json
def convertir_a_json (url):
    r = requests.get(remplazar_url(url))
    j = json.loads(r.text)
    return j

index = convertir_a_json(url_index)

obra = index["obras"][0] #obtiene el elemento en la pocicion 0
url_obra = obra["url"] # obtine el url del elemento en la pocicion 0 o index["obras"][0]["url"] da el mismo reultado

datos_obra = convertir_a_json(url_obra)
print(datos_obra["titulo"]) #nombre e la hobra
print(datos_obra["descripcion"]) #descripcion
