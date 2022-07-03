class AjaxCountry {
  constructor(url = "https://restcountries.com/v2/name") {
    this.url = url;
    this.httpRequest = new XMLHttpRequest();
  }

  get(
    UrlEncoder = undefined,
    callback = (response, errMessage) => {
      return response ? getCountry(response) : console.log(errMessage);
    }
  ) {
    if (UrlEncoder) {
      this.url += `/${UrlEncoder}`;
    }
    this.httpRequest.open("GET", this.url, true);
    this.httpRequest.onload = () => {
      if (this.httpRequest.status === 200) {
        let [response] = JSON.parse(this.httpRequest.responseText);
        callback(response, null);
        this.url = "https://restcountries.com/v2/name";
      } else if (
        this.httpRequest.status === 500 ||
        this.httpRequest.status === 404
      ) {
        alert("not found !");
        this.url = "https://restcountries.com/v2/name";
      }
    };

    this.httpRequest.send();
  }
}
