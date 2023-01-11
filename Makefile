install:
	npm ci

start:
	npm start

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

lint:
	npx eslint .

linter-fix:
	npx eslint . --fix

app-lint:
	docker-compose run --rm --no-deps web make lint

test:
	npx playwright test
