(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/condex.js":
/*!************************!*\
  !*** ../pkg/condex.js ***!
  \************************/
/*! exports provided: Condexer, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Condexer\", function() { return Condexer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _condex_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./condex_bg.wasm */ \"../pkg/condex_bg.wasm\");\n\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _condex_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_condex_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction passStringToWasm(arg) {\n\n    let len = arg.length;\n    let ptr = _condex_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](len);\n\n    const mem = getUint8Memory();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = _condex_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory = null;\nfunction getInt32Memory() {\n    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _condex_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory = new Int32Array(_condex_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n/**\n*/\nclass Condexer {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Condexer.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _condex_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_condexer_free\"](ptr);\n    }\n    /**\n    * @param {string} text\n    * @returns {Condexer}\n    */\n    constructor(text) {\n        const ret = _condex_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"condexer_new\"](passStringToWasm(text), WASM_VECTOR_LEN);\n        return Condexer.__wrap(ret);\n    }\n    /**\n    * @param {string} key\n    * @param {number} value\n    */\n    update(key, value) {\n        _condex_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"condexer_update\"](this.ptr, passStringToWasm(key), WASM_VECTOR_LEN, value);\n    }\n    /**\n    * @returns {string}\n    */\n    get result_string() {\n        const retptr = 8;\n        const ret = _condex_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"condexer_result_string\"](retptr, this.ptr);\n        const memi32 = getInt32Memory();\n        const v0 = getStringFromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();\n        _condex_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 1);\n        return v0;\n    }\n}\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/condex.js?");

/***/ }),

/***/ "../pkg/condex_bg.wasm":
/*!*****************************!*\
  !*** ../pkg/condex_bg.wasm ***!
  \*****************************/
/*! exports provided: memory, __wbg_condexer_free, condexer_new, condexer_update, condexer_result_string, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./condex.js */ \"../pkg/condex.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/condex_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var condex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! condex */ \"../pkg/condex.js\");\n\r\n\r\nwindow.run = function run() {\r\n  let text = document.getElementById('condex-source').value;\r\n  let condex = new condex__WEBPACK_IMPORTED_MODULE_0__[\"Condexer\"](text);\r\n\r\n  let dict_table = document.getElementById('condex-dict-table');\r\n  for (let row of dict_table.children) {\r\n    let key = row.children[0].children[0].value;\r\n    let value = parseFloat(row.children[1].children[0].value);\r\n\r\n    if (key && !isNaN(value)) {\r\n      condex.update(key, value);\r\n    }\r\n  }\r\n\r\n  let result_element = document.getElementById('condex-result');\r\n  result_element.textContent = condex.result_string;\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);