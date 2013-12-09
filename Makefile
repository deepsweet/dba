BIN = ./node_modules/.bin

.PHONY: eslint
eslint:
	@$(BIN)/eslint lib/

.PHONY: jscs
jscs:
	@$(BIN)/jscs lib/

.PHONY: test
test: eslint jscs
