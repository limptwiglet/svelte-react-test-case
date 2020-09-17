import React, { useState } from 'react';
import SvelteComponent from './SvelteComponent.svelte';
import toReact from 'svelte-adapter/react';

const WrappedComponent = toReact(SvelteComponent);

export default () => {
	const [name, setName] = useState('Ttest');
	const [select1, setSelect1] = useState();
	const [select2, setSelect2] = useState();
	const items = ['1', '2'];

	const onSelect1Change = event => {
		setSelect1(event.target.value);
	};

	const onSelect2Change = event => {
		setSelect2(event.target.value);
	};

	return (
		<div>
			<h1>Welcome</h1>

			<select value={select1} onChange={onSelect1Change}>
				<option valaue="1:1">Select 1:1</option>
				<option value="1:2">Select 1:2</option>
			</select>

			<select value={select2} onChange={onSelect2Change}>
				<option valaue="2:1">Select 2:1</option>
				<option value="2:2">Select 2:2</option>
			</select>

			
			<WrappedComponent name={name} items={items} select1={select1} select2={select2}/>
		</div>
	);
}
