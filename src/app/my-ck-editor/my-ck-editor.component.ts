import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as customBuild from '../custom-ck-editor/build/ckEditor';

@Component({
  selector: 'app-my-ck-editor',
  templateUrl: './my-ck-editor.component.html',
  styleUrls: ['./my-ck-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyCkEditorComponent),
      multi: true
    }
  ]
})
export class MyCkEditorComponent implements OnInit, ControlValueAccessor {

  public Editor = customBuild;
  @Input() readonly: boolean = false;

  private _value: string = '';

  get value() {
    return this._value;
  }

  set value(v: string) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  constructor() { }

  onChange(_) {

  }
  onTouch() { }

  writeValue(obj: any): void {
    this._value = obj;

  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }


  ngOnInit(): void {
    this.initCkeditor();
    this.enableTrackChanges();
  }

  enableTrackChanges() {
    setTimeout(() => {
      let button: any = document.querySelector("#container > div.ck.ck-reset.ck-editor.ck-rounded-corners > div.ck.ck-editor__top.ck-reset_all > div > div.ck.ck-sticky-panel__content > div > div > div > div.ck.ck-splitbutton.ck-dropdown__button > button.ck.ck-button.ck-off.ck-splitbutton__action");
      if (button) {
        button.click();
      }
    }, 1000);
  }

  initCkeditor() {
   // this.Editor.builtinPlugins = [ Paragraph];

    this.Editor.create(document.querySelector('#editor'), {
      initialData: this.appData.initialData,
      extraPlugins: [TrackChangesIntegration],
      licenseKey: 'V7LLw1rX0rD/ln/RGmDv3CfiMWBoUO4EzCoq0PMgUbXJFTCyf0aADZgGKg==',
      sidebar: {
        container: document.querySelector('#sidebar')
      },
      toolbar: {
        items: ['trackChanges']
      }
    })
      .catch(error => console.error(error));
  }

  // @Input() config = {
  //   toolbar: {
  //     items: [
  //       'heading', '|',
  //       'fontfamily', 'fontsize',
  //       'alignment',
  //       'fontColor', 'fontBackgroundColor', '|',
  //       'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
  //       'link', '|',
  //       'outdent', 'indent', '|',
  //       'bulletedList', '-', 'numberedList', 'todoList', '|',
  //       'code', 'codeBlock', '|',
  //       'insertTable', '|',
  //       'imageUpload', 'blockQuote', '|',
  //       'todoList'
  //       ,
  //       'undo', 'redo',
  //     ],
  //     shouldNotGroupWhenFull: true,

  //   },
  //   image: {
  //     // Configure the available styles.
  //     styles: [
  //       'alignLeft', 'alignCenter', 'alignRight'
  //     ],

  //     // Configure the available image resize options.
  //     resizeOptions: [
  //       {
  //         name: 'resizeImage:original',
  //         label: 'Original',
  //         value: null
  //       },
  //       {
  //         name: 'resizeImage:50',
  //         label: '25%',
  //         value: '25'
  //       },
  //       {
  //         name: 'resizeImage:50',
  //         label: '50%',
  //         value: '50'
  //       },
  //       {
  //         name: 'resizeImage:75',
  //         label: '75%',
  //         value: '75'
  //       }
  //     ],
  //     // buttons as well as the resize buttons.
  //     toolbar: [
  //       'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
  //       '|',
  //       'ImageResize',
  //       '|',
  //       'imageTextAlternative'
  //     ]
  //   },
  //   language: 'en'
  // };

  onReady(editor) {
    console.log('Onready is called');
    //    this.Editor.execute('trackChanges');
    // if (editor.model.schema.isRegistered('image')) {
    //   editor.model.schema.extend('image', { allowAttributes: 'blockIndent' });
    // }


  }

  appData = {
    // Users data.
    users: [
      {
        id: 'user-1',
        name: 'Joe Doe',
        // Note that the avatar is optional.
        avatar: 'https://randomuser.me/api/portraits/thumb/men/26.jpg'
      },
      {
        id: 'user-2',
        name: 'Ella Harper',
        avatar: 'https://randomuser.me/api/portraits/thumb/women/65.jpg'
      }
    ],

    // The ID of the current user.
    userId: 'user-1',

    // Suggestions data.
    suggestions: [
      // {
      //   id: 'suggestion-1',
      //   type: 'insertion',
      //   authorId: 'user-2',
      //   createdAt: new Date(2019, 1, 13, 11, 20, 48),
      //   data: null,
      //   attributes: {}
      // },
      // {
      //   id: 'suggestion-2',
      //   type: 'deletion',
      //   authorId: 'user-1',
      //   createdAt: new Date(2019, 1, 14, 12, 7, 20),
      //   data: null,
      //   attributes: {}
      // },
      // {
      //   id: 'suggestion-3',
      //   type: 'formatInline:886cqig6g8rf',
      //   authorId: 'user-1',
      //   createdAt: new Date(2019, 2, 8, 10, 2, 7),
      //   data: {
      //     commandName: 'bold',
      //     commandParams: [{ forceValue: true }]
      //   },
      //   attributes: {}
      // }
    ],

    // Editor initial data.
    initialData:
      `<h2>
          Bilingual Personality Disorder
      </h2>
      <p>
          This may be the first time you hear about this TEST
          disorder but it actually is not that far from the truth.
          As recent studies show, the language you speak has more effects on you than you realize.
          According to the studies, the language a person speaks affects their cognition,
          behavior, emotions and hence <strong>their personality</strong>.
      </p>
      <p>
          This shouldn’t come as a surprise
          <a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>
          that different regions of the brain become more active depending on the activity.
          The structure, information and especially
          varies substantially
          and the language a person speaks is an essential element of daily life.
      </p>`
  };
}

class TrackChangesIntegration {
  public editor = customBuild;
  constructor(editor) {
    // this.editor = editor;
    // console.log("TRack Changes editor", editor);
  }

  init() {
    const usersPlugin = this.editor.plugins.get('Users');
    const trackChangesPlugin = this.editor.plugins.get('TrackChanges');
    //console.log('trackChangesPlugin... ', trackChangesPlugin);
    //trackChangesPlugin.isEnabled = true;
    // Load the users data.
    for (const user of this.appData.users) {
      usersPlugin.addUser(user);
    }

    // Set the current user.
    usersPlugin.defineMe(this.appData.userId);

    // Load the suggestions data.
    for (const suggestion of this.appData.suggestions) {
      trackChangesPlugin.addSuggestion(suggestion);
    }

    // In order to load comments added to suggestions, you
    // should also configure the comments integration.
  }

  // Application data will be available under a global variable `appData`.
  appData = {
    // Users data.
    users: [
      {
        id: 'user-1',
        name: 'Suresh Sadanala',
        // Note that the avatar is optional.
        avatar: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
      },
      {
        id: 'user-2',
        name: 'Naresh Gabbeti',
        avatar: 'https://randomuser.me/api/portraits/thumb/men/65.jpg'
      },
      {
        id: 'user-3',
        name: 'Sagarika Sen',
        avatar: 'https://randomuser.me/api/portraits/thumb/women/65.jpg'
      },
    ],

    // The ID of the current user.
    userId: 'user-2',

    // Suggestions data.
    suggestions: [
      // {
      //   id: 'suggestion-1',
      //   type: 'insertion',
      //   authorId: 'user-2',
      //   createdAt: new Date(2019, 1, 13, 11, 20, 48),
      //   data: null,
      //   attributes: {}
      // },
      // {
      //   id: 'suggestion-2',
      //   type: 'deletion',
      //   authorId: 'user-1',
      //   createdAt: new Date(2019, 1, 14, 12, 7, 20),
      //   data: null,
      //   attributes: {}
      // },
      // {
      //   id: 'suggestion-3',
      //   type: 'formatInline:886cqig6g8rf',
      //   authorId: 'user-1',
      //   createdAt: new Date(2019, 2, 8, 10, 2, 7),
      //   data: {
      //     commandName: 'bold',
      //     commandParams: [{ forceValue: true }]
      //   },
      //   attributes: {}
      // }
    ],

    // Editor initial data.
    initialData:
      `<h2>
          Bilingual Personality Disorder
      </h2>
      <p>
          This may be the first time you hear about this
          disorder but it actually is not that far from the truth.
          As recent studies show, the language you speak has more effects on you than you realize.
          According to the studies, the language a person speaks affects their cognition,
          <suggestion-start name="deletion:suggestion-2:user-1"></suggestion-start>
          feelings, <suggestion-end name="deletion:suggestion-2:user-1"></suggestion-end>
          behavior, emotions and hence <strong>their personality</strong>.
      </p>
      <p>
          This shouldn’t come as a surprise
          <a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>
          that different regions of the brain become more active depending on the activity.
          The structure, information and especially
          <suggestion-start name="formatInline:886cqig6g8rf:suggestion-3:user-1"></suggestion-start>
          the culture of languages<suggestion-end name="formatInline:886cqig6g8rf:suggestion-3:user-1"></suggestion-end>
          varies substantially
          and the language a person speaks is an essential element of daily life.
      </p>`
  };


}


