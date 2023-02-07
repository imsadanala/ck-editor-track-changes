/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Comments from '@ckeditor/ckeditor5-comments/src/comments.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import TrackChanges from '@ckeditor/ckeditor5-track-changes/src/trackchanges.js';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Comments,
	Essentials,
	Paragraph,
	TrackChanges
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'alignment',
			'fontColor', 'fontBackgroundColor', '|',
			'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
			'link', '|',
			'outdent', 'indent', '|',
			'bulletedList', '-', 'numberedList', 'todoList', '|',
			'code', 'codeBlock', '|',
			'undo',
			'redo',
			'|', 'trackChanges'
		]
	},
	language: 'en',
	comments: {
		editorConfig: {
			extraPlugins: [
			]
		}
	}
};

export default Editor;
