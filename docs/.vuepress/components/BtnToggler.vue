<template>
	<select @change="this.setJapanese($event.target.value === 'jp')">
		<option value="int">International (× = Confirm)</option>
		<option value="jp" :selected="japanese">Japanese (○ = Confirm)</option>
	</select>
</template>

<script>
	export default {
		data: () => ({
			_japanese: false
		}),

		computed: {
			japanese() { return this._japanese; },
		},

		mounted() {
			this._japanese = localStorage.japanese === "true";
		},

		methods: {
			setJapanese(jp) {
				localStorage.japanese = !!jp;
			}
		}
	};
</script>
