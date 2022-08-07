import React from 'react';
import {IntlProvider} from 'react-intl';
import {addLocaleData} from 'react-intl';

import App from './App';

import es from 'react-intl/locale-data/es';
import messages from "./strings";

addLocaleData(es);

export default class Container extends React.Component {

	render() {
		return (
			<div>
				<IntlProvider locale="es" messages={messages}> 
					<App /> 
				</IntlProvider>
			</div>
		);
	}
}
