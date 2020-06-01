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

import {Module,} from "@nu-art/ts-common";

import {
	HttpModule,
	ThunderDispatcher
} from "@nu-art/thunderstorm/frontend";
import {
	CommonBodyReq,
	ExampleApiPostType,
	TestDispatch
} from "@app/app-shared";
import {HttpMethod} from "@nu-art/thunderstorm";

type Config = {
	remoteUrl: string
}

export const RequestKey_PostApi = "PostApi";
export const exampleDispatcher = new ThunderDispatcher<TestDispatch, 'testDispatch'>('testDispatch');

export const dispatchAll = () => {
	exampleDispatcher.dispatchUI([]);
	exampleDispatcher.dispatchModule([])
};


export class ExampleModule_Class
	extends Module<Config> {

	private message!: string;

	data: string[] = [];

	protected init(): void {
	}

	public exampleApiCall = () => {
		this.logInfo("getting label from server");
		const bodyObject: CommonBodyReq = {message: this.message || "No message"};

		HttpModule
			.createRequest<ExampleApiPostType>(HttpMethod.POST, RequestKey_PostApi)
			.setJsonBody(bodyObject)
			.setRelativeUrl("/v1/sample/another-endpoint")
			.setOnError(`Error getting new message from backend`)
			.execute(this.setMessage);

		this.logInfo("continue... will receive an event once request is completed..");
	};

	setMessage = async (message: string) => {
		this.logInfo(`got message: ${message}`);
		this.message = message;
	};

	getMessage = () => this.message;
}

export const ExampleModule = new ExampleModule_Class();
