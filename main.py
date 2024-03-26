from pyscript import document
from miarr import MiarrAPI

radarr_url = "http://100.82.152.137:7878"
radarr_apikey = "efac63a1536d4d118e66b04bf63cdeb4"

sonarr_url = "http://100.82.152.137:8989"
sonarr_apikey = "efac63a1536d4d118e66b04bf63cdeb4"


def test(event):
    input_text = document.querySelector('#content')
    content = input_text.value

    miarr = MiarrAPI((radarr_url,radarr_apikey),(sonarr_url,sonarr_apikey))
    results = miarr.search_content(content)
    output_div = document.querySelector('#output')
    output_div.innerText = results
