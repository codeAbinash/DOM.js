# DOM.js Alpha 1.1.2 🤫
![File Size](https://img.shields.io/github/size/codeAbinash/DOM.js/DOM.js?)
![Release Date](https://img.shields.io/github/release-date/codeabinash/DOM.js?color=limegreen)
![Languages](https://img.shields.io/github/languages/top/codeabinash/DOM.js?color=limegreen)
![Tag](https://img.shields.io/github/tag/codeabinash/DOM.js?color=limegreen)
![Downloads](https://img.shields.io/github/downloads/codeabinash/DOM.js/total?color=limegreen)
![Watch](https://img.shields.io/github/stars/codeabinash/DOM.js?label=Watch&color=blue)
![Stars](https://img.shields.io/github/stars/codeabinash/DOM.js)

![Logo](./images/logo.svg)
Easily Manipulate DOM with DOM.js - As Easy as possible!!!
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

### With Custom Settings 😲 🅰️🅰️
```html
<h1>Hello</h1>
<h1>Hello</h1>
<h1>Hello</h1>
```
```js
DOM("h1").text = {
    text:["Abinash", "Pekachu", 10],
    appendType : "prepend"
};
```
```
AbinashHello
PekachuHello
10Hello
```
```js

DOM("h1").text = {
    text:["Abinash", "Pekachu"],
    ignore : true,
    appendType : "prepend"
};
```
```
AbinashHello
PekachuHello
Hello
```

```js
DOM("h1").text = {
    text:["Abinash", "Pekachu"],
    ignore : false,
    appendType : "prepend"
};
```
> ERROR : Length of input Array and selected DOM elements are not Same
```
Hello
Hello
Hello
```

If length of texts in `text:[arr]` are not same as selected DOM elements and used `ignore:false` or `ignore` not specified then, there will be a `error : Length of input Array and selected DOM elements are not Same`



```html
<h1>Hello</h1>
<h1>Hello</h1>
<h1>Hello</h1>
<h1>Hello</h1>
```
```js
DOM("h1").text = [
    {text : "1", appendType : "append"},
    "Hii",
    {text : "2", appendType : "prepend"},
    {text : "Abinash"}
]
```
```
Hello1
Hii
2Hello
Abinash
```





### Text Append 📼🅰️
```html
<h1 id="d">JavaScript</h1>
```
```js
let elem = DOM("#d")
elem.text = { text : " Abinash", appendType : "append" }
// JavaScript Abinash
```

### Text Prepend 📼🅰️
```html
<h1 id="d">JavaScript</h1>
```
```js
let elem = DOM("#d")
elem.text = { text : "Abinash", appendType : "prepend" }
//console : AbinashJavaScript
```

> NOTE : Here in the place of `text : "Text"`, `data : "Text" ` can also be used. 



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
