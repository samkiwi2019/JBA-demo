<template>
	<v-slide-y-transition>
		<v-dialog v-model="snackbar" max-width="290">
			<v-card :color="color" dark>
				<v-card-title class="headline"> {{ title }} </v-card-title>
				<v-card-text> {{ text }} </v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn dark text @click="handleDialog(false)"> Disagree </v-btn>
					<v-btn dark text @click="handleDialog(true)"> Agree </v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-slide-y-transition>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		},
		ok: {
			type: Function,
			default: () => {},
		},
	},
	data: () => ({
		snackbar: true,
	}),
	methods: {
		handleDialog(confirm) {
			this.snackbar = false;
			this.ok(confirm);
		},
	}
};
</script>