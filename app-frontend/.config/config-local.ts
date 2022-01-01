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
		// origin: "http://192.168.1.5:3000",
		origin: "http://localhost:5000/thunderstorm-staging/us-central1/api",
		timeout: 30000,
		compress: false
	},
	frontend: {
		// origin: "http://192.168.1.5:3010",
		origin: "http://localhost:5001",
	},
	FirebaseModule: {
		local: {}
	},
	PushPubSubModule: {
		publicKeyBase64: 'BBsKBw0R-mITlCSAOtCiHCLvKl-EetCmt5JKMg8L8ev1GqBEpDryum8ve3htIlbN3cjV1MLDFQnk0a8Wfks7cFk'
	},
	ExampleModule: {
		remoteUrl: "/v1/sample/endpoint-example"
	},
	ForceUpgrade: {
		assertVersionUrl: "/v1/version/assert"
	},
};