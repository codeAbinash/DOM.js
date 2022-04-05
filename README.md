# DOM.js Alpha 1.0.1 🤫
![File Size](https://img.shields.io/github/size/codeAbinash/DOM.js/DOM.js?)
![Release Date](https://img.shields.io/github/release-date/codeabinash/DOM.js?color=limegreen)
![Languages](https://img.shields.io/github/languages/top/codeabinash/DOM.js?color=limegreen)
![Tag](https://img.shields.io/github/tag/codeabinash/DOM.js?color=limegreen)
![Downloads](https://img.shields.io/github/downloads/codeabinash/DOM.js/total?color=limegreen)
![Watch](https://img.shields.io/github/stars/codeabinash/DOM.js?label=Watch&color=blue)
![Stars](https://img.shields.io/github/stars/codeabinash/DOM.js)

Easily Manipulate DOM with DOM.js - As easiest as possible!!!
# Full Documentation 🙈


## How to Use 🤷‍♂️

### HTML
```html
<script src="index.js" type="module" defer></script>
```
### JS 🤔
```js
// index.js
import DOM from "https://codeabinash.github.io/DOM.js/DOM.js"
```
> Do not use the `DOMElem` and `DOM` as variable name or function or class name etc. because it is in use internally already


## Select DOM Elements 🥱
`DOM(selector)` here `selector` works like `querySelector` as needed

### As `class` `id` `tagName`
```js
let h1 = DOM("h1")
let spans = DOM("span")
let myDiv = DOM("#myDiv")
let s = DOM("h1 .me")
```



### Create DOM object from existing one 🙅‍♂️
```js
let div = DOM("#myDiv")
let oldDiv = DOM(div)
```
### Create DOM object from Native DOM element 😾
```js
let name = document.getElementById("name")
let domName = DOM(name)
console.log(domName.text);

// console : Abinash
```


### Select from DOM element 😏
```html
<h1>Hello</h1>
<h1>My name is <span>Abinash</span></h1>
```
```js
let name = DOM("h1 span")
name.text = "Pekachu"
```
```
Hello
My name is Pekachu
```

### Select from DOM object 😵‍💫
```html
<h1>Hello</h1>
<h1>My name is <span>Abinash</span></h1>
```
```js
let h1 = DOM("h1")
let name = h1.select("span") //Select "span" from h1
console.log(name.text);
// console : Abinash
```

### Change Single Text 🅰️
```html
<h1>Hello</h1>
<h1 id="d">Hello</h1>
<h1>Hello</h1>
```

```js
DOM("#d").text = "Pekachu"
```
```html
Hello
Pekachu
Hello
```



### Change Multiple Text 🤔 🅰️🅰️🅰️
```html
<h1>Hello</h1>
<h1>Hello</h1>
<h1>Hello</h1>
```
```js
DOM("h1").text = "All are changed"
```
```
All are changed
All are changed
All are changed
```

### Change Multiple Text(Array) 😲 🅰️🅰️🅰️
```html
<h1>Hello</h1>
<h1>Hello</h1>
<h1>Hello</h1>
```
```js
DOM("h1").text = ["Abinash", "Pekachu", 10];
```
```
Abinash
Pekachu
10
```
>Note : if the number of array elements and the number of elements in the array is not same it will give an error message. and `.textA` works similarly.




### Get single text 🅰️
```html
<h1>Hello</h1>
<h1 id="d">JavaScript</h1>
<h1>Hello</h1>
```
```js
let d = DOM("#d")
console.log(d.text)
//console : JavaScript
```


### Get Multiple texts ( As Array ) 🤔 🅰️🅰️🅰️
```js
let elements = DOM("h1")
console.log(elements.text);
// console : (3) ['Hello', 'JavaScript', 'Hello']
```
> NOTE : If there is more than 1 DOM element is elected it `text` returns texts as array, otherwise it returns a string value

```js
let elements = DOM("h1")
console.log(elements.textArr);
```
> NOTE : `textArr` always returns as array for single DOM elements too.

### Text Append 📼🅰️
```html
<h1 id="d">JavaScript</h1>
```
```js
let elem = DOM("#d")
elem.textA = " HTML"
//or
elem.text = elem.text + " HTML"
//console : JavaScript HTML
```
### Get Native DOM element 🤔
```js
let name = DOM("#name")
let nativeDOM = name.dom
//Original DOM (Native)
```
> NOTE :  `dom` returns single DOM element if there is a single DOM element is selected otherwise it returns array of DOM elements. To return always as array use `domArr` instead of `dom`. it always returns `array` for single DOM elements too.
```js
let name = DOM("#name")
let nativeDOM = name.domArr
//Original DOM (Native)
```

### nth element 😲
```html
<h1>Hello</h1>
<h1>Abinash</h1>
<h1>Hi</h1>
```
```js
let h1 = DOM("h1")
let name = h1.n(1) // 2nd Element
console.log(name.text); // Abinash

console.log(DOM("h1").n(2).text) // Hi
```



# .... Upgrading to
# DOM methods like `css`, `eventListener`, `class`, `id`, `transitions` etc ...  Coming Soon 🤩🤩🤩
