import { App, Modal, Plugin } from "obsidian";

export class CreateSubjectModal extends Modal {
	constructor(app: App, plugin: Plugin) {
		super(app);
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
    
}