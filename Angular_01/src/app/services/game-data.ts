import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameData {
  constructor(private http: HttpClient) {}
  getstats(iso2code: string) {
    return this.http.get(
      `https://api.worldbank.org/v2/country/${iso2code}?format=json`
    );
  }
}
