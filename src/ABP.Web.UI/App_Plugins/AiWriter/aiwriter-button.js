import { html, LitElement } from 'lit';
import { UmbTiptapButtonBase } from '@umbraco-cms/backoffice/tiptap';

export default class AiWriterButton extends UmbTiptapButtonBase {
    render() {
        return html`<uui-button
      label="AI Assist"
      look="outline"
      color="positive"
      @click=${this.#onClick}>
       AI Assist
    </uui-button>`;
    }

    async #onClick() {
        const editor = this.editor;
        if (!editor) return;

        const selectedText = editor.state.doc.textBetween(
            editor.state.selection.from,
            editor.state.selection.to,
            ' '
        );

        const prompt = selectedText || prompt('Enter a topic or question for AI:');
        if (!prompt) return;

        const response = await fetch('/umbraco/api/aiwriter/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();

        editor.chain().focus().insertContent(data.text).run();
    }
}

customElements.define('aiwriter-button', AiWriterButton);
