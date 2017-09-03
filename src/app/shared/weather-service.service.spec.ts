import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather-service.service';

describe('WeatherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService]
    });
  });

  it('should ...', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
