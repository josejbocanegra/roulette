import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const key = "e75e7b4d1d1c46d6b4dcc11b035c46b5";
const sourceEndpoint = "https://newsapi.org/v2/sources?apiKey=" + key;
const headlinesEndpoint = "https://newsapi.org/v2/top-headlines?apiKey=" + key;


@Injectable({
  providedIn: "root"
})
export class SourceService {

  constructor(private http: HttpClient) { }

  getSources(): Observable<any> {
    return this.http.get(sourceEndpoint);
  }

  getDetails(id: string): Observable<any> {
    return this.http.get(headlinesEndpoint + "&sources=" + id);
  }
}
