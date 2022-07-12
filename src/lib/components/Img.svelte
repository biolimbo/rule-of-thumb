<script>
	//

	console.log('CHECKING PROPS', $$props);
</script>

<img
	class={$$props.class}
	alt={$$props.alt}
	src="{$$props.path}.jpg"
	srcset={`${$$props.path}.jpg 1x, ${$$props.path}@2x.jpg 2x`}
/>
