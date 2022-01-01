/*
 * Permissions management system, define access level for each of
 * your server apis, and restrict users by giving them access levels
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

export const config = {
	XhrHttpModule: {
		origin: "https://us-central1-nu-art-thunderstorm.cloudfunctions.net/api",
		timeout: 10000
	},
	frontend: {
		origin: "https://nu-art-thunderstorm.firebaseapp.com",
	},
	ExampleModule: {
		remoteUrl: "/v1/sample/endpoint-example"
	},
	ForceUpgrade: {
		assertVersionUrl: "/v1/version/assert"
	},
	FirebaseModule: {
		local: {}
	},
	PushPubSubModule: {
		publicKeyBase64: 'BF0GqqEoe1UmqcU-dg3Dse_2ctkaq5uFpFuR6il1U9A3HkvYcL83I8yC_rX-G8mM8M0hnH5TqcSIsHScd4LTS28'
	},
};
