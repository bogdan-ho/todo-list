install:
	npm ci

start:
	npm start

build:
	npm build

lint:
	npx eslint .

linter-fix:
	npx eslint . --fix

test:
	npx playwright test
