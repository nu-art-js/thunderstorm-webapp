/*
 * A backend boilerplate with example apis
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

// tslint:disable-next-line:no-import-side-effect
import 'module-alias/register';
import {RouteResolver, Storm} from '@nu-art/thunderstorm/backend';
import {Environment} from './config';
import {ExampleModule,} from '@modules/ExampleModule';
import {Module} from '@nu-art/ts-common';
import {Slack_ServerApiError, SlackModule} from '@nu-art/storm/slack';

import * as functions from 'firebase-functions';

const packageJson = require("./package.json");
console.log(`Starting server v${packageJson.version} with env: ${Environment.name}`);

const modules: Module[] = [
	ExampleModule,
	SlackModule,
	Slack_ServerApiError,
];

const _exports = new Storm()
	.addModules(...modules)
	.setInitialRouteResolver(new RouteResolver(require, __dirname, "api"))
	.setInitialRoutePath("/api")
	.setEnvironment(Environment.name)
	.build();

_exports.logTest = functions.database.ref('triggerLogs').onWrite(() => {
	console.log('LOG_TEST FUNCTION! -- Logging string');
	console.log({
		            firstProps: 'String prop',
		            secondProps: {
			            a: 'Nested Object Prop',
			            b: 10000
		            }
	            });
})

module.exports = _exports;