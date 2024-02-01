import type { Config } from 'tailwindcss'

export default {
  content: [./app/routes .{html,js,tsx}],
  theme: {

    *,:after,:before {
      border: 0 solid #e5e7eb;
      box-sizing: border-box
  }

  :after,:before {
      --tw-content: ""
  }

  html {
      -webkit-text-size-adjust: 100%;
      font-feature-settings: normal;
      font-family: ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
      font-variation-settings: normal;
      line-height: 1.5;
      tab-size: 4
  }

  body {
      line-height: inherit;
      margin: 0
  }

  hr {
      border-top-width: 1px;
      color: inherit;
      height: 0
  }

  abbr:where([title]) {
      text-decoration: underline;
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted
  }

  h1,h2,h3,h4,h5,h6 {
      font-size: inherit;
      font-weight: inherit
  }

  a {
      color: inherit;
      text-decoration: inherit
  }

  b,strong {
      font-weight: bolder
  }

  code,kbd,pre,samp {
      font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
      font-size: 1em
  }

  small {
      font-size: 80%
  }

  sub,sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline
  }

  sub {
      bottom: -.25em
  }

  sup {
      top: -.5em
  }

  table {
      border-collapse: collapse;
      border-color: inherit;
      text-indent: 0
  }

  button,input,optgroup,select,textarea {
      font-feature-settings: inherit;
      color: inherit;
      font-family: inherit;
      font-size: 100%;
      font-variation-settings: inherit;
      font-weight: inherit;
      line-height: inherit;
      margin: 0;
      padding: 0
  }

  button,select {
      text-transform: none
  }

  [type=button],[type=reset],[type=submit],button {
      -webkit-appearance: button;
      background-color: transparent;
      background-image: none
  }

  :-moz-focusring {
      outline: auto
  }

  :-moz-ui-invalid {
      box-shadow: none
  }

  progress {
      vertical-align: baseline
  }

  ::-webkit-inner-spin-button,::-webkit-outer-spin-button {
      height: auto
  }

  [type=search] {
      -webkit-appearance: textfield;
      outline-offset: -2px
  }

  ::-webkit-search-decoration {
      -webkit-appearance: none
  }

  ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit
  }

  summary {
      display: list-item
  }

  blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre {
      margin: 0
  }

  fieldset {
      margin: 0
  }

  fieldset,legend {
      padding: 0
  }

  menu,ol,ul {
      list-style: none;
      margin: 0;
      padding: 0
  }

  dialog {
      padding: 0
  }

  textarea {
      resize: vertical
  }

  input::placeholder,textarea::placeholder {
      color: #9ca3af;
      opacity: 1
  }

  [role=button],button {
      cursor: pointer
  }

  :disabled {
      cursor: default
  }

  audio,canvas,embed,iframe,img,object,svg,video {
      display: block;
      vertical-align: middle
  }

  img,video {
      height: auto;
      max-width: 100%
  }

  [hidden] {
      display: none
  }

  *,:after,:before {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scroll-snap-strictness: proximity;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgba(59,130,246,.5);
      --tw-ring-offset-shadow: 0 0 transparent;
      --tw-ring-shadow: 0 0 transparent;
      --tw-shadow: 0 0 transparent;
      --tw-shadow-colored: 0 0 transparent
  }

  ::backdrop {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scroll-snap-strictness: proximity;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgba(59,130,246,.5);
      --tw-ring-offset-shadow: 0 0 transparent;
      --tw-ring-shadow: 0 0 transparent;
      --tw-shadow: 0 0 transparent;
      --tw-shadow-colored: 0 0 transparent
  }

  .container {
      width: 100%
  }

  @media (min-width: 480px) {
      .container {
          max-width:480px
      }
  }

  @media (min-width: 640px) {
      .container {
          max-width:640px
      }
  }

  @media (min-width: 768px) {
      .container {
          max-width:768px
      }
  }

  @media (min-width: 1024px) {
      .container {
          max-width:1024px
      }
  }

  @media (min-width: 1280px) {
      .container {
          max-width:1280px
      }
  }

  @media (min-width: 1366px) {
      .container {
          max-width:1366px
      }
  }

  @media (min-width: 1440px) {
      .container {
          max-width:1440px
      }
  }

  @media (min-width: 1536px) {
      .container {
          max-width:1536px
      }
  }

  @media (min-width: 1680px) {
      .container {
          max-width:1680px
      }
  }

  .sr-only {
      clip: rect(0,0,0,0);
      border-width: 0;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px
  }

  .pointer-events-none {
      pointer-events: none
  }

  .visible {
      visibility: visible
  }

  .invisible {
      visibility: hidden
  }

  .collapse {
      visibility: collapse
  }

  .static {
      position: static
  }

  .fixed {
      position: fixed
  }

  .absolute {
      position: absolute
  }

  .relative {
      position: relative
  }

  .sticky {
      position: sticky
  }

  .inset-0 {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0
  }

  .-bottom-px {
      bottom: -1px
  }

  .-top-px {
      top: -1px
  }

  .bottom-0 {
      bottom: 0
  }

  .bottom-2 {
      bottom: .5rem
  }

  .bottom-3 {
      bottom: .75rem
  }

  .bottom-4 {
      bottom: 1rem
  }

  .left-0 {
      left: 0
  }

  .left-2 {
      left: .5rem
  }

  .left-3 {
      left: .75rem
  }

  .right-0 {
      right: 0
  }

  .right-1 {
      right: .25rem
  }

  .right-2 {
      right: .5rem
  }

  .right-3 {
      right: .75rem
  }

  .right-4 {
      right: 1rem
  }

  .right-6 {
      right: 1.5rem
  }

  .top-0 {
      top: 0
  }

  .top-1 {
      top: .25rem
  }

  .top-1\/2 {
      top: 50%
  }

  .top-1\/4 {
      top: 25%
  }

  .top-2 {
      top: .5rem
  }

  .top-3 {
      top: .75rem
  }

  .top-4 {
      top: 1rem
  }

  .top-5 {
      top: 1.25rem
  }

  .top-6 {
      top: 1.5rem
  }

  .top-full {
      top: 100%
  }

  .z-0 {
      z-index: 0
  }

  .z-10 {
      z-index: 10
  }

  .z-20 {
      z-index: 20
  }

  .z-40 {
      z-index: 40
  }

  .z-50 {
      z-index: 50
  }

  .order-first {
      order: -9999
  }

  .order-last {
      order: 9999
  }

  .col-span-1 {
      grid-column: span 1/span 1
  }

  .col-span-12 {
      grid-column: span 12/span 12
  }

  .col-span-2 {
      grid-column: span 2/span 2
  }

  .col-span-3 {
      grid-column: span 3/span 3
  }

  .col-span-6 {
      grid-column: span 6/span 6
  }

  .m-0 {
      margin: 0
  }

  .m-1 {
      margin: .25rem
  }

  .m-2 {
      margin: .5rem
  }

  .m-auto {
      margin: auto
  }

  .mx-1 {
      margin-left: .25rem;
      margin-right: .25rem
  }

  .mx-2 {
      margin-left: .5rem;
      margin-right: .5rem
  }

  .mx-3 {
      margin-left: .75rem;
      margin-right: .75rem
  }

  .mx-4 {
      margin-left: 1rem;
      margin-right: 1rem
  }

  .mx-auto {
      margin-left: auto;
      margin-right: auto
  }

  .my-2 {
      margin-bottom: .5rem;
      margin-top: .5rem
  }

  .my-3 {
      margin-bottom: .75rem;
      margin-top: .75rem
  }

  .my-4 {
      margin-bottom: 1rem;
      margin-top: 1rem
  }

  .my-5 {
      margin-bottom: 1.25rem;
      margin-top: 1.25rem
  }

  .my-6 {
      margin-bottom: 1.5rem;
      margin-top: 1.5rem
  }

  .my-8 {
      margin-bottom: 2rem;
      margin-top: 2rem
  }

  .my-9 {
      margin-bottom: 2.25rem;
      margin-top: 2.25rem
  }

  .-mb-10 {
      margin-bottom: -2.5rem
  }

  .-mr-10 {
      margin-right: -2.5rem
  }

  .-mt-28 {
      margin-top: -7rem
  }

  .mb-0 {
      margin-bottom: 0
  }

  .mb-1 {
      margin-bottom: .25rem
  }

  .mb-10 {
      margin-bottom: 2.5rem
  }

  .mb-12 {
      margin-bottom: 3rem
  }

  .mb-2 {
      margin-bottom: .5rem
  }

  .mb-20 {
      margin-bottom: 5rem
  }

  .mb-3 {
      margin-bottom: .75rem
  }

  .mb-4 {
      margin-bottom: 1rem
  }

  .mb-5 {
      margin-bottom: 1.25rem
  }

  .mb-6 {
      margin-bottom: 1.5rem
  }

  .mb-8 {
      margin-bottom: 2rem
  }

  .ml-1 {
      margin-left: .25rem
  }

  .ml-2 {
      margin-left: .5rem
  }

  .ml-3 {
      margin-left: .75rem
  }

  .ml-4 {
      margin-left: 1rem
  }

  .ml-8 {
      margin-left: 2rem
  }

  .ml-auto {
      margin-left: auto
  }

  .mr-1 {
      margin-right: .25rem
  }

  .mr-10 {
      margin-right: 2.5rem
  }

  .mr-2 {
      margin-right: .5rem
  }

  .mr-3 {
      margin-right: .75rem
  }

  .mr-4 {
      margin-right: 1rem
  }

  .mr-5 {
      margin-right: 1.25rem
  }

  .mr-6 {
      margin-right: 1.5rem
  }

  .mt-1 {
      margin-top: .25rem
  }

  .mt-10 {
      margin-top: 2.5rem
  }

  .mt-12 {
      margin-top: 3rem
  }

  .mt-14 {
      margin-top: 3.5rem
  }

  .mt-2 {
      margin-top: .5rem
  }

  .mt-3 {
      margin-top: .75rem
  }

  .mt-4 {
      margin-top: 1rem
  }

  .mt-5 {
      margin-top: 1.25rem
  }

  .mt-6 {
      margin-top: 1.5rem
  }

  .mt-8 {
      margin-top: 2rem
  }

  .mt-9 {
      margin-top: 2.25rem
  }

  .\!block {
      display: block!important
  }

  .block {
      display: block
  }

  .inline-block {
      display: inline-block
  }

  .inline {
      display: inline
  }

  .flex {
      display: flex
  }

  .inline-flex {
      display: inline-flex
  }

  .table {
      display: table
  }

  .grid {
      display: grid
  }

  .contents {
      display: contents
  }

  .\!hidden {
      display: none!important
  }

  .hidden {
      display: none
  }

  .h-0 {
      height: 0
  }

  .h-10 {
      height: 2.5rem
  }

  .h-11 {
      height: 2.75rem
  }

  .h-12 {
      height: 3rem
  }

  .h-14 {
      height: 3.5rem
  }

  .h-16 {
      height: 4rem
  }

  .h-2 {
      height: .5rem
  }

  .h-3 {
      height: .75rem
  }

  .h-4 {
      height: 1rem
  }

  .h-5 {
      height: 1.25rem
  }

  .h-6 {
      height: 1.5rem
  }

  .h-7 {
      height: 1.75rem
  }

  .h-9 {
      height: 2.25rem
  }

  .h-\[26px\] {
      height: 26px
  }

  .h-\[60px\] {
      height: 60px
  }

  .h-auto {
      height: auto
  }

  .h-full {
      height: 100%
  }

  .max-h-96 {
      max-height: 24rem
  }

  .max-h-full {
      max-height: 100%
  }

  .min-h-full {
      min-height: 100%
  }

  .w-1\/2 {
      width: 50%
  }

  .w-1\/3 {
      width: 33.333333%
  }

  .w-1\/6 {
      width: 16.666667%
  }

  .w-10 {
      width: 2.5rem
  }

  .w-10\/12 {
      width: 83.333333%
  }

  .w-11 {
      width: 2.75rem
  }

  .w-12 {
      width: 3rem
  }

  .w-16 {
      width: 4rem
  }

  .w-2 {
      width: .5rem
  }

  .w-2\/3 {
      width: 66.666667%
  }

  .w-2\/6 {
      width: 33.333333%
  }

  .w-20 {
      width: 5rem
  }

  .w-24 {
      width: 6rem
  }

  .w-3 {
      width: .75rem
  }

  .w-32 {
      width: 8rem
  }

  .w-4 {
      width: 1rem
  }

  .w-4\/5 {
      width: 80%
  }

  .w-40 {
      width: 10rem
  }

  .w-5 {
      width: 1.25rem
  }

  .w-5\/6 {
      width: 83.333333%
  }

  .w-52 {
      width: 13rem
  }

  .w-6 {
      width: 1.5rem
  }

  .w-7 {
      width: 1.75rem
  }

  .w-72 {
      width: 18rem
  }

  .w-9 {
      width: 2.25rem
  }

  .w-96 {
      width: 24rem
  }

  .w-\[120px\] {
      width: 120px
  }

  .w-\[65px\] {
      width: 65px
  }

  .w-auto {
      width: auto
  }

  .w-flyout-sm {
      width: 330px
  }

  .w-full {
      width: 100%
  }

  .min-w-\[200px\] {
      min-width: 200px
  }

  .max-w-2xl {
      max-width: 42rem
  }

  .max-w-3xl {
      max-width: 48rem
  }

  .max-w-4xl {
      max-width: 56rem
  }

  .max-w-flyout-sm {
      max-width: 330px
  }

  .max-w-full {
      max-width: 100%
  }

  .max-w-lg {
      max-width: 32rem
  }

  .max-w-md {
      max-width: 28rem
  }

  .max-w-portal-container {
      max-width: 840px
  }

  .max-w-screen-2xl {
      max-width: 1536px
  }

  .max-w-sm {
      max-width: 24rem
  }

  .max-w-xl {
      max-width: 36rem
  }

  .max-w-xs {
      max-width: 20rem
  }

  .flex-shrink-0,.shrink-0 {
      flex-shrink: 0
  }

  .flex-grow,.grow {
      flex-grow: 1
  }

  .grow-0 {
      flex-grow: 0
  }

  .border-collapse {
      border-collapse: collapse
  }

  .-translate-y-1\/2 {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x),-50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }

  .-translate-y-full {
      --tw-translate-y: -100%;
      transform: translate(var(--tw-translate-x),-100%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }

  .-translate-y-px {
      --tw-translate-y: -1px;
      transform: translate(var(--tw-translate-x),-1px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }

  .rotate-180 {
      --tw-rotate: 180deg;
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }

  .rotate-180,.transform {
      transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
  }

  .cursor-default {
      cursor: default
  }

  .cursor-not-allowed {
      cursor: not-allowed
  }

  .cursor-pointer {
      cursor: pointer
  }

  .select-none {
      -webkit-user-select: none;
      user-select: none
  }

  .resize {
      resize: both
  }

  .list-none {
      list-style-type: none
  }

  .appearance-none {
      -webkit-appearance: none;
      appearance: none
  }

  .grid-flow-row {
      grid-auto-flow: row
  }

  .auto-rows-auto {
      grid-auto-rows: auto
  }

  .grid-cols-1 {
      grid-template-columns: repeat(1,minmax(0,1fr))
  }

  .grid-cols-12 {
      grid-template-columns: repeat(12,minmax(0,1fr))
  }

  .grid-cols-2 {
      grid-template-columns: repeat(2,minmax(0,1fr))
  }

  .grid-cols-3 {
      grid-template-columns: repeat(3,minmax(0,1fr))
  }

  .grid-cols-4 {
      grid-template-columns: repeat(4,minmax(0,1fr))
  }

  .flex-row {
      flex-direction: row
  }

  .flex-col {
      flex-direction: column
  }

  .flex-col-reverse {
      flex-direction: column-reverse
  }

  .flex-wrap {
      flex-wrap: wrap
  }

  .items-start {
      align-items: flex-start
  }

  .items-end {
      align-items: flex-end
  }

  .items-center {
      align-items: center
  }

  .items-baseline {
      align-items: baseline
  }

  .justify-start {
      justify-content: flex-start
  }

  .justify-end {
      justify-content: flex-end
  }

  .justify-center {
      justify-content: center
  }

  .justify-between {
      justify-content: space-between
  }

  .justify-around {
      justify-content: space-around
  }

  .justify-items-start {
      justify-items: start
  }

  .justify-items-end {
      justify-items: end
  }

  .justify-items-center {
      justify-items: center
  }

  .gap-1 {
      gap: .25rem
  }

  .gap-10 {
      gap: 2.5rem
  }

  .gap-12 {
      gap: 3rem
  }

  .gap-2 {
      gap: .5rem
  }

  .gap-3 {
      gap: .75rem
  }

  .gap-4 {
      gap: 1rem
  }

  .gap-5 {
      gap: 1.25rem
  }

  .gap-6 {
      gap: 1.5rem
  }

  .gap-8 {
      gap: 2rem
  }

  .divide-y>:not([hidden])~:not([hidden]) {
      --tw-divide-y-reverse: 0;
      border-bottom-width: 0;
      border-bottom-width: calc(1px*var(--tw-divide-y-reverse));
      border-top-width: 1px;
      border-top-width: calc(1px*(1 - var(--tw-divide-y-reverse)))
  }

  .divide-gray-100>:not([hidden])~:not([hidden]) {
      --tw-divide-opacity: 1;
      border-color: #f3f4f6
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .divide-gray-100>:not([hidden])~:not([hidden]) {
          border-color:rgb(243 244 246/var(--tw-divide-opacity))
      }
  }

  .overflow-auto {
      overflow: auto
  }

  .overflow-hidden {
      overflow: hidden
  }

  .overflow-x-auto {
      overflow-x: auto
  }

  .overflow-y-auto {
      overflow-y: auto
  }

  .text-ellipsis {
      text-overflow: ellipsis
  }

  .whitespace-nowrap {
      white-space: nowrap
  }

  .rounded {
      border-radius: .25rem
  }

  .rounded-full {
      border-radius: 9999px
  }

  .rounded-lg {
      border-radius: .5rem
  }

  .rounded-sm {
      border-radius: .125rem
  }

  .rounded-b {
      border-bottom-left-radius: .25rem;
      border-bottom-right-radius: .25rem
  }

  .border {
      border-width: 1px
  }

  .border-0 {
      border-width: 0
  }

  .border-2 {
      border-width: 2px
  }

  .border-x {
      border-left-width: 1px;
      border-right-width: 1px
  }

  .border-x-0 {
      border-left-width: 0;
      border-right-width: 0
  }

  .border-b {
      border-bottom-width: 1px
  }

  .border-b-0 {
      border-bottom-width: 0
  }

  .border-r {
      border-right-width: 1px
  }

  .border-t {
      border-top-width: 1px
  }

  .border-t-0 {
      border-top-width: 0
  }

  .border-t-4 {
      border-top-width: 4px
  }

  .border-solid {
      border-style: solid
  }

  .border-dashed {
      border-style: dashed
  }

  .border-none {
      border-style: none
  }

  .border-black {
      --tw-border-opacity: 1;
      border-color: #2d2a24
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-black {
          border-color:rgb(45 42 36/var(--tw-border-opacity))
      }
  }

  .border-common-accentGray {
      --tw-border-opacity: 1;
      border-color: #ebe8e5
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-common-accentGray {
          border-color:rgb(235 232 229/var(--tw-border-opacity))
      }
  }

  .border-common-gray {
      --tw-border-opacity: 1;
      border-color: #f9f8f7
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-common-gray {
          border-color:rgb(249 248 247/var(--tw-border-opacity))
      }
  }

  .border-gray-200 {
      --tw-border-opacity: 1;
      border-color: #e5e7eb
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-gray-200 {
          border-color:rgb(229 231 235/var(--tw-border-opacity))
      }
  }

  .border-gray-300 {
      --tw-border-opacity: 1;
      border-color: #d1d5db
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-gray-300 {
          border-color:rgb(209 213 219/var(--tw-border-opacity))
      }
  }

  .border-gray-400 {
      --tw-border-opacity: 1;
      border-color: #9ca3af
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-gray-400 {
          border-color:rgb(156 163 175/var(--tw-border-opacity))
      }
  }

  .border-green-600 {
      --tw-border-opacity: 1;
      border-color: #16a34a
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-green-600 {
          border-color:rgb(22 163 74/var(--tw-border-opacity))
      }
  }

  .border-primary {
      --tw-border-opacity: 1;
      border-color: #009a7b
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-primary {
          border-color:rgb(0 154 123/var(--tw-border-opacity))
      }
  }

  .border-secondary-gray {
      --tw-border-opacity: 1;
      border-color: #d7d2cb
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-secondary-gray {
          border-color:rgb(215 210 203/var(--tw-border-opacity))
      }
  }

  .border-teal-500 {
      --tw-border-opacity: 1;
      border-color: #14b8a6
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-teal-500 {
          border-color:rgb(20 184 166/var(--tw-border-opacity))
      }
  }

  .border-transparent {
      border-color: transparent
  }

  .border-white {
      --tw-border-opacity: 1;
      border-color: #fff
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-white {
          border-color:rgb(255 255 255/var(--tw-border-opacity))
      }
  }

  .border-yellow-500 {
      --tw-border-opacity: 1;
      border-color: #eab308
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-yellow-500 {
          border-color:rgb(234 179 8/var(--tw-border-opacity))
      }
  }

  .border-x-primary {
      --tw-border-opacity: 1;
      border-left-color: #009a7b;
      border-right-color: #009a7b
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-x-primary {
          border-left-color:rgb(0 154 123/var(--tw-border-opacity));
          border-right-color: rgb(0 154 123/var(--tw-border-opacity))
      }
  }

  .border-b-primary {
      --tw-border-opacity: 1;
      border-bottom-color: #009a7b
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .border-b-primary {
          border-bottom-color:rgb(0 154 123/var(--tw-border-opacity))
      }
  }

  .bg-black {
      --tw-bg-opacity: 1;
      background-color: #2d2a24
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-black {
          background-color:rgb(45 42 36/var(--tw-bg-opacity))
      }
  }

  .bg-common-accentGray {
      --tw-bg-opacity: 1;
      background-color: #ebe8e5
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-common-accentGray {
          background-color:rgb(235 232 229/var(--tw-bg-opacity))
      }
  }

  .bg-common-gray {
      --tw-bg-opacity: 1;
      background-color: #f9f8f7
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-common-gray {
          background-color:rgb(249 248 247/var(--tw-bg-opacity))
      }
  }

  .bg-common-green {
      --tw-bg-opacity: 1;
      background-color: #e0f5f0
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-common-green {
          background-color:rgb(224 245 240/var(--tw-bg-opacity))
      }
  }

  .bg-common-ocean {
      --tw-bg-opacity: 1;
      background-color: #e8f8fa
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-common-ocean {
          background-color:rgb(232 248 250/var(--tw-bg-opacity))
      }
  }

  .bg-green-100 {
      --tw-bg-opacity: 1;
      background-color: #dcfce7
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-green-100 {
          background-color:rgb(220 252 231/var(--tw-bg-opacity))
      }
  }

  .bg-primary {
      --tw-bg-opacity: 1;
      background-color: #009a7b
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-primary {
          background-color:rgb(0 154 123/var(--tw-bg-opacity))
      }
  }

  .bg-primary-light {
      --tw-bg-opacity: 1;
      background-color: #00ab84
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-primary-light {
          background-color:rgb(0 171 132/var(--tw-bg-opacity))
      }
  }

  .bg-primary-text {
      --tw-bg-opacity: 1;
      background-color: #007b5f
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-primary-text {
          background-color:rgb(0 123 95/var(--tw-bg-opacity))
      }
  }

  .bg-red-500 {
      --tw-bg-opacity: 1;
      background-color: #ef4444
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-red-500 {
          background-color:rgb(239 68 68/var(--tw-bg-opacity))
      }
  }

  .bg-secondary-aqua {
      --tw-bg-opacity: 1;
      background-color: #4bd8c8
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-secondary-aqua {
          background-color:rgb(75 216 200/var(--tw-bg-opacity))
      }
  }

  .bg-secondary-gray {
      --tw-bg-opacity: 1;
      background-color: #d7d2cb
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-secondary-gray {
          background-color:rgb(215 210 203/var(--tw-bg-opacity))
      }
  }

  .bg-secondary-lightBlue {
      --tw-bg-opacity: 1;
      background-color: #68d2df
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-secondary-lightBlue {
          background-color:rgb(104 210 223/var(--tw-bg-opacity))
      }
  }

  .bg-secondary-red {
      --tw-bg-opacity: 1;
      background-color: #f4364c
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-secondary-red {
          background-color:rgb(244 54 76/var(--tw-bg-opacity))
      }
  }

  .bg-secondary-vday {
      --tw-bg-opacity: 1;
      background-color: #ff6b7d
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-secondary-vday {
          background-color:rgb(255 107 125/var(--tw-bg-opacity))
      }
  }

  .bg-teal-100 {
      --tw-bg-opacity: 1;
      background-color: #ccfbf1
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-teal-100 {
          background-color:rgb(204 251 241/var(--tw-bg-opacity))
      }
  }

  .bg-transparent {
      background-color: transparent
  }

  .bg-white {
      --tw-bg-opacity: 1;
      background-color: #fff
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-white {
          background-color:rgb(255 255 255/var(--tw-bg-opacity))
      }
  }

  .bg-yellow-100 {
      --tw-bg-opacity: 1;
      background-color: #fef9c3
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .bg-yellow-100 {
          background-color:rgb(254 249 195/var(--tw-bg-opacity))
      }
  }

  .bg-none {
      background-image: none
  }

  .bg-no-repeat {
      background-repeat: no-repeat
  }

  .fill-current {
      fill: currentColor
  }

  .object-contain {
      object-fit: contain
  }

  .object-cover {
      object-fit: cover
  }

  .p-0 {
      padding: 0
  }

  .p-1 {
      padding: .25rem
  }

  .p-2 {
      padding: .5rem
  }

  .p-3 {
      padding: .75rem
  }

  .p-4 {
      padding: 1rem
  }

  .p-5 {
      padding: 1.25rem
  }

  .p-6 {
      padding: 1.5rem
  }

  .p-8 {
      padding: 2rem
  }

  .px-0 {
      padding-left: 0;
      padding-right: 0
  }

  .px-1 {
      padding-left: .25rem;
      padding-right: .25rem
  }

  .px-12 {
      padding-left: 3rem;
      padding-right: 3rem
  }

  .px-2 {
      padding-left: .5rem;
      padding-right: .5rem
  }

  .px-3 {
      padding-left: .75rem;
      padding-right: .75rem
  }

  .px-4 {
      padding-left: 1rem;
      padding-right: 1rem
  }

  .px-5 {
      padding-left: 1.25rem;
      padding-right: 1.25rem
  }

  .px-6 {
      padding-left: 1.5rem;
      padding-right: 1.5rem
  }

  .px-8 {
      padding-left: 2rem;
      padding-right: 2rem
  }

  .px-\[17px\] {
      padding-left: 17px;
      padding-right: 17px
  }

  .py-1 {
      padding-bottom: .25rem;
      padding-top: .25rem
  }

  .py-10 {
      padding-bottom: 2.5rem;
      padding-top: 2.5rem
  }

  .py-12 {
      padding-bottom: 3rem;
      padding-top: 3rem
  }

  .py-16 {
      padding-bottom: 4rem;
      padding-top: 4rem
  }

  .py-2 {
      padding-bottom: .5rem;
      padding-top: .5rem
  }

  .py-24 {
      padding-bottom: 6rem;
      padding-top: 6rem
  }

  .py-3 {
      padding-bottom: .75rem;
      padding-top: .75rem
  }

  .py-4 {
      padding-bottom: 1rem;
      padding-top: 1rem
  }

  .py-5 {
      padding-bottom: 1.25rem;
      padding-top: 1.25rem
  }

  .py-6 {
      padding-bottom: 1.5rem;
      padding-top: 1.5rem
  }

  .py-8 {
      padding-bottom: 2rem;
      padding-top: 2rem
  }

  .pb-0 {
      padding-bottom: 0
  }

  .pb-1 {
      padding-bottom: .25rem
  }

  .pb-10 {
      padding-bottom: 2.5rem
  }

  .pb-12 {
      padding-bottom: 3rem
  }

  .pb-16 {
      padding-bottom: 4rem
  }

  .pb-2 {
      padding-bottom: .5rem
  }

  .pb-20 {
      padding-bottom: 5rem
  }

  .pb-3 {
      padding-bottom: .75rem
  }

  .pb-4 {
      padding-bottom: 1rem
  }

  .pb-6 {
      padding-bottom: 1.5rem
  }

  .pb-8 {
      padding-bottom: 2rem
  }

  .pb-9 {
      padding-bottom: 2.25rem
  }

  .pb-\[35px\] {
      padding-bottom: 35px
  }

  .pb-\[45px\] {
      padding-bottom: 45px
  }

  .pl-0 {
      padding-left: 0
  }

  .pl-10 {
      padding-left: 2.5rem
  }

  .pl-2 {
      padding-left: .5rem
  }

  .pl-4 {
      padding-left: 1rem
  }

  .pl-6 {
      padding-left: 1.5rem
  }

  .pl-9 {
      padding-left: 2.25rem
  }

  .pr-0 {
      padding-right: 0
  }

  .pr-1 {
      padding-right: .25rem
  }

  .pr-11 {
      padding-right: 2.75rem
  }

  .pr-2 {
      padding-right: .5rem
  }

  .pr-3 {
      padding-right: .75rem
  }

  .pr-4 {
      padding-right: 1rem
  }

  .pr-8 {
      padding-right: 2rem
  }

  .pt-0 {
      padding-top: 0
  }

  .pt-10 {
      padding-top: 2.5rem
  }

  .pt-11 {
      padding-top: 2.75rem
  }

  .pt-12 {
      padding-top: 3rem
  }

  .pt-14 {
      padding-top: 3.5rem
  }

  .pt-2 {
      padding-top: .5rem
  }

  .pt-24 {
      padding-top: 6rem
  }

  .pt-3 {
      padding-top: .75rem
  }

  .pt-4 {
      padding-top: 1rem
  }

  .pt-5 {
      padding-top: 1.25rem
  }

  .pt-6 {
      padding-top: 1.5rem
  }

  .pt-8 {
      padding-top: 2rem
  }

  .pt-\[35px\] {
      padding-top: 35px
  }

  .pt-\[45px\] {
      padding-top: 45px
  }

  .text-left {
      text-align: left
  }

  .text-center {
      text-align: center
  }

  .text-right {
      text-align: right
  }

  .align-middle {
      vertical-align: middle
  }

  .font-text {
      font-family: Domaine Text,sans-serif
  }

  .text-2xl {
      font-size: 1.5rem;
      line-height: 2rem
  }

  .text-3xl {
      font-size: 1.875rem;
      line-height: 2.25rem
  }

  .text-4xl {
      font-size: 2.25rem;
      line-height: 2.5rem
  }

  .text-5xl {
      font-size: 3rem;
      line-height: 1
  }

  .text-\[16px\] {
      font-size: 16px
  }

  .text-\[18px\] {
      font-size: 18px
  }

  .text-\[24px\] {
      font-size: 24px
  }

  .text-base {
      font-size: 1rem;
      line-height: 1.5rem
  }

  .text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem
  }

  .text-sm {
      font-size: .875rem;
      line-height: 1.25rem
  }

  .text-xl {
      font-size: 1.3125rem;
      line-height: 1.75rem
  }

  .text-xs {
      font-size: .75rem;
      line-height: 1rem
  }

  .text-xxs {
      font-size: .687rem
  }

  .font-light {
      font-weight: 300
  }

  .font-medium {
      font-weight: 500
  }

  .font-normal {
      font-weight: 400
  }

  .font-semibold {
      font-weight: 600
  }

  .uppercase {
      text-transform: uppercase
  }

  .capitalize {
      text-transform: capitalize
  }

  .italic {
      font-style: italic
  }

  .leading-10 {
      line-height: 2.5rem
  }

  .leading-6 {
      line-height: 1.5rem
  }

  .leading-7 {
      line-height: 1.75rem
  }

  .leading-normal {
      line-height: 1.5
  }

  .leading-tight {
      line-height: 1.25
  }

  .tracking-wide {
      letter-spacing: .025em
  }

  .text-black {
      --tw-text-opacity: 1;
      color: #2d2a24
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-black {
          color:rgb(45 42 36/var(--tw-text-opacity))
      }
  }

  .text-blue-600 {
      --tw-text-opacity: 1;
      color: #2563eb
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-blue-600 {
          color:rgb(37 99 235/var(--tw-text-opacity))
      }
  }

  .text-common-error {
      --tw-text-opacity: 1;
      color: #dd0922
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-common-error {
          color:rgb(221 9 34/var(--tw-text-opacity))
      }
  }

  .text-common-success {
      --tw-text-opacity: 1;
      color: #009a63
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-common-success {
          color:rgb(0 154 99/var(--tw-text-opacity))
      }
  }

  .text-gray-300 {
      --tw-text-opacity: 1;
      color: #d1d5db
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-gray-300 {
          color:rgb(209 213 219/var(--tw-text-opacity))
      }
  }

  .text-gray-500 {
      --tw-text-opacity: 1;
      color: #6b7280
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-gray-500 {
          color:rgb(107 114 128/var(--tw-text-opacity))
      }
  }

  .text-gray-700 {
      --tw-text-opacity: 1;
      color: #374151
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-gray-700 {
          color:rgb(55 65 81/var(--tw-text-opacity))
      }
  }

  .text-gray-800 {
      --tw-text-opacity: 1;
      color: #1f2937
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-gray-800 {
          color:rgb(31 41 55/var(--tw-text-opacity))
      }
  }

  .text-gray-900 {
      --tw-text-opacity: 1;
      color: #111827
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-gray-900 {
          color:rgb(17 24 39/var(--tw-text-opacity))
      }
  }

  .text-inherit {
      color: inherit
  }

  .text-primary {
      --tw-text-opacity: 1;
      color: #009a7b
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-primary {
          color:rgb(0 154 123/var(--tw-text-opacity))
      }
  }

  .text-primary-light {
      --tw-text-opacity: 1;
      color: #00ab84
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-primary-light {
          color:rgb(0 171 132/var(--tw-text-opacity))
      }
  }

  .text-primary-medium {
      --tw-text-opacity: 1;
      color: #009a7b
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-primary-medium {
          color:rgb(0 154 123/var(--tw-text-opacity))
      }
  }

  .text-primary-text {
      --tw-text-opacity: 1;
      color: #007b5f
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-primary-text {
          color:rgb(0 123 95/var(--tw-text-opacity))
      }
  }

  .text-red-500 {
      --tw-text-opacity: 1;
      color: #ef4444
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-red-500 {
          color:rgb(239 68 68/var(--tw-text-opacity))
      }
  }

  .text-secondary-gray {
      --tw-text-opacity: 1;
      color: #d7d2cb
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-secondary-gray {
          color:rgb(215 210 203/var(--tw-text-opacity))
      }
  }

  .text-secondary-grayText {
      --tw-text-opacity: 1;
      color: #817f7c
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-secondary-grayText {
          color:rgb(129 127 124/var(--tw-text-opacity))
      }
  }

  .text-secondary-red {
      --tw-text-opacity: 1;
      color: #f4364c
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-secondary-red {
          color:rgb(244 54 76/var(--tw-text-opacity))
      }
  }

  .text-teal-500 {
      --tw-text-opacity: 1;
      color: #14b8a6
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-teal-500 {
          color:rgb(20 184 166/var(--tw-text-opacity))
      }
  }

  .text-teal-900 {
      --tw-text-opacity: 1;
      color: #134e4a
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-teal-900 {
          color:rgb(19 78 74/var(--tw-text-opacity))
      }
  }

  .text-white {
      --tw-text-opacity: 1;
      color: #fff
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-white {
          color:rgb(255 255 255/var(--tw-text-opacity))
      }
  }

  .text-yellow-500 {
      --tw-text-opacity: 1;
      color: #eab308
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-yellow-500 {
          color:rgb(234 179 8/var(--tw-text-opacity))
      }
  }

  .text-yellow-900 {
      --tw-text-opacity: 1;
      color: #713f12
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .text-yellow-900 {
          color:rgb(113 63 18/var(--tw-text-opacity))
      }
  }

  .underline {
      text-decoration-line: underline
  }

  .line-through {
      text-decoration-line: line-through
  }

  .opacity-0 {
      opacity: 0
  }

  .opacity-30 {
      opacity: .3
  }

  .opacity-50 {
      opacity: .5
  }

  .shadow {
      --tw-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);
      --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);
      box-shadow: 0 0 transparent,0 0 transparent,0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }

  .shadow-md {
      --tw-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
      --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);
      box-shadow: 0 0 transparent,0 0 transparent,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);
      box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)
  }

  .outline-none {
      outline: 2px solid transparent;
      outline-offset: 2px
  }

  .outline {
      outline-style: solid
  }

  .outline-0 {
      outline-width: 0
  }

  .blur {
      --tw-blur: blur(8px);
      filter: blur(8px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
  }

  .blur,.filter {
      filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
  }

  .transition {
      transition-duration: .15s;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(.4,0,.2,1)
  }

  .transition-all {
      transition-duration: .15s;
      transition-property: all;
      transition-timing-function: cubic-bezier(.4,0,.2,1)
  }

  .transition-colors {
      transition-duration: .15s;
      transition-property: color,background-color,border-color,text-decoration-color,fill,stroke;
      transition-timing-function: cubic-bezier(.4,0,.2,1)
  }

  .duration-300 {
      transition-duration: .3s
  }

  .ease-in-out {
      transition-timing-function: cubic-bezier(.4,0,.2,1)
  }

  .placeholder\:font-text::placeholder {
      font-family: Domaine Text,sans-serif
  }

  .placeholder\:text-secondary-grayText::placeholder {
      --tw-text-opacity: 1;
      color: #817f7c
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .placeholder\:text-secondary-grayText::placeholder {
          color:rgb(129 127 124/var(--tw-text-opacity))
      }
  }

  .hover\:bg-common-green:hover {
      --tw-bg-opacity: 1;
      background-color: #e0f5f0
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .hover\:bg-common-green:hover {
          background-color:rgb(224 245 240/var(--tw-bg-opacity))
      }
  }

  .hover\:bg-primary:hover {
      --tw-bg-opacity: 1;
      background-color: #009a7b
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .hover\:bg-primary:hover {
          background-color:rgb(0 154 123/var(--tw-bg-opacity))
      }
  }

  .hover\:italic:hover {
      font-style: italic
  }

  .hover\:text-common-green:hover {
      --tw-text-opacity: 1;
      color: #e0f5f0
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .hover\:text-common-green:hover {
          color:rgb(224 245 240/var(--tw-text-opacity))
      }
  }

  .hover\:text-primary:hover {
      --tw-text-opacity: 1;
      color: #009a7b
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .hover\:text-primary:hover {
          color:rgb(0 154 123/var(--tw-text-opacity))
      }
  }

  .hover\:text-primary-light:hover {
      --tw-text-opacity: 1;
      color: #00ab84
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .hover\:text-primary-light:hover {
          color:rgb(0 171 132/var(--tw-text-opacity))
      }
  }

  .hover\:text-primary-text:hover {
      --tw-text-opacity: 1;
      color: #007b5f
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .hover\:text-primary-text:hover {
          color:rgb(0 123 95/var(--tw-text-opacity))
      }
  }

  .hover\:text-white:hover {
      --tw-text-opacity: 1;
      color: #fff
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .hover\:text-white:hover {
          color:rgb(255 255 255/var(--tw-text-opacity))
      }
  }

  .hover\:underline:hover {
      text-decoration-line: underline
  }

  .focus\:border-primary:focus {
      --tw-border-opacity: 1;
      border-color: #009a7b
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .focus\:border-primary:focus {
          border-color:rgb(0 154 123/var(--tw-border-opacity))
      }
  }

  .focus\:bg-primary:focus {
      --tw-bg-opacity: 1;
      background-color: #009a7b
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .focus\:bg-primary:focus {
          background-color:rgb(0 154 123/var(--tw-bg-opacity))
      }
  }

  .focus\:text-white:focus {
      --tw-text-opacity: 1;
      color: #fff
  }

  @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
      .focus\:text-white:focus {
          color:rgb(255 255 255/var(--tw-text-opacity))
      }
  }

  .focus\:outline-none:focus {
      outline: 2px solid transparent;
      outline-offset: 2px
  }

  @media (min-width: 480px) {
      .tablet\:visible {
          visibility:visible
      }

      .tablet\:top-6 {
          top: 1.5rem
      }

      .tablet\:col-span-4 {
          grid-column: span 4/span 4
      }

      .tablet\:col-span-8 {
          grid-column: span 8/span 8
      }

      .tablet\:ml-10 {
          margin-left: 2.5rem
      }

      .tablet\:mr-2 {
          margin-right: .5rem
      }

      .tablet\:mr-8 {
          margin-right: 2rem
      }

      .tablet\:mt-0 {
          margin-top: 0
      }

      .tablet\:block {
          display: block
      }

      .tablet\:flex {
          display: flex
      }

      .tablet\:w-1\/4 {
          width: 25%
      }

      .tablet\:w-3\/5 {
          width: 60%
      }

      .tablet\:w-48 {
          width: 12rem
      }

      .tablet\:w-auto {
          width: auto
      }

      .tablet\:max-w-4xl {
          max-width: 56rem
      }

      .tablet\:grid-cols-2 {
          grid-template-columns: repeat(2,minmax(0,1fr))
      }

      .tablet\:grid-cols-3 {
          grid-template-columns: repeat(3,minmax(0,1fr))
      }

      .tablet\:flex-row {
          flex-direction: row
      }

      .tablet\:flex-col {
          flex-direction: column
      }

      .tablet\:items-start {
          align-items: flex-start
      }

      .tablet\:items-center {
          align-items: center
      }

      .tablet\:justify-center {
          justify-content: center
      }

      .tablet\:gap-4 {
          gap: 1rem
      }

      .tablet\:gap-8 {
          gap: 2rem
      }

      .tablet\:px-16 {
          padding-left: 4rem;
          padding-right: 4rem
      }

      .tablet\:px-20 {
          padding-left: 5rem;
          padding-right: 5rem
      }

      .tablet\:py-16 {
          padding-bottom: 4rem;
          padding-top: 4rem
      }

      .tablet\:pb-10 {
          padding-bottom: 2.5rem
      }

      .tablet\:pb-12 {
          padding-bottom: 3rem
      }

      .tablet\:pb-2 {
          padding-bottom: .5rem
      }

      .tablet\:pl-2 {
          padding-left: .5rem
      }

      .tablet\:pr-2 {
          padding-right: .5rem
      }

      .tablet\:pr-4 {
          padding-right: 1rem
      }

      .tablet\:pt-12 {
          padding-top: 3rem
      }

      .tablet\:pt-16 {
          padding-top: 4rem
      }

      .tablet\:text-center {
          text-align: center
      }

      .tablet\:text-\[32px\] {
          font-size: 32px
      }

      .tablet\:text-sm {
          font-size: .875rem;
          line-height: 1.25rem
      }
  }

  @media (min-width: 640px) {
      .sm\:absolute {
          position:absolute
      }

      .sm\:inset-0 {
          bottom: 0;
          left: 0;
          right: 0;
          top: 0
      }

      .sm\:mb-0 {
          margin-bottom: 0
      }

      .sm\:mr-11 {
          margin-right: 2.75rem
      }

      .sm\:flex {
          display: flex
      }

      .sm\:hidden {
          display: none
      }

      .sm\:h-0 {
          height: 0
      }

      .sm\:flex-row {
          flex-direction: row
      }

      .sm\:items-center {
          align-items: center
      }

      .sm\:justify-center {
          justify-content: center
      }

      .sm\:px-10 {
          padding-left: 2.5rem;
          padding-right: 2.5rem
      }

      .sm\:py-12 {
          padding-bottom: 3rem;
          padding-top: 3rem
      }

      .sm\:py-4 {
          padding-bottom: 1rem;
          padding-top: 1rem
      }

      .sm\:pb-\[93\%\] {
          padding-bottom: 93%
      }

      .sm\:pl-4 {
          padding-left: 1rem
      }

      .sm\:pr-4 {
          padding-right: 1rem
      }

      .sm\:text-right {
          text-align: right
      }

      .sm\:text-2xl {
          font-size: 1.5rem;
          line-height: 2rem
      }

      .sm\:text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem
      }

      .sm\:text-5xl {
          font-size: 3rem;
          line-height: 1
      }

      .sm\:text-base {
          font-size: 1rem;
          line-height: 1.5rem
      }
  }

  @media (min-width: 768px) {
      .md\:mb-0 {
          margin-bottom:0
      }

      .md\:ml-1 {
          margin-left: .25rem
      }

      .md\:mr-10 {
          margin-right: 2.5rem
      }

      .md\:mr-4 {
          margin-right: 1rem
      }

      .md\:mt-0 {
          margin-top: 0
      }

      .md\:block {
          display: block
      }

      .md\:inline {
          display: inline
      }

      .md\:flex {
          display: flex
      }

      .md\:inline-flex {
          display: inline-flex
      }

      .md\:grid {
          display: grid
      }

      .md\:hidden {
          display: none
      }

      .md\:h-9 {
          height: 2.25rem
      }

      .md\:h-\[84px\] {
          height: 84px
      }

      .md\:w-1\/2 {
          width: 50%
      }

      .md\:w-1\/3 {
          width: 33.333333%
      }

      .md\:w-10\/12 {
          width: 83.333333%
      }

      .md\:w-2\/3 {
          width: 66.666667%
      }

      .md\:w-32 {
          width: 8rem
      }

      .md\:w-80 {
          width: 20rem
      }

      .md\:w-\[168px\] {
          width: 168px
      }

      .md\:w-flyout-md {
          width: 463px
      }

      .md\:max-w-flyout-md {
          max-width: 463px
      }

      .md\:grid-cols-2 {
          grid-template-columns: repeat(2,minmax(0,1fr))
      }

      .md\:grid-cols-3 {
          grid-template-columns: repeat(3,minmax(0,1fr))
      }

      .md\:grid-cols-4 {
          grid-template-columns: repeat(4,minmax(0,1fr))
      }

      .md\:grid-cols-6 {
          grid-template-columns: repeat(6,minmax(0,1fr))
      }

      .md\:flex-row {
          flex-direction: row
      }

      .md\:flex-row-reverse {
          flex-direction: row-reverse
      }

      .md\:p-12 {
          padding: 3rem
      }

      .md\:px-4 {
          padding-left: 1rem;
          padding-right: 1rem
      }

      .md\:px-8 {
          padding-left: 2rem;
          padding-right: 2rem
      }

      .md\:px-9 {
          padding-left: 2.25rem;
          padding-right: 2.25rem
      }

      .md\:py-12 {
          padding-bottom: 3rem;
          padding-top: 3rem
      }

      .md\:py-6 {
          padding-bottom: 1.5rem;
          padding-top: 1.5rem
      }

      .md\:pb-9 {
          padding-bottom: 2.25rem
      }

      .md\:pr-0 {
          padding-right: 0
      }

      .md\:pr-4 {
          padding-right: 1rem
      }

      .md\:pt-12 {
          padding-top: 3rem
      }

      .md\:pt-9 {
          padding-top: 2.25rem
      }

      .md\:text-4xl {
          font-size: 2.25rem;
          line-height: 2.5rem
      }

      .md\:text-5xl {
          font-size: 3rem;
          line-height: 1
      }

      .md\:text-6xl {
          font-size: 4rem;
          line-height: 1
      }

      .md\:text-\[28px\] {
          font-size: 28px
      }

      .md\:text-base {
          font-size: 1rem;
          line-height: 1.5rem
      }

      .md\:text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem
      }

      .md\:text-sm {
          font-size: .875rem;
          line-height: 1.25rem
      }

      .md\:text-xl {
          font-size: 1.3125rem;
          line-height: 1.75rem
      }

      .laptop\:absolute {
          position: absolute
      }

      .laptop\:relative {
          position: relative
      }

      .laptop\:sticky {
          position: sticky
      }

      .laptop\:z-20 {
          z-index: 20
      }

      .laptop\:order-first {
          order: -9999
      }

      .laptop\:order-last {
          order: 9999
      }

      .laptop\:col-span-1 {
          grid-column: span 1/span 1
      }

      .laptop\:col-span-12 {
          grid-column: span 12/span 12
      }

      .laptop\:col-span-2 {
          grid-column: span 2/span 2
      }

      .laptop\:col-span-4 {
          grid-column: span 4/span 4
      }

      .laptop\:col-span-6 {
          grid-column: span 6/span 6
      }

      .laptop\:col-span-8 {
          grid-column: span 8/span 8
      }

      .laptop\:col-span-9 {
          grid-column: span 9/span 9
      }

      .laptop\:float-left {
          float: left
      }

      .laptop\:my-16 {
          margin-bottom: 4rem;
          margin-top: 4rem
      }

      .laptop\:mb-0 {
          margin-bottom: 0
      }

      .laptop\:mb-10 {
          margin-bottom: 2.5rem
      }

      .laptop\:mb-6 {
          margin-bottom: 1.5rem
      }

      .laptop\:ml-2 {
          margin-left: .5rem
      }

      .laptop\:ml-8 {
          margin-left: 2rem
      }

      .laptop\:mr-6 {
          margin-right: 1.5rem
      }

      .laptop\:mr-8 {
          margin-right: 2rem
      }

      .laptop\:mt-14 {
          margin-top: 3.5rem
      }

      .laptop\:mt-6 {
          margin-top: 1.5rem
      }

      .laptop\:block {
          display: block
      }

      .laptop\:inline-block {
          display: inline-block
      }

      .laptop\:flex {
          display: flex
      }

      .laptop\:hidden {
          display: none
      }

      .laptop\:h-24 {
          height: 6rem
      }

      .laptop\:w-1\/2 {
          width: 50%
      }

      .laptop\:w-1\/4 {
          width: 25%
      }

      .laptop\:w-1\/5 {
          width: 20%
      }

      .laptop\:w-2\/5 {
          width: 40%
      }

      .laptop\:w-3\/4 {
          width: 75%
      }

      .laptop\:w-4\/12 {
          width: 33.333333%
      }

      .laptop\:w-4\/5 {
          width: 80%
      }

      .laptop\:w-48 {
          width: 12rem
      }

      .laptop\:w-8\/12 {
          width: 66.666667%
      }

      .laptop\:w-full {
          width: 100%
      }

      .laptop\:grid-cols-12 {
          grid-template-columns: repeat(12,minmax(0,1fr))
      }

      .laptop\:grid-cols-2 {
          grid-template-columns: repeat(2,minmax(0,1fr))
      }

      .laptop\:grid-cols-3 {
          grid-template-columns: repeat(3,minmax(0,1fr))
      }

      .laptop\:grid-cols-4 {
          grid-template-columns: repeat(4,minmax(0,1fr))
      }

      .laptop\:flex-row {
          flex-direction: row
      }

      .laptop\:flex-col {
          flex-direction: column
      }

      .laptop\:items-center {
          align-items: center
      }

      .laptop\:justify-between {
          justify-content: space-between
      }

      .laptop\:gap-10 {
          gap: 2.5rem
      }

      .laptop\:gap-12 {
          gap: 3rem
      }

      .laptop\:gap-14 {
          gap: 3.5rem
      }

      .laptop\:gap-2 {
          gap: .5rem
      }

      .laptop\:gap-4 {
          gap: 1rem
      }

      .laptop\:gap-6 {
          gap: 1.5rem
      }

      .laptop\:gap-8 {
          gap: 2rem
      }

      .laptop\:px-10 {
          padding-left: 2.5rem;
          padding-right: 2.5rem
      }

      .laptop\:px-16 {
          padding-left: 4rem;
          padding-right: 4rem
      }

      .laptop\:px-20 {
          padding-left: 5rem;
          padding-right: 5rem
      }

      .laptop\:px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem
      }

      .laptop\:px-8 {
          padding-left: 2rem;
          padding-right: 2rem
      }

      .laptop\:py-0 {
          padding-bottom: 0;
          padding-top: 0
      }

      .laptop\:py-6 {
          padding-bottom: 1.5rem;
          padding-top: 1.5rem
      }

      .laptop\:pr-2 {
          padding-right: .5rem
      }

      .laptop\:pt-11 {
          padding-top: 2.75rem
      }

      .laptop\:pt-2 {
          padding-top: .5rem
      }

      .laptop\:pt-4 {
          padding-top: 1rem
      }

      .laptop\:pt-6 {
          padding-top: 1.5rem
      }

      .laptop\:text-right {
          text-align: right
      }

      .laptop\:text-2xl {
          font-size: 1.5rem;
          line-height: 2rem
      }

      .laptop\:text-6xl {
          font-size: 4rem;
          line-height: 1
      }

      .laptop\:text-base {
          font-size: 1rem;
          line-height: 1.5rem
      }

      .laptop\:text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem
      }

      .laptop\:text-sm {
          font-size: .875rem;
          line-height: 1.25rem
      }

      .laptop\:text-xs {
          font-size: .75rem;
          line-height: 1rem
      }

      .laptop\:font-normal {
          font-weight: 400
      }

      .laptop\:text-secondary-grayText {
          --tw-text-opacity: 1;
          color: #817f7c
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .laptop\:text-secondary-grayText {
              color:rgb(129 127 124/var(--tw-text-opacity))
          }
      }
  }

  @media (min-width: 1024px) {
      .lg\:absolute {
          position:absolute
      }

      .lg\:sticky {
          position: sticky
      }

      .lg\:left-0 {
          left: 0
      }

      .lg\:right-0 {
          right: 0
      }

      .lg\:top-0 {
          top: 0
      }

      .lg\:col-span-1 {
          grid-column: span 1/span 1
      }

      .lg\:col-span-2 {
          grid-column: span 2/span 2
      }

      .lg\:-mr-14 {
          margin-right: -3.5rem
      }

      .lg\:-mt-0 {
          margin-top: 0
      }

      .lg\:mb-0 {
          margin-bottom: 0
      }

      .lg\:mb-2 {
          margin-bottom: .5rem
      }

      .lg\:mb-4 {
          margin-bottom: 1rem
      }

      .lg\:ml-2 {
          margin-left: .5rem
      }

      .lg\:mr-8 {
          margin-right: 2rem
      }

      .lg\:mt-0 {
          margin-top: 0
      }

      .lg\:mt-12 {
          margin-top: 3rem
      }

      .lg\:mt-8 {
          margin-top: 2rem
      }

      .lg\:block {
          display: block
      }

      .lg\:inline {
          display: inline
      }

      .lg\:flex {
          display: flex
      }

      .lg\:inline-flex {
          display: inline-flex
      }

      .lg\:grid {
          display: grid
      }

      .lg\:hidden {
          display: none
      }

      .lg\:h-full {
          height: 100%
      }

      .lg\:w-1\/3 {
          width: 33.333333%
      }

      .lg\:w-1\/6 {
          width: 16.666667%
      }

      .lg\:w-2\/3 {
          width: 66.666667%
      }

      .lg\:w-44 {
          width: 11rem
      }

      .lg\:w-auto {
          width: auto
      }

      .lg\:max-w-flyout-lg {
          max-width: 630px
      }

      .lg\:grid-cols-2 {
          grid-template-columns: repeat(2,minmax(0,1fr))
      }

      .lg\:grid-cols-3 {
          grid-template-columns: repeat(3,minmax(0,1fr))
      }

      .lg\:grid-cols-6 {
          grid-template-columns: repeat(6,minmax(0,1fr))
      }

      .lg\:flex-row {
          flex-direction: row
      }

      .lg\:justify-end {
          justify-content: flex-end
      }

      .lg\:gap-0 {
          gap: 0
      }

      .lg\:gap-12 {
          gap: 3rem
      }

      .lg\:gap-4 {
          gap: 1rem
      }

      .lg\:self-start {
          align-self: flex-start
      }

      .lg\:px-16 {
          padding-left: 4rem;
          padding-right: 4rem
      }

      .lg\:px-8 {
          padding-left: 2rem;
          padding-right: 2rem
      }

      .lg\:py-12 {
          padding-bottom: 3rem;
          padding-top: 3rem
      }

      .lg\:py-5 {
          padding-bottom: 1.25rem;
          padding-top: 1.25rem
      }

      .lg\:pl-4 {
          padding-left: 1rem
      }

      .lg\:pr-14 {
          padding-right: 3.5rem
      }

      .lg\:pr-4 {
          padding-right: 1rem
      }

      .lg\:text-2xl {
          font-size: 1.5rem;
          line-height: 2rem
      }

      .lg\:text-4xl {
          font-size: 2.25rem;
          line-height: 2.5rem
      }

      .lg\:text-7xl {
          font-size: 5rem;
          line-height: 1
      }

      .lg\:text-\[28px\] {
          font-size: 28px
      }

      .lg\:text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem
      }

      .lg\:text-xl {
          font-size: 1.3125rem;
          line-height: 1.75rem
      }

      .lg\:font-normal {
          font-weight: 400
      }

      .lg\:leading-5 {
          line-height: 1.25rem
      }

      .desktop\:visible {
          visibility: visible
      }

      .desktop\:sticky {
          position: sticky
      }

      .desktop\:top-3 {
          top: .75rem
      }

      .desktop\:top-4 {
          top: 1rem
      }

      .desktop\:order-first {
          order: -9999
      }

      .desktop\:order-last {
          order: 9999
      }

      .desktop\:col-span-1 {
          grid-column: span 1/span 1
      }

      .desktop\:col-span-2 {
          grid-column: span 2/span 2
      }

      .desktop\:col-span-3 {
          grid-column: span 3/span 3
      }

      .desktop\:col-span-4 {
          grid-column: span 4/span 4
      }

      .desktop\:col-span-6 {
          grid-column: span 6/span 6
      }

      .desktop\:col-span-8 {
          grid-column: span 8/span 8
      }

      .desktop\:col-span-9 {
          grid-column: span 9/span 9
      }

      .desktop\:mx-16 {
          margin-left: 4rem;
          margin-right: 4rem
      }

      .desktop\:my-0 {
          margin-bottom: 0;
          margin-top: 0
      }

      .desktop\:my-2 {
          margin-bottom: .5rem;
          margin-top: .5rem
      }

      .desktop\:block {
          display: block
      }

      .desktop\:inline {
          display: inline
      }

      .desktop\:flex {
          display: flex
      }

      .desktop\:grid {
          display: grid
      }

      .desktop\:hidden {
          display: none
      }

      .desktop\:h-20 {
          height: 5rem
      }

      .desktop\:h-editorial-featured-img {
          height: 804px
      }

      .desktop\:w-0 {
          width: 0
      }

      .desktop\:w-1\/2 {
          width: 50%
      }

      .desktop\:w-1\/3 {
          width: 33.333333%
      }

      .desktop\:w-2\/3 {
          width: 66.666667%
      }

      .desktop\:w-2\/5 {
          width: 40%
      }

      .desktop\:w-20 {
          width: 5rem
      }

      .desktop\:w-3\/5 {
          width: 60%
      }

      .desktop\:w-5\/6 {
          width: 83.333333%
      }

      .desktop\:max-w-6xl {
          max-width: 72rem
      }

      .desktop\:grid-cols-2 {
          grid-template-columns: repeat(2,minmax(0,1fr))
      }

      .desktop\:grid-cols-3 {
          grid-template-columns: repeat(3,minmax(0,1fr))
      }

      .desktop\:grid-cols-4 {
          grid-template-columns: repeat(4,minmax(0,1fr))
      }

      .desktop\:flex-row {
          flex-direction: row
      }

      .desktop\:flex-col {
          flex-direction: column
      }

      .desktop\:items-center {
          align-items: center
      }

      .desktop\:justify-center {
          justify-content: center
      }

      .desktop\:gap-10 {
          gap: 2.5rem
      }

      .desktop\:gap-11 {
          gap: 2.75rem
      }

      .desktop\:gap-12 {
          gap: 3rem
      }

      .desktop\:gap-2 {
          gap: .5rem
      }

      .desktop\:gap-20 {
          gap: 5rem
      }

      .desktop\:gap-32 {
          gap: 8rem
      }

      .desktop\:gap-6 {
          gap: 1.5rem
      }

      .desktop\:gap-8 {
          gap: 2rem
      }

      .desktop\:border {
          border-width: 1px
      }

      .desktop\:border-l {
          border-left-width: 1px
      }

      .desktop\:border-black {
          --tw-border-opacity: 1;
          border-color: #2d2a24
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .desktop\:border-black {
              border-color:rgb(45 42 36/var(--tw-border-opacity))
          }
      }

      .desktop\:p-6 {
          padding: 1.5rem
      }

      .desktop\:px-24 {
          padding-left: 6rem;
          padding-right: 6rem
      }

      .desktop\:px-28 {
          padding-left: 7rem;
          padding-right: 7rem
      }

      .desktop\:px-32 {
          padding-left: 8rem;
          padding-right: 8rem
      }

      .desktop\:px-40 {
          padding-left: 10rem;
          padding-right: 10rem
      }

      .desktop\:px-56 {
          padding-left: 14rem;
          padding-right: 14rem
      }

      .desktop\:px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem
      }

      .desktop\:py-0 {
          padding-bottom: 0;
          padding-top: 0
      }

      .desktop\:py-20 {
          padding-bottom: 5rem;
          padding-top: 5rem
      }

      .desktop\:pb-0 {
          padding-bottom: 0
      }

      .desktop\:pb-16 {
          padding-bottom: 4rem
      }

      .desktop\:pb-20 {
          padding-bottom: 5rem
      }

      .desktop\:pb-8 {
          padding-bottom: 2rem
      }

      .desktop\:pb-\[58px\] {
          padding-bottom: 58px
      }

      .desktop\:pr-2 {
          padding-right: .5rem
      }

      .desktop\:pr-3 {
          padding-right: .75rem
      }

      .desktop\:pt-0 {
          padding-top: 0
      }

      .desktop\:pt-20 {
          padding-top: 5rem
      }

      .desktop\:pt-24 {
          padding-top: 6rem
      }

      .desktop\:pt-\[58px\] {
          padding-top: 58px
      }

      .desktop\:text-center {
          text-align: center
      }

      .desktop\:text-right {
          text-align: right
      }

      .desktop\:text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem
      }

      .desktop\:text-xl {
          font-size: 1.3125rem;
          line-height: 1.75rem
      }
  }

  @media (min-width: 1280px) {
      .xl\:top-2 {
          top:.5rem
      }

      .xl\:inline-block {
          display: inline-block
      }

      .xl\:w-1\/2 {
          width: 50%
      }

      .xl\:px-3 {
          padding-left: .75rem;
          padding-right: .75rem
      }

      .xl\:text-base {
          font-size: 1rem;
          line-height: 1.5rem
      }
  }

  @media (min-width: 1366px) {
      .desktopLarge\:col-span-3 {
          grid-column:span 3/span 3
      }

      .desktopLarge\:col-span-9 {
          grid-column: span 9/span 9
      }
  }

  @media (min-width: 1440px) {
      .large\:h-auto {
          height:auto
      }

      .large\:w-2\/5 {
          width: 40%
      }

      .large\:w-3\/5 {
          width: 60%
      }

      .large\:grid-cols-4 {
          grid-template-columns: repeat(4,minmax(0,1fr))
      }

      .large\:gap-10 {
          gap: 2.5rem
      }

      .large\:px-20 {
          padding-left: 5rem;
          padding-right: 5rem
      }

      .large\:px-52 {
          padding-left: 13rem;
          padding-right: 13rem
      }

      .large\:text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem
      }
  }

  @media (min-width: 1536px) {
      .\32xl\:mb-10 {
          margin-bottom:2.5rem
      }

      .\32xl\:mb-12 {
          margin-bottom: 3rem
      }

      .\32xl\:mt-0 {
          margin-top: 0
      }

      .\32xl\:px-4 {
          padding-left: 1rem;
          padding-right: 1rem
      }

      .\32xl\:pl-20 {
          padding-left: 5rem
      }

      .\32xl\:text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem
      }

      .\32xl\:text-6xl {
          font-size: 4rem;
          line-height: 1
      }
  }

  @media (min-width: 1680px) {
      .xlarge\:hidden {
          display:none
      }
  }

  @font-face {
      font-display: swap;
      font-family: "Domaine Display";
      font-style: normal;
      font-weight: 400;
      src: url(https://cdn.shopify.com/s/files/1/0150/6262/files/DomaineDisp-Regular.otf) format("truetype")
  }

  @font-face {
      font-display: swap;
      font-family: "Domaine Display";
      font-style: normal;
      font-weight: 500;
      src: url(https://cdn.shopify.com/s/files/1/0150/6262/files/DomaineDisp-Medium.otf) format("truetype")
  }

  @font-face {
      font-display: swap;
      font-family: "Domaine Text";
      font-style: normal;
      font-weight: 300;
      src: url(https://cdn.shopify.com/s/files/1/0150/6262/files/DomaineText-Light.otf) format("truetype")
  }

  @font-face {
      font-display: swap;
      font-family: "Domaine Text";
      font-style: normal;
      font-weight: 400;
      src: url(https://cdn.shopify.com/s/files/1/0150/6262/files/DomaineText-Regular.otf) format("truetype")
  }

  @font-face {
      font-display: swap;
      font-family: "Domaine Text";
      font-style: normal;
      font-weight: 500;
      src: url(https://cdn.shopify.com/s/files/1/0150/6262/files/DomaineText-Medium.otf) format("truetype")
  }

  @font-face {
      font-display: swap;
      font-family: "Domaine Text";
      font-style: normal;
      font-weight: 600;
      src: url(https://cdn.shopify.com/s/files/1/0150/6262/files/DomaineText-Bold.otf) format("truetype")
  }

  body,html {
      font-family: "Domaine Text"
  }

  h1,h2,h3,h4,h5,h6 {
      color: #2d2a24;
      font-family: "Domaine Display";
      letter-spacing: -.01em;
      line-height: 110%
  }

  h1 {
      font-size: 68px
  }

  h2 {
      font-size: 60px
  }

  h3 {
      font-size: 56px
  }

  h1.article__title,h4 {
      font-size: 48px
  }

  h5 {
      font-size: 42px
  }

  h1.main-product-title,h6 {
      font-size: 36px
  }

  a,li,p,span {
      color: #2d2a24;
      font-family: "Domaine Text";
      font-size: 16px;
      line-height: 150%
  }

  @media(max-width: 480px) {
      h1 {
          font-size:42px
      }

      h2 {
          font-size: 36px
      }

      h3 {
          font-size: 32px
      }

      h1.article__title,h4 {
          font-size: 28px
      }

      h5 {
          font-size: 24px
      }

      h1.main-product-title,h6 {
          font-size: 21px
      }
  }

  @media(min-width: 480px)and (max-width:1024px) {
      h1 {
          font-size:45px
      }

      h2 {
          font-size: 41px
      }

      h3 {
          font-size: 37px
      }

      h1.article__title,h4 {
          font-size: 33px
      }

      h5 {
          font-size: 29px
      }

      h1.main-product-title,h6 {
          font-size: 25px
      }
  }
    extend: {},
  },
  plugins: [],
} satisfies Config

