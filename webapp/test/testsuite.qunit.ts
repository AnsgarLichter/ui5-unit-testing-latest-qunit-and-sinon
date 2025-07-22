export default {
	name: "QUnit test suite for the UI5 Application: com.testing.unit",
	defaults: {
		page: "ui5://test-resources/com/testing/unit/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 4
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon"
		},
		coverage: {
			only: "com/testing/unit/",
			never: "test-resources/com/testing/unit/"
		},
		loader: {
			paths: {
				"com/testing/unit": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for com.testing.unit"
		},
		"integration/opaTests": {
			title: "Integration tests for com.testing.unit"
		}
	}
};
