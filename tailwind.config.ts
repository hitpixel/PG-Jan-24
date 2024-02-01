import type { Config } from 'tailwindcss'

export default {
  content: ['./app/routes/**. {html,js,tsx}'],
  theme: {
        /*! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com*/
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

      .no-select {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none
      }

      .fade-enter-active,.fade-leave-active {
          transition: opacity .5s
      }

      .fade-enter,.fade-leave-to {
          opacity: 0
      }

      .sill-container {
          margin: auto;
          max-width: 1920px;
          padding-left: 16px;
          padding-right: 16px;
          width: 100%
      }

      @media(min-width: 480px) {
          .sill-container {
              padding-left:50px;
              padding-right: 50px
          }
      }

      .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none
      }

      .scrollbar-hide::-webkit-scrollbar {
          display: none
      }

      .scrollbar::-webkit-scrollbar {
          height: 3px;
          width: 3px
      }

      @media(min-width: 480px) {
          .scrollbar::-webkit-scrollbar {
              height:4px;
              width: 4px
          }
      }

      .scrollbar::-webkit-scrollbar-track {
          background-color: #fff
      }

      .scrollbar::-webkit-scrollbar-thumb {
          background-color: #00ab84
      }

      .GiftWizard-gift-button {
          border-radius: 1px;
          font-size: 1rem;
          line-height: 1.25;
          padding: 15px 5px 14px
      }

      h1 b,h1 strong,h2 b,h2 strong,h3 b,h3 strong,h4 b,h4 strong,h5 b,h5 strong,h6 b,h6 strong,h7 b,h7 strong,h8 b,h8 strong {
          font-weight: inherit
      }

      #gorgias-chat-container iframe#chat-button {
          z-index: 99!important
      }

      .flicking-viewport {
          overflow: hidden;
          position: relative
      }

      .flicking-camera {
          display: flex;
          flex-direction: row;
          height: 100%;
          position: relative;
          width: 100%;
          z-index: 1
      }

      .flicking-camera>* {
          flex-shrink: 0
      }

      .flicking-viewport.vertical {
          display: inline-flex
      }

      .flicking-viewport.vertical>.flicking-camera {
          display: inline-flex;
          flex-direction: column
      }

      .flicking-viewport.flicking-hidden .flicking-camera>* {
          visibility: hidden
      }

      .resize-observer[data-v-8859cc6c] {
          background-color: transparent;
          border: none;
          opacity: 0
      }

      .resize-observer[data-v-8859cc6c],.resize-observer[data-v-8859cc6c] object {
          display: block;
          height: 100%;
          left: 0;
          overflow: hidden;
          pointer-events: none;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: -1
      }

      .nuxt-progress {
          background-color: #fff;
          height: 2px;
          left: 0;
          opacity: 1;
          position: fixed;
          right: 0;
          top: 0;
          transition: width .1s,opacity .4s;
          width: 0;
          z-index: 999999
      }

      .nuxt-progress.nuxt-progress-notransition {
          transition: none
      }

      .nuxt-progress-failed {
          background-color: red
      }

      .page-enter-active,.page-leave-active {
          transition: opacity .1s
      }

      .page-enter,.page-leave-active {
          opacity: 0
      }

      .primary-announcement[data-v-08252b67] {
          height: 36px;
          width: 100%
      }

      .main-nav__header[data-v-17dd0f75] {
          max-width: 1920px
      }

      .main-nav__header[data-v-17dd0f75] svg {
          height: 16px
      }

      @media(min-width: 640px) {
          .main-nav__header[data-v-17dd0f75] svg {
              height:24px
          }
      }

      .cart-count[data-v-5b51f19e] {
          font-size: .75rem
      }

      .main-nav__items[data-v-5f0fac65] {
          max-width: 1920px
      }

      .secondary-nav[data-v-f8d78570] {
          margin-top: -1px;
          z-index: 100
      }

      .secondary-nav__inner[data-v-f8d78570] {
          max-width: 1220px
      }

      .image-block__container[data-v-0b16f792] {
          padding-bottom: 100%
      }

      [data-v-0b16f792] .nav-block__image,[data-v-0b16f792] .nav-block__image img {
          aspect-ratio: 1;
          -o-object-fit: cover;
          object-fit: cover;
          width: 100%
      }

      .mobile-nav-menu[data-v-3d778c6e] {
          height: 48px
      }

      a[data-v-3d778c6e],button[data-v-3d778c6e] {
          align-items: center;
          display: flex;
          font-size: .875rem;
          justify-content: center;
          line-height: 1.25rem;
          padding: .75rem;
          width: 50%
      }

      a svg[data-v-3d778c6e],button svg[data-v-3d778c6e] {
          margin-right: .75rem;
          width: 1rem
      }

      @media (min-width: 768px) {
          a svg[data-v-3d778c6e],button svg[data-v-3d778c6e] {
              width:1.5rem
          }
      }

      .sticky-nav[data-v-3833c6ee] {
          --tw-translate-y: -100%;
          transform: translate(var(--tw-translate-x),-100%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          transition-duration: .3s;
          transition-property: all;
          transition-timing-function: cubic-bezier(.4,0,.2,1)
      }

      .sticky-nav.show[data-v-3833c6ee] {
          --tw-translate-y: 0px;
          transform: translate(var(--tw-translate-x)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
      }

      a[data-v-3833c6ee],button[data-v-3833c6ee] {
          align-items: center;
          display: flex;
          font-size: .875rem;
          justify-content: center;
          line-height: 1.25rem;
          padding: .75rem;
          width: 50%
      }

      a svg[data-v-3833c6ee],button svg[data-v-3833c6ee] {
          margin-right: .75rem;
          width: 1rem
      }

      @media (min-width: 768px) {
          a svg[data-v-3833c6ee],button svg[data-v-3833c6ee] {
              width:1.5rem
          }
      }

      .cart-button[data-v-3833c6ee] {
          width: 62px
      }

      [data-v-3833c6ee] .cart-button svg {
          height: 1rem;
          width: 1rem
      }

      .secondary-announcement[data-v-9afa19be] {
          height: 48px
      }

      .cart__lateral[data-v-0b7ddbaf] {
          padding: 24px 34px
      }

      .product-card--lateral[data-v-0b7ddbaf] {
          min-width: 164px
      }

      .gift-message__container[data-v-0b7ddbaf] {
          padding: 14px 0
      }

      .flyout {
          z-index: 9999
      }

      .flyout__overlay {
          background-color: rgba(0,0,0,.15)
      }

      .flyout {
          transition: all .25s ease-in-out
      }

      .flyout .flyout__inner {
          transition: transform .25s ease-in-out
      }

      .flyout .flyout__overlay {
          transition: opacity .25s ease-in-out
      }

      .slide-enter .flyout__inner--end,.slide-leave-to .flyout__inner--end {
          transform: translateX(100%)
      }

      .slide-enter .flyout__inner--start,.slide-leave-to .flyout__inner--start {
          transform: translateX(-100%)
      }

      .slide-enter .flyout__overlay,.slide-leave-to .flyout__overlay {
          opacity: 0
      }

      @media (min-height: 600px) {
          .account-flyout {
              background-image:url(/_nuxt/img/account-flyout.bace47b.png);
              background-position: 100% 100%;
              background-repeat: no-repeat
          }
      }

      .flyout[data-v-9b9eb2c4] {
          transition: transform .25s ease-in-out;
          width: 330px;
          z-index: 9999
      }

      @media screen and (max-width: 768px) {
          .flyout[data-v-9b9eb2c4] {
              width:85%
          }
      }

      .flyout__overlay[data-v-9b9eb2c4] {
          background-color: rgba(0,0,0,.15)
      }

      .flyout .images__container .image__block[data-v-9b9eb2c4] {
          width: 40vw
      }

      .flyout[data-v-9b9eb2c4] {
          transition: all .25s ease-in-out
      }

      .flyout .flyout__inner[data-v-9b9eb2c4] {
          transition: transform .25s ease-in-out
      }

      .flyout .flyout__overlay[data-v-9b9eb2c4] {
          transition: opacity .25s ease-in-out
      }

      .slide-enter .flyout__inner[data-v-9b9eb2c4],.slide-leave-to .flyout__inner[data-v-9b9eb2c4] {
          transform: translateX(-100%)
      }

      .slide-enter .flyout__overlay[data-v-9b9eb2c4],.slide-leave-to .flyout__overlay[data-v-9b9eb2c4] {
          opacity: 0
      }

      .nav-item[data-v-9b9eb2c4] {
          align-items: center;
          border-bottom-width: 1px;
          display: flex;
          font-size: .875rem;
          justify-content: space-between;
          line-height: 1.25rem;
          padding-bottom: 13px;
          padding-left: 0;
          padding-right: 0;
          padding-top: 13px;
          width: 100%
      }

      .nav-item[data-v-9b9eb2c4]:hover {
          --tw-text-opacity: 1;
          color: #007b5f
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .nav-item[data-v-9b9eb2c4]:hover {
              color:rgb(0 123 95/var(--tw-text-opacity))
          }
      }

      .nav-item__new-marker[data-v-9b9eb2c4] {
          --tw-bg-opacity: 1;
          background-color: #009a7b;
          border-radius: 9999px;
          display: block;
          height: .5rem;
          position: absolute;
          right: 0;
          top: 0;
          width: .5rem
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .nav-item__new-marker[data-v-9b9eb2c4] {
              background-color:rgb(0 154 123/var(--tw-bg-opacity))
          }
      }

      [data-v-9b9eb2c4] .query-suggestions {
          font-size: .875rem;
          line-height: 1.25rem
      }

      .flyout[data-v-9585d164] {
          transition: transform .25s ease-in-out;
          width: 330px;
          z-index: 9999
      }

      @media screen and (max-width: 768px) {
          .flyout[data-v-9585d164] {
              width:85%
          }
      }

      .flyout__overlay[data-v-9585d164] {
          background-color: rgba(0,0,0,.15)
      }

      .flyout .images__container .image__block[data-v-9585d164] {
          width: 40vw
      }

      .flyout[data-v-9585d164] {
          transition: all .25s ease-in-out
      }

      .flyout .flyout__inner[data-v-9585d164] {
          transition: transform .25s ease-in-out
      }

      .flyout .flyout__overlay[data-v-9585d164] {
          transition: opacity .25s ease-in-out
      }

      .slide-enter .flyout__inner[data-v-9585d164],.slide-leave-to .flyout__inner[data-v-9585d164] {
          transform: translateX(-100%)
      }

      .slide-enter .flyout__overlay[data-v-9585d164],.slide-leave-to .flyout__overlay[data-v-9585d164] {
          opacity: 0
      }

      .image-block[data-v-9585d164] {
          min-width: 125px
      }

      .image-block__container[data-v-9585d164] {
          padding-bottom: 100%
      }

      .nav-title[data-v-9585d164] {
          display: block;
          padding-bottom: 5px
      }

      .nav-item[data-v-9585d164] {
          align-items: center;
          border-bottom-width: 1px;
          display: flex;
          font-size: .875rem;
          justify-content: space-between;
          line-height: 1.25rem;
          padding-bottom: 13px;
          padding-left: 0;
          padding-right: 0;
          padding-top: 13px;
          width: 100%
      }

      .nav-item[data-v-9585d164]:hover {
          --tw-text-opacity: 1;
          color: #007b5f
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .nav-item[data-v-9585d164]:hover {
              color:rgb(0 123 95/var(--tw-text-opacity))
          }
      }

      .flyout[data-v-52aa40f6] {
          transition: transform .25s ease-in-out;
          width: 330px;
          z-index: 9999
      }

      @media screen and (max-width: 768px) {
          .flyout[data-v-52aa40f6] {
              width:85%
          }
      }

      .flyout__overlay[data-v-52aa40f6] {
          background-color: rgba(0,0,0,.15)
      }

      .flyout[data-v-52aa40f6] {
          transition: all .25s ease-in-out
      }

      .flyout .flyout__inner[data-v-52aa40f6] {
          transition: transform .25s ease-in-out
      }

      .flyout .flyout__overlay[data-v-52aa40f6] {
          transition: opacity .25s ease-in-out
      }

      .slide-enter .flyout__inner[data-v-52aa40f6],.slide-leave-to .flyout__inner[data-v-52aa40f6] {
          transform: translateX(100%)
      }

      .slide-enter .flyout__overlay[data-v-52aa40f6],.slide-leave-to .flyout__overlay[data-v-52aa40f6] {
          opacity: 0
      }

      .flyout[data-v-6ffe719e] {
          transition: transform .25s ease-in-out;
          width: 463px;
          z-index: 9999
      }

      @media screen and (max-width: 768px) {
          .flyout[data-v-6ffe719e] {
              width:100%
          }
      }

      .flyout__overlay[data-v-6ffe719e] {
          background-color: rgba(0,0,0,.15)
      }

      .flyout[data-v-6ffe719e] {
          transition: all .25s ease-in-out
      }

      .flyout .flyout__inner[data-v-6ffe719e] {
          background-image: url(/_nuxt/img/account-flyout.bace47b.png);
          background-position: 100% 100%;
          background-repeat: no-repeat;
          transition: transform .25s ease-in-out
      }

      .flyout .flyout__overlay[data-v-6ffe719e] {
          transition: opacity .25s ease-in-out
      }

      .slide-enter .flyout__inner[data-v-6ffe719e],.slide-leave-to .flyout__inner[data-v-6ffe719e] {
          transform: translateX(100%)
      }

      .slide-enter .flyout__overlay[data-v-6ffe719e],.slide-leave-to .flyout__overlay[data-v-6ffe719e] {
          opacity: 0
      }

      .product_hero .color_picker .border-dashed:not(.selected),.product_hero .option.cursor-not-allowed:not(.selected) {
          display: none
      }

      .breadcrumbs__list[data-v-71445484] {
          list-style-type: none
      }

      .breadcrumbs__list_item[data-v-71445484],.breadcrumbs__list_item[data-v-71445484]:after {
          display: inline;
          font-size: .875rem;
          line-height: 1.25rem
      }

      .breadcrumbs__list_item[data-v-71445484]:after {
          --tw-text-opacity: 1;
          color: #817f7c;
          content: " / ";
          padding: 0 .0725em 0 .15em
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .breadcrumbs__list_item[data-v-71445484]:after {
              color:rgb(129 127 124/var(--tw-text-opacity))
          }
      }

      .breadcrumbs__list_item[data-v-71445484]:last-child:after {
          content: ""
      }

      .breadcrumbs__list_item>a[data-v-71445484] {
          --tw-text-opacity: 1;
          color: #817f7c;
          font-size: .875rem;
          line-height: 1.25rem
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .breadcrumbs__list_item>a[data-v-71445484] {
              color:rgb(129 127 124/var(--tw-text-opacity))
          }
      }

      .breadcrumbs__list_item>a[data-v-71445484]:hover {
          --tw-text-opacity: 1;
          color: #009a7b
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .breadcrumbs__list_item>a[data-v-71445484]:hover {
              color:rgb(0 154 123/var(--tw-text-opacity))
          }
      }

      .breadcrumbs__list_item>a.nuxt-link-exact-active[data-v-71445484] {
          --tw-text-opacity: 1;
          color: #2d2a24;
          font-weight: 500
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .breadcrumbs__list_item>a.nuxt-link-exact-active[data-v-71445484] {
              color:rgb(45 42 36/var(--tw-text-opacity))
          }
      }

      afterpay-placement {
          height: 26px;
          margin: .5rem 0
      }

      @media(max-width: 768px) {
          afterpay-placement {
              --logo-badge-width:80px;
              margin: 3px 0 0
          }
      }

      .badge__container[data-v-9b020d8c] {
          padding: 4px 16px 4px 10px
      }

      .badge__container.large__badge[data-v-9b020d8c] {
          padding: 6px 18px 6px 12px
      }

      .icon-tag[data-v-9b020d8c] {
          background-position: 0;
          background-repeat: no-repeat;
          display: inline-block;
          height: 14px;
          width: 14px
      }

      .icon-tag.large__badge[data-v-9b020d8c] {
          height: 24px;
          width: 16px
      }

      @media(min-width: 480px) {
          .badge__container[data-v-9b020d8c] {
              padding:6px 18px 6px 12px
          }

          para .icon-tag[data-v-9b020d8c] {
              height: 24px;
              width: 16px
          }
      }

      .icon-tag-exclusive[data-v-9b020d8c] {
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDI5IDMyIj48ZGVmcz48c3R5bGU+ICAuY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS4zNXB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+RXhjbHVzaXZlIEljb248L3RpdGxlPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxNC41IDMuMiAxOC43IDExLjYgMjggMTMgMjEuMyAxOS42IDIyLjggMjguOCAxNC41IDI0LjUgNi4yIDI4LjggNy44IDE5LjYgMSAxMyAxMC4zIDExLjYgMTQuNSAzLjIiLz48L3N2Zz4=)
      }

      .icon-tag-heart[data-v-9b020d8c] {
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDI5IDMyIj48ZGVmcz48c3R5bGU+ICAuY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS4zNXB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+SGVhcnQgSWNvbjwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTQuNSAyOWM5LjQtNy4xIDEyLTEyLjEgMTItMTIuMSA0LjMtOC41LTIuMS0xMi4yLTIuMS0xMi4yQzE4LjMgMSAxNC41IDcuNCAxNC41IDcuNFMxMC43IDEgNC42IDQuN2MwIDAtNi40IDMuNy0yLjEgMTIuMiAwIDAgMi41IDQuOSAxMiAxMi4xWiIvPjwvc3ZnPg==)
      }

      .icon-tag-gift[data-v-9b020d8c] {
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDI5IDMyIj48ZGVmcz48c3R5bGU+ICAuY2xzLTEsLmNscy0ye2ZpbGw6bm9uZTtzdHJva2U6I2ZmZjt9LmNscy0xe3N0cm9rZS13aWR0aDoxLjIycHg7fS5jbHMtMntzdHJva2Utd2lkdGg6MS4xM3B4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+R2lmdCBJY29uPC90aXRsZT48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjUuMSIgeT0iMTIuMiIgd2lkdGg9IjE4LjgiIGhlaWdodD0iMTMuNSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMy45IiB5PSI3LjMiIHdpZHRoPSIyMS4zIiBoZWlnaHQ9IjQuOSIvPjxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjE0LjUiIHkxPSI2LjciIHgyPSIxNC41IiB5Mj0iMjUuOSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE0LjMgNi43YTcuNyA3LjcgMCAwIDEgMS42LTQuMWMxLTEgMy4xLTEuNyA0LTAuOGEyLjIgMi4yIDAgMCAxLTAuNCAzLjNDMTguNCA2IDE0LjMgNi43IDE0LjMgNi43WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE0LjUgNi43YTI2LjUgMjYuNSAwIDAgMC0xLjMtNC4yYy0wLjYtMS4zLTMtMS45LTMuOS0xYTIuMiAyLjIgMCAwIDAgMC4yIDMuM0MxMC41IDUuNyAxNC41IDYuNyAxNC41IDYuN1oiLz48L3N2Zz4=)
      }

      .icon-tag-potted-plant[data-v-9b020d8c] {
          background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOSAzMiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjEuMzVweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPlBsYW50IEljb248L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTYuODUsMTloMTRhLjUyLjUyLDAsMCwxLC4yNC4wNS41Ni41NiwwLDAsMSwuMi4xNC43OC43OCwwLDAsMSwuMTIuMjIuNjUuNjUsMCwwLDEsMCwuMjRMMjAuMTMsMjkuOTRhLjYzLjYzLDAsMCwxLS4xOS4zNi42Mi42MiwwLDAsMS0uMzkuMTRINy45NGEuNTguNTgsMCwwLDEtLjM5LS4xNS41NC41NCwwLDAsMS0uMTktLjM3TDYuMjcsMTkuNThhLjUuNSwwLDAsMSwwLS4yNC44Mi44MiwwLDAsMSwuMTItLjIuNTYuNTYsMCwwLDEsLjItLjE0QS40Ni40NiwwLDAsMSw2Ljg1LDE5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEuMTMsMi4xMkMyLjQ4LDEuNjcsMTIuMzktMSwxMy42OCwxMS4yOWMwLC4xLjEsMCwwLDAtMS40Ni40My0xMi4xMywzLjI3LTEyLjctOUEuMjguMjgsMCwwLDEsMSwyLjJhLjIxLjIxLDAsMCwxLC4xMS0uMDhaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMSwyLjMzbDEyLjcsOVYxOSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI4LDUuOTFjLS4yOCwxLjM5LTIuNzYsMTEuNjEtMTQuMDcsNi41NWEuMjIuMjIsMCwwLDEtLjEtLjA5LjIzLjIzLDAsMCwxLDAtLjE0QzE0LjE3LDEwLjc1LDE3LC4wOCwyNy45Miw1LjY5YS4yNC4yNCwwLDAsMSwuMDguMDkuMi4yLDAsMCwxLDAsLjEzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI3LjkyLDUuNjgsMTMuODMsMTIuMjMiLz48L3N2Zz4=)
      }

      .icon-tag-paw[data-v-9b020d8c] {
          background-image: url(/_nuxt/img/icon-tag-paw.99fef00.svg)
      }

      .icon-tag-staff[data-v-9b020d8c] {
          background-image: url(/_nuxt/img/icon-tag-staff.7d1b73f.svg)
      }

      .icon-tag-subscription[data-v-9b020d8c] {
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDI5IDMyIj48ZGVmcz48c3R5bGU+ICAuY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS4zNXB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+U3Vic2NyaXB0aW9uIEljb248L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE0IDIuN2E0OC45IDQ4LjkgMCAwIDAgMS42IDEwLjFjMyAxLjYgNi41IDMuOSA3LjkgNi40YTkuMSA5LjEgMCAwIDAgMS41LTAuOWwwLjItMC4xQzM1LjQgMTEuMSAxNCAyLjcgMTQgMi43WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE1LjYgMTIuOWE1MS40IDUxLjQgMCAwIDAtNS4zLTIuNSA1Mi43IDUyLjcgMCAwIDAgMSA3LjZjMi44IDIuMyA0LjcgNSAzLjEgNy43IDEuNiAyIDMuOSAyLjYgNyAwLjRsMC4yLTAuMWMzLjEtMi4yIDMuMy00LjUgMi02LjYiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMy42IDE5LjNjLTEuNS0yLjUtNC45LTQuOC03LjktNi40Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTEuMyAxOEE0NS45IDQ1LjkgMCAwIDAgMSAxMi4yczAuOSAyMi44IDExLjEgMTUuN2wwLjItMC4xYTcuNSA3LjUgMCAwIDAgMi4xLTIuMSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE0LjQgMjUuNkMxNiAyMi45IDE0LjEgMjAuMiAxMS4zIDE4Ii8+PC9zdmc+)
      }

      .icon-tag-top-seller[data-v-9b020d8c] {
          background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDI5IDMyIj48ZGVmcz48c3R5bGU+ICAuY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS40MnB4O30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+VG9wIFNlbGxlciBJY29uPC90aXRsZT48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjE0LjUiIGN5PSIxNiIgcj0iMTMuMiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIyLjUgMTcuOWE4LjEgOC4xIDAgMCAxLTE2LTAuMSIvPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iOS4yIiBjeT0iMTEuNyIgcj0iMS41Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTIiIGN4PSIxOS44IiBjeT0iMTEuNyIgcj0iMS41Ii8+PC9zdmc+)
      }

      .icon-tag-usa[data-v-9b020d8c] {
          background-image: url(/_nuxt/img/icon-tag-usa.41b3e46.svg)
      }

      .fill {
          -o-object-fit: cover;
          object-fit: cover
      }

      .sill-slider__image[data-v-604aceb6] {
          display: block;
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
          pointer-events: none;
          width: 100%;
          z-index: 10
      }

      .sill-slider__image[data-v-604aceb6] img {
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
          width: 100%
      }

      .sill-slider__button[data-v-604aceb6] {
          opacity: 0;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          transition-duration: .15s;
          transition-property: all;
          transition-timing-function: cubic-bezier(.4,0,.2,1);
          z-index: 20
      }

      .product-card-image-slider .sill-slider__image-container[data-v-604aceb6] {
          height: 0;
          overflow: hidden;
          padding-bottom: 130%
      }

      .product-card-image-slider .sill-slider__image[data-v-604aceb6] {
          left: 0;
          position: absolute;
          top: 0
      }

      .sill-slider__action[data-v-604aceb6] {
          bottom: 0;
          left: 0;
          opacity: 0;
          padding-bottom: 1.5rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          position: absolute;
          right: 0;
          transition-duration: .15s;
          transition-property: all;
          transition-timing-function: cubic-bezier(.4,0,.2,1);
          z-index: 20
      }

      .sill-slider__action[data-v-604aceb6],.sill-slider__button[data-v-604aceb6] {
          display: none
      }

      @media (min-width: 1024px) {
          .sill-slider__action[data-v-604aceb6],.sill-slider__button[data-v-604aceb6] {
              display:block
          }

          .sill-slider:hover .sill-slider__button[data-v-604aceb6] {
              height: 100%;
              opacity: 1
          }

          .sill-slider:hover .sill-slider__action[data-v-604aceb6] {
              opacity: 1
          }
      }

      @media (min-width: 1680px) {
          .product_hero .sill-slider__image-container[data-v-604aceb6] {
              height:95vh;
              min-height: 800px
          }

          .product_hero .sill-slider__image[data-v-604aceb6] img {
              -o-object-fit: contain;
              object-fit: contain
          }
      }

      .selected.border-dashed[data-v-f8658cda] {
          --tw-border-opacity: 1;
          border-color: #9ca3af
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .selected.border-dashed[data-v-f8658cda] {
              border-color:rgb(156 163 175/var(--tw-border-opacity))
          }
      }

      .selected[data-v-f8658cda] {
          border-color: #2d2a24
      }

      .color-item--disabled[data-v-f8658cda]:after {
          border: 2px solid #fff;
          content: "";
          position: absolute;
          transform: rotate(-45deg);
          width: 40px
      }

      .sill-btn[data-v-2038032e] {
          border-radius: 1px;
          font-size: 1rem;
          line-height: 1.5rem;
          line-height: 1.25;
          padding: 15px 5px 14px
      }

      .x-padding[data-v-2038032e] {
          padding-left: 1.5rem;
          padding-right: 1.5rem
      }

      .ch-svg-container {
          display: inline-flex
      }

      .ch-svg-container svg {
          height: 100%;
          max-height: 24rem;
          max-width: 24rem;
          transition-duration: .3s;
          transition-property: all;
          transition-timing-function: cubic-bezier(.4,0,.2,1);
          width: 100%
      }

      .ch-svg-container-solid svg {
          fill: currentColor
      }

      .ch-svg-container-outline svg {
          stroke: currentColor
      }

      .complementary-product[data-v-662f6107] {
          aspect-ratio: 15/19
      }

      .title[data-v-662f6107] {
          margin-bottom: -6px
      }

      .accordion-content {
          transition: max-height .3s ease-out,padding .3s ease
      }

      .accordion-header span {
          font-family: "Domaine Display"
      }

      .product-description[data-v-13e7cf87] hr,.product-description[data-v-13e7cf87] li,.product-description[data-v-13e7cf87] p,.product-description[data-v-13e7cf87] ul {
          margin-bottom: 10px
      }

      .product-description[data-v-13e7cf87] ul {
          padding-left: 24px
      }

      .product-description[data-v-13e7cf87] li {
          padding-left: 18px
      }

      .product-description[data-v-13e7cf87] li::marker {
          content: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='10' fill='none'%3E%3Cpath fill='%2300AB84' d='M23.063 3.687 20.475.612c-.225-.262-.637-.3-.937-.075-.263.225-.3.638-.075.938L21.9 4.362H1.125c-.375 0-.675.3-.675.675 0 .375.3.675.675.675H21.9L19.463 8.6c-.225.262-.188.675.075.937.112.113.262.15.412.15a.605.605 0 0 0 .488-.225l2.587-3.075c.675-.825.675-1.95.038-2.7Z'/%3E%3C/svg%3E")
      }

      .product-description[data-v-13e7cf87] a {
          color: #007b5f
      }

      .rte h1,.rte h2,.rte h3,.rte h4,.rte h5,.rte h6 {
          margin-bottom: 1rem;
          margin-top: 3rem
      }

      .rte ol,.rte p,.rte ul {
          margin-bottom: 1rem
      }

      .rte a {
          color: #007b5f
      }

      .gap {
          height: 1px;
          margin: 24px 0
      }

      @media(min-width: 480px) {
          .gap {
              margin:30px 0
          }
      }

      @media(min-width: 768px) {
          .gap {
              margin:36px 0
          }
      }

      .links__container button {
          padding-left: 0!important;
          text-align: left!important;
          width: 100%!important
      }

      .links__container button .sill-link_span {
          font-weight: 500!important
      }

      .dynamic_content__container h3,.dynamic_content__container span {
          font-size: 1.5rem;
          line-height: 2rem
      }

      .dynamic_content__container h3 {
          margin-bottom: 2rem;
          margin-top: 2rem
      }

      .dynamic_content__container p {
          margin-bottom: 2rem
      }

      .sill-link[data-v-165cf929] {
          border-radius: .125rem
      }

      .sill-link_span[data-v-165cf929] {
          font-size: inherit
      }

      .sill-link.hoverable:hover .sill-link_span[data-v-165cf929] {
          font-style: italic
      }

      .padding[data-v-165cf929] {
          padding: 1rem 1.5rem
      }

      .large[data-v-165cf929] {
          font-size: 2.25rem;
          line-height: 2.5rem
      }

      .medium[data-v-165cf929] {
          font-size: 1.875rem;
          line-height: 2.25rem
      }

      .small[data-v-165cf929] {
          font-size: 1.3125rem;
          line-height: 1.75rem
      }

      .xs[data-v-165cf929] {
          font-size: 1rem;
          line-height: 1.5rem
      }

      .arrow[data-v-165cf929],.sill-link_span[data-v-165cf929] {
          transition-duration: .15s;
          transition-property: all;
          transition-timing-function: cubic-bezier(.4,0,.2,1)
      }

      .sill-link.hoverable:hover .arrow[data-v-165cf929] {
          --tw-translate-x: 0.25rem;
          transform: translate(.25rem,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          transform: translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
      }

      .global-footer[data-v-96956a1a] {
          background-position: 100% 0;
          background-repeat: no-repeat;
          background-size: 20%
      }

      @media (min-width: 768px) {
          .global-footer[data-v-96956a1a] {
              background-size:auto auto;
              background-size: initial
          }
      }

      .loaded-background[data-v-96956a1a] {
          background-image: url(/_nuxt/img/footer-leaf.9450039.png)
      }

      .image[data-v-a017c6c6] {
          max-width: 40%
      }

      input[data-v-18144d64]:focus {
          box-shadow: none!important;
          outline: 0!important
      }

      .error-input[data-v-18144d64] {
          --tw-text-opacity: 1;
          background-color: rgba(221,9,34,.078);
          border: 1px solid #dd0922;
          color: #dd0922
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .error-input[data-v-18144d64] {
              color:rgb(221 9 34/var(--tw-text-opacity))
          }
      }

      .error-input[data-v-18144d64]::placeholder {
          --tw-text-opacity: 1;
          color: #dd0922
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .error-input[data-v-18144d64]::placeholder {
              color:rgb(221 9 34/var(--tw-text-opacity))
          }
      }

      .success-input[data-v-18144d64] {
          --tw-text-opacity: 1;
          background-color: rgba(0,171,132,.078);
          border: 1px solid #009a63;
          color: #009a63
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .success-input[data-v-18144d64] {
              color:rgb(0 154 99/var(--tw-text-opacity))
          }
      }

      .success-input[data-v-18144d64]::placeholder {
          --tw-text-opacity: 1;
          color: #009a63
      }

      @supports (color: rgb(0 0 0/0)) and (top:var(--f)) {
          .success-input[data-v-18144d64]::placeholder {
              color:rgb(0 154 99/var(--tw-text-opacity))
          }
      }

      .modal-wrapper[data-v-7f9a3b33] {
          border: 1px solid #f5f5f5;
          overflow: hidden;
          position: relative
      }

      img[data-v-7f9a3b33] {
          display: block;
          width: 100%
      }

      .modal-outer[data-v-7f9a3b33] {
          align-items: center;
          background-color: rgba(0,0,0,.7);
          bottom: 0;
          display: flex;
          justify-content: center;
          left: 0;
          padding: 6rem 2rem 2rem;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 9999
      }

      .close[data-v-7f9a3b33] {
          position: absolute;
          right: 2rem;
          top: 2rem;
          width: .87rem;
          z-index: 99999
      }

      .modal-inner[data-v-7f9a3b33] {
          background-color: #fff;
          border-radius: 2px;
          display: flex;
          flex-wrap: wrap;
          margin: 0 auto;
          max-height: 100%;
          max-width: 800px;
          min-height: 8rem;
          overflow: auto;
          padding: 2rem;
          position: relative
      }

      .fade-enter-active[data-v-7f9a3b33],.fade-leave-active[data-v-7f9a3b33] {
          transition: opacity .25s
      }

      .fade-enter[data-v-7f9a3b33],.fade-leave-to[data-v-7f9a3b33] {
          opacity: 0
    extend: {},
  },
  plugins: [],
} satisfies Config

