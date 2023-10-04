import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-button',
    template: `
        <div 
            (click)="click($event)"
            role="presentation"
            class="btn btn-{{bgColor}} ff-{{fontFamily}} d-flex align-items-center justify-content-center rounded" 
            [style]="{'width': width, 'height':height,'background': bgColor, 'color':textColor}">
            <ng-content></ng-content>
        </div>
    `,
    styles: [`

        .btn {
            font-size: 16px !important;
        }

        @media (min-width: 1200px) {
            .btn {
                font-size: 20px !important;
            }
        }

    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

    /* The `@Output() eventClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();` line is
    defining an output property called `eventClick` for the `ButtonComponent` class. This means that
    when using the `ButtonComponent` in another component, you can listen to the `eventClick` event
    using event binding. */
    @Output() eventClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    /* The `@Input() public width = '100%';` line is defining an input property called `width` for the
    `ButtonComponent` class. */
    @Input() public width = '100%';

   /* The `@Input() public height = '100px';` line is defining an input property called `height` for
   the `ButtonComponent` class. This means that when using the `ButtonComponent` in another
   component, you can pass a value for the `height` property using property binding. The default
   value for `height` is set to `'100px'`. */
    @Input() public height = '100px';

   /* The `@Input() public bgColor = 'primary';` line is defining an input property called `bgColor`
   for the `ButtonComponent` class. This means that when using the `ButtonComponent` in another
   component, you can pass a value for the `bgColor` property using property binding. The default
   value for `bgColor` is set to `'primary'`. */
    @Input() public bgColor = 'primary';

    /* The `@Input() public textColor = 'white';` line is defining an input property called `textColor`
    for the `ButtonComponent` class. This means that when using the `ButtonComponent` in another
    component, you can pass a value for the `textColor` property using property binding. The default
    value for `textColor` is set to `'white'`. */
    @Input() public textColor = 'white';

    /* The `@Input() public fontFamily = 'kr';` line is defining an input property called `fontFamily`
    for the `ButtonComponent` class. This means that when using the `ButtonComponent` in another
    component, you can pass a value for the `fontFamily` property using property binding. The
    default value for `fontFamily` is set to `'kr'`. */
    @Input() public fontFamily = 'kr';

    /**
     * The click function emits a custom event called eventClick with the MouseEvent as the payload.
     * @param {MouseEvent} event - The event parameter is of type MouseEvent, which represents a mouse
     * event that occurred.
     */
    click(event: MouseEvent) {
        this.eventClick.emit(event);
    }

}