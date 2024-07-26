<template>
	<div class="pa-4 text-center">
		<v-btn-group color="#b2d7ef" density="comfortable" rounded="pill" divided>
			<v-btn rounded="xl" size="x-large" class="w-10" color="orange">
				<v-icon icon="mdi-plus"></v-icon>
				<v-dialog activator="parent" max-width="800">
					<template v-slot:default="{ isActive }">
						<v-card rounded="lg">
							<v-card-title class="d-flex justify-space-between align-center">
								<div class="text-lg font-semibold">Add a new interview</div>
								<div>
									<v-btn
										class="text-none text-white"
										color="orange"
										rounded="xl"
										>Settings</v-btn
									>
									<v-btn
										icon="mdi-close"
										variant="text"
										@click="isActive.value = false"
									></v-btn>
								</div>
							</v-card-title>
							<v-card-text>
								<v-form>
									<v-text-field
										label="Interview topic"
										v-model="interviewTopic"
										variant="outlined"
										density="compact"
									></v-text-field>
									<v-divider class="mb-2"></v-divider>
									<div class="flex items-center justify-between mb-4">
										<label class="block mb-2">Questions:</label>
										<div class="space-x-4">
											<v-btn
												class="text-none text-white"
												color="orange"
												rounded="xl"
												variant="flat"
											>
												<Magic_icon />
											</v-btn>
											<v-btn
												@click="addQuestion"
												variant="outlined"
												color="orange"
												rounded="xl"
											>
												<v-icon
													icon="mdi-plus-circle-outline"
													size="25"
												></v-icon>
											</v-btn>
										</div>
									</div>
									<draggable v-model="questions" handle=".drag-handle">
										<template
											v-for="(question, index) in questions"
											:key="index"
										>
											<div
												class="flex flex-row-reverse gap-4 items-center space-y-4"
											>
												<div v-if="index !== 0">
													<v-btn
														class="text-none text-white"
														color="orange"
														rounded="xl"
														variant="flat"
														icon="mdi-close"
														size="40"
														@click="removeQuestion(index)"
													></v-btn>
												</div>
												<div class="flex items-center grow">
													<v-btn
														class="text-none text-orange-500 -mt-2 drag-handle"
														variant="outlined"
														color="gray"
														rounded="xs"
													>
														<Drag_icon />
													</v-btn>
													<v-text-field
														outlined
														density="compact"
														class="mb-2 h-10"
														v-model="questions[index]"
													></v-text-field>
													<v-btn
														class="text-none text-orange-500 -mt-2"
														variant="outlined"
														color="orange"
														rounded="xs"
														>set</v-btn
													>
												</div>
											</div>
										</template>
									</draggable>

									<div className="mb-4 mt-8 flex items-center">
										<div className="text-gray-200 w-full border-t"></div>
										<span
											className="text-gray-600 w-[400px] text-center text-sm font-medium"
											>Link to the interview</span
										>
										<div className="text-gray-200 w-full border-t "></div>
									</div>
									<div class="flex items-center">
										<v-text-field
											label="Interview URL"
											v-model="interviewURL"
											density="compact"
											class="h-10"
											readable
											outlined
										>
										</v-text-field>
										<v-btn @click="saveAndGetURL" class="text-none"
											>Save and Get URL</v-btn
										>
									</div>
									<div className="mb-4 mt-4 flex items-center">
										<div className="text-gray-200 w-full border-t"></div>
										<span
											className="text-gray-600 w-[300px] text-center text-sm font-medium"
											>Send by email</span
										>
										<div className="text-gray-200 w-full border-t"></div>
									</div>
									<div class="flex pt-4 gap-8">
										<div class="w-3/4">
											<v-textarea
												label="Candidates' email addresses. One per line"
												v-model="candidatesEmails"
												outlined
											></v-textarea>
										</div>
										<div class="w-1/4">
											<div class="space-y-4">
												<div class="flex space-x-1">
													<p class="text-[12px]">Email language:</p>
													<v-combobox
														v-model="emailLanguage"
														:items="languages"
														density="compact"
														dense
														class="h-5"
													></v-combobox>
												</div>
												<div class="text-right">
													<v-btn
														class="text-none text-orange-500"
														variant="outlined"
														color="orange"
														rounded="xl"
														@click="sendByEmail"
														>Send by email</v-btn
													>
												</div>
											</div>
										</div>
									</div>
								</v-form>
							</v-card-text>

							<v-divider class="mt-2"></v-divider>

							<v-card-actions class="my-2 d-flex justify-end">
								<v-btn
									class="text-none text-orange-500"
									variant="outlined"
									color="orange"
									rounded="xl"
									@click="isActive.value = false"
									>Cancel</v-btn
								>

								<v-btn
									class="text-none text-white"
									color="orange"
									rounded="xl"
									variant="flat"
									@click="isActive.value = false"
									>Save</v-btn
								>
							</v-card-actions>
						</v-card>
					</template>
				</v-dialog>
			</v-btn>
		</v-btn-group>
	</div>
</template>

<script>
import { ref } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import Magic_icon from '@/components/icons/magic_icon.vue';
import Drag_icon from '@/components/icons/drag_icon.vue';

export default {
	name: 'InterviewForm',
	components: {
		draggable: VueDraggableNext,
	},
	setup() {
		const interviewTopic = ref('');
		const questions = ref(['asa', 'hh']);
		const interviewURL = ref('');
		const candidatesEmails = ref('');
		const emailLanguage = ref('en');
		const languages = ref(['en', 'es']);

		const addQuestion = () => {
			questions.value.push('');
		};

		const removeQuestion = (index) => {
			console.log(index);
			console.log(questions);
			questions.value.splice(index, 1);
		};

		const saveAndGetURL = () => {
			// Logic to save and get URL
			interviewURL.value = 'http://example.com/interview';
		};

		const sendByEmail = () => {
			// Logic to send by email
		};

		const save = () => {
			// Logic to save
		};

		const cancel = () => {
			// Logic to cancel
		};

		return {
			interviewTopic,
			questions,
			interviewURL,
			candidatesEmails,
			emailLanguage,
			languages,
			addQuestion,
			removeQuestion,
			saveAndGetURL,
			sendByEmail,
			save,
			cancel,
		};
	},
};
</script>

<style>
.v-divider {
	border-color: rgba(0, 0, 0) !important;
}
.v-field--variant-outlined .v-field__outline__notch {
	position: unset;
}
</style>
