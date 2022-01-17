const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        login: "admin",
        password: "fernando",
        options: {
            "sonar.login": "admin",
            "sonar.password": "fernando",
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
);