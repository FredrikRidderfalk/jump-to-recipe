import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-wrap gap-2">
      <div
        (click)="onTagClick('quick')"
        class="flex flex-col items-center justify-center text-slate-700 bg-green-50 border border-green-600 rounded-md py-2 px-2 text-xs font-medium w-16 h-16 hover:shadow-md transition-all ease-in-out cursor-pointer"
        [ngClass]="{
          'opacity-50': hasAnyTagSelected && !isTagSelected('quick'),
          'shadow-md': isTagSelected('quick')
        }"
      >
        <svg class="mb-1" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.0007 42.1663C10.8629 42.1663 1.83398 33.1374 1.83398 21.9997C1.83398 10.8619 10.8629 1.83301 22.0007 1.83301C33.1384 1.83301 42.1673 10.8619 42.1673 21.9997C42.1673 33.1374 33.1384 42.1663 22.0007 42.1663ZM22.0007 38.4997C31.1133 38.4997 38.5007 31.1124 38.5007 21.9997C38.5007 12.887 31.1133 5.49967 22.0007 5.49967C12.888 5.49967 5.50065 12.887 5.50065 21.9997C5.50065 31.1124 12.888 38.4997 22.0007 38.4997ZM31.1673 20.1663H23.834V10.9997H20.1673V23.833H31.1673V20.1663Z"
            fill="#344154"
          />
        </svg>
        Quick
      </div>

      <div
        (click)="onTagClick('easy')"
        class="flex flex-col items-center justify-center text-slate-700 bg-purple-100 border border-purple-600 rounded-md py-2 px-2 text-xs font-medium w-16 h-16 hover:shadow-md transition-all ease-in-out cursor-pointer"
        [ngClass]="{
          'opacity-50': hasAnyTagSelected && !isTagSelected('easy'),
          'shadow-md': isTagSelected('easy')
        }"
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.83398 21.9997C1.83398 33.1374 10.8629 42.1663 22.0007 42.1663C33.1384 42.1663 42.1673 33.1374 42.1673 21.9997C42.1673 10.8619 33.1384 1.83301 22.0007 1.83301C10.8629 1.83301 1.83398 10.8619 1.83398 21.9997ZM38.5007 21.9997C38.5007 31.1124 31.1133 38.4997 22.0007 38.4997C12.888 38.4997 5.50065 31.1124 5.50065 21.9997C5.50065 12.887 12.888 5.49967 22.0007 5.49967C31.1133 5.49967 38.5007 12.887 38.5007 21.9997ZM22.0595 34.833C15.9041 34.833 12.4791 31.5909 12.4791 25.6663V23.833H31.3796L31.4303 25.6142C31.5996 31.5595 28.2346 34.833 22.0595 34.833ZM27.6611 27.4997C27.2304 30.0581 25.5004 31.1663 22.0595 31.1663C18.6205 31.1663 16.8339 30.0484 16.3114 27.4997H27.6611ZM25.6673 14.6663H31.1673V18.333H25.6673V14.6663ZM18.334 14.6663H12.834V18.333H18.334V14.6663Z"
            fill="#344154"
          />
        </svg>
        Easy
      </div>

      <div
        (click)="onTagClick('temperature')"
        class="flex flex-col items-center justify-center text-slate-700 bg-orange-50 border border-orange-600 rounded-md py-2 px-2 text-xs font-medium w-16 h-16 hover:shadow-md transition-all ease-in-out cursor-pointer"
        [ngClass]="{
          'opacity-50': hasAnyTagSelected && !isTagSelected('temperature'),
          'shadow-md': isTagSelected('temperature')
        }"
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.89763 39.9661C4.85983 36.1811 1.83398 30.2571 1.83398 23.8337C1.83398 12.6959 10.8629 3.66699 22.0007 3.66699C33.1384 3.66699 42.1673 12.6959 42.1673 23.8337C42.1673 30.2571 39.1415 36.1811 34.1037 39.9661L33.6144 40.3337H10.3869L9.89763 39.9661ZM32.3727 36.667C36.2145 33.5595 38.5007 28.8881 38.5007 23.8337C38.5007 14.721 31.1133 7.33366 22.0007 7.33366C12.888 7.33366 5.50065 14.721 5.50065 23.8337C5.50065 28.8881 7.78678 33.5595 11.6286 36.667H32.3727ZM31.7526 13.885L28.7487 11.7823L23.9215 18.6784C23.3235 18.4555 22.6763 18.3337 22.0007 18.3337C18.9631 18.3337 16.5007 20.7961 16.5007 23.8337C16.5007 26.8712 18.9631 29.3337 22.0007 29.3337C25.0382 29.3337 27.5007 26.8712 27.5007 23.8337C27.5007 22.8153 27.2239 21.8616 26.7415 21.0437L31.7526 13.885ZM23.834 23.8337C23.834 24.8462 23.0132 25.667 22.0007 25.667C20.9881 25.667 20.1673 24.8462 20.1673 23.8337C20.1673 22.8211 20.9881 22.0003 22.0007 22.0003C23.0132 22.0003 23.834 22.8211 23.834 23.8337Z"
            fill="#344154"
          />
        </svg>
        Oven
      </div>

      <div
        (click)="onTagClick('clean')"
        class="flex flex-col items-center justify-center text-slate-700 bg-sky-100 border border-sky-600 rounded-md py-2 px-2 text-xs font-medium w-16 h-16 hover:shadow-md transition-all ease-in-out cursor-pointer"
        [ngClass]="{
          'opacity-50': hasAnyTagSelected && !isTagSelected('clean'),
          'shadow-md': isTagSelected('clean')
        }"
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.2058 2.28533C33.3459 11.1395 38.5 18.8706 38.5 25.6663C38.5 35.2901 30.9887 42.1663 22 42.1663C13.0113 42.1663 5.5 35.2901 5.5 25.6663C5.5 18.8706 10.6541 11.1395 20.7942 2.28533L22 1.23242L23.2058 2.28533ZM9.16667 25.6663C9.16667 33.1892 14.9675 38.4996 22 38.4996C29.0325 38.4996 34.8333 33.1892 34.8333 25.6663C34.8333 20.4427 30.6045 13.8715 22 6.11673C13.3955 13.8715 9.16667 20.4427 9.16667 25.6663ZM22 32.9996V36.6663C28.0751 36.6663 33 31.7414 33 25.6663H29.3333C29.3333 29.7164 26.0501 32.9996 22 32.9996Z"
            fill="#344154"
          />
        </svg>
        Clean
      </div>

      <div
        (click)="onTagClick('cheap')"
        class="flex flex-col items-center justify-center text-slate-700 bg-yellow-50 border border-yellow-500 rounded-md py-2 px-2 text-xs font-medium w-16 h-16 hover:shadow-md transition-all ease-in-out cursor-pointer"
        [ngClass]="{
          'opacity-50': hasAnyTagSelected && !isTagSelected('cheap'),
          'shadow-md': isTagSelected('cheap')
        }"
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9818 9.16699H38.5006C40.5257 9.16699 42.1673 10.8086 42.1673 12.8337V31.167C42.1673 33.192 40.5257 34.8337 38.5006 34.8337H11.9818C10.7559 34.8337 9.61101 34.221 8.93097 33.2009L2.14189 23.0173C1.73135 22.4015 1.73135 21.5992 2.14189 20.9834L8.93097 10.7998C9.61101 9.7797 10.7559 9.16699 11.9818 9.16699ZM5.87071 22.0003L11.9818 31.167H38.5007V12.8337H11.9818L5.87071 22.0003ZM14.6673 22.0003C14.6673 23.0128 13.8465 23.8337 12.834 23.8337C11.8215 23.8337 11.0007 23.0128 11.0007 22.0003C11.0007 20.9878 11.8215 20.167 12.834 20.167C13.8465 20.167 14.6673 20.9878 14.6673 22.0003Z"
            fill="#344154"
          />
        </svg>
        Cheap
      </div>
    </div>
  `,
})
export class TagsComponent {
  @Input() selectedTags: Set<string> = new Set();
  @Output() tagToggle = new EventEmitter<string>();

  get hasAnyTagSelected(): boolean {
    return this.selectedTags.size > 0;
  }

  isTagSelected(tag: string): boolean {
    return this.selectedTags.has(tag);
  }

  onTagClick(tag: string): void {
    this.tagToggle.emit(tag);
  }
}
