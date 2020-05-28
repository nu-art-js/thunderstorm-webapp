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

import {RoutingModule} from "@nu-art/thunderstorm/frontend";
import {Page_Playground} from "./pages/Page_Playground";

export const Route_Home = "home";
export const Route_Login = "login";
export const Route_Playground = "playground";

export const registerRoutes = () => {
	RoutingModule.clearRoutes();

	//home route should be declared last
	RoutingModule.addRoute(Route_Home, "/", Page_Playground).setLabel("Home").setExact(false);
};