interface IAsteroideDiameter {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface IAsteroid {
  links: {
    self: string;
  };

  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;

  estimated_diameter: {
    kilometers: IAsteroideDiameter;
    meters: IAsteroideDiameter;
    miles: IAsteroideDiameter;
    feet: IAsteroideDiameter;
  };

  is_potentially_hazardous_asteroid: boolean;

  close_approach_data: [
    {
      close_approach_date: string;
      close_approach_date_full: string;
      epoch_date_close_approach: number;
      relative_velocity: {
        kilometers_per_second: string;
        kilometers_per_hour: string;
        miles_per_hour: string;
      };
      miss_distance: {
        astronomical: string;
        lunar: string;
        kilometers: string;
        miles: string;
      };
      orbiting_body: string;
    }
  ];
  is_sentry_object: boolean;
}

export interface IAsteroidResponse {
  links: {
    next: string;
    prev: string;
    self: string;
  };
  element_count: number;

  near_earth_objects: {
    [key: string]: IAsteroid[];
  };
}

const res: IAsteroidResponse = {
  links: {
    next: "http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-08-14&end_date=2023-08-14&detailed=false&api_key=L3UbqKrWPF0jU5z1UnEzJ5S5ehIqFv0USPxzKL0d",
    prev: "http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-08-12&end_date=2023-08-12&detailed=false&api_key=L3UbqKrWPF0jU5z1UnEzJ5S5ehIqFv0USPxzKL0d",
    self: "http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-08-13&end_date=2023-08-13&detailed=false&api_key=L3UbqKrWPF0jU5z1UnEzJ5S5ehIqFv0USPxzKL0d",
  },
  element_count: 6,
  near_earth_objects: {
    "2023-08-13": [
      {
        links: {
          self: "http://api.nasa.gov/neo/rest/v1/neo/3337595?api_key=L3UbqKrWPF0jU5z1UnEzJ5S5ehIqFv0USPxzKL0d",
        },
        id: "3337595",
        neo_reference_id: "3337595",
        name: "(2006 OA5)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3337595",
        absolute_magnitude_h: 19.67,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.3094246986,
            estimated_diameter_max: 0.69189466,
          },
          meters: {
            estimated_diameter_min: 309.4246986173,
            estimated_diameter_max: 691.8946600257,
          },
          miles: {
            estimated_diameter_min: 0.1922675344,
            estimated_diameter_max: 0.4299232768,
          },
          feet: {
            estimated_diameter_min: 1015.1729282116,
            estimated_diameter_max: 2269.9956763987,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2023-08-13",
            close_approach_date_full: "2023-Aug-13 21:06",
            epoch_date_close_approach: 1691960760000,
            relative_velocity: {
              kilometers_per_second: "20.5090836194",
              kilometers_per_hour: "73832.7010298065",
              miles_per_hour: "45876.7691482151",
            },
            miss_distance: {
              astronomical: "0.4328837292",
              lunar: "168.3917706588",
              kilometers: "64758483.845976804",
              miles: "40239055.9520717352",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://api.nasa.gov/neo/rest/v1/neo/3724056?api_key=L3UbqKrWPF0jU5z1UnEzJ5S5ehIqFv0USPxzKL0d",
        },
        id: "3724056",
        neo_reference_id: "3724056",
        name: "(2015 NG13)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3724056",
        absolute_magnitude_h: 24.9,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0278326768,
            estimated_diameter_max: 0.0622357573,
          },
          meters: {
            estimated_diameter_min: 27.8326768072,
            estimated_diameter_max: 62.2357573367,
          },
          miles: {
            estimated_diameter_min: 0.0172944182,
            estimated_diameter_max: 0.0386714948,
          },
          feet: {
            estimated_diameter_min: 91.3145593761,
            estimated_diameter_max: 204.1855621004,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2023-08-13",
            close_approach_date_full: "2023-Aug-13 22:50",
            epoch_date_close_approach: 1691967000000,
            relative_velocity: {
              kilometers_per_second: "15.6206609925",
              kilometers_per_hour: "56234.3795729762",
              miles_per_hour: "34941.8565741085",
            },
            miss_distance: {
              astronomical: "0.3688893875",
              lunar: "143.4979717375",
              kilometers: "55185066.635604625",
              miles: "34290410.339908825",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://api.nasa.gov/neo/rest/v1/neo/3825607?api_key=L3UbqKrWPF0jU5z1UnEzJ5S5ehIqFv0USPxzKL0d",
        },
        id: "3825607",
        neo_reference_id: "3825607",
        name: "(2018 NT2)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3825607",
        absolute_magnitude_h: 23.8,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.046190746,
            estimated_diameter_max: 0.1032856481,
          },
          meters: {
            estimated_diameter_min: 46.1907460282,
            estimated_diameter_max: 103.2856480504,
          },
          miles: {
            estimated_diameter_min: 0.0287015901,
            estimated_diameter_max: 0.0641787064,
          },
          feet: {
            estimated_diameter_min: 151.544447199,
            estimated_diameter_max: 338.8636855496,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2023-08-13",
            close_approach_date_full: "2023-Aug-13 09:29",
            epoch_date_close_approach: 1691918940000,
            relative_velocity: {
              kilometers_per_second: "18.634603036",
              kilometers_per_hour: "67084.5709295719",
              miles_per_hour: "41683.743531211",
            },
            miss_distance: {
              astronomical: "0.4584490807",
              lunar: "178.3366923923",
              kilometers: "68583005.976178109",
              miles: "42615503.8064275442",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://api.nasa.gov/neo/rest/v1/neo/54051379?api_key=L3UbqKrWPF0jU5z1UnEzJ5S5ehIqFv0USPxzKL0d",
        },
        id: "54051379",
        neo_reference_id: "54051379",
        name: "(2020 QE5)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54051379",
        absolute_magnitude_h: 25.5,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0211132445,
            estimated_diameter_max: 0.0472106499,
          },
          meters: {
            estimated_diameter_min: 21.113244479,
            estimated_diameter_max: 47.2106498806,
          },
          miles: {
            estimated_diameter_min: 0.0131191578,
            estimated_diameter_max: 0.0293353287,
          },
          feet: {
            estimated_diameter_min: 69.2691770164,
            estimated_diameter_max: 154.8905885541,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2023-08-13",
            close_approach_date_full: "2023-Aug-13 16:13",
            epoch_date_close_approach: 1691943180000,
            relative_velocity: {
              kilometers_per_second: "11.3628917694",
              kilometers_per_hour: "40906.4103699894",
              miles_per_hour: "25417.6525990637",
            },
            miss_distance: {
              astronomical: "0.2548877086",
              lunar: "99.1513186454",
              kilometers: "38130658.295740682",
              miles: "23693292.3924061316",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://api.nasa.gov/neo/rest/v1/neo/54053939?api_key=L3UbqKrWPF0jU5z1UnEzJ5S5ehIqFv0USPxzKL0d",
        },
        id: "54053939",
        neo_reference_id: "54053939",
        name: "(2020 RD4)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54053939",
        absolute_magnitude_h: 29.7,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.0030517923,
            estimated_diameter_max: 0.0068240151,
          },
          meters: {
            estimated_diameter_min: 3.0517923259,
            estimated_diameter_max: 6.824015094,
          },
          miles: {
            estimated_diameter_min: 0.0018962952,
            estimated_diameter_max: 0.0042402451,
          },
          feet: {
            estimated_diameter_min: 10.0124423346,
            estimated_diameter_max: 22.388501681,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2023-08-13",
            close_approach_date_full: "2023-Aug-13 17:05",
            epoch_date_close_approach: 1691946300000,
            relative_velocity: {
              kilometers_per_second: "7.2247302443",
              kilometers_per_hour: "26009.0288795181",
              miles_per_hour: "16160.9990834984",
            },
            miss_distance: {
              astronomical: "0.2610614546",
              lunar: "101.5529058394",
              kilometers: "39054237.547261702",
              miles: "24267177.9278754076",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
      {
        links: {
          self: "http://api.nasa.gov/neo/rest/v1/neo/2613440?api_key=L3UbqKrWPF0jU5z1UnEzJ5S5ehIqFv0USPxzKL0d",
        },
        id: "2613440",
        neo_reference_id: "2613440",
        name: "613440 (2006 OA5)",
        nasa_jpl_url: "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2613440",
        absolute_magnitude_h: 19.67,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: 0.3094246986,
            estimated_diameter_max: 0.69189466,
          },
          meters: {
            estimated_diameter_min: 309.4246986173,
            estimated_diameter_max: 691.8946600257,
          },
          miles: {
            estimated_diameter_min: 0.1922675344,
            estimated_diameter_max: 0.4299232768,
          },
          feet: {
            estimated_diameter_min: 1015.1729282116,
            estimated_diameter_max: 2269.9956763987,
          },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: "2023-08-13",
            close_approach_date_full: "2023-Aug-13 21:06",
            epoch_date_close_approach: 1691960760000,
            relative_velocity: {
              kilometers_per_second: "20.5090836088",
              kilometers_per_hour: "73832.7009915263",
              miles_per_hour: "45876.7691244292",
            },
            miss_distance: {
              astronomical: "0.4328837287",
              lunar: "168.3917704643",
              kilometers: "64758483.771177869",
              miles: "40239055.9055938322",
            },
            orbiting_body: "Earth",
          },
        ],
        is_sentry_object: false,
      },
    ],
  },
};