(function () {
    tinymce.PluginManager.add('aiwriter', function (editor) {
        editor.ui.registry.addButton('aiwriter', {
            text: 'AI Assist',
            tooltip: 'Generate or improve text with AI',
            onAction: function () {
                const selectedText = editor.selection.getContent({ format: 'text' });
                const prompt = selectedText || prompt("Enter a topic or prompt for AI:");
                if (!prompt) return;

                editor.setProgressState(true);
                fetch('/umbraco/api/aiwriter/generate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ prompt })
                })
                    .then(res => res.json())
                    .then(data => {
                        editor.insertContent(data.text);
                    })
                    .finally(() => editor.setProgressState(false));
            }
        });
    });
})();
