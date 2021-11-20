/*
 * A typescript & react boilerplate with api call example
 *
 * Copyright (C) 2020 Adam van der Kruk aka TacB0sS
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Created by tacb0ss on 01/10/2018.
 */
const WebpackEnvConfig = require('./_base.js');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const fs = require('fs');

class DevConfig
	extends WebpackEnvConfig {

	jsxMinify() {
		return false;
	}

	cssMinify() {
		return false;
	}

	outputFolder() {
		return "dev";
	}

	resolveGtmScript() {
		return WebpackEnvConfig._resolveGtmScript("GTM-DEV")
	}

	htmlMinificationOptions() {
	}

	getDevServerSSL() {
		return {
			key: fs.readFileSync('./.config/ssl/server-key.pem'),
			cert: fs.readFileSync('./.config/ssl/server-cert.pem'),
			// ca: fs.readFileSync('/path/to/ca.pem')
		}
	}

	getHostingPort() {
		return 8000;
	}
}

module.exports = new DevConfig();