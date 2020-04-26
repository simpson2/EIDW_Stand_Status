const DMStoDD = require("../functions/DMStoDD");

const EIDWStandCoords = {
    "101": {
        "lat": DMStoDD(53, 25, 50.28, "N"),
        "lon": DMStoDD(006, 14, 17.72, "W")
    },
    "102": {
        "lat": DMStoDD(53, 25, 50.41, "N"),
        "lon": DMStoDD(006, 14, 16.23, "W")
    },
    "102S": {
        "lat": DMStoDD(53, 25, 50.68, "N"),
        "lon": DMStoDD(006, 14, 17.43, "W")
    },
    "103R": {
        "lat": DMStoDD(53, 25, 50.37, "N"),
        "lon": DMStoDD(006, 14, 14.43, "W")
    },
    "103C": {
        "lat": DMStoDD(53, 25, 49.59, "N"),
        "lon": DMStoDD(006, 14, 13.65, "W")
    },
    "103L": {
        "lat": DMStoDD(53, 25, 49.48, "N"),
        "lon": DMStoDD(006, 14, 12.57, "W")
    },
    "104R": {
        "lat": DMStoDD(53, 25, 49.38, "N"),
        "lon": DMStoDD(006, 14, 10.07, "W")
    },
    "104C": {
        "lat": DMStoDD(53, 25, 49.19, "N"),
        "lon": DMStoDD(006, 14, 7.82, "W")
    },
    "104L": {
        "lat": DMStoDD(53, 25, 49.09, "N"),
        "lon": DMStoDD(006, 14, 7.93, "W")
    },
    "107T": {
        "lat": DMStoDD(53, 25, 50.69, "N"),
        "lon": DMStoDD(006, 14, 43.56, "W")
    },
    "107": {
        "lat": DMStoDD(53, 25, 50.73, "N"),
        "lon": DMStoDD(006, 14, 47.25, "W")
    },
    "108L": {
        "lat": DMStoDD(53, 25, 51.05, "N"),
        "lon": DMStoDD(006, 14, 49.21, "W")
    },
    "108C": {
        "lat": DMStoDD(53, 25, 51.15, "N"),
        "lon": DMStoDD(006, 14, 50.29, "W")
    },
    "108R": {
        "lat": DMStoDD(53, 25, 51.18, "N"),
        "lon": DMStoDD(006, 14, 51.55, "W")
    },
    "109L": {
        "lat": DMStoDD(53, 25, 51.31, "N"),
        "lon": DMStoDD(006, 14, 53.90, "W")
    },
    "109C": {
        "lat": DMStoDD(53, 25, 51.41, "N"),
        "lon": DMStoDD(006, 14, 54.95, "W")
    },
    "109R": {
        "lat": DMStoDD(53, 25, 51.44, "N"),
        "lon": DMStoDD(006, 14, 56.25, "W")
    },
    "110L": {
        "lat": DMStoDD(53, 25, 51.57, "N"),
        "lon": DMStoDD(006, 14, 58.59, "W")
    },
    "110C": {
        "lat": DMStoDD(53, 25, 51.65, "N"),
        "lon": DMStoDD(006, 14, 59.41, "W")
    },
    "110R": {
        "lat": DMStoDD(53, 25, 51.70, "N"),
        "lon": DMStoDD(006, 15, 0.94, "W")
    },
    "111L": {
        "lat": DMStoDD(53, 25, 52.23, "N"),
        "lon": DMStoDD(006, 15, 3.22, "W")
    },
    "111C": {
        "lat": DMStoDD(53, 25, 51.91, "N"),
        "lon": DMStoDD(006, 15, 4.05, "W")
    },
    "111R": {
        "lat": DMStoDD(53, 25, 52.35, "N"),
        "lon": DMStoDD(006, 15, 5.57, "W")
    },
    "118R": {
        "lat": DMStoDD(53, 25, 54.16, "N"),
        "lon": DMStoDD(006, 15, 9.91, "W")
    },
    "119L": {
        "lat": DMStoDD(53, 25, 52.89, "N"),
        "lon": DMStoDD(006, 15, 8.94, "W")
    },
    "119C": {
        "lat": DMStoDD(53, 25, 52.32, "N"),
        "lon": DMStoDD(006, 15, 7.71, "W")
    },
    "119S": {
        "lat": DMStoDD(53, 25, 51.93, "N"),
        "lon": DMStoDD(006, 15, 8.44, "W")
    },
    "119R": {
        "lat": DMStoDD(53, 25, 51.78, "N"),
        "lon": DMStoDD(006, 15, 7.31, "W")
    },
    "120L": {
        "lat": DMStoDD(53, 25, 50.20, "N"),
        "lon": DMStoDD(006, 15, 7.50, "W")
    },
    "120C": {
        "lat": DMStoDD(53, 25, 49.99, "N"),
        "lon": DMStoDD(006, 15, 6.01, "W")
    },
    "120R": {
        "lat": DMStoDD(53, 25, 48.91, "N"),
        "lon": DMStoDD(006, 15, 6.53, "W")
    },
    "121L": {
        "lat": DMStoDD(53, 25, 48.94, "N"),
        "lon": DMStoDD(006, 15, 4.86, "W")
    },
    "121": {
        "lat": DMStoDD(53, 25, 48.95, "N"),
        "lon": DMStoDD(006, 15, 2.60, "W")
    },
    "122": {
        "lat": DMStoDD(53, 25, 48.82, "N"),
        "lon": DMStoDD(006, 15, 0.26, "W")
    },
    "123": {
        "lat": DMStoDD(53, 25, 48.69, "N"),
        "lon": DMStoDD(006, 14, 57.91, "W")
    },
    "124": {
        "lat": DMStoDD(53, 25, 48.56, "N"),
        "lon": DMStoDD(006, 14, 55.56, "W")
    },
    "125": {
        "lat": DMStoDD(53, 25, 48.43, "N"),
        "lon": DMStoDD(006, 14, 53.22, "W")
    },
    "126": {
        "lat": DMStoDD(53, 25, 48.30, "N"),
        "lon": DMStoDD(006, 14, 50.87, "W")
    },
    "127": {
        "lat": DMStoDD(53, 25, 48.17, "N"),
        "lon": DMStoDD(006, 14, 48.53, "W")
    },
    "130": {
        "lat": DMStoDD(53, 25, 44.38, "N"),
        "lon": DMStoDD(006, 15, 1.15, "W")
    },
    "131S": {
        "lat": DMStoDD(53, 25, 44.48, "N"),
        "lon": DMStoDD(006, 14, 58.99, "W")
    },
    "132R": {
        "lat": DMStoDD(53, 25, 43.86, "N"),
        "lon": DMStoDD(006, 15, 2.38, "W")
    },
    "132C": {
        "lat": DMStoDD(53, 25, 43.62, "N"),
        "lon": DMStoDD(006, 15, 2.49, "W")
    },
    "132L": {
        "lat": DMStoDD(53, 25, 44.13, "N"),
        "lon": DMStoDD(006, 15, 3.56, "W")
    },
    "133L": {
        "lat": DMStoDD(53, 25, 45.42, "N"),
        "lon": DMStoDD(006, 15, 4.49, "W")
    },
    "133C": {
        "lat": DMStoDD(53, 25, 44.60, "N"),
        "lon": DMStoDD(006, 15, 3.47, "W")
    },
    "137L": {
        "lat": DMStoDD(53, 25, 57.62, "N"),
        "lon": DMStoDD(006, 14, 45.93, "W")
    },
    "137C": {
        "lat": DMStoDD(53, 25, 57.98, "N"),
        "lon": DMStoDD(006, 14, 44.91, "W")
    },
    "137R": {
        "lat": DMStoDD(53, 25, 57.51, "N"),
        "lon": DMStoDD(006, 14, 43.93, "W")
    },
    "138L": {
        "lat": DMStoDD(53, 25, 58.28, "N"),
        "lon": DMStoDD(006, 14, 50.38, "W")
    },
    "138T": {
        "lat": DMStoDD(53, 25, 58.10, "N"),
        "lon": DMStoDD(006, 14, 48.33, "W")
    },
    "138R": {
        "lat": DMStoDD(53, 25, 58.15, "N"),
        "lon": DMStoDD(006, 14, 48.03, "W")
    },
    "139L": {
        "lat": DMStoDD(53, 25, 58.54, "N"),
        "lon": DMStoDD(006, 14, 55.07, "W")
    },
    "139T": {
        "lat": DMStoDD(53, 25, 58.37, "N"),
        "lon": DMStoDD(006, 14, 53.03, "W")
    },
    "139R": {
        "lat": DMStoDD(53, 25, 58.41, "N"),
        "lon": DMStoDD(006, 14, 52.73, "W")
    },
    "140L": {
        "lat": DMStoDD(53, 25, 58.80, "N"),
        "lon": DMStoDD(006, 14, 59.76, "W")
    },
    "140T": {
        "lat": DMStoDD(53, 25, 58.62, "N"),
        "lon": DMStoDD(006, 14, 57.72, "W")
    },
    "140R": {
        "lat": DMStoDD(53, 25, 58.67, "N"),
        "lon": DMStoDD(006, 14, 57.42, "W")
    },
    "141L": {
        "lat": DMStoDD(53, 25, 59.05, "N"),
        "lon": DMStoDD(006, 15, 4.45, "W")
    },
    "141T": {
        "lat": DMStoDD(53, 25, 58.88, "N"),
        "lon": DMStoDD(006, 15, 2.41, "W")
    },
    "141R": {
        "lat": DMStoDD(53, 25,58.92, "N"),
        "lon": DMStoDD(006, 15, 2.11, "W")
    },
    "142L": {
        "lat": DMStoDD(53, 25, 59.31, "N"),
        "lon": DMStoDD(006, 15, 9.15, "W")
    },
    "142T": {
        "lat": DMStoDD(53, 25, 59.14, "N"),
        "lon": DMStoDD(006, 15, 7.10, "W")
    },
    "142R": {
        "lat": DMStoDD(53, 25, 59.18, "N"),
        "lon": DMStoDD(006, 15, 6.80, "W")
    },
    "144L": {
        "lat": DMStoDD(53, 25, 58.66, "N"),
        "lon": DMStoDD(006, 15, 14.83, "W")
    },
    "144C": {
        "lat": DMStoDD(53, 25, 59.57, "N"),
        "lon": DMStoDD(006, 15, 14.48, "W")
    },
    "144R": {
        "lat": DMStoDD(53, 25, 59.22, "N"),
        "lon": DMStoDD(006, 15, 12.59, "W")
    },
    "145": {
        "lat": DMStoDD(53, 25, 58.18, "N"),
        "lon": DMStoDD(006, 15, 16.73, "W")
    },
    "200L": {
        "lat": DMStoDD(53, 25, 43.76, "N"),
        "lon": DMStoDD(006, 14, 50.26, "W")
    },
    "200C": {
        "lat": DMStoDD(53, 25, 43.53, "N"),
        "lon": DMStoDD(006, 14, 51.45, "W")
    },
    "200R": {
        "lat": DMStoDD(53, 25, 43.86, "N"),
        "lon": DMStoDD(006, 14, 52.15, "W")
    },
    "200T": {
        "lat": DMStoDD(53, 25, 45.68, "N"),
        "lon": DMStoDD(006, 14, 48.65, "W")
    },
    "201": {
        "lat": DMStoDD(53, 25, 42.85, "N"),
        "lon": DMStoDD(006, 14, 52.92, "W")
    },
    "201S": {
        "lat": DMStoDD(53, 25, 42.90, "N"),
        "lon": DMStoDD(006, 14, 54.65, "W")
    },
    "202": {
        "lat": DMStoDD(53, 25, 41.90, "N"),
        "lon": DMStoDD(006, 14, 54.64, "W")
    },
    "202S": {
        "lat": DMStoDD(53, 25, 41.70, "N"),
        "lon": DMStoDD(006, 14, 56.80, "W")
    },
    "203L": {
        "lat": DMStoDD(53, 25, 41.29, "N"),
        "lon": DMStoDD(006, 14, 56.33, "W")
    },
    "203C": {
        "lat": DMStoDD(53, 25, 40.79, "N"),
        "lon": DMStoDD(006, 14, 55.28, "W")
    },
    "203R": {
        "lat": DMStoDD(53, 25, 40.38, "N"),
        "lon": DMStoDD(006, 14, 55.92, "W")
    },
    "205T": {
        "lat": DMStoDD(53, 25, 39.30, "N"),
        "lon": DMStoDD(006, 14, 53.55, "W")
    },
    "205L": {
        "lat": DMStoDD(53, 25, 39.55, "N"),
        "lon": DMStoDD(006, 14, 55.08, "W")
    },
    "205R": {
        "lat": DMStoDD(53, 25, 39.49, "N"),
        "lon": DMStoDD(006, 14, 53.40, "W")
    },
    "206T": {
        "lat": DMStoDD(53, 25, 40.08, "N"),
        "lon": DMStoDD(006, 14, 50.64, "W")
    },
    "207T": {
        "lat": DMStoDD(53, 25, 40.75, "N"),
        "lon": DMStoDD(006, 14, 49.19, "W")
    },
    "311L": {
        "lat": DMStoDD(53, 25, 36.51, "N"),
        "lon": DMStoDD(006, 14, 44.26, "W")
    },
    "311C": {
        "lat": DMStoDD(53, 25, 36.03, "N"),
        "lon": DMStoDD(006, 14, 46.56, "W")
    },
    "311R": {
        "lat": DMStoDD(53, 25, 35.83, "N"),
        "lon": DMStoDD(006, 14, 46.64, "W")
    },
    "312": {
        "lat": DMStoDD(53, 25, 35.49, "N"),
        "lon": DMStoDD(006, 14, 48.80, "W")
    },
};

console.log(EIDWStandCoords["110R"]);