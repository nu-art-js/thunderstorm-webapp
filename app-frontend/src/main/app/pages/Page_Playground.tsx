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

import * as React from 'react';
import {
	Playground,
	PlaygroundScreen
} from "@nu-art/thunderstorm/frontend";
import {Hello} from "../Hello";
import {selectStyles} from "./SelectStyle";

const icon__arrowClose = require('@res/images/icon__arrowClose.svg');
const icon__arrowOpen = require('@res/images/icon__arrowOpen.svg');

export class Page_Playground
	extends React.Component<{}> {

	constructor(props: {}) {
		super(props);
		this.state = {};
	}

	render() {
		const screens = this.getScreens();
		return <Playground
			selectStyle={selectStyles}
			iconClose={icon__arrowClose}
			iconOpen={icon__arrowOpen}
			screens={screens}
		/>
	}

	getScreens(): PlaygroundScreen[] {
		return [
			{
				name: "Hello",
				getNode: () => <Hello/>
			},
		];
	}

}