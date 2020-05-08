call token.bat
curl --user %CIRCLE_TOKEN%: --request POST --form config=@config.yml --form notify=false "https://circleci.com/api/v1.1/project/github/zeroboo/nodejs-random-selector/tree/master"