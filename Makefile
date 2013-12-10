BIN = ./node_modules/.bin

.PHONY: eslint
eslint:
	@$(BIN)/eslint lib/

.PHONY: jscs
jscs:
	@$(BIN)/jscs lib/

.PHONY: mocha
mocha:
	@$(BIN)/mocha \
	--reporter spec \
	--require must \
	--recursive

.PHONY: istanbul
istanbul:
	@$(BIN)/istanbul cover $(BIN)/_mocha -- \
	--reporter min \
	--require must \
	--recursive

.PHONY: coveralls
coveralls: istanbul
	@cat coverage/lcov.info | $(BIN)/coveralls

.PHONY: test
test: eslint jscs mocha

.PHONY: travis
travis: test coveralls
