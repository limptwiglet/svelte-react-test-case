<p>My name is {name}</p>

<script>
	console.log('rendered');
	export let name;
	export let select1;
	export let select2;
	export let items;

	$: if (items) {
		console.log('items', items);
	}

	$: {
		console.log(select1, select2);
	}
</script>
