import { createRequire } from "node:module";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { FileTextIcon, Mail, MenuIcon, MoonIcon, Send, SunIcon, XIcon } from "lucide-vue-next";
import { useIntersectionObserver } from "@vueuse/core";
import { useHead } from "@unhead/vue";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i$10 = 0, n$7 = keys.length, key; i$10 < n$7; i$10++) {
		key = keys[i$10];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k$3) => from[k$3]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* @__PURE__ */ createRequire(import.meta.url);
var require_vue_cjs_prod = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var compilerDom$1 = __require("@vue/compiler-dom");
	var runtimeDom$1 = __require("@vue/runtime-dom");
	var shared$1 = __require("@vue/shared");
	function _interopNamespaceDefault$1(e$1) {
		var n$7 = Object.create(null);
		if (e$1) for (var k$3 in e$1) n$7[k$3] = e$1[k$3];
		n$7.default = e$1;
		return Object.freeze(n$7);
	}
	var runtimeDom__namespace$1 = /* @__PURE__ */ _interopNamespaceDefault$1(runtimeDom$1);
	var compileCache$1 = /* @__PURE__ */ Object.create(null);
	function compileToFunction$1(template, options) {
		if (!shared$1.isString(template)) if (template.nodeType) template = template.innerHTML;
		else return shared$1.NOOP;
		const key = shared$1.genCacheKey(template, options);
		const cached = compileCache$1[key];
		if (cached) return cached;
		if (template[0] === "#") {
			const el = document.querySelector(template);
			template = el ? el.innerHTML : ``;
		}
		const opts = shared$1.extend({
			hoistStatic: true,
			onError: void 0,
			onWarn: shared$1.NOOP
		}, options);
		if (!opts.isCustomElement && typeof customElements !== "undefined") opts.isCustomElement = (tag) => !!customElements.get(tag);
		const { code } = compilerDom$1.compile(template, opts);
		const render = new Function("Vue", code)(runtimeDom__namespace$1);
		render._rc = true;
		return compileCache$1[key] = render;
	}
	runtimeDom$1.registerRuntimeCompiler(compileToFunction$1);
	exports.compile = compileToFunction$1;
	Object.keys(runtimeDom$1).forEach(function(k$3) {
		if (k$3 !== "default" && !Object.prototype.hasOwnProperty.call(exports, k$3)) exports[k$3] = runtimeDom$1[k$3];
	});
}));
var require_vue_cjs = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var compilerDom = __require("@vue/compiler-dom");
	var runtimeDom = __require("@vue/runtime-dom");
	var shared = __require("@vue/shared");
	function _interopNamespaceDefault(e$1) {
		var n$7 = Object.create(null);
		if (e$1) for (var k$3 in e$1) n$7[k$3] = e$1[k$3];
		n$7.default = e$1;
		return Object.freeze(n$7);
	}
	var runtimeDom__namespace = /* @__PURE__ */ _interopNamespaceDefault(runtimeDom);
	var compileCache = /* @__PURE__ */ Object.create(null);
	function compileToFunction(template, options) {
		if (!shared.isString(template)) if (template.nodeType) template = template.innerHTML;
		else {
			runtimeDom.warn(`invalid template option: `, template);
			return shared.NOOP;
		}
		const key = shared.genCacheKey(template, options);
		const cached = compileCache[key];
		if (cached) return cached;
		if (template[0] === "#") {
			const el = document.querySelector(template);
			if (!el) runtimeDom.warn(`Template element not found or is empty: ${template}`);
			template = el ? el.innerHTML : ``;
		}
		const opts = shared.extend({
			hoistStatic: true,
			onError,
			onWarn: (e$1) => onError(e$1, true)
		}, options);
		if (!opts.isCustomElement && typeof customElements !== "undefined") opts.isCustomElement = (tag) => !!customElements.get(tag);
		const { code } = compilerDom.compile(template, opts);
		function onError(err, asWarning = false) {
			const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
			const codeFrame = err.loc && shared.generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
			runtimeDom.warn(codeFrame ? `${message}
${codeFrame}` : message);
		}
		const render = new Function("Vue", code)(runtimeDom__namespace);
		render._rc = true;
		return compileCache[key] = render;
	}
	runtimeDom.registerRuntimeCompiler(compileToFunction);
	exports.compile = compileToFunction;
	Object.keys(runtimeDom).forEach(function(k$3) {
		if (k$3 !== "default" && !Object.prototype.hasOwnProperty.call(exports, k$3)) exports[k$3] = runtimeDom[k$3];
	});
}));
var require_vue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	if (process.env.NODE_ENV === "production") module.exports = require_vue_cjs_prod();
	else module.exports = require_vue_cjs();
}));
var vue_exports = {};
__reExport(vue_exports, /* @__PURE__ */ __toESM(require_vue(), 1));
var server_renderer_exports = {};
import * as import___vue_server_renderer from "@vue/server-renderer";
__reExport(server_renderer_exports, import___vue_server_renderer);
var UIButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIButton",
	__ssrInlineRender: true,
	props: {
		variant: { default: "primary" },
		tag: { default: "button" }
	},
	setup(__props) {
		const variants = {
			primary: "bg-accent text-white hover:bg-pop",
			outline: "border border-border bg-surface hover:border-accent",
			ghost: "hover:bg-muted"
		};
		return (_ctx, _push, _parent, _attrs) => {
			(0, server_renderer_exports.ssrRenderVNode)(_push, (0, vue_exports.createVNode)((0, vue_exports.resolveDynamicComponent)(__props.tag), (0, vue_exports.mergeProps)({ class: ["inline-flex items-center justify-center gap-2 font-medium rounded-lg px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg", variants[__props.variant]] }, _ctx.$attrs, _attrs), {
				default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
					if (_push$1) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push$1, _parent$1, _scopeId);
					else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default")];
				}),
				_: 3
			}), _parent);
		};
	}
});
var _sfc_setup$44 = UIButton_vue_vue_type_script_setup_true_lang_default.setup;
UIButton_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIButton.vue");
	return _sfc_setup$44 ? _sfc_setup$44(props, ctx) : void 0;
};
var UIButton_default = UIButton_vue_vue_type_script_setup_true_lang_default;
var __plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "glass rounded-2xl border shadow-lg transition hover:shadow-xl hover:-translate-y-1" }, _attrs))}>`);
	(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div>`);
}
var _sfc_setup$43 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UICard.vue");
	return _sfc_setup$43 ? _sfc_setup$43(props, ctx) : void 0;
};
var UICard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var UICardHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UICardHeader",
	__ssrInlineRender: true,
	props: { class: { default: "" } },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: (0, vue_exports.unref)(cn)("flex flex-col space-y-1.5 p-6", props.class) }, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$42 = UICardHeader_vue_vue_type_script_setup_true_lang_default.setup;
UICardHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UICardHeader.vue");
	return _sfc_setup$42 ? _sfc_setup$42(props, ctx) : void 0;
};
var UICardTitle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UICardTitle",
	__ssrInlineRender: true,
	props: { class: { default: "" } },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<h3${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: (0, vue_exports.unref)(cn)("text-2xl font-semibold leading-none tracking-tight", props.class) }, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</h3>`);
		};
	}
});
var _sfc_setup$41 = UICardTitle_vue_vue_type_script_setup_true_lang_default.setup;
UICardTitle_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UICardTitle.vue");
	return _sfc_setup$41 ? _sfc_setup$41(props, ctx) : void 0;
};
var UICardContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UICardContent",
	__ssrInlineRender: true,
	props: { class: { default: "" } },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: (0, vue_exports.unref)(cn)("p-6 pt-0", props.class) }, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$40 = UICardContent_vue_vue_type_script_setup_true_lang_default.setup;
UICardContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UICardContent.vue");
	return _sfc_setup$40 ? _sfc_setup$40(props, ctx) : void 0;
};
var UIBadge_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIBadge",
	__ssrInlineRender: true,
	props: { shiny: { type: Boolean } },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<span${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: ["inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border bg-surface text-primary border-border", { "badge-live": __props.shiny }] }, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</span>`);
		};
	}
});
var _sfc_setup$39 = UIBadge_vue_vue_type_script_setup_true_lang_default.setup;
UIBadge_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIBadge.vue");
	return _sfc_setup$39 ? _sfc_setup$39(props, ctx) : void 0;
};
var UIBadge_default = UIBadge_vue_vue_type_script_setup_true_lang_default;
var UISeparator_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UISeparator",
	__ssrInlineRender: true,
	props: {
		orientation: { default: "horizontal" },
		class: { default: "" }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				class: (0, vue_exports.unref)(cn)("shrink-0 bg-border", props.class),
				style: {
					height: props.orientation === "horizontal" ? "1px" : void 0,
					width: props.orientation === "vertical" ? "1px" : void 0
				}
			}, _ctx.$attrs, { role: "separator" }, _attrs))}></div>`);
		};
	}
});
var _sfc_setup$38 = UISeparator_vue_vue_type_script_setup_true_lang_default.setup;
UISeparator_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UISeparator.vue");
	return _sfc_setup$38 ? _sfc_setup$38(props, ctx) : void 0;
};
var UISwitch_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UISwitch",
	__ssrInlineRender: true,
	props: {
		modelValue: { type: Boolean },
		class: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<label${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "relative inline-flex items-center cursor-pointer" }, _attrs))}><input type="checkbox"${(0, server_renderer_exports.ssrIncludeBooleanAttr)(__props.modelValue) ? " checked" : ""} class="sr-only peer"><div class="${(0, server_renderer_exports.ssrRenderClass)((0, vue_exports.unref)(cn)("peer h-6 w-11 shrink-0 rounded-full border-2 border-transparent shadow-sm transition-colors", "bg-input-background", "after:absolute after:left-[2px] after:top-1/2 after:h-5 after:w-5 after:-translate-y-1/2 after:rounded-full after:bg-background after:shadow-sm after:transition-all", "peer-checked:bg-primary peer-checked:after:bg-primary-foreground", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", props.class))}"></div></label>`);
		};
	}
});
var _sfc_setup$37 = UISwitch_vue_vue_type_script_setup_true_lang_default.setup;
UISwitch_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UISwitch.vue");
	return _sfc_setup$37 ? _sfc_setup$37(props, ctx) : void 0;
};
var UIInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIInput",
	__ssrInlineRender: true,
	props: {
		modelValue: {},
		type: { default: "text" },
		class: { default: "" }
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<input${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				value: __props.modelValue,
				type: __props.type,
				class: (0, vue_exports.unref)(cn)("flex h-10 w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", props.class)
			}, _ctx.$attrs, _attrs))}>`);
		};
	}
});
var _sfc_setup$36 = UIInput_vue_vue_type_script_setup_true_lang_default.setup;
UIInput_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIInput.vue");
	return _sfc_setup$36 ? _sfc_setup$36(props, ctx) : void 0;
};
var UILabel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UILabel",
	__ssrInlineRender: true,
	props: {
		for: { default: void 0 },
		class: { default: "" }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<label${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				for: props.for,
				class: (0, vue_exports.unref)(cn)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", props.class)
			}, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</label>`);
		};
	}
});
var _sfc_setup$35 = UILabel_vue_vue_type_script_setup_true_lang_default.setup;
UILabel_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UILabel.vue");
	return _sfc_setup$35 ? _sfc_setup$35(props, ctx) : void 0;
};
var UITextarea_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UITextarea",
	__ssrInlineRender: true,
	props: {
		modelValue: {},
		class: { default: "" }
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			let _temp0;
			_push(`<textarea${(0, server_renderer_exports.ssrRenderAttrs)(_temp0 = (0, vue_exports.mergeProps)({
				value: __props.modelValue,
				class: (0, vue_exports.unref)(cn)("flex min-h-[80px] w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", props.class)
			}, _ctx.$attrs, _attrs), "textarea")}>${(0, server_renderer_exports.ssrInterpolate)("value" in _temp0 ? _temp0.value : "")}</textarea>`);
		};
	}
});
var _sfc_setup$34 = UITextarea_vue_vue_type_script_setup_true_lang_default.setup;
UITextarea_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UITextarea.vue");
	return _sfc_setup$34 ? _sfc_setup$34(props, ctx) : void 0;
};
var UISelect_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UISelect",
	__ssrInlineRender: true,
	props: {
		modelValue: {},
		class: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const ChevronDownIcon = () => (0, vue_exports.h)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			stroke: "currentColor",
			class: "h-4 w-4"
		}, [(0, vue_exports.h)("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": 2,
			d: "m19 9-7 7-7-7"
		})]);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "relative" }, _attrs))}><select${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				value: __props.modelValue,
				class: (0, vue_exports.unref)(cn)("flex h-10 w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", props.class)
			}, _ctx.$attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</select>`);
			_push((0, server_renderer_exports.ssrRenderComponent)(ChevronDownIcon, { class: "absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50 pointer-events-none" }, null, _parent));
			_push(`</div>`);
		};
	}
});
var _sfc_setup$33 = UISelect_vue_vue_type_script_setup_true_lang_default.setup;
UISelect_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UISelect.vue");
	return _sfc_setup$33 ? _sfc_setup$33(props, ctx) : void 0;
};
var UITabs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UITabs",
	__ssrInlineRender: true,
	props: { class: {
		type: String,
		default: ""
	} },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: (0, vue_exports.unref)(cn)("space-y-4", props.class) }, _ctx.$attrs, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$32 = UITabs_vue_vue_type_script_setup_true_lang_default.setup;
UITabs_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UITabs.vue");
	return _sfc_setup$32 ? _sfc_setup$32(props, ctx) : void 0;
};
var UITabsList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UITabsList",
	__ssrInlineRender: true,
	props: { class: {
		type: String,
		default: ""
	} },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				role: "tablist",
				class: (0, vue_exports.unref)(cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", props.class)
			}, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$31 = UITabsList_vue_vue_type_script_setup_true_lang_default.setup;
UITabsList_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UITabsList.vue");
	return _sfc_setup$31 ? _sfc_setup$31(props, ctx) : void 0;
};
var UITabsTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UITabsTrigger",
	__ssrInlineRender: true,
	props: { value: {} },
	setup(__props) {
		const props = __props;
		const tabsContext = (0, vue_exports.inject)("tabs");
		const isSelected = (0, vue_exports.computed)(() => tabsContext?.modelValue === props.value);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<button${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				role: "tab",
				"aria-selected": isSelected.value,
				class: (0, vue_exports.unref)(cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", isSelected.value ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground")
			}, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</button>`);
		};
	}
});
var _sfc_setup$30 = UITabsTrigger_vue_vue_type_script_setup_true_lang_default.setup;
UITabsTrigger_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UITabsTrigger.vue");
	return _sfc_setup$30 ? _sfc_setup$30(props, ctx) : void 0;
};
var UITabsContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UITabsContent",
	__ssrInlineRender: true,
	props: {
		value: {},
		class: {}
	},
	setup(__props) {
		const props = __props;
		const tabsContext = (0, vue_exports.inject)("tabs");
		const isSelected = (0, vue_exports.computed)(() => tabsContext?.modelValue === props.value);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				role: "tabpanel",
				class: (0, vue_exports.unref)(cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", props.class)
			}, _attrs, { style: isSelected.value ? null : { display: "none" } }))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
});
var _sfc_setup$29 = UITabsContent_vue_vue_type_script_setup_true_lang_default.setup;
UITabsContent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UITabsContent.vue");
	return _sfc_setup$29 ? _sfc_setup$29(props, ctx) : void 0;
};
var UIAvatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIAvatar",
	__ssrInlineRender: true,
	props: { class: {
		type: String,
		default: ""
	} },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<span${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: (0, vue_exports.unref)(cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", props.class) }, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</span>`);
		};
	}
});
var _sfc_setup$28 = UIAvatar_vue_vue_type_script_setup_true_lang_default.setup;
UIAvatar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIAvatar.vue");
	return _sfc_setup$28 ? _sfc_setup$28(props, ctx) : void 0;
};
var UIAvatarImage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIAvatarImage",
	__ssrInlineRender: true,
	props: {
		src: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			default: ""
		},
		class: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<img${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				src: __props.src,
				alt: __props.alt,
				class: (0, vue_exports.unref)(cn)("aspect-square h-full w-full", props.class)
			}, _ctx.$attrs, _attrs))}>`);
		};
	}
});
var _sfc_setup$27 = UIAvatarImage_vue_vue_type_script_setup_true_lang_default.setup;
UIAvatarImage_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIAvatarImage.vue");
	return _sfc_setup$27 ? _sfc_setup$27(props, ctx) : void 0;
};
var UIAvatarFallback_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIAvatarFallback",
	__ssrInlineRender: true,
	props: { class: {
		type: String,
		default: ""
	} },
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<span${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: (0, vue_exports.unref)(cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", props.class) }, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</span>`);
		};
	}
});
var _sfc_setup$26 = UIAvatarFallback_vue_vue_type_script_setup_true_lang_default.setup;
UIAvatarFallback_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIAvatarFallback.vue");
	return _sfc_setup$26 ? _sfc_setup$26(props, ctx) : void 0;
};
function t$4(e$1) {
	typeof queueMicrotask == "function" ? queueMicrotask(e$1) : Promise.resolve().then(e$1).catch((o$8) => setTimeout(() => {
		throw o$8;
	}));
}
function o$1() {
	let a$6 = [], s$10 = {
		addEventListener(e$1, t$6, r$5, i$10) {
			return e$1.addEventListener(t$6, r$5, i$10), s$10.add(() => e$1.removeEventListener(t$6, r$5, i$10));
		},
		requestAnimationFrame(...e$1) {
			let t$6 = requestAnimationFrame(...e$1);
			s$10.add(() => cancelAnimationFrame(t$6));
		},
		nextFrame(...e$1) {
			s$10.requestAnimationFrame(() => {
				s$10.requestAnimationFrame(...e$1);
			});
		},
		setTimeout(...e$1) {
			let t$6 = setTimeout(...e$1);
			s$10.add(() => clearTimeout(t$6));
		},
		microTask(...e$1) {
			let t$6 = { current: !0 };
			return t$4(() => {
				t$6.current && e$1[0]();
			}), s$10.add(() => {
				t$6.current = !1;
			});
		},
		style(e$1, t$6, r$5) {
			let i$10 = e$1.style.getPropertyValue(t$6);
			return Object.assign(e$1.style, { [t$6]: r$5 }), this.add(() => {
				Object.assign(e$1.style, { [t$6]: i$10 });
			});
		},
		group(e$1) {
			let t$6 = o$1();
			return e$1(t$6), this.add(() => t$6.dispose());
		},
		add(e$1) {
			return a$6.push(e$1), () => {
				let t$6 = a$6.indexOf(e$1);
				if (t$6 >= 0) for (let r$5 of a$6.splice(t$6, 1)) r$5();
			};
		},
		dispose() {
			for (let e$1 of a$6.splice(0)) e$1();
		}
	};
	return s$10;
}
var r$4;
var n$6 = Symbol("headlessui.useid"), o$7 = 0;
var i = (r$4 = vue_exports.useId) != null ? r$4 : function() {
	return vue_exports.inject(n$6, () => `${++o$7}`)();
};
function o(e$1) {
	var l$6;
	if (e$1 == null || e$1.value == null) return null;
	let n$7 = (l$6 = e$1.value.$el) != null ? l$6 : e$1.value;
	return n$7 instanceof Node ? n$7 : null;
}
function u(r$5, n$7, ...a$6) {
	if (r$5 in n$7) {
		let e$1 = n$7[r$5];
		return typeof e$1 == "function" ? e$1(...a$6) : e$1;
	}
	let t$6 = /* @__PURE__ */ new Error(`Tried to handle "${r$5}" but there is no handler defined. Only defined handlers are: ${Object.keys(n$7).map((e$1) => `"${e$1}"`).join(", ")}.`);
	throw Error.captureStackTrace && Error.captureStackTrace(t$6, u), t$6;
}
var i$9 = Object.defineProperty;
var d$4 = (t$6, e$1, r$5) => e$1 in t$6 ? i$9(t$6, e$1, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r$5
}) : t$6[e$1] = r$5;
var n$5 = (t$6, e$1, r$5) => (d$4(t$6, typeof e$1 != "symbol" ? e$1 + "" : e$1, r$5), r$5);
var s$9 = class {
	constructor() {
		n$5(this, "current", this.detect());
		n$5(this, "currentId", 0);
	}
	set(e$1) {
		this.current !== e$1 && (this.currentId = 0, this.current = e$1);
	}
	reset() {
		this.set(this.detect());
	}
	nextId() {
		return ++this.currentId;
	}
	get isServer() {
		return this.current === "server";
	}
	get isClient() {
		return this.current === "client";
	}
	detect() {
		return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
	}
};
var c = new s$9();
function i$2(r$5) {
	if (c.isServer) return null;
	if (r$5 instanceof Node) return r$5.ownerDocument;
	if (r$5 != null && r$5.hasOwnProperty("value")) {
		let n$7 = o(r$5);
		if (n$7) return n$7.ownerDocument;
	}
	return document;
}
var c$5 = [
	"[contentEditable=true]",
	"[tabindex]",
	"a[href]",
	"area[href]",
	"button:not([disabled])",
	"iframe",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])"
].map((e$1) => `${e$1}:not([tabindex='-1'])`).join(",");
var N$3 = ((n$7) => (n$7[n$7.First = 1] = "First", n$7[n$7.Previous = 2] = "Previous", n$7[n$7.Next = 4] = "Next", n$7[n$7.Last = 8] = "Last", n$7[n$7.WrapAround = 16] = "WrapAround", n$7[n$7.NoScroll = 32] = "NoScroll", n$7))(N$3 || {}), T$2 = ((o$8) => (o$8[o$8.Error = 0] = "Error", o$8[o$8.Overflow = 1] = "Overflow", o$8[o$8.Success = 2] = "Success", o$8[o$8.Underflow = 3] = "Underflow", o$8))(T$2 || {}), F$2 = ((t$6) => (t$6[t$6.Previous = -1] = "Previous", t$6[t$6.Next = 1] = "Next", t$6))(F$2 || {});
function E$1(e$1 = document.body) {
	return e$1 == null ? [] : Array.from(e$1.querySelectorAll(c$5)).sort((r$5, t$6) => Math.sign((r$5.tabIndex || Number.MAX_SAFE_INTEGER) - (t$6.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h$1 = ((t$6) => (t$6[t$6.Strict = 0] = "Strict", t$6[t$6.Loose = 1] = "Loose", t$6))(h$1 || {});
function w$2(e$1, r$5 = 0) {
	var t$6;
	return e$1 === ((t$6 = i$2(e$1)) == null ? void 0 : t$6.body) ? !1 : u(r$5, {
		[0]() {
			return e$1.matches(c$5);
		},
		[1]() {
			let l$6 = e$1;
			for (; l$6 !== null;) {
				if (l$6.matches(c$5)) return !0;
				l$6 = l$6.parentElement;
			}
			return !1;
		}
	});
}
function _(e$1) {
	let r$5 = i$2(e$1);
	(0, vue_exports.nextTick)(() => {
		r$5 && !w$2(r$5.activeElement, 0) && S$1(e$1);
	});
}
var y$6 = ((t$6) => (t$6[t$6.Keyboard = 0] = "Keyboard", t$6[t$6.Mouse = 1] = "Mouse", t$6))(y$6 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e$1) => {
	e$1.metaKey || e$1.altKey || e$1.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e$1) => {
	e$1.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e$1.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function S$1(e$1) {
	e$1?.focus({ preventScroll: !0 });
}
var H$2 = ["textarea", "input"].join(",");
function I$2(e$1) {
	var r$5, t$6;
	return (t$6 = (r$5 = e$1 == null ? void 0 : e$1.matches) == null ? void 0 : r$5.call(e$1, H$2)) != null ? t$6 : !1;
}
function O$1(e$1, r$5 = (t$6) => t$6) {
	return e$1.slice().sort((t$6, l$6) => {
		let o$8 = r$5(t$6), i$10 = r$5(l$6);
		if (o$8 === null || i$10 === null) return 0;
		let n$7 = o$8.compareDocumentPosition(i$10);
		return n$7 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n$7 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
	});
}
function v$1(e$1, r$5) {
	return P(E$1(), r$5, { relativeTo: e$1 });
}
function P(e$1, r$5, { sorted: t$6 = !0, relativeTo: l$6 = null, skipElements: o$8 = [] } = {}) {
	var m$8;
	let i$10 = (m$8 = Array.isArray(e$1) ? e$1.length > 0 ? e$1[0].ownerDocument : document : e$1 == null ? void 0 : e$1.ownerDocument) != null ? m$8 : document, n$7 = Array.isArray(e$1) ? t$6 ? O$1(e$1) : e$1 : E$1(e$1);
	o$8.length > 0 && n$7.length > 1 && (n$7 = n$7.filter((s$10) => !o$8.includes(s$10))), l$6 = l$6 != null ? l$6 : i$10.activeElement;
	let x$5 = (() => {
		if (r$5 & 5) return 1;
		if (r$5 & 10) return -1;
		throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
	})(), p$7 = (() => {
		if (r$5 & 1) return 0;
		if (r$5 & 2) return Math.max(0, n$7.indexOf(l$6)) - 1;
		if (r$5 & 4) return Math.max(0, n$7.indexOf(l$6)) + 1;
		if (r$5 & 8) return n$7.length - 1;
		throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
	})(), L$4 = r$5 & 32 ? { preventScroll: !0 } : {}, a$6 = 0, d$5 = n$7.length, u$8;
	do {
		if (a$6 >= d$5 || a$6 + d$5 <= 0) return 0;
		let s$10 = p$7 + a$6;
		if (r$5 & 16) s$10 = (s$10 + d$5) % d$5;
		else {
			if (s$10 < 0) return 3;
			if (s$10 >= d$5) return 1;
		}
		u$8 = n$7[s$10], u$8?.focus(L$4), a$6 += x$5;
	} while (u$8 !== i$10.activeElement);
	return r$5 & 6 && I$2(u$8) && u$8.select(), 2;
}
function t$2() {
	return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i$8() {
	return /Android/gi.test(window.navigator.userAgent);
}
function n$4() {
	return t$2() || i$8();
}
function u$7(e$1, t$6, n$7) {
	c.isServer || (0, vue_exports.watchEffect)((o$8) => {
		document.addEventListener(e$1, t$6, n$7), o$8(() => document.removeEventListener(e$1, t$6, n$7));
	});
}
function w$6(e$1, n$7, t$6) {
	c.isServer || (0, vue_exports.watchEffect)((o$8) => {
		window.addEventListener(e$1, n$7, t$6), o$8(() => window.removeEventListener(e$1, n$7, t$6));
	});
}
function w$1(f$5, m$8, l$6 = (0, vue_exports.computed)(() => !0)) {
	function a$6(e$1, r$5) {
		if (!l$6.value || e$1.defaultPrevented) return;
		let t$6 = r$5(e$1);
		if (t$6 === null || !t$6.getRootNode().contains(t$6)) return;
		let c$6 = function o$8(n$7) {
			return typeof n$7 == "function" ? o$8(n$7()) : Array.isArray(n$7) || n$7 instanceof Set ? n$7 : [n$7];
		}(f$5);
		for (let o$8 of c$6) {
			if (o$8 === null) continue;
			let n$7 = o$8 instanceof HTMLElement ? o$8 : o(o$8);
			if (n$7 != null && n$7.contains(t$6) || e$1.composed && e$1.composedPath().includes(n$7)) return;
		}
		return !w$2(t$6, h$1.Loose) && t$6.tabIndex !== -1 && e$1.preventDefault(), m$8(e$1, t$6);
	}
	let u$8 = (0, vue_exports.ref)(null);
	u$7("pointerdown", (e$1) => {
		var r$5, t$6;
		l$6.value && (u$8.value = ((t$6 = (r$5 = e$1.composedPath) == null ? void 0 : r$5.call(e$1)) == null ? void 0 : t$6[0]) || e$1.target);
	}, !0), u$7("mousedown", (e$1) => {
		var r$5, t$6;
		l$6.value && (u$8.value = ((t$6 = (r$5 = e$1.composedPath) == null ? void 0 : r$5.call(e$1)) == null ? void 0 : t$6[0]) || e$1.target);
	}, !0), u$7("click", (e$1) => {
		n$4() || u$8.value && (a$6(e$1, () => u$8.value), u$8.value = null);
	}, !0), u$7("touchend", (e$1) => a$6(e$1, () => e$1.target instanceof HTMLElement ? e$1.target : null), !0), w$6("blur", (e$1) => a$6(e$1, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function r$2(t$6, e$1) {
	if (t$6) return t$6;
	let n$7 = e$1 != null ? e$1 : "button";
	if (typeof n$7 == "string" && n$7.toLowerCase() === "button") return "button";
}
function s$1(t$6, e$1) {
	let n$7 = (0, vue_exports.ref)(r$2(t$6.value.type, t$6.value.as));
	return (0, vue_exports.onMounted)(() => {
		n$7.value = r$2(t$6.value.type, t$6.value.as);
	}), (0, vue_exports.watchEffect)(() => {
		var u$8;
		n$7.value || o(e$1) && o(e$1) instanceof HTMLButtonElement && !((u$8 = o(e$1)) != null && u$8.hasAttribute("type")) && (n$7.value = "button");
	}), n$7;
}
function r$1(e$1) {
	return [e$1.screenX, e$1.screenY];
}
function u$2() {
	let e$1 = (0, vue_exports.ref)([-1, -1]);
	return {
		wasMoved(n$7) {
			let t$6 = r$1(n$7);
			return e$1.value[0] === t$6[0] && e$1.value[1] === t$6[1] ? !1 : (e$1.value = t$6, !0);
		},
		update(n$7) {
			e$1.value = r$1(n$7);
		}
	};
}
function i$3({ container: e$1, accept: t$6, walk: d$5, enabled: o$8 }) {
	(0, vue_exports.watchEffect)(() => {
		let r$5 = e$1.value;
		if (!r$5 || o$8 !== void 0 && !o$8.value) return;
		let l$6 = i$2(e$1);
		if (!l$6) return;
		let c$6 = Object.assign((f$5) => t$6(f$5), { acceptNode: t$6 }), n$7 = l$6.createTreeWalker(r$5, NodeFilter.SHOW_ELEMENT, c$6, !1);
		for (; n$7.nextNode();) d$5(n$7.currentNode);
	});
}
var N = ((o$8) => (o$8[o$8.None = 0] = "None", o$8[o$8.RenderStrategy = 1] = "RenderStrategy", o$8[o$8.Static = 2] = "Static", o$8))(N || {}), S = ((e$1) => (e$1[e$1.Unmount = 0] = "Unmount", e$1[e$1.Hidden = 1] = "Hidden", e$1))(S || {});
function A({ visible: r$5 = !0, features: t$6 = 0, ourProps: e$1, theirProps: o$8,...i$10 }) {
	var a$6;
	let n$7 = j$5(o$8, e$1), l$6 = Object.assign(i$10, { props: n$7 });
	if (r$5 || t$6 & 2 && n$7.static) return y$5(l$6);
	if (t$6 & 1) return u((a$6 = n$7.unmount) == null || a$6 ? 0 : 1, {
		[0]() {
			return null;
		},
		[1]() {
			return y$5({
				...i$10,
				props: {
					...n$7,
					hidden: !0,
					style: { display: "none" }
				}
			});
		}
	});
	return y$5(l$6);
}
function y$5({ props: r$5, attrs: t$6, slots: e$1, slot: o$8, name: i$10 }) {
	var m$8, h$4;
	let { as: n$7,...l$6 } = T(r$5, ["unmount", "static"]), a$6 = (m$8 = e$1.default) == null ? void 0 : m$8.call(e$1, o$8), d$5 = {};
	if (o$8) {
		let u$8 = !1, c$6 = [];
		for (let [p$7, f$5] of Object.entries(o$8)) typeof f$5 == "boolean" && (u$8 = !0), f$5 === !0 && c$6.push(p$7);
		u$8 && (d$5["data-headlessui-state"] = c$6.join(" "));
	}
	if (n$7 === "template") {
		if (a$6 = b(a$6 != null ? a$6 : []), Object.keys(l$6).length > 0 || Object.keys(t$6).length > 0) {
			let [u$8, ...c$6] = a$6 != null ? a$6 : [];
			if (!v$4(u$8) || c$6.length > 0) throw new Error([
				"Passing props on \"template\"!",
				"",
				`The current component <${i$10} /> is rendering a "template".`,
				"However we need to passthrough the following props:",
				Object.keys(l$6).concat(Object.keys(t$6)).map((s$10) => s$10.trim()).filter((s$10, g$4, R$7) => R$7.indexOf(s$10) === g$4).sort((s$10, g$4) => s$10.localeCompare(g$4)).map((s$10) => `  - ${s$10}`).join(`
`),
				"",
				"You can apply a few solutions:",
				["Add an `as=\"...\"` prop, to ensure that we render an actual element instead of a \"template\".", "Render a single element as the child so that we can forward the props onto that element."].map((s$10) => `  - ${s$10}`).join(`
`)
			].join(`
`));
			let p$7 = j$5((h$4 = u$8.props) != null ? h$4 : {}, l$6, d$5), f$5 = (0, vue_exports.cloneVNode)(u$8, p$7, !0);
			for (let s$10 in p$7) s$10.startsWith("on") && (f$5.props || (f$5.props = {}), f$5.props[s$10] = p$7[s$10]);
			return f$5;
		}
		return Array.isArray(a$6) && a$6.length === 1 ? a$6[0] : a$6;
	}
	return (0, vue_exports.h)(n$7, Object.assign({}, l$6, d$5), { default: () => a$6 });
}
function b(r$5) {
	return r$5.flatMap((t$6) => t$6.type === vue_exports.Fragment ? b(t$6.children) : [t$6]);
}
function j$5(...r$5) {
	if (r$5.length === 0) return {};
	if (r$5.length === 1) return r$5[0];
	let t$6 = {}, e$1 = {};
	for (let i$10 of r$5) for (let n$7 in i$10) n$7.startsWith("on") && typeof i$10[n$7] == "function" ? (e$1[n$7] ?? (e$1[n$7] = []), e$1[n$7].push(i$10[n$7])) : t$6[n$7] = i$10[n$7];
	if (t$6.disabled || t$6["aria-disabled"]) return Object.assign(t$6, Object.fromEntries(Object.keys(e$1).map((i$10) => [i$10, void 0])));
	for (let i$10 in e$1) Object.assign(t$6, { [i$10](n$7, ...l$6) {
		let a$6 = e$1[i$10];
		for (let d$5 of a$6) {
			if (n$7 instanceof Event && n$7.defaultPrevented) return;
			d$5(n$7, ...l$6);
		}
	} });
	return t$6;
}
function T(r$5, t$6 = []) {
	let e$1 = Object.assign({}, r$5);
	for (let o$8 of t$6) o$8 in e$1 && delete e$1[o$8];
	return e$1;
}
function v$4(r$5) {
	return r$5 == null ? !1 : typeof r$5.type == "string" || typeof r$5.type == "object" || typeof r$5.type == "function";
}
var u$1 = ((e$1) => (e$1[e$1.None = 1] = "None", e$1[e$1.Focusable = 2] = "Focusable", e$1[e$1.Hidden = 4] = "Hidden", e$1))(u$1 || {});
var f = (0, vue_exports.defineComponent)({
	name: "Hidden",
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		features: {
			type: Number,
			default: 1
		}
	},
	setup(t$6, { slots: n$7, attrs: i$10 }) {
		return () => {
			var r$5;
			let { features: e$1,...d$5 } = t$6;
			return A({
				ourProps: {
					"aria-hidden": (e$1 & 2) === 2 ? !0 : (r$5 = d$5["aria-hidden"]) != null ? r$5 : void 0,
					hidden: (e$1 & 4) === 4 ? !0 : void 0,
					style: {
						position: "fixed",
						top: 1,
						left: 1,
						width: 1,
						height: 0,
						padding: 0,
						margin: -1,
						overflow: "hidden",
						clip: "rect(0, 0, 0, 0)",
						whiteSpace: "nowrap",
						borderWidth: "0",
						...(e$1 & 4) === 4 && (e$1 & 2) !== 2 && { display: "none" }
					}
				},
				theirProps: d$5,
				slot: {},
				attrs: i$10,
				slots: n$7,
				name: "Hidden"
			});
		};
	}
});
var n$3 = Symbol("Context");
var i$1 = ((e$1) => (e$1[e$1.Open = 1] = "Open", e$1[e$1.Closed = 2] = "Closed", e$1[e$1.Closing = 4] = "Closing", e$1[e$1.Opening = 8] = "Opening", e$1))(i$1 || {});
function s() {
	return l() !== null;
}
function l() {
	return (0, vue_exports.inject)(n$3, null);
}
function t(o$8) {
	(0, vue_exports.provide)(n$3, o$8);
}
var o$2 = ((r$5) => (r$5.Space = " ", r$5.Enter = "Enter", r$5.Escape = "Escape", r$5.Backspace = "Backspace", r$5.Delete = "Delete", r$5.ArrowLeft = "ArrowLeft", r$5.ArrowUp = "ArrowUp", r$5.ArrowRight = "ArrowRight", r$5.ArrowDown = "ArrowDown", r$5.Home = "Home", r$5.End = "End", r$5.PageUp = "PageUp", r$5.PageDown = "PageDown", r$5.Tab = "Tab", r$5))(o$2 || {});
function t$5(n$7) {
	function e$1() {
		document.readyState !== "loading" && (n$7(), document.removeEventListener("DOMContentLoaded", e$1));
	}
	typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e$1), e$1());
}
var t$3 = [];
t$5(() => {
	function e$1(n$7) {
		n$7.target instanceof HTMLElement && n$7.target !== document.body && t$3[0] !== n$7.target && (t$3.unshift(n$7.target), t$3 = t$3.filter((r$5) => r$5 != null && r$5.isConnected), t$3.splice(10));
	}
	window.addEventListener("click", e$1, { capture: !0 }), window.addEventListener("mousedown", e$1, { capture: !0 }), window.addEventListener("focus", e$1, { capture: !0 }), document.body.addEventListener("click", e$1, { capture: !0 }), document.body.addEventListener("mousedown", e$1, { capture: !0 }), document.body.addEventListener("focus", e$1, { capture: !0 });
});
function u$6(l$6) {
	throw new Error("Unexpected object: " + l$6);
}
var c$1 = ((i$10) => (i$10[i$10.First = 0] = "First", i$10[i$10.Previous = 1] = "Previous", i$10[i$10.Next = 2] = "Next", i$10[i$10.Last = 3] = "Last", i$10[i$10.Specific = 4] = "Specific", i$10[i$10.Nothing = 5] = "Nothing", i$10))(c$1 || {});
function f$1(l$6, n$7) {
	let t$6 = n$7.resolveItems();
	if (t$6.length <= 0) return null;
	let r$5 = n$7.resolveActiveIndex(), s$10 = r$5 != null ? r$5 : -1;
	switch (l$6.focus) {
		case 0:
			for (let e$1 = 0; e$1 < t$6.length; ++e$1) if (!n$7.resolveDisabled(t$6[e$1], e$1, t$6)) return e$1;
			return r$5;
		case 1:
			s$10 === -1 && (s$10 = t$6.length);
			for (let e$1 = s$10 - 1; e$1 >= 0; --e$1) if (!n$7.resolveDisabled(t$6[e$1], e$1, t$6)) return e$1;
			return r$5;
		case 2:
			for (let e$1 = s$10 + 1; e$1 < t$6.length; ++e$1) if (!n$7.resolveDisabled(t$6[e$1], e$1, t$6)) return e$1;
			return r$5;
		case 3:
			for (let e$1 = t$6.length - 1; e$1 >= 0; --e$1) if (!n$7.resolveDisabled(t$6[e$1], e$1, t$6)) return e$1;
			return r$5;
		case 4:
			for (let e$1 = 0; e$1 < t$6.length; ++e$1) if (n$7.resolveId(t$6[e$1], e$1, t$6) === l$6.id) return e$1;
			return r$5;
		case 5: return null;
		default: u$6(l$6);
	}
}
function E(n$7, e$1, o$8, r$5) {
	c.isServer || (0, vue_exports.watchEffect)((t$6) => {
		n$7 = n$7 != null ? n$7 : window, n$7.addEventListener(e$1, o$8, r$5), t$6(() => n$7.removeEventListener(e$1, o$8, r$5));
	});
}
var d$1 = ((r$5) => (r$5[r$5.Forwards = 0] = "Forwards", r$5[r$5.Backwards = 1] = "Backwards", r$5))(d$1 || {});
function n() {
	let o$8 = (0, vue_exports.ref)(0);
	return w$6("keydown", (e$1) => {
		e$1.key === "Tab" && (o$8.value = e$1.shiftKey ? 1 : 0);
	}), o$8;
}
function B$2(t$6) {
	if (!t$6) return /* @__PURE__ */ new Set();
	if (typeof t$6 == "function") return new Set(t$6());
	let n$7 = /* @__PURE__ */ new Set();
	for (let r$5 of t$6.value) {
		let l$6 = o(r$5);
		l$6 instanceof HTMLElement && n$7.add(l$6);
	}
	return n$7;
}
var A$3 = ((e$1) => (e$1[e$1.None = 1] = "None", e$1[e$1.InitialFocus = 2] = "InitialFocus", e$1[e$1.TabLock = 4] = "TabLock", e$1[e$1.FocusLock = 8] = "FocusLock", e$1[e$1.RestoreFocus = 16] = "RestoreFocus", e$1[e$1.All = 30] = "All", e$1))(A$3 || {});
var ue$1 = Object.assign((0, vue_exports.defineComponent)({
	name: "FocusTrap",
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		initialFocus: {
			type: Object,
			default: null
		},
		features: {
			type: Number,
			default: 30
		},
		containers: {
			type: [Object, Function],
			default: (0, vue_exports.ref)(/* @__PURE__ */ new Set())
		}
	},
	inheritAttrs: !1,
	setup(t$6, { attrs: n$7, slots: r$5, expose: l$6 }) {
		let o$8 = (0, vue_exports.ref)(null);
		l$6({
			el: o$8,
			$el: o$8
		});
		let i$10 = (0, vue_exports.computed)(() => i$2(o$8)), e$1 = (0, vue_exports.ref)(!1);
		(0, vue_exports.onMounted)(() => e$1.value = !0), (0, vue_exports.onUnmounted)(() => e$1.value = !1), $$2({ ownerDocument: i$10 }, (0, vue_exports.computed)(() => e$1.value && Boolean(t$6.features & 16)));
		let m$8 = z$3({
			ownerDocument: i$10,
			container: o$8,
			initialFocus: (0, vue_exports.computed)(() => t$6.initialFocus)
		}, (0, vue_exports.computed)(() => e$1.value && Boolean(t$6.features & 2)));
		J$1({
			ownerDocument: i$10,
			container: o$8,
			containers: t$6.containers,
			previousActiveElement: m$8
		}, (0, vue_exports.computed)(() => e$1.value && Boolean(t$6.features & 8)));
		let f$5 = n();
		function a$6(u$8) {
			let T$5 = o(o$8);
			if (!T$5) return;
			((w$7) => w$7())(() => {
				u(f$5.value, {
					[d$1.Forwards]: () => {
						P(T$5, N$3.First, { skipElements: [u$8.relatedTarget] });
					},
					[d$1.Backwards]: () => {
						P(T$5, N$3.Last, { skipElements: [u$8.relatedTarget] });
					}
				});
			});
		}
		let s$10 = (0, vue_exports.ref)(!1);
		function F$3(u$8) {
			u$8.key === "Tab" && (s$10.value = !0, requestAnimationFrame(() => {
				s$10.value = !1;
			}));
		}
		function H$3(u$8) {
			if (!e$1.value) return;
			let T$5 = B$2(t$6.containers);
			o(o$8) instanceof HTMLElement && T$5.add(o(o$8));
			let d$5 = u$8.relatedTarget;
			d$5 instanceof HTMLElement && d$5.dataset.headlessuiFocusGuard !== "true" && (N$5(T$5, d$5) || (s$10.value ? P(o(o$8), u(f$5.value, {
				[d$1.Forwards]: () => N$3.Next,
				[d$1.Backwards]: () => N$3.Previous
			}) | N$3.WrapAround, { relativeTo: u$8.target }) : u$8.target instanceof HTMLElement && S$1(u$8.target)));
		}
		return () => {
			let u$8 = {}, T$5 = {
				ref: o$8,
				onKeydown: F$3,
				onFocusout: H$3
			}, { features: d$5, initialFocus: w$7, containers: Q$1,...O$6 } = t$6;
			return (0, vue_exports.h)(vue_exports.Fragment, [
				Boolean(d$5 & 4) && (0, vue_exports.h)(f, {
					as: "button",
					type: "button",
					"data-headlessui-focus-guard": !0,
					onFocus: a$6,
					features: u$1.Focusable
				}),
				A({
					ourProps: T$5,
					theirProps: {
						...n$7,
						...O$6
					},
					slot: u$8,
					attrs: n$7,
					slots: r$5,
					name: "FocusTrap"
				}),
				Boolean(d$5 & 4) && (0, vue_exports.h)(f, {
					as: "button",
					type: "button",
					"data-headlessui-focus-guard": !0,
					onFocus: a$6,
					features: u$1.Focusable
				})
			]);
		};
	}
}), { features: A$3 });
function W$2(t$6) {
	let n$7 = (0, vue_exports.ref)(t$3.slice());
	return (0, vue_exports.watch)([t$6], ([r$5], [l$6]) => {
		l$6 === !0 && r$5 === !1 ? t$4(() => {
			n$7.value.splice(0);
		}) : l$6 === !1 && r$5 === !0 && (n$7.value = t$3.slice());
	}, { flush: "post" }), () => {
		var r$5;
		return (r$5 = n$7.value.find((l$6) => l$6 != null && l$6.isConnected)) != null ? r$5 : null;
	};
}
function $$2({ ownerDocument: t$6 }, n$7) {
	let r$5 = W$2(n$7);
	(0, vue_exports.onMounted)(() => {
		(0, vue_exports.watchEffect)(() => {
			var l$6, o$8;
			n$7.value || ((l$6 = t$6.value) == null ? void 0 : l$6.activeElement) === ((o$8 = t$6.value) == null ? void 0 : o$8.body) && S$1(r$5());
		}, { flush: "post" });
	}), (0, vue_exports.onUnmounted)(() => {
		n$7.value && S$1(r$5());
	});
}
function z$3({ ownerDocument: t$6, container: n$7, initialFocus: r$5 }, l$6) {
	let o$8 = (0, vue_exports.ref)(null), i$10 = (0, vue_exports.ref)(!1);
	return (0, vue_exports.onMounted)(() => i$10.value = !0), (0, vue_exports.onUnmounted)(() => i$10.value = !1), (0, vue_exports.onMounted)(() => {
		(0, vue_exports.watch)([
			n$7,
			r$5,
			l$6
		], (e$1, m$8) => {
			if (e$1.every((a$6, s$10) => (m$8 == null ? void 0 : m$8[s$10]) === a$6) || !l$6.value) return;
			let f$5 = o(n$7);
			f$5 && t$4(() => {
				var F$3, H$3;
				if (!i$10.value) return;
				let a$6 = o(r$5), s$10 = (F$3 = t$6.value) == null ? void 0 : F$3.activeElement;
				if (a$6) {
					if (a$6 === s$10) {
						o$8.value = s$10;
						return;
					}
				} else if (f$5.contains(s$10)) {
					o$8.value = s$10;
					return;
				}
				a$6 ? S$1(a$6) : P(f$5, N$3.First | N$3.NoScroll) === T$2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o$8.value = (H$3 = t$6.value) == null ? void 0 : H$3.activeElement;
			});
		}, {
			immediate: !0,
			flush: "post"
		});
	}), o$8;
}
function J$1({ ownerDocument: t$6, container: n$7, containers: r$5, previousActiveElement: l$6 }, o$8) {
	var i$10;
	E((i$10 = t$6.value) == null ? void 0 : i$10.defaultView, "focus", (e$1) => {
		if (!o$8.value) return;
		let m$8 = B$2(r$5);
		o(n$7) instanceof HTMLElement && m$8.add(o(n$7));
		let f$5 = l$6.value;
		if (!f$5) return;
		let a$6 = e$1.target;
		a$6 && a$6 instanceof HTMLElement ? N$5(m$8, a$6) ? (l$6.value = a$6, S$1(a$6)) : (e$1.preventDefault(), e$1.stopPropagation(), S$1(f$5)) : S$1(l$6.value);
	}, !0);
}
function N$5(t$6, n$7) {
	for (let r$5 of t$6) if (r$5.contains(n$7)) return !0;
	return !1;
}
function m$6(t$6) {
	let e$1 = (0, vue_exports.shallowRef)(t$6.getSnapshot());
	return (0, vue_exports.onUnmounted)(t$6.subscribe(() => {
		e$1.value = t$6.getSnapshot();
	})), e$1;
}
function a$3(o$8, r$5) {
	let t$6 = o$8(), n$7 = /* @__PURE__ */ new Set();
	return {
		getSnapshot() {
			return t$6;
		},
		subscribe(e$1) {
			return n$7.add(e$1), () => n$7.delete(e$1);
		},
		dispatch(e$1, ...s$10) {
			let i$10 = r$5[e$1].call(t$6, ...s$10);
			i$10 && (t$6 = i$10, n$7.forEach((c$6) => c$6()));
		}
	};
}
function c$4() {
	let o$8;
	return {
		before({ doc: e$1 }) {
			var l$6;
			let n$7 = e$1.documentElement;
			o$8 = ((l$6 = e$1.defaultView) != null ? l$6 : window).innerWidth - n$7.clientWidth;
		},
		after({ doc: e$1, d: n$7 }) {
			let t$6 = e$1.documentElement, l$6 = t$6.clientWidth - t$6.offsetWidth, r$5 = o$8 - l$6;
			n$7.style(t$6, "paddingRight", `${r$5}px`);
		}
	};
}
function w$5() {
	return t$2() ? { before({ doc: r$5, d: n$7, meta: c$6 }) {
		function a$6(o$8) {
			return c$6.containers.flatMap((l$6) => l$6()).some((l$6) => l$6.contains(o$8));
		}
		n$7.microTask(() => {
			var s$10;
			if (window.getComputedStyle(r$5.documentElement).scrollBehavior !== "auto") {
				let t$6 = o$1();
				t$6.style(r$5.documentElement, "scrollBehavior", "auto"), n$7.add(() => n$7.microTask(() => t$6.dispose()));
			}
			let o$8 = (s$10 = window.scrollY) != null ? s$10 : window.pageYOffset, l$6 = null;
			n$7.addEventListener(r$5, "click", (t$6) => {
				if (t$6.target instanceof HTMLElement) try {
					let e$1 = t$6.target.closest("a");
					if (!e$1) return;
					let { hash: f$5 } = new URL(e$1.href), i$10 = r$5.querySelector(f$5);
					i$10 && !a$6(i$10) && (l$6 = i$10);
				} catch {}
			}, !0), n$7.addEventListener(r$5, "touchstart", (t$6) => {
				if (t$6.target instanceof HTMLElement) if (a$6(t$6.target)) {
					let e$1 = t$6.target;
					for (; e$1.parentElement && a$6(e$1.parentElement);) e$1 = e$1.parentElement;
					n$7.style(e$1, "overscrollBehavior", "contain");
				} else n$7.style(t$6.target, "touchAction", "none");
			}), n$7.addEventListener(r$5, "touchmove", (t$6) => {
				if (t$6.target instanceof HTMLElement) {
					if (t$6.target.tagName === "INPUT") return;
					if (a$6(t$6.target)) {
						let e$1 = t$6.target;
						for (; e$1.parentElement && e$1.dataset.headlessuiPortal !== "" && !(e$1.scrollHeight > e$1.clientHeight || e$1.scrollWidth > e$1.clientWidth);) e$1 = e$1.parentElement;
						e$1.dataset.headlessuiPortal === "" && t$6.preventDefault();
					} else t$6.preventDefault();
				}
			}, { passive: !1 }), n$7.add(() => {
				var e$1;
				o$8 !== ((e$1 = window.scrollY) != null ? e$1 : window.pageYOffset) && window.scrollTo(0, o$8), l$6 && l$6.isConnected && (l$6.scrollIntoView({ block: "nearest" }), l$6 = null);
			});
		});
	} } : {};
}
function l$4() {
	return { before({ doc: e$1, d: o$8 }) {
		o$8.style(e$1.documentElement, "overflow", "hidden");
	} };
}
function m$7(e$1) {
	let n$7 = {};
	for (let t$6 of e$1) Object.assign(n$7, t$6(n$7));
	return n$7;
}
var a$2 = a$3(() => /* @__PURE__ */ new Map(), {
	PUSH(e$1, n$7) {
		var o$8;
		let t$6 = (o$8 = this.get(e$1)) != null ? o$8 : {
			doc: e$1,
			count: 0,
			d: o$1(),
			meta: /* @__PURE__ */ new Set()
		};
		return t$6.count++, t$6.meta.add(n$7), this.set(e$1, t$6), this;
	},
	POP(e$1, n$7) {
		let t$6 = this.get(e$1);
		return t$6 && (t$6.count--, t$6.meta.delete(n$7)), this;
	},
	SCROLL_PREVENT({ doc: e$1, d: n$7, meta: t$6 }) {
		let o$8 = {
			doc: e$1,
			d: n$7,
			meta: m$7(t$6)
		}, c$6 = [
			w$5(),
			c$4(),
			l$4()
		];
		c$6.forEach(({ before: r$5 }) => r$5 == null ? void 0 : r$5(o$8)), c$6.forEach(({ after: r$5 }) => r$5 == null ? void 0 : r$5(o$8));
	},
	SCROLL_ALLOW({ d: e$1 }) {
		e$1.dispose();
	},
	TEARDOWN({ doc: e$1 }) {
		this.delete(e$1);
	}
});
a$2.subscribe(() => {
	let e$1 = a$2.getSnapshot(), n$7 = /* @__PURE__ */ new Map();
	for (let [t$6] of e$1) n$7.set(t$6, t$6.documentElement.style.overflow);
	for (let t$6 of e$1.values()) {
		let o$8 = n$7.get(t$6.doc) === "hidden", c$6 = t$6.count !== 0;
		(c$6 && !o$8 || !c$6 && o$8) && a$2.dispatch(t$6.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t$6), t$6.count === 0 && a$2.dispatch("TEARDOWN", t$6);
	}
});
function d$2(t$6, a$6, n$7) {
	let i$10 = m$6(a$2), l$6 = (0, vue_exports.computed)(() => {
		let e$1 = t$6.value ? i$10.value.get(t$6.value) : void 0;
		return e$1 ? e$1.count > 0 : !1;
	});
	return (0, vue_exports.watch)([t$6, a$6], ([e$1, m$8], [r$5], o$8) => {
		if (!e$1 || !m$8) return;
		a$2.dispatch("PUSH", e$1, n$7);
		let f$5 = !1;
		o$8(() => {
			f$5 || (a$2.dispatch("POP", r$5 != null ? r$5 : e$1, n$7), f$5 = !0);
		});
	}, { immediate: !0 }), l$6;
}
var i$4 = /* @__PURE__ */ new Map(), t$1 = /* @__PURE__ */ new Map();
function E$2(d$5, f$5 = (0, vue_exports.ref)(!0)) {
	(0, vue_exports.watchEffect)((o$8) => {
		var a$6;
		if (!f$5.value) return;
		let e$1 = o(d$5);
		if (!e$1) return;
		o$8(function() {
			var u$8;
			if (!e$1) return;
			let r$5 = (u$8 = t$1.get(e$1)) != null ? u$8 : 1;
			if (r$5 === 1 ? t$1.delete(e$1) : t$1.set(e$1, r$5 - 1), r$5 !== 1) return;
			let n$7 = i$4.get(e$1);
			n$7 && (n$7["aria-hidden"] === null ? e$1.removeAttribute("aria-hidden") : e$1.setAttribute("aria-hidden", n$7["aria-hidden"]), e$1.inert = n$7.inert, i$4.delete(e$1));
		});
		let l$6 = (a$6 = t$1.get(e$1)) != null ? a$6 : 0;
		t$1.set(e$1, l$6 + 1), l$6 === 0 && (i$4.set(e$1, {
			"aria-hidden": e$1.getAttribute("aria-hidden"),
			inert: e$1.inert
		}), e$1.setAttribute("aria-hidden", "true"), e$1.inert = !0);
	});
}
function N$2({ defaultContainers: o$8 = [], portals: i$10, mainTreeNodeRef: H$3 } = {}) {
	let t$6 = (0, vue_exports.ref)(null), r$5 = i$2(t$6);
	function u$8() {
		var l$6, f$5, a$6;
		let n$7 = [];
		for (let e$1 of o$8) e$1 !== null && (e$1 instanceof HTMLElement ? n$7.push(e$1) : "value" in e$1 && e$1.value instanceof HTMLElement && n$7.push(e$1.value));
		if (i$10 != null && i$10.value) for (let e$1 of i$10.value) n$7.push(e$1);
		for (let e$1 of (l$6 = r$5 == null ? void 0 : r$5.querySelectorAll("html > *, body > *")) != null ? l$6 : []) e$1 !== document.body && e$1 !== document.head && e$1 instanceof HTMLElement && e$1.id !== "headlessui-portal-root" && (e$1.contains(o(t$6)) || e$1.contains((a$6 = (f$5 = o(t$6)) == null ? void 0 : f$5.getRootNode()) == null ? void 0 : a$6.host) || n$7.some((M$2) => e$1.contains(M$2)) || n$7.push(e$1));
		return n$7;
	}
	return {
		resolveContainers: u$8,
		contains(n$7) {
			return u$8().some((l$6) => l$6.contains(n$7));
		},
		mainTreeNodeRef: t$6,
		MainTreeNode() {
			return H$3 != null ? null : (0, vue_exports.h)(f, {
				features: u$1.Hidden,
				ref: t$6
			});
		}
	};
}
function v() {
	let o$8 = (0, vue_exports.ref)(null);
	return {
		mainTreeNodeRef: o$8,
		MainTreeNode() {
			return (0, vue_exports.h)(f, {
				features: u$1.Hidden,
				ref: o$8
			});
		}
	};
}
var e = Symbol("ForcePortalRootContext");
function s$4() {
	return (0, vue_exports.inject)(e, !1);
}
var u$3 = (0, vue_exports.defineComponent)({
	name: "ForcePortalRoot",
	props: {
		as: {
			type: [Object, String],
			default: "template"
		},
		force: {
			type: Boolean,
			default: !1
		}
	},
	setup(o$8, { slots: t$6, attrs: r$5 }) {
		return (0, vue_exports.provide)(e, o$8.force), () => {
			let { force: f$5,...n$7 } = o$8;
			return A({
				theirProps: n$7,
				ourProps: {},
				slot: {},
				slots: t$6,
				attrs: r$5,
				name: "ForcePortalRoot"
			});
		};
	}
});
var u$5 = Symbol("StackContext");
var s$2 = ((e$1) => (e$1[e$1.Add = 0] = "Add", e$1[e$1.Remove = 1] = "Remove", e$1))(s$2 || {});
function y$4() {
	return (0, vue_exports.inject)(u$5, () => {});
}
function R$3({ type: o$8, enabled: r$5, element: e$1, onUpdate: i$10 }) {
	let a$6 = y$4();
	function t$6(...n$7) {
		i$10?.(...n$7), a$6(...n$7);
	}
	(0, vue_exports.onMounted)(() => {
		(0, vue_exports.watch)(r$5, (n$7, d$5) => {
			n$7 ? t$6(0, o$8, e$1) : d$5 === !0 && t$6(1, o$8, e$1);
		}, {
			immediate: !0,
			flush: "sync"
		});
	}), (0, vue_exports.onUnmounted)(() => {
		r$5.value && t$6(1, o$8, e$1);
	}), (0, vue_exports.provide)(u$5, t$6);
}
var u$4 = Symbol("DescriptionContext");
function w$4() {
	let t$6 = (0, vue_exports.inject)(u$4, null);
	if (t$6 === null) throw new Error("Missing parent");
	return t$6;
}
function k$1({ slot: t$6 = (0, vue_exports.ref)({}), name: o$8 = "Description", props: s$10 = {} } = {}) {
	let e$1 = (0, vue_exports.ref)([]);
	function r$5(n$7) {
		return e$1.value.push(n$7), () => {
			let i$10 = e$1.value.indexOf(n$7);
			i$10 !== -1 && e$1.value.splice(i$10, 1);
		};
	}
	return (0, vue_exports.provide)(u$4, {
		register: r$5,
		slot: t$6,
		name: o$8,
		props: s$10
	}), (0, vue_exports.computed)(() => e$1.value.length > 0 ? e$1.value.join(" ") : void 0);
}
(0, vue_exports.defineComponent)({
	name: "Description",
	props: {
		as: {
			type: [Object, String],
			default: "p"
		},
		id: {
			type: String,
			default: null
		}
	},
	setup(t$6, { attrs: o$8, slots: s$10 }) {
		var n$7;
		let e$1 = (n$7 = t$6.id) != null ? n$7 : `headlessui-description-${i()}`, r$5 = w$4();
		return (0, vue_exports.onMounted)(() => (0, vue_exports.onUnmounted)(r$5.register(e$1))), () => {
			let { name: i$10 = "Description", slot: l$6 = (0, vue_exports.ref)({}), props: d$5 = {} } = r$5, { ...c$6 } = t$6;
			return A({
				ourProps: {
					...Object.entries(d$5).reduce((a$6, [g$4, m$8]) => Object.assign(a$6, { [g$4]: (0, vue_exports.unref)(m$8) }), {}),
					id: e$1
				},
				theirProps: c$6,
				slot: l$6.value,
				attrs: o$8,
				slots: s$10,
				name: i$10
			});
		};
	}
});
function x$2(e$1) {
	let t$6 = i$2(e$1);
	if (!t$6) {
		if (e$1 === null) return null;
		throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e$1}`);
	}
	let l$6 = t$6.getElementById("headlessui-portal-root");
	if (l$6) return l$6;
	let r$5 = t$6.createElement("div");
	return r$5.setAttribute("id", "headlessui-portal-root"), t$6.body.appendChild(r$5);
}
var f$2 = /* @__PURE__ */ new WeakMap();
function U$1(e$1) {
	var t$6;
	return (t$6 = f$2.get(e$1)) != null ? t$6 : 0;
}
function M(e$1, t$6) {
	let l$6 = t$6(U$1(e$1));
	return l$6 <= 0 ? f$2.delete(e$1) : f$2.set(e$1, l$6), l$6;
}
var $$1 = (0, vue_exports.defineComponent)({
	name: "Portal",
	props: { as: {
		type: [Object, String],
		default: "div"
	} },
	setup(e$1, { slots: t$6, attrs: l$6 }) {
		let r$5 = (0, vue_exports.ref)(null), i$10 = (0, vue_exports.computed)(() => i$2(r$5)), o$8 = s$4(), u$8 = (0, vue_exports.inject)(H$1, null), n$7 = (0, vue_exports.ref)(o$8 === !0 || u$8 == null ? x$2(r$5.value) : u$8.resolveTarget());
		n$7.value && M(n$7.value, (a$6) => a$6 + 1);
		let c$6 = (0, vue_exports.ref)(!1);
		(0, vue_exports.onMounted)(() => {
			c$6.value = !0;
		}), (0, vue_exports.watchEffect)(() => {
			o$8 || u$8 != null && (n$7.value = u$8.resolveTarget());
		});
		let v$5 = (0, vue_exports.inject)(d$3, null), g$4 = !1, b$2 = (0, vue_exports.getCurrentInstance)();
		return (0, vue_exports.watch)(r$5, () => {
			if (g$4 || !v$5) return;
			let a$6 = o(r$5);
			a$6 && ((0, vue_exports.onUnmounted)(v$5.register(a$6), b$2), g$4 = !0);
		}), (0, vue_exports.onUnmounted)(() => {
			var P$1, T$5;
			let a$6 = (P$1 = i$10.value) == null ? void 0 : P$1.getElementById("headlessui-portal-root");
			!a$6 || n$7.value !== a$6 || M(n$7.value, (L$4) => L$4 - 1) || n$7.value.children.length > 0 || (T$5 = n$7.value.parentElement) == null || T$5.removeChild(n$7.value);
		}), () => {
			if (!c$6.value || n$7.value === null) return null;
			let a$6 = {
				ref: r$5,
				"data-headlessui-portal": ""
			};
			return (0, vue_exports.h)(vue_exports.Teleport, { to: n$7.value }, A({
				ourProps: a$6,
				theirProps: e$1,
				slot: {},
				attrs: l$6,
				slots: t$6,
				name: "Portal"
			}));
		};
	}
}), d$3 = Symbol("PortalParentContext");
function q$1() {
	let e$1 = (0, vue_exports.inject)(d$3, null), t$6 = (0, vue_exports.ref)([]);
	function l$6(o$8) {
		return t$6.value.push(o$8), e$1 && e$1.register(o$8), () => r$5(o$8);
	}
	function r$5(o$8) {
		let u$8 = t$6.value.indexOf(o$8);
		u$8 !== -1 && t$6.value.splice(u$8, 1), e$1 && e$1.unregister(o$8);
	}
	let i$10 = {
		register: l$6,
		unregister: r$5,
		portals: t$6
	};
	return [t$6, (0, vue_exports.defineComponent)({
		name: "PortalWrapper",
		setup(o$8, { slots: u$8 }) {
			return (0, vue_exports.provide)(d$3, i$10), () => {
				var n$7;
				return (n$7 = u$8.default) == null ? void 0 : n$7.call(u$8);
			};
		}
	})];
}
var H$1 = Symbol("PortalGroupContext"), z$2 = (0, vue_exports.defineComponent)({
	name: "PortalGroup",
	props: {
		as: {
			type: [Object, String],
			default: "template"
		},
		target: {
			type: Object,
			default: null
		}
	},
	setup(e$1, { attrs: t$6, slots: l$6 }) {
		return (0, vue_exports.provide)(H$1, (0, vue_exports.reactive)({ resolveTarget() {
			return e$1.target;
		} })), () => {
			let { target: i$10,...o$8 } = e$1;
			return A({
				theirProps: o$8,
				ourProps: {},
				slot: {},
				attrs: t$6,
				slots: l$6,
				name: "PortalGroup"
			});
		};
	}
});
var Te$1 = ((l$6) => (l$6[l$6.Open = 0] = "Open", l$6[l$6.Closed = 1] = "Closed", l$6))(Te$1 || {});
var H = Symbol("DialogContext");
function T$4(t$6) {
	let i$10 = (0, vue_exports.inject)(H, null);
	if (i$10 === null) {
		let l$6 = /* @__PURE__ */ new Error(`<${t$6} /> is missing a parent <Dialog /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(l$6, T$4), l$6;
	}
	return i$10;
}
var A$2 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ye = (0, vue_exports.defineComponent)({
	name: "Dialog",
	inheritAttrs: !1,
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		static: {
			type: Boolean,
			default: !1
		},
		unmount: {
			type: Boolean,
			default: !0
		},
		open: {
			type: [Boolean, String],
			default: A$2
		},
		initialFocus: {
			type: Object,
			default: null
		},
		id: {
			type: String,
			default: null
		},
		role: {
			type: String,
			default: "dialog"
		}
	},
	emits: { close: (t$6) => !0 },
	setup(t$6, { emit: i$10, attrs: l$6, slots: p$7, expose: s$10 }) {
		var q$2, W$3;
		let n$7 = (q$2 = t$6.id) != null ? q$2 : `headlessui-dialog-${i()}`, u$8 = (0, vue_exports.ref)(!1);
		(0, vue_exports.onMounted)(() => {
			u$8.value = !0;
		});
		let r$5 = !1, g$4 = (0, vue_exports.computed)(() => t$6.role === "dialog" || t$6.role === "alertdialog" ? t$6.role : (r$5 || (r$5 = !0, console.warn(`Invalid role [${g$4}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D$2 = (0, vue_exports.ref)(0), S$2 = l(), R$7 = (0, vue_exports.computed)(() => t$6.open === A$2 && S$2 !== null ? (S$2.value & i$1.Open) === i$1.Open : t$6.open), m$8 = (0, vue_exports.ref)(null), E$6 = (0, vue_exports.computed)(() => i$2(m$8));
		if (s$10({
			el: m$8,
			$el: m$8
		}), !(t$6.open !== A$2 || S$2 !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
		if (typeof R$7.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R$7.value === A$2 ? void 0 : t$6.open}`);
		let c$6 = (0, vue_exports.computed)(() => u$8.value && R$7.value ? 0 : 1), k$3 = (0, vue_exports.computed)(() => c$6.value === 0), w$7 = (0, vue_exports.computed)(() => D$2.value > 1), N$6 = (0, vue_exports.inject)(H, null) !== null, [Q$1, X] = q$1(), { resolveContainers: B$3, mainTreeNodeRef: K$5, MainTreeNode: Z$1 } = N$2({
			portals: Q$1,
			defaultContainers: [(0, vue_exports.computed)(() => {
				var e$1;
				return (e$1 = h$4.panelRef.value) != null ? e$1 : m$8.value;
			})]
		}), ee$2 = (0, vue_exports.computed)(() => w$7.value ? "parent" : "leaf"), U$2 = (0, vue_exports.computed)(() => S$2 !== null ? (S$2.value & i$1.Closing) === i$1.Closing : !1), te$2 = (0, vue_exports.computed)(() => N$6 || U$2.value ? !1 : k$3.value);
		E$2((0, vue_exports.computed)(() => {
			var e$1, a$6, d$5;
			return (d$5 = Array.from((a$6 = (e$1 = E$6.value) == null ? void 0 : e$1.querySelectorAll("body > *")) != null ? a$6 : []).find((f$5) => f$5.id === "headlessui-portal-root" ? !1 : f$5.contains(o(K$5)) && f$5 instanceof HTMLElement)) != null ? d$5 : null;
		}), te$2);
		let ae$2 = (0, vue_exports.computed)(() => w$7.value ? !0 : k$3.value);
		E$2((0, vue_exports.computed)(() => {
			var e$1, a$6, d$5;
			return (d$5 = Array.from((a$6 = (e$1 = E$6.value) == null ? void 0 : e$1.querySelectorAll("[data-headlessui-portal]")) != null ? a$6 : []).find((f$5) => f$5.contains(o(K$5)) && f$5 instanceof HTMLElement)) != null ? d$5 : null;
		}), ae$2), R$3({
			type: "Dialog",
			enabled: (0, vue_exports.computed)(() => c$6.value === 0),
			element: m$8,
			onUpdate: (e$1, a$6) => {
				if (a$6 === "Dialog") return u(e$1, {
					[s$2.Add]: () => D$2.value += 1,
					[s$2.Remove]: () => D$2.value -= 1
				});
			}
		});
		let re$1 = k$1({
			name: "DialogDescription",
			slot: (0, vue_exports.computed)(() => ({ open: R$7.value }))
		}), M$2 = (0, vue_exports.ref)(null), h$4 = {
			titleId: M$2,
			panelRef: (0, vue_exports.ref)(null),
			dialogState: c$6,
			setTitleId(e$1) {
				M$2.value !== e$1 && (M$2.value = e$1);
			},
			close() {
				i$10("close", !1);
			}
		};
		(0, vue_exports.provide)(H, h$4);
		w$1(B$3, (e$1, a$6) => {
			e$1.preventDefault(), h$4.close(), (0, vue_exports.nextTick)(() => a$6 == null ? void 0 : a$6.focus());
		}, (0, vue_exports.computed)(() => !(!k$3.value || w$7.value)));
		let ie$1 = (0, vue_exports.computed)(() => !(w$7.value || c$6.value !== 0));
		E((W$3 = E$6.value) == null ? void 0 : W$3.defaultView, "keydown", (e$1) => {
			ie$1.value && (e$1.defaultPrevented || e$1.key === o$2.Escape && (e$1.preventDefault(), e$1.stopPropagation(), h$4.close()));
		});
		return d$2(E$6, (0, vue_exports.computed)(() => !(U$2.value || c$6.value !== 0 || N$6)), (e$1) => {
			var a$6;
			return { containers: [...(a$6 = e$1.containers) != null ? a$6 : [], B$3] };
		}), (0, vue_exports.watchEffect)((e$1) => {
			if (c$6.value !== 0) return;
			let a$6 = o(m$8);
			if (!a$6) return;
			let d$5 = new ResizeObserver((f$5) => {
				for (let L$4 of f$5) {
					let x$5 = L$4.target.getBoundingClientRect();
					x$5.x === 0 && x$5.y === 0 && x$5.width === 0 && x$5.height === 0 && h$4.close();
				}
			});
			d$5.observe(a$6), e$1(() => d$5.disconnect());
		}), () => {
			let { open: e$1, initialFocus: a$6,...d$5 } = t$6, f$5 = {
				...l$6,
				ref: m$8,
				id: n$7,
				role: g$4.value,
				"aria-modal": c$6.value === 0 ? !0 : void 0,
				"aria-labelledby": M$2.value,
				"aria-describedby": re$1.value
			}, L$4 = { open: c$6.value === 0 };
			return (0, vue_exports.h)(u$3, { force: !0 }, () => [(0, vue_exports.h)($$1, () => (0, vue_exports.h)(z$2, { target: m$8.value }, () => (0, vue_exports.h)(u$3, { force: !1 }, () => (0, vue_exports.h)(ue$1, {
				initialFocus: a$6,
				containers: B$3,
				features: k$3.value ? u(ee$2.value, {
					parent: ue$1.features.RestoreFocus,
					leaf: ue$1.features.All & ~ue$1.features.FocusLock
				}) : ue$1.features.None
			}, () => (0, vue_exports.h)(X, {}, () => A({
				ourProps: f$5,
				theirProps: {
					...d$5,
					...l$6
				},
				slot: L$4,
				attrs: l$6,
				slots: p$7,
				visible: c$6.value === 0,
				features: N.RenderStrategy | N.Static,
				name: "Dialog"
			})))))), (0, vue_exports.h)(Z$1)]);
		};
	}
});
(0, vue_exports.defineComponent)({
	name: "DialogOverlay",
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		id: {
			type: String,
			default: null
		}
	},
	setup(t$6, { attrs: i$10, slots: l$6 }) {
		var u$8;
		let p$7 = (u$8 = t$6.id) != null ? u$8 : `headlessui-dialog-overlay-${i()}`, s$10 = T$4("DialogOverlay");
		function n$7(r$5) {
			r$5.target === r$5.currentTarget && (r$5.preventDefault(), r$5.stopPropagation(), s$10.close());
		}
		return () => {
			let { ...r$5 } = t$6;
			return A({
				ourProps: {
					id: p$7,
					"aria-hidden": !0,
					onClick: n$7
				},
				theirProps: r$5,
				slot: { open: s$10.dialogState.value === 0 },
				attrs: i$10,
				slots: l$6,
				name: "DialogOverlay"
			});
		};
	}
});
(0, vue_exports.defineComponent)({
	name: "DialogBackdrop",
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		id: {
			type: String,
			default: null
		}
	},
	inheritAttrs: !1,
	setup(t$6, { attrs: i$10, slots: l$6, expose: p$7 }) {
		var r$5;
		let s$10 = (r$5 = t$6.id) != null ? r$5 : `headlessui-dialog-backdrop-${i()}`, n$7 = T$4("DialogBackdrop"), u$8 = (0, vue_exports.ref)(null);
		return p$7({
			el: u$8,
			$el: u$8
		}), (0, vue_exports.onMounted)(() => {
			if (n$7.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
		}), () => {
			let { ...g$4 } = t$6, D$2 = {
				id: s$10,
				ref: u$8,
				"aria-hidden": !0
			};
			return (0, vue_exports.h)(u$3, { force: !0 }, () => (0, vue_exports.h)($$1, () => A({
				ourProps: D$2,
				theirProps: {
					...i$10,
					...g$4
				},
				slot: { open: n$7.dialogState.value === 0 },
				attrs: i$10,
				slots: l$6,
				name: "DialogBackdrop"
			})));
		};
	}
});
var Ge = (0, vue_exports.defineComponent)({
	name: "DialogPanel",
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		id: {
			type: String,
			default: null
		}
	},
	setup(t$6, { attrs: i$10, slots: l$6, expose: p$7 }) {
		var r$5;
		let s$10 = (r$5 = t$6.id) != null ? r$5 : `headlessui-dialog-panel-${i()}`, n$7 = T$4("DialogPanel");
		p$7({
			el: n$7.panelRef,
			$el: n$7.panelRef
		});
		function u$8(g$4) {
			g$4.stopPropagation();
		}
		return () => {
			let { ...g$4 } = t$6;
			return A({
				ourProps: {
					id: s$10,
					ref: n$7.panelRef,
					onClick: u$8
				},
				theirProps: g$4,
				slot: { open: n$7.dialogState.value === 0 },
				attrs: i$10,
				slots: l$6,
				name: "DialogPanel"
			});
		};
	}
}), Ve = (0, vue_exports.defineComponent)({
	name: "DialogTitle",
	props: {
		as: {
			type: [Object, String],
			default: "h2"
		},
		id: {
			type: String,
			default: null
		}
	},
	setup(t$6, { attrs: i$10, slots: l$6 }) {
		var n$7;
		let p$7 = (n$7 = t$6.id) != null ? n$7 : `headlessui-dialog-title-${i()}`, s$10 = T$4("DialogTitle");
		return (0, vue_exports.onMounted)(() => {
			s$10.setTitleId(p$7), (0, vue_exports.onUnmounted)(() => s$10.setTitleId(null));
		}), () => {
			let { ...u$8 } = t$6;
			return A({
				ourProps: { id: p$7 },
				theirProps: u$8,
				slot: { open: s$10.dialogState.value === 0 },
				attrs: i$10,
				slots: l$6,
				name: "DialogTitle"
			});
		};
	}
});
var a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o$3(e$1) {
	var r$5, i$10;
	let n$7 = (r$5 = e$1.innerText) != null ? r$5 : "", t$6 = e$1.cloneNode(!0);
	if (!(t$6 instanceof HTMLElement)) return n$7;
	let u$8 = !1;
	for (let f$5 of t$6.querySelectorAll("[hidden],[aria-hidden],[role=\"img\"]")) f$5.remove(), u$8 = !0;
	let l$6 = u$8 ? (i$10 = t$6.innerText) != null ? i$10 : "" : n$7;
	return a.test(l$6) && (l$6 = l$6.replace(a, "")), l$6;
}
function g$2(e$1) {
	let n$7 = e$1.getAttribute("aria-label");
	if (typeof n$7 == "string") return n$7.trim();
	let t$6 = e$1.getAttribute("aria-labelledby");
	if (t$6) {
		let u$8 = t$6.split(" ").map((l$6) => {
			let r$5 = document.getElementById(l$6);
			if (r$5) {
				let i$10 = r$5.getAttribute("aria-label");
				return typeof i$10 == "string" ? i$10.trim() : o$3(r$5).trim();
			}
			return null;
		}).filter(Boolean);
		if (u$8.length > 0) return u$8.join(", ");
	}
	return o$3(e$1).trim();
}
function p(a$6) {
	let t$6 = (0, vue_exports.ref)(""), r$5 = (0, vue_exports.ref)("");
	return () => {
		let e$1 = o(a$6);
		if (!e$1) return "";
		let l$6 = e$1.innerText;
		if (t$6.value === l$6) return r$5.value;
		let u$8 = g$2(e$1).trim().toLowerCase();
		return t$6.value = l$6, r$5.value = u$8, u$8;
	};
}
var Z = ((i$10) => (i$10[i$10.Open = 0] = "Open", i$10[i$10.Closed = 1] = "Closed", i$10))(Z || {}), ee$1 = ((i$10) => (i$10[i$10.Pointer = 0] = "Pointer", i$10[i$10.Other = 1] = "Other", i$10))(ee$1 || {});
function te$1(o$8) {
	requestAnimationFrame(() => requestAnimationFrame(o$8));
}
var A$1 = Symbol("MenuContext");
function O$2(o$8) {
	let M$2 = (0, vue_exports.inject)(A$1, null);
	if (M$2 === null) {
		let i$10 = /* @__PURE__ */ new Error(`<${o$8} /> is missing a parent <Menu /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(i$10, O$2), i$10;
	}
	return M$2;
}
var ge = (0, vue_exports.defineComponent)({
	name: "Menu",
	props: { as: {
		type: [Object, String],
		default: "template"
	} },
	setup(o$8, { slots: M$2, attrs: i$10 }) {
		let I$3 = (0, vue_exports.ref)(1), p$7 = (0, vue_exports.ref)(null), e$1 = (0, vue_exports.ref)(null), r$5 = (0, vue_exports.ref)([]), f$5 = (0, vue_exports.ref)(""), d$5 = (0, vue_exports.ref)(null), g$4 = (0, vue_exports.ref)(1);
		function b$2(t$6 = (a$7) => a$7) {
			let a$6 = d$5.value !== null ? r$5.value[d$5.value] : null, n$7 = O$1(t$6(r$5.value.slice()), (v$5) => o(v$5.dataRef.domRef)), s$10 = a$6 ? n$7.indexOf(a$6) : null;
			return s$10 === -1 && (s$10 = null), {
				items: n$7,
				activeItemIndex: s$10
			};
		}
		let l$6 = {
			menuState: I$3,
			buttonRef: p$7,
			itemsRef: e$1,
			items: r$5,
			searchQuery: f$5,
			activeItemIndex: d$5,
			activationTrigger: g$4,
			closeMenu: () => {
				I$3.value = 1, d$5.value = null;
			},
			openMenu: () => I$3.value = 0,
			goToItem(t$6, a$6, n$7) {
				let s$10 = b$2(), v$5 = f$1(t$6 === c$1.Specific ? {
					focus: c$1.Specific,
					id: a$6
				} : { focus: t$6 }, {
					resolveItems: () => s$10.items,
					resolveActiveIndex: () => s$10.activeItemIndex,
					resolveId: (u$8) => u$8.id,
					resolveDisabled: (u$8) => u$8.dataRef.disabled
				});
				f$5.value = "", d$5.value = v$5, g$4.value = n$7 != null ? n$7 : 1, r$5.value = s$10.items;
			},
			search(t$6) {
				let n$7 = f$5.value !== "" ? 0 : 1;
				f$5.value += t$6.toLowerCase();
				let v$5 = (d$5.value !== null ? r$5.value.slice(d$5.value + n$7).concat(r$5.value.slice(0, d$5.value + n$7)) : r$5.value).find((h$4) => h$4.dataRef.textValue.startsWith(f$5.value) && !h$4.dataRef.disabled), u$8 = v$5 ? r$5.value.indexOf(v$5) : -1;
				u$8 === -1 || u$8 === d$5.value || (d$5.value = u$8, g$4.value = 1);
			},
			clearSearch() {
				f$5.value = "";
			},
			registerItem(t$6, a$6) {
				let n$7 = b$2((s$10) => [...s$10, {
					id: t$6,
					dataRef: a$6
				}]);
				r$5.value = n$7.items, d$5.value = n$7.activeItemIndex, g$4.value = 1;
			},
			unregisterItem(t$6) {
				let a$6 = b$2((n$7) => {
					let s$10 = n$7.findIndex((v$5) => v$5.id === t$6);
					return s$10 !== -1 && n$7.splice(s$10, 1), n$7;
				});
				r$5.value = a$6.items, d$5.value = a$6.activeItemIndex, g$4.value = 1;
			}
		};
		return w$1([p$7, e$1], (t$6, a$6) => {
			var n$7;
			l$6.closeMenu(), w$2(a$6, h$1.Loose) || (t$6.preventDefault(), (n$7 = o(p$7)) == null || n$7.focus());
		}, (0, vue_exports.computed)(() => I$3.value === 0)), (0, vue_exports.provide)(A$1, l$6), t((0, vue_exports.computed)(() => u(I$3.value, {
			[0]: i$1.Open,
			[1]: i$1.Closed
		}))), () => {
			return A({
				ourProps: {},
				theirProps: o$8,
				slot: {
					open: I$3.value === 0,
					close: l$6.closeMenu
				},
				slots: M$2,
				attrs: i$10,
				name: "Menu"
			});
		};
	}
}), Se = (0, vue_exports.defineComponent)({
	name: "MenuButton",
	props: {
		disabled: {
			type: Boolean,
			default: !1
		},
		as: {
			type: [Object, String],
			default: "button"
		},
		id: {
			type: String,
			default: null
		}
	},
	setup(o$8, { attrs: M$2, slots: i$10, expose: I$3 }) {
		var b$2;
		let p$7 = (b$2 = o$8.id) != null ? b$2 : `headlessui-menu-button-${i()}`, e$1 = O$2("MenuButton");
		I$3({
			el: e$1.buttonRef,
			$el: e$1.buttonRef
		});
		function r$5(l$6) {
			switch (l$6.key) {
				case o$2.Space:
				case o$2.Enter:
				case o$2.ArrowDown:
					l$6.preventDefault(), l$6.stopPropagation(), e$1.openMenu(), (0, vue_exports.nextTick)(() => {
						var t$6;
						(t$6 = o(e$1.itemsRef)) == null || t$6.focus({ preventScroll: !0 }), e$1.goToItem(c$1.First);
					});
					break;
				case o$2.ArrowUp:
					l$6.preventDefault(), l$6.stopPropagation(), e$1.openMenu(), (0, vue_exports.nextTick)(() => {
						var t$6;
						(t$6 = o(e$1.itemsRef)) == null || t$6.focus({ preventScroll: !0 }), e$1.goToItem(c$1.Last);
					});
					break;
			}
		}
		function f$5(l$6) {
			switch (l$6.key) {
				case o$2.Space:
					l$6.preventDefault();
					break;
			}
		}
		function d$5(l$6) {
			o$8.disabled || (e$1.menuState.value === 0 ? (e$1.closeMenu(), (0, vue_exports.nextTick)(() => {
				var t$6;
				return (t$6 = o(e$1.buttonRef)) == null ? void 0 : t$6.focus({ preventScroll: !0 });
			})) : (l$6.preventDefault(), e$1.openMenu(), te$1(() => {
				var t$6;
				return (t$6 = o(e$1.itemsRef)) == null ? void 0 : t$6.focus({ preventScroll: !0 });
			})));
		}
		let g$4 = s$1((0, vue_exports.computed)(() => ({
			as: o$8.as,
			type: M$2.type
		})), e$1.buttonRef);
		return () => {
			var n$7;
			let l$6 = { open: e$1.menuState.value === 0 }, { ...t$6 } = o$8;
			return A({
				ourProps: {
					ref: e$1.buttonRef,
					id: p$7,
					type: g$4.value,
					"aria-haspopup": "menu",
					"aria-controls": (n$7 = o(e$1.itemsRef)) == null ? void 0 : n$7.id,
					"aria-expanded": e$1.menuState.value === 0,
					onKeydown: r$5,
					onKeyup: f$5,
					onClick: d$5
				},
				theirProps: t$6,
				slot: l$6,
				attrs: M$2,
				slots: i$10,
				name: "MenuButton"
			});
		};
	}
}), Me = (0, vue_exports.defineComponent)({
	name: "MenuItems",
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		static: {
			type: Boolean,
			default: !1
		},
		unmount: {
			type: Boolean,
			default: !0
		},
		id: {
			type: String,
			default: null
		}
	},
	setup(o$8, { attrs: M$2, slots: i$10, expose: I$3 }) {
		var l$6;
		let p$7 = (l$6 = o$8.id) != null ? l$6 : `headlessui-menu-items-${i()}`, e$1 = O$2("MenuItems"), r$5 = (0, vue_exports.ref)(null);
		I$3({
			el: e$1.itemsRef,
			$el: e$1.itemsRef
		}), i$3({
			container: (0, vue_exports.computed)(() => o(e$1.itemsRef)),
			enabled: (0, vue_exports.computed)(() => e$1.menuState.value === 0),
			accept(t$6) {
				return t$6.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t$6.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
			},
			walk(t$6) {
				t$6.setAttribute("role", "none");
			}
		});
		function f$5(t$6) {
			var a$6;
			switch (r$5.value && clearTimeout(r$5.value), t$6.key) {
				case o$2.Space: if (e$1.searchQuery.value !== "") return t$6.preventDefault(), t$6.stopPropagation(), e$1.search(t$6.key);
				case o$2.Enter:
					if (t$6.preventDefault(), t$6.stopPropagation(), e$1.activeItemIndex.value !== null) {
						let s$10 = e$1.items.value[e$1.activeItemIndex.value];
						(a$6 = o(s$10.dataRef.domRef)) == null || a$6.click();
					}
					e$1.closeMenu(), _(o(e$1.buttonRef));
					break;
				case o$2.ArrowDown: return t$6.preventDefault(), t$6.stopPropagation(), e$1.goToItem(c$1.Next);
				case o$2.ArrowUp: return t$6.preventDefault(), t$6.stopPropagation(), e$1.goToItem(c$1.Previous);
				case o$2.Home:
				case o$2.PageUp: return t$6.preventDefault(), t$6.stopPropagation(), e$1.goToItem(c$1.First);
				case o$2.End:
				case o$2.PageDown: return t$6.preventDefault(), t$6.stopPropagation(), e$1.goToItem(c$1.Last);
				case o$2.Escape:
					t$6.preventDefault(), t$6.stopPropagation(), e$1.closeMenu(), (0, vue_exports.nextTick)(() => {
						var n$7;
						return (n$7 = o(e$1.buttonRef)) == null ? void 0 : n$7.focus({ preventScroll: !0 });
					});
					break;
				case o$2.Tab:
					t$6.preventDefault(), t$6.stopPropagation(), e$1.closeMenu(), (0, vue_exports.nextTick)(() => v$1(o(e$1.buttonRef), t$6.shiftKey ? N$3.Previous : N$3.Next));
					break;
				default:
					t$6.key.length === 1 && (e$1.search(t$6.key), r$5.value = setTimeout(() => e$1.clearSearch(), 350));
					break;
			}
		}
		function d$5(t$6) {
			switch (t$6.key) {
				case o$2.Space:
					t$6.preventDefault();
					break;
			}
		}
		let g$4 = l(), b$2 = (0, vue_exports.computed)(() => g$4 !== null ? (g$4.value & i$1.Open) === i$1.Open : e$1.menuState.value === 0);
		return () => {
			var s$10, v$5;
			let t$6 = { open: e$1.menuState.value === 0 }, { ...a$6 } = o$8;
			return A({
				ourProps: {
					"aria-activedescendant": e$1.activeItemIndex.value === null || (s$10 = e$1.items.value[e$1.activeItemIndex.value]) == null ? void 0 : s$10.id,
					"aria-labelledby": (v$5 = o(e$1.buttonRef)) == null ? void 0 : v$5.id,
					id: p$7,
					onKeydown: f$5,
					onKeyup: d$5,
					role: "menu",
					tabIndex: 0,
					ref: e$1.itemsRef
				},
				theirProps: a$6,
				slot: t$6,
				attrs: M$2,
				slots: i$10,
				features: N.RenderStrategy | N.Static,
				visible: b$2.value,
				name: "MenuItems"
			});
		};
	}
}), be = (0, vue_exports.defineComponent)({
	name: "MenuItem",
	inheritAttrs: !1,
	props: {
		as: {
			type: [Object, String],
			default: "template"
		},
		disabled: {
			type: Boolean,
			default: !1
		},
		id: {
			type: String,
			default: null
		}
	},
	setup(o$8, { slots: M$2, attrs: i$10, expose: I$3 }) {
		var v$5;
		let p$7 = (v$5 = o$8.id) != null ? v$5 : `headlessui-menu-item-${i()}`, e$1 = O$2("MenuItem"), r$5 = (0, vue_exports.ref)(null);
		I$3({
			el: r$5,
			$el: r$5
		});
		let f$5 = (0, vue_exports.computed)(() => e$1.activeItemIndex.value !== null ? e$1.items.value[e$1.activeItemIndex.value].id === p$7 : !1), d$5 = p(r$5), g$4 = (0, vue_exports.computed)(() => ({
			disabled: o$8.disabled,
			get textValue() {
				return d$5();
			},
			domRef: r$5
		}));
		(0, vue_exports.onMounted)(() => e$1.registerItem(p$7, g$4)), (0, vue_exports.onUnmounted)(() => e$1.unregisterItem(p$7)), (0, vue_exports.watchEffect)(() => {
			e$1.menuState.value === 0 && f$5.value && e$1.activationTrigger.value !== 0 && (0, vue_exports.nextTick)(() => {
				var u$8, h$4;
				return (h$4 = (u$8 = o(r$5)) == null ? void 0 : u$8.scrollIntoView) == null ? void 0 : h$4.call(u$8, { block: "nearest" });
			});
		});
		function b$2(u$8) {
			if (o$8.disabled) return u$8.preventDefault();
			e$1.closeMenu(), _(o(e$1.buttonRef));
		}
		function l$6() {
			if (o$8.disabled) return e$1.goToItem(c$1.Nothing);
			e$1.goToItem(c$1.Specific, p$7);
		}
		let t$6 = u$2();
		function a$6(u$8) {
			t$6.update(u$8);
		}
		function n$7(u$8) {
			t$6.wasMoved(u$8) && (o$8.disabled || f$5.value || e$1.goToItem(c$1.Specific, p$7, 0));
		}
		function s$10(u$8) {
			t$6.wasMoved(u$8) && (o$8.disabled || f$5.value && e$1.goToItem(c$1.Nothing));
		}
		return () => {
			let { disabled: u$8,...h$4 } = o$8, C$2 = {
				active: f$5.value,
				disabled: u$8,
				close: e$1.closeMenu
			};
			return A({
				ourProps: {
					id: p$7,
					ref: r$5,
					role: "menuitem",
					tabIndex: u$8 === !0 ? void 0 : -1,
					"aria-disabled": u$8 === !0 ? !0 : void 0,
					onClick: b$2,
					onFocus: l$6,
					onPointerenter: a$6,
					onMouseenter: a$6,
					onPointermove: n$7,
					onMousemove: n$7,
					onPointerleave: s$10,
					onMouseleave: s$10
				},
				theirProps: {
					...i$10,
					...h$4
				},
				slot: C$2,
				attrs: i$10,
				slots: M$2,
				name: "MenuItem"
			});
		};
	}
});
var Se$2 = ((s$10) => (s$10[s$10.Open = 0] = "Open", s$10[s$10.Closed = 1] = "Closed", s$10))(Se$2 || {});
var re = Symbol("PopoverContext");
function U(d$5) {
	let P$1 = (0, vue_exports.inject)(re, null);
	if (P$1 === null) {
		let s$10 = /* @__PURE__ */ new Error(`<${d$5} /> is missing a parent <${ye.name} /> component.`);
		throw Error.captureStackTrace && Error.captureStackTrace(s$10, U), s$10;
	}
	return P$1;
}
var le$1 = Symbol("PopoverGroupContext");
function ae$1() {
	return (0, vue_exports.inject)(le$1, null);
}
var ue = Symbol("PopoverPanelContext");
function ge$2() {
	return (0, vue_exports.inject)(ue, null);
}
var ye = (0, vue_exports.defineComponent)({
	name: "Popover",
	inheritAttrs: !1,
	props: { as: {
		type: [Object, String],
		default: "div"
	} },
	setup(d$5, { slots: P$1, attrs: s$10, expose: h$4 }) {
		var u$8;
		let f$5 = (0, vue_exports.ref)(null);
		h$4({
			el: f$5,
			$el: f$5
		});
		let t$6 = (0, vue_exports.ref)(1), o$8 = (0, vue_exports.ref)(null), y$7 = (0, vue_exports.ref)(null), v$5 = (0, vue_exports.ref)(null), m$8 = (0, vue_exports.ref)(null), b$2 = (0, vue_exports.computed)(() => i$2(f$5)), E$6 = (0, vue_exports.computed)(() => {
			var L$4, $$3;
			if (!o(o$8) || !o(m$8)) return !1;
			for (let x$5 of document.querySelectorAll("body > *")) if (Number(x$5 == null ? void 0 : x$5.contains(o(o$8))) ^ Number(x$5 == null ? void 0 : x$5.contains(o(m$8)))) return !0;
			let e$1 = E$1(), r$5 = e$1.indexOf(o(o$8)), l$6 = (r$5 + e$1.length - 1) % e$1.length, g$4 = (r$5 + 1) % e$1.length, G$1 = e$1[l$6], C$2 = e$1[g$4];
			return !((L$4 = o(m$8)) != null && L$4.contains(G$1)) && !(($$3 = o(m$8)) != null && $$3.contains(C$2));
		}), a$6 = {
			popoverState: t$6,
			buttonId: (0, vue_exports.ref)(null),
			panelId: (0, vue_exports.ref)(null),
			panel: m$8,
			button: o$8,
			isPortalled: E$6,
			beforePanelSentinel: y$7,
			afterPanelSentinel: v$5,
			togglePopover() {
				t$6.value = u(t$6.value, {
					[0]: 1,
					[1]: 0
				});
			},
			closePopover() {
				t$6.value !== 1 && (t$6.value = 1);
			},
			close(e$1) {
				a$6.closePopover();
				(() => e$1 ? e$1 instanceof HTMLElement ? e$1 : e$1.value instanceof HTMLElement ? o(e$1) : o(a$6.button) : o(a$6.button))()?.focus();
			}
		};
		(0, vue_exports.provide)(re, a$6), t((0, vue_exports.computed)(() => u(t$6.value, {
			[0]: i$1.Open,
			[1]: i$1.Closed
		})));
		let S$2 = {
			buttonId: a$6.buttonId,
			panelId: a$6.panelId,
			close() {
				a$6.closePopover();
			}
		}, c$6 = ae$1(), I$3 = c$6 == null ? void 0 : c$6.registerPopover, [F$3, w$7] = q$1(), i$10 = N$2({
			mainTreeNodeRef: c$6 == null ? void 0 : c$6.mainTreeNodeRef,
			portals: F$3,
			defaultContainers: [o$8, m$8]
		});
		function p$7() {
			var e$1, r$5, l$6, g$4;
			return (g$4 = c$6 == null ? void 0 : c$6.isFocusWithinPopoverGroup()) != null ? g$4 : ((e$1 = b$2.value) == null ? void 0 : e$1.activeElement) && (((r$5 = o(o$8)) == null ? void 0 : r$5.contains(b$2.value.activeElement)) || ((l$6 = o(m$8)) == null ? void 0 : l$6.contains(b$2.value.activeElement)));
		}
		return (0, vue_exports.watchEffect)(() => I$3 == null ? void 0 : I$3(S$2)), E((u$8 = b$2.value) == null ? void 0 : u$8.defaultView, "focus", (e$1) => {
			var r$5, l$6;
			e$1.target !== window && e$1.target instanceof HTMLElement && t$6.value === 0 && (p$7() || o$8 && m$8 && (i$10.contains(e$1.target) || (r$5 = o(a$6.beforePanelSentinel)) != null && r$5.contains(e$1.target) || (l$6 = o(a$6.afterPanelSentinel)) != null && l$6.contains(e$1.target) || a$6.closePopover()));
		}, !0), w$1(i$10.resolveContainers, (e$1, r$5) => {
			var l$6;
			a$6.closePopover(), w$2(r$5, h$1.Loose) || (e$1.preventDefault(), (l$6 = o(o$8)) == null || l$6.focus());
		}, (0, vue_exports.computed)(() => t$6.value === 0)), () => {
			let e$1 = {
				open: t$6.value === 0,
				close: a$6.close
			};
			return (0, vue_exports.h)(vue_exports.Fragment, [(0, vue_exports.h)(w$7, {}, () => A({
				theirProps: {
					...d$5,
					...s$10
				},
				ourProps: { ref: f$5 },
				slot: e$1,
				slots: P$1,
				attrs: s$10,
				name: "Popover"
			})), (0, vue_exports.h)(i$10.MainTreeNode)]);
		};
	}
}), Ge$1 = (0, vue_exports.defineComponent)({
	name: "PopoverButton",
	props: {
		as: {
			type: [Object, String],
			default: "button"
		},
		disabled: {
			type: [Boolean],
			default: !1
		},
		id: {
			type: String,
			default: null
		}
	},
	inheritAttrs: !1,
	setup(d$5, { attrs: P$1, slots: s$10, expose: h$4 }) {
		var u$8;
		let f$5 = (u$8 = d$5.id) != null ? u$8 : `headlessui-popover-button-${i()}`, t$6 = U("PopoverButton"), o$8 = (0, vue_exports.computed)(() => i$2(t$6.button));
		h$4({
			el: t$6.button,
			$el: t$6.button
		}), (0, vue_exports.onMounted)(() => {
			t$6.buttonId.value = f$5;
		}), (0, vue_exports.onUnmounted)(() => {
			t$6.buttonId.value = null;
		});
		let y$7 = ae$1(), v$5 = y$7 == null ? void 0 : y$7.closeOthers, m$8 = ge$2(), b$2 = (0, vue_exports.computed)(() => m$8 === null ? !1 : m$8.value === t$6.panelId.value), E$6 = (0, vue_exports.ref)(null), a$6 = `headlessui-focus-sentinel-${i()}`;
		b$2.value || (0, vue_exports.watchEffect)(() => {
			t$6.button.value = o(E$6);
		});
		let S$2 = s$1((0, vue_exports.computed)(() => ({
			as: d$5.as,
			type: P$1.type
		})), E$6);
		function c$6(e$1) {
			var r$5, l$6, g$4, G$1, C$2;
			if (b$2.value) {
				if (t$6.popoverState.value === 1) return;
				switch (e$1.key) {
					case o$2.Space:
					case o$2.Enter:
						e$1.preventDefault(), (l$6 = (r$5 = e$1.target).click) == null || l$6.call(r$5), t$6.closePopover(), (g$4 = o(t$6.button)) == null || g$4.focus();
						break;
				}
			} else switch (e$1.key) {
				case o$2.Space:
				case o$2.Enter:
					e$1.preventDefault(), e$1.stopPropagation(), t$6.popoverState.value === 1 && v$5?.(t$6.buttonId.value), t$6.togglePopover();
					break;
				case o$2.Escape:
					if (t$6.popoverState.value !== 0) return v$5 == null ? void 0 : v$5(t$6.buttonId.value);
					if (!o(t$6.button) || (G$1 = o$8.value) != null && G$1.activeElement && !((C$2 = o(t$6.button)) != null && C$2.contains(o$8.value.activeElement))) return;
					e$1.preventDefault(), e$1.stopPropagation(), t$6.closePopover();
					break;
			}
		}
		function I$3(e$1) {
			b$2.value || e$1.key === o$2.Space && e$1.preventDefault();
		}
		function F$3(e$1) {
			var r$5, l$6;
			d$5.disabled || (b$2.value ? (t$6.closePopover(), (r$5 = o(t$6.button)) == null || r$5.focus()) : (e$1.preventDefault(), e$1.stopPropagation(), t$6.popoverState.value === 1 && v$5?.(t$6.buttonId.value), t$6.togglePopover(), (l$6 = o(t$6.button)) == null || l$6.focus()));
		}
		function w$7(e$1) {
			e$1.preventDefault(), e$1.stopPropagation();
		}
		let i$10 = n();
		function p$7() {
			let e$1 = o(t$6.panel);
			if (!e$1) return;
			function r$5() {
				u(i$10.value, {
					[d$1.Forwards]: () => P(e$1, N$3.First),
					[d$1.Backwards]: () => P(e$1, N$3.Last)
				}) === T$2.Error && P(E$1().filter((g$4) => g$4.dataset.headlessuiFocusGuard !== "true"), u(i$10.value, {
					[d$1.Forwards]: N$3.Next,
					[d$1.Backwards]: N$3.Previous
				}), { relativeTo: o(t$6.button) });
			}
			r$5();
		}
		return () => {
			let e$1 = t$6.popoverState.value === 0, r$5 = { open: e$1 }, { ...l$6 } = d$5;
			return (0, vue_exports.h)(vue_exports.Fragment, [A({
				ourProps: b$2.value ? {
					ref: E$6,
					type: S$2.value,
					onKeydown: c$6,
					onClick: F$3
				} : {
					ref: E$6,
					id: f$5,
					type: S$2.value,
					"aria-expanded": t$6.popoverState.value === 0,
					"aria-controls": o(t$6.panel) ? t$6.panelId.value : void 0,
					disabled: d$5.disabled ? !0 : void 0,
					onKeydown: c$6,
					onKeyup: I$3,
					onClick: F$3,
					onMousedown: w$7
				},
				theirProps: {
					...P$1,
					...l$6
				},
				slot: r$5,
				attrs: P$1,
				slots: s$10,
				name: "PopoverButton"
			}), e$1 && !b$2.value && t$6.isPortalled.value && (0, vue_exports.h)(f, {
				id: a$6,
				features: u$1.Focusable,
				"data-headlessui-focus-guard": !0,
				as: "button",
				type: "button",
				onFocus: p$7
			})]);
		};
	}
});
(0, vue_exports.defineComponent)({
	name: "PopoverOverlay",
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		static: {
			type: Boolean,
			default: !1
		},
		unmount: {
			type: Boolean,
			default: !0
		}
	},
	setup(d$5, { attrs: P$1, slots: s$10 }) {
		let h$4 = U("PopoverOverlay"), f$5 = `headlessui-popover-overlay-${i()}`, t$6 = l(), o$8 = (0, vue_exports.computed)(() => t$6 !== null ? (t$6.value & i$1.Open) === i$1.Open : h$4.popoverState.value === 0);
		function y$7() {
			h$4.closePopover();
		}
		return () => {
			let v$5 = { open: h$4.popoverState.value === 0 };
			return A({
				ourProps: {
					id: f$5,
					"aria-hidden": !0,
					onClick: y$7
				},
				theirProps: d$5,
				slot: v$5,
				attrs: P$1,
				slots: s$10,
				features: N.RenderStrategy | N.Static,
				visible: o$8.value,
				name: "PopoverOverlay"
			});
		};
	}
});
var je = (0, vue_exports.defineComponent)({
	name: "PopoverPanel",
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		static: {
			type: Boolean,
			default: !1
		},
		unmount: {
			type: Boolean,
			default: !0
		},
		focus: {
			type: Boolean,
			default: !1
		},
		id: {
			type: String,
			default: null
		}
	},
	inheritAttrs: !1,
	setup(d$5, { attrs: P$1, slots: s$10, expose: h$4 }) {
		var w$7;
		let f$5 = (w$7 = d$5.id) != null ? w$7 : `headlessui-popover-panel-${i()}`, { focus: t$6 } = d$5, o$8 = U("PopoverPanel"), y$7 = (0, vue_exports.computed)(() => i$2(o$8.panel)), v$5 = `headlessui-focus-sentinel-before-${i()}`, m$8 = `headlessui-focus-sentinel-after-${i()}`;
		h$4({
			el: o$8.panel,
			$el: o$8.panel
		}), (0, vue_exports.onMounted)(() => {
			o$8.panelId.value = f$5;
		}), (0, vue_exports.onUnmounted)(() => {
			o$8.panelId.value = null;
		}), (0, vue_exports.provide)(ue, o$8.panelId), (0, vue_exports.watchEffect)(() => {
			var p$7, u$8;
			if (!t$6 || o$8.popoverState.value !== 0 || !o$8.panel) return;
			let i$10 = (p$7 = y$7.value) == null ? void 0 : p$7.activeElement;
			(u$8 = o(o$8.panel)) != null && u$8.contains(i$10) || P(o(o$8.panel), N$3.First);
		});
		let b$2 = l(), E$6 = (0, vue_exports.computed)(() => b$2 !== null ? (b$2.value & i$1.Open) === i$1.Open : o$8.popoverState.value === 0);
		function a$6(i$10) {
			var p$7, u$8;
			switch (i$10.key) {
				case o$2.Escape:
					if (o$8.popoverState.value !== 0 || !o(o$8.panel) || y$7.value && !((p$7 = o(o$8.panel)) != null && p$7.contains(y$7.value.activeElement))) return;
					i$10.preventDefault(), i$10.stopPropagation(), o$8.closePopover(), (u$8 = o(o$8.button)) == null || u$8.focus();
					break;
			}
		}
		function S$2(i$10) {
			var u$8, e$1, r$5, l$6, g$4;
			let p$7 = i$10.relatedTarget;
			p$7 && o(o$8.panel) && ((u$8 = o(o$8.panel)) != null && u$8.contains(p$7) || (o$8.closePopover(), ((r$5 = (e$1 = o(o$8.beforePanelSentinel)) == null ? void 0 : e$1.contains) != null && r$5.call(e$1, p$7) || (g$4 = (l$6 = o(o$8.afterPanelSentinel)) == null ? void 0 : l$6.contains) != null && g$4.call(l$6, p$7)) && p$7.focus({ preventScroll: !0 })));
		}
		let c$6 = n();
		function I$3() {
			let i$10 = o(o$8.panel);
			if (!i$10) return;
			function p$7() {
				u(c$6.value, {
					[d$1.Forwards]: () => {
						var e$1;
						P(i$10, N$3.First) === T$2.Error && ((e$1 = o(o$8.afterPanelSentinel)) == null || e$1.focus());
					},
					[d$1.Backwards]: () => {
						var u$8;
						(u$8 = o(o$8.button)) == null || u$8.focus({ preventScroll: !0 });
					}
				});
			}
			p$7();
		}
		function F$3() {
			let i$10 = o(o$8.panel);
			if (!i$10) return;
			function p$7() {
				u(c$6.value, {
					[d$1.Forwards]: () => {
						let u$8 = o(o$8.button), e$1 = o(o$8.panel);
						if (!u$8) return;
						let r$5 = E$1(), l$6 = r$5.indexOf(u$8), g$4 = r$5.slice(0, l$6 + 1), C$2 = [...r$5.slice(l$6 + 1), ...g$4];
						for (let L$4 of C$2.slice()) if (L$4.dataset.headlessuiFocusGuard === "true" || e$1 != null && e$1.contains(L$4)) {
							let $$3 = C$2.indexOf(L$4);
							$$3 !== -1 && C$2.splice($$3, 1);
						}
						P(C$2, N$3.First, { sorted: !1 });
					},
					[d$1.Backwards]: () => {
						var e$1;
						P(i$10, N$3.Previous) === T$2.Error && ((e$1 = o(o$8.button)) == null || e$1.focus());
					}
				});
			}
			p$7();
		}
		return () => {
			let i$10 = {
				open: o$8.popoverState.value === 0,
				close: o$8.close
			}, { focus: p$7,...u$8 } = d$5;
			return A({
				ourProps: {
					ref: o$8.panel,
					id: f$5,
					onKeydown: a$6,
					onFocusout: t$6 && o$8.popoverState.value === 0 ? S$2 : void 0,
					tabIndex: -1
				},
				theirProps: {
					...P$1,
					...u$8
				},
				attrs: P$1,
				slot: i$10,
				slots: {
					...s$10,
					default: (...r$5) => {
						var l$6;
						return [(0, vue_exports.h)(vue_exports.Fragment, [
							E$6.value && o$8.isPortalled.value && (0, vue_exports.h)(f, {
								id: v$5,
								ref: o$8.beforePanelSentinel,
								features: u$1.Focusable,
								"data-headlessui-focus-guard": !0,
								as: "button",
								type: "button",
								onFocus: I$3
							}),
							(l$6 = s$10.default) == null ? void 0 : l$6.call(s$10, ...r$5),
							E$6.value && o$8.isPortalled.value && (0, vue_exports.h)(f, {
								id: m$8,
								ref: o$8.afterPanelSentinel,
								features: u$1.Focusable,
								"data-headlessui-focus-guard": !0,
								as: "button",
								type: "button",
								onFocus: F$3
							})
						])];
					}
				},
				features: N.RenderStrategy | N.Static,
				visible: E$6.value,
				name: "PopoverPanel"
			});
		};
	}
});
(0, vue_exports.defineComponent)({
	name: "PopoverGroup",
	inheritAttrs: !1,
	props: { as: {
		type: [Object, String],
		default: "div"
	} },
	setup(d$5, { attrs: P$1, slots: s$10, expose: h$4 }) {
		let f$5 = (0, vue_exports.ref)(null), t$6 = (0, vue_exports.shallowRef)([]), o$8 = (0, vue_exports.computed)(() => i$2(f$5)), y$7 = v();
		h$4({
			el: f$5,
			$el: f$5
		});
		function v$5(a$6) {
			let S$2 = t$6.value.indexOf(a$6);
			S$2 !== -1 && t$6.value.splice(S$2, 1);
		}
		function m$8(a$6) {
			return t$6.value.push(a$6), () => {
				v$5(a$6);
			};
		}
		function b$2() {
			var c$6;
			let a$6 = o$8.value;
			if (!a$6) return !1;
			let S$2 = a$6.activeElement;
			return (c$6 = o(f$5)) != null && c$6.contains(S$2) ? !0 : t$6.value.some((I$3) => {
				var F$3, w$7;
				return ((F$3 = a$6.getElementById(I$3.buttonId.value)) == null ? void 0 : F$3.contains(S$2)) || ((w$7 = a$6.getElementById(I$3.panelId.value)) == null ? void 0 : w$7.contains(S$2));
			});
		}
		function E$6(a$6) {
			for (let S$2 of t$6.value) S$2.buttonId.value !== a$6 && S$2.close();
		}
		return (0, vue_exports.provide)(le$1, {
			registerPopover: m$8,
			unregisterPopover: v$5,
			isFocusWithinPopoverGroup: b$2,
			closeOthers: E$6,
			mainTreeNodeRef: y$7.mainTreeNodeRef
		}), () => (0, vue_exports.h)(vue_exports.Fragment, [A({
			ourProps: { ref: f$5 },
			theirProps: {
				...d$5,
				...P$1
			},
			slot: {},
			attrs: P$1,
			slots: s$10,
			name: "PopoverGroup"
		}), (0, vue_exports.h)(y$7.MainTreeNode)]);
	}
});
function l$1(r$5) {
	let e$1 = { called: !1 };
	return (...t$6) => {
		if (!e$1.called) return e$1.called = !0, r$5(...t$6);
	};
}
function m$1(e$1, ...t$6) {
	e$1 && t$6.length > 0 && e$1.classList.add(...t$6);
}
function d(e$1, ...t$6) {
	e$1 && t$6.length > 0 && e$1.classList.remove(...t$6);
}
var g = ((i$10) => (i$10.Finished = "finished", i$10.Cancelled = "cancelled", i$10))(g || {});
function F$1(e$1, t$6) {
	let i$10 = o$1();
	if (!e$1) return i$10.dispose;
	let { transitionDuration: n$7, transitionDelay: a$6 } = getComputedStyle(e$1), [l$6, s$10] = [n$7, a$6].map((o$8) => {
		let [u$8 = 0] = o$8.split(",").filter(Boolean).map((r$5) => r$5.includes("ms") ? parseFloat(r$5) : parseFloat(r$5) * 1e3).sort((r$5, c$6) => c$6 - r$5);
		return u$8;
	});
	return l$6 !== 0 ? i$10.setTimeout(() => t$6("finished"), l$6 + s$10) : t$6("finished"), i$10.add(() => t$6("cancelled")), i$10.dispose;
}
function L(e$1, t$6, i$10, n$7, a$6, l$6) {
	let s$10 = o$1(), o$8 = l$6 !== void 0 ? l$1(l$6) : () => {};
	return d(e$1, ...a$6), m$1(e$1, ...t$6, ...i$10), s$10.nextFrame(() => {
		d(e$1, ...i$10), m$1(e$1, ...n$7), s$10.add(F$1(e$1, (u$8) => (d(e$1, ...n$7, ...t$6), m$1(e$1, ...a$6), o$8(u$8))));
	}), s$10.add(() => d(e$1, ...t$6, ...i$10, ...n$7, ...a$6)), s$10.add(() => o$8("cancelled")), s$10.dispose;
}
function g$1(e$1 = "") {
	return e$1.split(/\s+/).filter((t$6) => t$6.length > 1);
}
var R = Symbol("TransitionContext");
var pe = ((a$6) => (a$6.Visible = "visible", a$6.Hidden = "hidden", a$6))(pe || {});
function me() {
	return (0, vue_exports.inject)(R, null) !== null;
}
function Te() {
	let e$1 = (0, vue_exports.inject)(R, null);
	if (e$1 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
	return e$1;
}
function ge$1() {
	let e$1 = (0, vue_exports.inject)(N$1, null);
	if (e$1 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
	return e$1;
}
var N$1 = Symbol("NestingContext");
function L$1(e$1) {
	return "children" in e$1 ? L$1(e$1.children) : e$1.value.filter(({ state: t$6 }) => t$6 === "visible").length > 0;
}
function Q(e$1) {
	let t$6 = (0, vue_exports.ref)([]), a$6 = (0, vue_exports.ref)(!1);
	(0, vue_exports.onMounted)(() => a$6.value = !0), (0, vue_exports.onUnmounted)(() => a$6.value = !1);
	function s$10(n$7, r$5 = S.Hidden) {
		let l$6 = t$6.value.findIndex(({ id: f$5 }) => f$5 === n$7);
		l$6 !== -1 && (u(r$5, {
			[S.Unmount]() {
				t$6.value.splice(l$6, 1);
			},
			[S.Hidden]() {
				t$6.value[l$6].state = "hidden";
			}
		}), !L$1(t$6) && a$6.value && e$1?.());
	}
	function h$4(n$7) {
		let r$5 = t$6.value.find(({ id: l$6 }) => l$6 === n$7);
		return r$5 ? r$5.state !== "visible" && (r$5.state = "visible") : t$6.value.push({
			id: n$7,
			state: "visible"
		}), () => s$10(n$7, S.Unmount);
	}
	return {
		children: t$6,
		register: h$4,
		unregister: s$10
	};
}
var W = N.RenderStrategy, he = (0, vue_exports.defineComponent)({
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		show: {
			type: [Boolean],
			default: null
		},
		unmount: {
			type: [Boolean],
			default: !0
		},
		appear: {
			type: [Boolean],
			default: !1
		},
		enter: {
			type: [String],
			default: ""
		},
		enterFrom: {
			type: [String],
			default: ""
		},
		enterTo: {
			type: [String],
			default: ""
		},
		entered: {
			type: [String],
			default: ""
		},
		leave: {
			type: [String],
			default: ""
		},
		leaveFrom: {
			type: [String],
			default: ""
		},
		leaveTo: {
			type: [String],
			default: ""
		}
	},
	emits: {
		beforeEnter: () => !0,
		afterEnter: () => !0,
		beforeLeave: () => !0,
		afterLeave: () => !0
	},
	setup(e$1, { emit: t$6, attrs: a$6, slots: s$10, expose: h$4 }) {
		let n$7 = (0, vue_exports.ref)(0);
		function r$5() {
			n$7.value |= i$1.Opening, t$6("beforeEnter");
		}
		function l$6() {
			n$7.value &= ~i$1.Opening, t$6("afterEnter");
		}
		function f$5() {
			n$7.value |= i$1.Closing, t$6("beforeLeave");
		}
		function S$2() {
			n$7.value &= ~i$1.Closing, t$6("afterLeave");
		}
		if (!me() && s()) return () => (0, vue_exports.h)(Se$1, {
			...e$1,
			onBeforeEnter: r$5,
			onAfterEnter: l$6,
			onBeforeLeave: f$5,
			onAfterLeave: S$2
		}, s$10);
		let d$5 = (0, vue_exports.ref)(null), y$7 = (0, vue_exports.computed)(() => e$1.unmount ? S.Unmount : S.Hidden);
		h$4({
			el: d$5,
			$el: d$5
		});
		let { show: v$5, appear: A$4 } = Te(), { register: D$2, unregister: H$3 } = ge$1(), i$10 = (0, vue_exports.ref)(v$5.value ? "visible" : "hidden"), I$3 = { value: !0 }, c$6 = i(), b$2 = { value: !1 }, P$1 = Q(() => {
			!b$2.value && i$10.value !== "hidden" && (i$10.value = "hidden", H$3(c$6), S$2());
		});
		(0, vue_exports.onMounted)(() => {
			(0, vue_exports.onUnmounted)(D$2(c$6));
		}), (0, vue_exports.watchEffect)(() => {
			if (y$7.value === S.Hidden && c$6) {
				if (v$5.value && i$10.value !== "visible") {
					i$10.value = "visible";
					return;
				}
				u(i$10.value, {
					["hidden"]: () => H$3(c$6),
					["visible"]: () => D$2(c$6)
				});
			}
		});
		let j$6 = g$1(e$1.enter), M$2 = g$1(e$1.enterFrom), X = g$1(e$1.enterTo), _$1 = g$1(e$1.entered), Y$1 = g$1(e$1.leave), Z$1 = g$1(e$1.leaveFrom), ee$2 = g$1(e$1.leaveTo);
		(0, vue_exports.onMounted)(() => {
			(0, vue_exports.watchEffect)(() => {
				if (i$10.value === "visible") {
					let o$8 = o(d$5);
					if (o$8 instanceof Comment && o$8.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
				}
			});
		});
		function te$2(o$8) {
			let E$6 = I$3.value && !A$4.value, p$7 = o(d$5);
			!p$7 || !(p$7 instanceof HTMLElement) || E$6 || (b$2.value = !0, v$5.value && r$5(), v$5.value || f$5(), o$8(v$5.value ? L(p$7, j$6, M$2, X, _$1, (V) => {
				b$2.value = !1, V === g.Finished && l$6();
			}) : L(p$7, Y$1, Z$1, ee$2, _$1, (V) => {
				b$2.value = !1, V === g.Finished && (L$1(P$1) || (i$10.value = "hidden", H$3(c$6), S$2()));
			})));
		}
		return (0, vue_exports.onMounted)(() => {
			(0, vue_exports.watch)([v$5], (o$8, E$6, p$7) => {
				te$2(p$7), I$3.value = !1;
			}, { immediate: !0 });
		}), (0, vue_exports.provide)(N$1, P$1), t((0, vue_exports.computed)(() => u(i$10.value, {
			["visible"]: i$1.Open,
			["hidden"]: i$1.Closed
		}) | n$7.value)), () => {
			let { appear: o$8, show: E$6, enter: p$7, enterFrom: V, enterTo: Ce, entered: ye$1, leave: be$1, leaveFrom: Ee, leaveTo: Ve$1,...U$2 } = e$1, ne = { ref: d$5 };
			return A({
				theirProps: {
					...U$2,
					...A$4.value && v$5.value && c.isServer ? { class: (0, vue_exports.normalizeClass)([
						a$6.class,
						U$2.class,
						...j$6,
						...M$2
					]) } : {}
				},
				ourProps: ne,
				slot: {},
				slots: s$10,
				attrs: a$6,
				features: W,
				visible: i$10.value === "visible",
				name: "TransitionChild"
			});
		};
	}
}), ce = he, Se$1 = (0, vue_exports.defineComponent)({
	inheritAttrs: !1,
	props: {
		as: {
			type: [Object, String],
			default: "div"
		},
		show: {
			type: [Boolean],
			default: null
		},
		unmount: {
			type: [Boolean],
			default: !0
		},
		appear: {
			type: [Boolean],
			default: !1
		},
		enter: {
			type: [String],
			default: ""
		},
		enterFrom: {
			type: [String],
			default: ""
		},
		enterTo: {
			type: [String],
			default: ""
		},
		entered: {
			type: [String],
			default: ""
		},
		leave: {
			type: [String],
			default: ""
		},
		leaveFrom: {
			type: [String],
			default: ""
		},
		leaveTo: {
			type: [String],
			default: ""
		}
	},
	emits: {
		beforeEnter: () => !0,
		afterEnter: () => !0,
		beforeLeave: () => !0,
		afterLeave: () => !0
	},
	setup(e$1, { emit: t$6, attrs: a$6, slots: s$10 }) {
		let h$4 = l(), n$7 = (0, vue_exports.computed)(() => e$1.show === null && h$4 !== null ? (h$4.value & i$1.Open) === i$1.Open : e$1.show);
		(0, vue_exports.watchEffect)(() => {
			if (![!0, !1].includes(n$7.value)) throw new Error("A <Transition /> is used but it is missing a `:show=\"true | false\"` prop.");
		});
		let r$5 = (0, vue_exports.ref)(n$7.value ? "visible" : "hidden"), l$6 = Q(() => {
			r$5.value = "hidden";
		}), f$5 = (0, vue_exports.ref)(!0), S$2 = {
			show: n$7,
			appear: (0, vue_exports.computed)(() => e$1.appear || !f$5.value)
		};
		return (0, vue_exports.onMounted)(() => {
			(0, vue_exports.watchEffect)(() => {
				f$5.value = !1, n$7.value ? r$5.value = "visible" : L$1(l$6) || (r$5.value = "hidden");
			});
		}), (0, vue_exports.provide)(N$1, l$6), (0, vue_exports.provide)(R, S$2), () => {
			let d$5 = T(e$1, [
				"show",
				"appear",
				"unmount",
				"onBeforeEnter",
				"onBeforeLeave",
				"onAfterEnter",
				"onAfterLeave"
			]), y$7 = { unmount: e$1.unmount };
			return A({
				ourProps: {
					...y$7,
					as: "template"
				},
				theirProps: {},
				slot: {},
				slots: {
					...s$10,
					default: () => [(0, vue_exports.h)(ce, {
						onBeforeEnter: () => t$6("beforeEnter"),
						onAfterEnter: () => t$6("afterEnter"),
						onBeforeLeave: () => t$6("beforeLeave"),
						onAfterLeave: () => t$6("afterLeave"),
						...a$6,
						...y$7,
						...d$5
					}, s$10.default)]
				},
				attrs: {},
				features: W,
				visible: r$5.value === "visible",
				name: "Transition"
			});
		};
	}
});
var UITooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UITooltip",
	__ssrInlineRender: true,
	props: { side: { default: "top" } },
	setup(__props) {
		const props = __props;
		const open = (0, vue_exports.ref)(false);
		const sideClass = (0, vue_exports.computed)(() => {
			switch (props.side) {
				case "top": return "bottom-full left-1/2 -translate-y-2 -translate-x-1/2";
				case "bottom": return "top-full left-1/2 translate-y-2 -translate-x-1/2";
				case "left": return "right-full top-1/2 -translate-x-2 -translate-y-1/2";
				case "right": return "left-full top-1/2 translate-x-2 -translate-y-1/2";
				default: return "";
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ye), (0, vue_exports.mergeProps)({ class: "relative" }, _attrs), {
				default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Ge$1), {
							as: "div",
							class: "cursor-default",
							onMouseenter: ($event) => open.value = true,
							onMouseleave: ($event) => open.value = false
						}, {
							default: (0, vue_exports.withCtx)((_$2, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "trigger", {}, null, _push$2, _parent$2, _scopeId$1);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "trigger")];
							}),
							_: 3
						}, _parent$1, _scopeId));
						_push$1(``);
						if (open.value) _push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(je), {
							class: ["absolute z-50 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md", sideClass.value],
							static: ""
						}, {
							default: (0, vue_exports.withCtx)((_$2, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push$2, _parent$2, _scopeId$1);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default")];
							}),
							_: 3
						}, _parent$1, _scopeId));
						else _push$1(`<!---->`);
					} else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(Ge$1), {
						as: "div",
						class: "cursor-default",
						onMouseenter: ($event) => open.value = true,
						onMouseleave: ($event) => open.value = false
					}, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "trigger")]),
						_: 3
					}, 8, ["onMouseenter", "onMouseleave"]), (0, vue_exports.createVNode)(vue_exports.Transition, {
						"enter-from-class": "opacity-0 scale-95",
						"enter-to-class": "opacity-100 scale-100",
						"leave-from-class": "opacity-100 scale-100",
						"leave-to-class": "opacity-0 scale-95",
						onMouseenter: ($event) => open.value = true,
						onMouseleave: ($event) => open.value = false
					}, {
						default: (0, vue_exports.withCtx)(() => [open.value ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)((0, vue_exports.unref)(je), {
							key: 0,
							class: ["absolute z-50 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md", sideClass.value],
							static: ""
						}, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
							_: 3
						}, 8, ["class"])) : (0, vue_exports.createCommentVNode)("", true)]),
						_: 3
					}, 8, ["onMouseenter", "onMouseleave"])];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$25 = UITooltip_vue_vue_type_script_setup_true_lang_default.setup;
UITooltip_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UITooltip.vue");
	return _sfc_setup$25 ? _sfc_setup$25(props, ctx) : void 0;
};
var UIPopover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIPopover",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ye), (0, vue_exports.mergeProps)({ class: "relative" }, _attrs), {
				default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Ge$1), { as: "div" }, {
							default: (0, vue_exports.withCtx)((_$2, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "trigger", {}, null, _push$2, _parent$2, _scopeId$1);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "trigger")];
							}),
							_: 3
						}, _parent$1, _scopeId));
						_push$1(``);
						_push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(je), {
							class: "absolute z-50 mt-2 w-80 rounded-md border bg-popover p-4 text-popover-foreground shadow-lg outline-none",
							static: ""
						}, {
							default: (0, vue_exports.withCtx)((_$2, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push$2, _parent$2, _scopeId$1);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default")];
							}),
							_: 3
						}, _parent$1, _scopeId));
					} else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(Ge$1), { as: "div" }, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "trigger")]),
						_: 3
					}), (0, vue_exports.createVNode)(vue_exports.Transition, {
						"enter-from-class": "opacity-0 translate-y-1",
						"enter-to-class": "opacity-100 translate-y-0",
						"leave-from-class": "opacity-100 translate-y-0",
						"leave-to-class": "opacity-0 translate-y-1"
					}, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(je), {
							class: "absolute z-50 mt-2 w-80 rounded-md border bg-popover p-4 text-popover-foreground shadow-lg outline-none",
							static: ""
						}, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
							_: 3
						})]),
						_: 3
					})];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$24 = UIPopover_vue_vue_type_script_setup_true_lang_default.setup;
UIPopover_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIPopover.vue");
	return _sfc_setup$24 ? _sfc_setup$24(props, ctx) : void 0;
};
var UISheet_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UISheet",
	__ssrInlineRender: true,
	props: { open: { type: Boolean } },
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Se$1), (0, vue_exports.mergeProps)({
				appear: "",
				show: __props.open,
				as: "template"
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
					if (_push$1) _push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Ye), {
						as: "div",
						class: "relative z-50",
						onClose: ($event) => emit("update:open", false)
					}, {
						default: (0, vue_exports.withCtx)((_$2, _push$2, _parent$2, _scopeId$1) => {
							if (_push$2) {
								_push$2((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(he), {
									as: "template",
									enter: "ease-in-out duration-300",
									"enter-from": "opacity-0",
									"enter-to": "opacity-100",
									leave: "ease-in-out duration-300",
									"leave-from": "opacity-100",
									"leave-to": "opacity-0"
								}, {
									default: (0, vue_exports.withCtx)((_$3, _push$3, _parent$3, _scopeId$2) => {
										if (_push$3) _push$3(`<div class="fixed inset-0 bg-black bg-opacity-50"${_scopeId$2}></div>`);
										else return [(0, vue_exports.createVNode)("div", { class: "fixed inset-0 bg-black bg-opacity-50" })];
									}),
									_: 1
								}, _parent$2, _scopeId$1));
								_push$2(`<div class="fixed inset-0 overflow-hidden"${_scopeId$1}><div class="absolute inset-0 overflow-hidden"${_scopeId$1}><div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"${_scopeId$1}>`);
								_push$2((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(he), {
									as: "template",
									enter: "transform transition ease-in-out duration-300",
									"enter-from": "translate-x-full",
									"enter-to": "translate-x-0",
									leave: "transform transition ease-in-out duration-300",
									"leave-from": "translate-x-0",
									"leave-to": "translate-x-full"
								}, {
									default: (0, vue_exports.withCtx)((_$3, _push$3, _parent$3, _scopeId$2) => {
										if (_push$3) _push$3((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Ge), { class: "pointer-events-auto w-screen max-w-md" }, {
											default: (0, vue_exports.withCtx)((_$4, _push$4, _parent$4, _scopeId$3) => {
												if (_push$4) {
													_push$4(`<div class="flex h-full flex-col bg-background shadow-xl"${_scopeId$3}><div class="flex items-center justify-between p-4 border-b"${_scopeId$3}>`);
													_push$4((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Ve), {
														as: "h3",
														class: "text-lg font-medium"
													}, {
														default: (0, vue_exports.withCtx)((_$5, _push$5, _parent$5, _scopeId$4) => {
															if (_push$5) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "title", {}, null, _push$5, _parent$5, _scopeId$4);
															else return [(0, vue_exports.renderSlot)(_ctx.$slots, "title")];
														}),
														_: 3
													}, _parent$4, _scopeId$3));
													_push$4(`<button class="rounded-sm opacity-70 hover:opacity-100 focus:outline-none"${_scopeId$3}> ✕ </button></div><div class="flex-1 overflow-y-auto p-4"${_scopeId$3}>`);
													(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push$4, _parent$4, _scopeId$3);
													_push$4(`</div></div>`);
												} else return [(0, vue_exports.createVNode)("div", { class: "flex h-full flex-col bg-background shadow-xl" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between p-4 border-b" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(Ve), {
													as: "h3",
													class: "text-lg font-medium"
												}, {
													default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "title")]),
													_: 3
												}), (0, vue_exports.createVNode)("button", {
													class: "rounded-sm opacity-70 hover:opacity-100 focus:outline-none",
													onClick: ($event) => emit("update:open", false)
												}, " ✕ ", 8, ["onClick"])]), (0, vue_exports.createVNode)("div", { class: "flex-1 overflow-y-auto p-4" }, [(0, vue_exports.renderSlot)(_ctx.$slots, "default")])])];
											}),
											_: 3
										}, _parent$3, _scopeId$2));
										else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(Ge), { class: "pointer-events-auto w-screen max-w-md" }, {
											default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)("div", { class: "flex h-full flex-col bg-background shadow-xl" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between p-4 border-b" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(Ve), {
												as: "h3",
												class: "text-lg font-medium"
											}, {
												default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "title")]),
												_: 3
											}), (0, vue_exports.createVNode)("button", {
												class: "rounded-sm opacity-70 hover:opacity-100 focus:outline-none",
												onClick: ($event) => emit("update:open", false)
											}, " ✕ ", 8, ["onClick"])]), (0, vue_exports.createVNode)("div", { class: "flex-1 overflow-y-auto p-4" }, [(0, vue_exports.renderSlot)(_ctx.$slots, "default")])])]),
											_: 3
										})];
									}),
									_: 3
								}, _parent$2, _scopeId$1));
								_push$2(`</div></div></div>`);
							} else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(he), {
								as: "template",
								enter: "ease-in-out duration-300",
								"enter-from": "opacity-0",
								"enter-to": "opacity-100",
								leave: "ease-in-out duration-300",
								"leave-from": "opacity-100",
								"leave-to": "opacity-0"
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)("div", { class: "fixed inset-0 bg-black bg-opacity-50" })]),
								_: 1
							}), (0, vue_exports.createVNode)("div", { class: "fixed inset-0 overflow-hidden" }, [(0, vue_exports.createVNode)("div", { class: "absolute inset-0 overflow-hidden" }, [(0, vue_exports.createVNode)("div", { class: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(he), {
								as: "template",
								enter: "transform transition ease-in-out duration-300",
								"enter-from": "translate-x-full",
								"enter-to": "translate-x-0",
								leave: "transform transition ease-in-out duration-300",
								"leave-from": "translate-x-0",
								"leave-to": "translate-x-full"
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Ge), { class: "pointer-events-auto w-screen max-w-md" }, {
									default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)("div", { class: "flex h-full flex-col bg-background shadow-xl" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between p-4 border-b" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(Ve), {
										as: "h3",
										class: "text-lg font-medium"
									}, {
										default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "title")]),
										_: 3
									}), (0, vue_exports.createVNode)("button", {
										class: "rounded-sm opacity-70 hover:opacity-100 focus:outline-none",
										onClick: ($event) => emit("update:open", false)
									}, " ✕ ", 8, ["onClick"])]), (0, vue_exports.createVNode)("div", { class: "flex-1 overflow-y-auto p-4" }, [(0, vue_exports.renderSlot)(_ctx.$slots, "default")])])]),
									_: 3
								})]),
								_: 3
							})])])])];
						}),
						_: 3
					}, _parent$1, _scopeId));
					else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(Ye), {
						as: "div",
						class: "relative z-50",
						onClose: ($event) => emit("update:open", false)
					}, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(he), {
							as: "template",
							enter: "ease-in-out duration-300",
							"enter-from": "opacity-0",
							"enter-to": "opacity-100",
							leave: "ease-in-out duration-300",
							"leave-from": "opacity-100",
							"leave-to": "opacity-0"
						}, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)("div", { class: "fixed inset-0 bg-black bg-opacity-50" })]),
							_: 1
						}), (0, vue_exports.createVNode)("div", { class: "fixed inset-0 overflow-hidden" }, [(0, vue_exports.createVNode)("div", { class: "absolute inset-0 overflow-hidden" }, [(0, vue_exports.createVNode)("div", { class: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(he), {
							as: "template",
							enter: "transform transition ease-in-out duration-300",
							"enter-from": "translate-x-full",
							"enter-to": "translate-x-0",
							leave: "transform transition ease-in-out duration-300",
							"leave-from": "translate-x-0",
							"leave-to": "translate-x-full"
						}, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Ge), { class: "pointer-events-auto w-screen max-w-md" }, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)("div", { class: "flex h-full flex-col bg-background shadow-xl" }, [(0, vue_exports.createVNode)("div", { class: "flex items-center justify-between p-4 border-b" }, [(0, vue_exports.createVNode)((0, vue_exports.unref)(Ve), {
									as: "h3",
									class: "text-lg font-medium"
								}, {
									default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "title")]),
									_: 3
								}), (0, vue_exports.createVNode)("button", {
									class: "rounded-sm opacity-70 hover:opacity-100 focus:outline-none",
									onClick: ($event) => emit("update:open", false)
								}, " ✕ ", 8, ["onClick"])]), (0, vue_exports.createVNode)("div", { class: "flex-1 overflow-y-auto p-4" }, [(0, vue_exports.renderSlot)(_ctx.$slots, "default")])])]),
								_: 3
							})]),
							_: 3
						})])])])]),
						_: 3
					}, 8, ["onClose"])];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$23 = UISheet_vue_vue_type_script_setup_true_lang_default.setup;
UISheet_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UISheet.vue");
	return _sfc_setup$23 ? _sfc_setup$23(props, ctx) : void 0;
};
var UIAlertDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIAlertDialog",
	__ssrInlineRender: true,
	props: {
		variant: { default: "default" },
		size: { default: "default" },
		class: { default: "" }
	},
	setup(__props) {
		const props = __props;
		const sizeClasses = {
			default: "h-10 px-4 py-2",
			sm: "h-9 rounded-md px-3",
			lg: "h-11 rounded-md px-8",
			icon: "h-10 w-10"
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<button${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: (0, vue_exports.unref)(cn)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
				"bg-primary text-primary-foreground hover:bg-primary/90": __props.variant === "default",
				"bg-destructive text-destructive-foreground hover:bg-destructive/90": __props.variant === "destructive",
				"border border-input bg-background hover:bg-accent hover:text-accent-foreground": __props.variant === "outline",
				"bg-secondary text-secondary-foreground hover:bg-secondary/80": __props.variant === "secondary",
				"hover:bg-accent hover:text-accent-foreground": __props.variant === "ghost",
				"text-primary underline-offset-4 hover:underline": __props.variant === "link"
			}, sizeClasses, props.class) }, _ctx.$attrs, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</button>`);
		};
	}
});
var _sfc_setup$22 = UIAlertDialog_vue_vue_type_script_setup_true_lang_default.setup;
UIAlertDialog_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIAlertDialog.vue");
	return _sfc_setup$22 ? _sfc_setup$22(props, ctx) : void 0;
};
var UIDropdownMenu_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIDropdownMenu",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ge), (0, vue_exports.mergeProps)({
				as: "div",
				class: "relative inline-block text-left"
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Se), { as: "div" }, {
							default: (0, vue_exports.withCtx)((_$2, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "trigger", {}, null, _push$2, _parent$2, _scopeId$1);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "trigger")];
							}),
							_: 3
						}, _parent$1, _scopeId));
						_push$1(``);
						_push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Me), { class: "absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md border bg-popover p-1 shadow-md outline-none" }, {
							default: (0, vue_exports.withCtx)((_$2, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push$2, _parent$2, _scopeId$1);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default")];
							}),
							_: 3
						}, _parent$1, _scopeId));
					} else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(Se), { as: "div" }, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "trigger")]),
						_: 3
					}), (0, vue_exports.createVNode)(vue_exports.Transition, {
						"enter-active-class": "transition duration-100 ease-out",
						"enter-from-class": "transform scale-95 opacity-0",
						"enter-to-class": "transform scale-100 opacity-100",
						"leave-active-class": "transition duration-75 ease-in",
						"leave-from-class": "transform scale-100 opacity-100",
						"leave-to-class": "transform scale-95 opacity-0"
					}, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Me), { class: "absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md border bg-popover p-1 shadow-md outline-none" }, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default")]),
							_: 3
						})]),
						_: 3
					})];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$21 = UIDropdownMenu_vue_vue_type_script_setup_true_lang_default.setup;
UIDropdownMenu_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIDropdownMenu.vue");
	return _sfc_setup$21 ? _sfc_setup$21(props, ctx) : void 0;
};
var UIDropdownMenuItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIDropdownMenuItem",
	__ssrInlineRender: true,
	props: { class: { default: "" } },
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(be), _attrs, {
				default: (0, vue_exports.withCtx)(({ active }, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1(`<button class="${(0, server_renderer_exports.ssrRenderClass)((0, vue_exports.unref)(cn)("flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none", active ? "bg-accent text-accent-foreground" : "text-foreground", props.class))}"${_scopeId}>`);
						(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push$1, _parent$1, _scopeId);
						_push$1(`</button>`);
					} else return [(0, vue_exports.createVNode)("button", {
						class: (0, vue_exports.unref)(cn)("flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none", active ? "bg-accent text-accent-foreground" : "text-foreground", props.class),
						onClick: ($event) => emit("click")
					}, [(0, vue_exports.renderSlot)(_ctx.$slots, "default")], 10, ["onClick"])];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$20 = UIDropdownMenuItem_vue_vue_type_script_setup_true_lang_default.setup;
UIDropdownMenuItem_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIDropdownMenuItem.vue");
	return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
var _sfc_main$4 = {};
var _sfc_setup$19 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIDropdownMenuSeparator.vue");
	return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
var _sfc_main$3 = {};
var _sfc_setup$18 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UINavigationMenu.vue");
	return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
var _sfc_main$2 = {};
var _sfc_setup$17 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UINavigationMenuList.vue");
	return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
var _sfc_main$1 = {};
var _sfc_setup$16 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UINavigationMenuItem.vue");
	return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var UINavigationMenuTrigger_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UINavigationMenuTrigger",
	__ssrInlineRender: true,
	setup(__props) {
		const ChevronDownIcon = () => (0, vue_exports.h)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			stroke: "currentColor",
			class: "h-3 w-3"
		}, [(0, vue_exports.h)("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			"stroke-width": 2,
			d: "m19 9-7 7-7-7"
		})]);
		return (_ctx, _push, _parent, _attrs) => {
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(ge), (0, vue_exports.mergeProps)({
				as: "div",
				class: "relative"
			}, _attrs), {
				default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Se), { class: "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none" }, {
							default: (0, vue_exports.withCtx)((_$2, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) {
									(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push$2, _parent$2, _scopeId$1);
									_push$2((0, server_renderer_exports.ssrRenderComponent)(ChevronDownIcon, { class: "ml-1 h-3 w-3" }, null, _parent$2, _scopeId$1));
								} else return [(0, vue_exports.renderSlot)(_ctx.$slots, "default"), (0, vue_exports.createVNode)(ChevronDownIcon, { class: "ml-1 h-3 w-3" })];
							}),
							_: 3
						}, _parent$1, _scopeId));
						_push$1(``);
						_push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Me), { class: "absolute left-0 top-full z-50 mt-1 w-48 rounded-md border bg-popover p-2 shadow-md" }, {
							default: (0, vue_exports.withCtx)((_$2, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) (0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "content", {}, null, _push$2, _parent$2, _scopeId$1);
								else return [(0, vue_exports.renderSlot)(_ctx.$slots, "content")];
							}),
							_: 3
						}, _parent$1, _scopeId));
					} else return [(0, vue_exports.createVNode)((0, vue_exports.unref)(Se), { class: "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none" }, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "default"), (0, vue_exports.createVNode)(ChevronDownIcon, { class: "ml-1 h-3 w-3" })]),
						_: 3
					}), (0, vue_exports.createVNode)(vue_exports.Transition, {
						"enter-from-class": "opacity-0 scale-95",
						"enter-to-class": "opacity-100 scale-100",
						"leave-from-class": "opacity-100 scale-100",
						"leave-to-class": "opacity-0 scale-95"
					}, {
						default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createVNode)((0, vue_exports.unref)(Me), { class: "absolute left-0 top-full z-50 mt-1 w-48 rounded-md border bg-popover p-2 shadow-md" }, {
							default: (0, vue_exports.withCtx)(() => [(0, vue_exports.renderSlot)(_ctx.$slots, "content")]),
							_: 3
						})]),
						_: 3
					})];
				}),
				_: 3
			}, _parent));
		};
	}
});
var _sfc_setup$15 = UINavigationMenuTrigger_vue_vue_type_script_setup_true_lang_default.setup;
UINavigationMenuTrigger_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UINavigationMenuTrigger.vue");
	return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
var UINavigationMenuLink_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UINavigationMenuLink",
	__ssrInlineRender: true,
	props: {
		href: {
			type: String,
			required: true
		},
		class: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<a${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				href: __props.href,
				class: (0, vue_exports.unref)(cn)("block select-none rounded-md px-2 py-1.5 text-sm leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", props.class)
			}, _attrs))}>`);
			(0, server_renderer_exports.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</a>`);
		};
	}
});
var _sfc_setup$14 = UINavigationMenuLink_vue_vue_type_script_setup_true_lang_default.setup;
UINavigationMenuLink_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UINavigationMenuLink.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var UIProgress_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIProgress",
	__ssrInlineRender: true,
	props: {
		modelValue: { default: 0 },
		class: { default: "" }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: (0, vue_exports.unref)(cn)("relative h-4 w-full overflow-hidden rounded-full bg-secondary", props.class) }, _attrs))}><div class="h-full w-full flex-1 bg-primary transition-all" style="${(0, server_renderer_exports.ssrRenderStyle)({ transform: `translateX(-${100 - (__props.modelValue || 0)}%)` })}"></div></div>`);
		};
	}
});
var _sfc_setup$13 = UIProgress_vue_vue_type_script_setup_true_lang_default.setup;
UIProgress_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIProgress.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var UISlider_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UISlider",
	__ssrInlineRender: true,
	props: {
		modelValue: {},
		min: { default: 0 },
		max: { default: 100 },
		step: { default: 1 },
		class: { default: "" }
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<input${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				type: "range",
				min: __props.min,
				max: __props.max,
				step: __props.step,
				value: __props.modelValue,
				class: (0, vue_exports.unref)(cn)("flex w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer", "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", props.class)
			}, _ctx.$attrs, _attrs))}>`);
		};
	}
});
var _sfc_setup$12 = UISlider_vue_vue_type_script_setup_true_lang_default.setup;
UISlider_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UISlider.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var UIProjectModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIProjectModal",
	__ssrInlineRender: true,
	props: { project: {} },
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		(0, vue_exports.ref)(null);
		function close() {
			emit("close");
		}
		function handleKeyDown(e$1) {
			if (e$1.key === "Escape") close();
		}
		(0, vue_exports.onMounted)(() => {
			document.body.classList.add("overflow-hidden");
			window.addEventListener("keydown", handleKeyDown);
		});
		(0, vue_exports.onUnmounted)(() => {
			document.body.classList.remove("overflow-hidden");
			window.removeEventListener("keydown", handleKeyDown);
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" }, _attrs))}><div class="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface rounded-xl border border-border shadow-xl"><div class="sticky top-0 z-10 bg-surface/90 backdrop-blur p-5 border-b border-border"><div class="flex justify-between items-start"><h2 class="text-xl font-semibold text-primary">${(0, server_renderer_exports.ssrInterpolate)(__props.project.name)}</h2><button class="p-1.5 rounded-full hover:bg-muted transition-colors" aria-label="Закрыть">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(XIcon), { class: "w-5 h-5 text-muted-foreground" }, null, _parent));
			_push(`</button></div><p class="text-muted-foreground text-sm mt-1">${(0, server_renderer_exports.ssrInterpolate)(__props.project.description)}</p></div><div class="p-5 space-y-6"><div><h3 class="font-medium text-lg mb-2">Описание</h3><p class="text-foreground leading-relaxed">${(0, server_renderer_exports.ssrInterpolate)(__props.project.fullDescription)}</p></div><div><h3 class="font-medium text-lg mb-2">Используемые технологии и стандарты</h3><div class="flex flex-wrap gap-2"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(__props.project.technologies, (tech, idx) => {
				_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UIBadge_default), {
					key: idx,
					variant: "outline"
				}, {
					default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
						if (_push$1) _push$1(`${(0, server_renderer_exports.ssrInterpolate)(tech)}`);
						else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(tech), 1)];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div></div>`);
			if (__props.project.drawings && __props.project.drawings.length > 0) {
				_push(`<div><h3 class="font-medium text-lg mb-3">Примеры чертежей</h3><div class="flex flex-wrap gap-2"><!--[-->`);
				(0, server_renderer_exports.ssrRenderList)(__props.project.drawings, (drawing, idx) => {
					_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", drawing.url)} target="_blank" download class="inline-flex items-center gap-1.5 px-3 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors text-sm font-medium">`);
					_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(FileTextIcon), { class: "w-4 h-4" }, null, _parent));
					_push(` ${(0, server_renderer_exports.ssrInterpolate)(drawing.label)}</a>`);
				});
				_push(`<!--]--></div></div>`);
			} else _push(`<!---->`);
			if (__props.project.links && __props.project.links.length > 0) {
				_push(`<div><h3 class="font-medium text-lg mb-2">Ссылки</h3><ul class="space-y-1"><!--[-->`);
				(0, server_renderer_exports.ssrRenderList)(__props.project.links, (link, idx) => {
					_push(`<li><a${(0, server_renderer_exports.ssrRenderAttr)("href", link.url)} target="_blank" class="text-accent hover:underline">${(0, server_renderer_exports.ssrInterpolate)(link.name)}</a></li>`);
				});
				_push(`<!--]--></ul></div>`);
			} else _push(`<!---->`);
			_push(`</div></div></div>`);
		};
	}
});
var _sfc_setup$11 = UIProjectModal_vue_vue_type_script_setup_true_lang_default.setup;
UIProjectModal_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIProjectModal.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var UIProjectModal_default = UIProjectModal_vue_vue_type_script_setup_true_lang_default;
var avatar_default = "/images/avatar.png";
var UIHero_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIHero",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "relative overflow-hidden isolate gradient-bg" }, _attrs))} data-v-c1663c85><div class="aurora" data-v-c1663c85></div><div class="relative z-10 container mx-auto max-w-4xl py-20 px-4" data-v-c1663c85><div class="flex flex-col md:flex-row items-center gap-8 fade-up" data-v-c1663c85><div class="avatar-3d shrink-0" data-v-c1663c85><img${(0, server_renderer_exports.ssrRenderAttr)("src", avatar_default)} alt="Разиньков Никита" class="w-32 h-32 rounded-full object-cover ring-4 ring-white/30" data-v-c1663c85></div><div class="text-white text-center md:text-left" data-v-c1663c85><h1 class="text-4xl md:text-5xl font-bold mb-2" data-v-c1663c85>Разиньков Никита Николаевич</h1><p class="text-xl text-white/90 mb-4" data-v-c1663c85>Специалист по проектированию систем газоснабжения и нефтегазовых объектов</p><p class="text-lg text-white/80 max-w-2xl leading-relaxed mb-6" data-v-c1663c85> Более 20 лет опыта в проектировании систем газоснабжения, магистральных и распределительных трубопроводов, объектов добычи и хранения нефти и газа. </p><div class="flex flex-wrap gap-3 justify-center md:justify-start" data-v-c1663c85>`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UIBadge_default), {
				class: "text-white bg-accent/30 border-accent/50",
				shiny: ""
			}, {
				default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
					if (_push$1) _push$1(`🎯 20+ лет опыта`);
					else return [(0, vue_exports.createTextVNode)("🎯 20+ лет опыта")];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UIBadge_default), {
				class: "text-white bg-accent/30 border-accent/50",
				shiny: ""
			}, {
				default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
					if (_push$1) _push$1(`📐 AutoCAD Plant 3D`);
					else return [(0, vue_exports.createTextVNode)("📐 AutoCAD Plant 3D")];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UIBadge_default), {
				class: "text-white bg-accent/30 border-accent/50",
				shiny: ""
			}, {
				default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
					if (_push$1) _push$1(`👨‍💼 Управление проектами`);
					else return [(0, vue_exports.createTextVNode)("👨‍💼 Управление проектами")];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></div></section>`);
		};
	}
});
var _sfc_setup$10 = UIHero_vue_vue_type_script_setup_true_lang_default.setup;
UIHero_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIHero.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var UIHero_default = /* @__PURE__ */ __plugin_vue_export_helper_default(UIHero_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-c1663c85"]]);
function useTheme() {
	const isDark = (0, vue_exports.ref)(false);
	const setTheme = (dark) => {
		if (dark) document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
		localStorage.theme = dark ? "dark" : "light";
		isDark.value = dark;
	};
	const toggleTheme = () => {
		setTheme(!isDark.value);
	};
	(0, vue_exports.onMounted)(() => {
		const saved = localStorage.theme;
		if (saved === "dark" || saved === "light") setTheme(saved === "dark");
		else {
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			setTheme(prefersDark);
		}
	});
	return {
		isDark,
		setTheme,
		toggleTheme
	};
}
var UIThemeToggle_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIThemeToggle",
	__ssrInlineRender: true,
	setup(__props) {
		const { isDark, toggleTheme } = useTheme();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<button${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				class: "p-2 rounded-full bg-surface border border-border shadow-sm hover:bg-muted transition-colors",
				"aria-label": "Переключить тему"
			}, _attrs))}>`);
			if ((0, vue_exports.unref)(isDark)) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(SunIcon), { class: "w-5 h-5" }, null, _parent));
			else _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(MoonIcon), { class: "w-5 h-5" }, null, _parent));
			_push(`</button>`);
		};
	}
});
var _sfc_setup$9 = UIThemeToggle_vue_vue_type_script_setup_true_lang_default.setup;
UIThemeToggle_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIThemeToggle.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var UIThemeToggle_default = UIThemeToggle_vue_vue_type_script_setup_true_lang_default;
var UIHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "UIHeader",
	__ssrInlineRender: true,
	setup(__props) {
		const mobileMenuOpen = (0, vue_exports.ref)(false);
		const navItems = [
			{
				label: "Опыт",
				href: "#experience"
			},
			{
				label: "Портфолио",
				href: "#portfolio"
			},
			{
				label: "Навыки",
				href: "#skills"
			},
			{
				label: "Контакты",
				href: "#contact"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<header${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-sm border-b border-border transition-colors" }, _attrs))}><div class="container mx-auto max-w-4xl px-4 py-3 flex items-center justify-between"><a href="#" class="font-bold text-lg text-primary hover:text-accent"> Н. Разиньков </a><nav class="hidden md:flex items-center gap-6"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(navItems, (item) => {
				_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", item.href)} class="text-muted-foreground hover:text-accent transition-colors">${(0, server_renderer_exports.ssrInterpolate)(item.label)}</a>`);
			});
			_push(`<!--]-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)(UIThemeToggle_default, null, null, _parent));
			_push(`</nav><div class="md:hidden flex items-center gap-3">`);
			_push((0, server_renderer_exports.ssrRenderComponent)(UIThemeToggle_default, null, null, _parent));
			_push(`<button class="p-1.5 rounded-md hover:bg-muted transition-colors" aria-label="Меню">`);
			if (!mobileMenuOpen.value) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(MenuIcon), { class: "w-5 h-5 text-primary" }, null, _parent));
			else _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(XIcon), { class: "w-5 h-5 text-primary" }, null, _parent));
			_push(`</button></div></div><div class="md:hidden bg-surface border-t border-border" style="${(0, server_renderer_exports.ssrRenderStyle)(mobileMenuOpen.value ? null : { display: "none" })}"><div class="container mx-auto max-w-4xl px-4 py-4 flex flex-col gap-3"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(navItems, (item) => {
				_push(`<a${(0, server_renderer_exports.ssrRenderAttr)("href", item.href)} class="py-2 text-primary hover:text-accent transition-colors">${(0, server_renderer_exports.ssrInterpolate)(item.label)}</a>`);
			});
			_push(`<!--]--></div></div></header>`);
		};
	}
});
var _sfc_setup$8 = UIHeader_vue_vue_type_script_setup_true_lang_default.setup;
UIHeader_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/UIHeader.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var UIHeader_default = UIHeader_vue_vue_type_script_setup_true_lang_default;
function useFadeUp(target) {
	(0, vue_exports.onMounted)(() => {
		if (!target.value) return;
		useIntersectionObserver(target, ([{ isIntersecting }]) => {
			target.value?.classList.toggle("visible", isIntersecting);
		}, { threshold: .2 });
	});
}
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<svg${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 1000 1000",
		class: "w-5 h-5"
	}, _attrs))}><defs><linearGradient id="b"><stop offset="0" stop-color="#00f"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#4cf"></stop><stop offset=".662" stop-color="#53e"></stop><stop offset="1" stop-color="#93d"></stop></linearGradient><linearGradient id="c" x1="117.847" x2="1000" y1="760.536" y2="500" gradientUnits="userSpaceOnUse" href="#a"></linearGradient><radialGradient id="d" cx="-87.392" cy="1166.116" r="500" fx="-87.392" fy="1166.116" gradientTransform="rotate(51.356 1551.478 559.3)scale(2.42703433 1)" gradientUnits="userSpaceOnUse" href="#b"></radialGradient></defs><rect width="1000" height="1000" fill="url(#c)" ry="249.681"></rect><rect width="1000" height="1000" fill="url(#d)" ry="249.681"></rect><path fill="#fff" fill-rule="evenodd" d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.785 0 375.947 171.001 375.947 381.604.707 207.346-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574Z" clip-rule="evenodd"></path></svg>`);
}
var _sfc_setup$7 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/MaxIcon.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var MaxIcon_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var SectionContact_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "SectionContact",
	__ssrInlineRender: true,
	setup(__props) {
		const root = (0, vue_exports.ref)(null);
		useFadeUp(root);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				ref_key: "root",
				ref: root,
				class: "fade-up mb-16 text-center"
			}, _attrs))} data-v-9fb4cfb3>`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UICard_default), { class: "p-8 max-w-2xl mx-auto glass" }, {
				default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1(`<h2 class="text-2xl font-bold mb-4" data-v-9fb4cfb3${_scopeId}>Свяжитесь со мной</h2><p class="text-muted-fore mb-8" data-v-9fb4cfb3${_scopeId}>Выберите удобный способ обсудить ваш проект</p><div class="flex justify-center gap-6" data-v-9fb4cfb3${_scopeId}><a href="mailto:razinkovnik@gmail.com" class="btn-icon group w-25" data-v-9fb4cfb3${_scopeId}>`);
						_push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Mail), { class: "w-5 h-5 text-accent group-hover:text-pop" }, null, _parent$1, _scopeId));
						_push$1(`<span data-v-9fb4cfb3${_scopeId}>Email</span></a><a href="https://t.me/m31k0l2" target="_blank" rel="noopener noreferrer" class="btn-icon group w-25" data-v-9fb4cfb3${_scopeId}>`);
						_push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(Send), { class: "w-5 h-5 text-accent group-hover:text-pop" }, null, _parent$1, _scopeId));
						_push$1(`<span data-v-9fb4cfb3${_scopeId}>Telegram</span></a><a href="https://max.ru/u/f9LHodD0cOIeJjdXA-AdkZE5KKF4XMslUotn1EQ21zt_UJ91lvPYnUr2uNo" target="_blank" rel="noopener noreferrer" class="btn-icon group w-25" data-v-9fb4cfb3${_scopeId}>`);
						_push$1((0, server_renderer_exports.ssrRenderComponent)(MaxIcon_default, { class: "w-5 h-5 text-accent group-hover:text-pop" }, null, _parent$1, _scopeId));
						_push$1(`<span data-v-9fb4cfb3${_scopeId}>Max</span></a></div><p class="text-xs text-muted-fore mt-6" data-v-9fb4cfb3${_scopeId}>Отвечаю в течение 1-2 часов в рабочее время</p>`);
					} else return [
						(0, vue_exports.createVNode)("h2", { class: "text-2xl font-bold mb-4" }, "Свяжитесь со мной"),
						(0, vue_exports.createVNode)("p", { class: "text-muted-fore mb-8" }, "Выберите удобный способ обсудить ваш проект"),
						(0, vue_exports.createVNode)("div", { class: "flex justify-center gap-6" }, [
							(0, vue_exports.createVNode)("a", {
								href: "mailto:razinkovnik@gmail.com",
								class: "btn-icon group w-25"
							}, [(0, vue_exports.createVNode)((0, vue_exports.unref)(Mail), { class: "w-5 h-5 text-accent group-hover:text-pop" }), (0, vue_exports.createVNode)("span", null, "Email")]),
							(0, vue_exports.createVNode)("a", {
								href: "https://t.me/m31k0l2",
								target: "_blank",
								rel: "noopener noreferrer",
								class: "btn-icon group w-25"
							}, [(0, vue_exports.createVNode)((0, vue_exports.unref)(Send), { class: "w-5 h-5 text-accent group-hover:text-pop" }), (0, vue_exports.createVNode)("span", null, "Telegram")]),
							(0, vue_exports.createVNode)("a", {
								href: "https://max.ru/u/f9LHodD0cOIeJjdXA-AdkZE5KKF4XMslUotn1EQ21zt_UJ91lvPYnUr2uNo",
								target: "_blank",
								rel: "noopener noreferrer",
								class: "btn-icon group w-25"
							}, [(0, vue_exports.createVNode)(MaxIcon_default, { class: "w-5 h-5 text-accent group-hover:text-pop" }), (0, vue_exports.createVNode)("span", null, "Max")])
						]),
						(0, vue_exports.createVNode)("p", { class: "text-xs text-muted-fore mt-6" }, "Отвечаю в течение 1-2 часов в рабочее время")
					];
				}),
				_: 1
			}, _parent));
			_push(`</section>`);
		};
	}
});
var _sfc_setup$6 = SectionContact_vue_vue_type_script_setup_true_lang_default.setup;
SectionContact_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/SectionContact.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var SectionContact_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SectionContact_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-9fb4cfb3"]]);
var SectionExperience_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "SectionExperience",
	__ssrInlineRender: true,
	setup(__props) {
		const mainTasks = [
			"Разработка проектной и рабочей документации для систем газоснабжения",
			"Проектирование линейных нефтегазопроводов",
			"Проектирование объектов обустройства нефтяных месторождений",
			"Разработка технологических решений для хранения и перекачки нефти и нефтепродуктов",
			"Подготовка и сопровождение проектов в государственной и негосударственной экспертизе",
			"Выполненение технологических расчётов",
			"Автоматизация черчения и документооборота с использованием Python",
			"Руководство проектной группой (5–10 инженеров)",
			"Координация междисциплинарных работ в гибридном формате"
		];
		const roles = [
			{
				title: "Инженер 1 категории",
				company: "АО «Газпроектинжиниринг»",
				period: "2005 — 2008",
				description: "Проектирование магистральных газопроводов и ГРС."
			},
			{
				title: "Ведущий инженер",
				company: "ООО «Газпроектсервис»",
				period: "2008 — 2009",
				description: "Проектирование газопроводов низкого и среднего давления."
			},
			{
				title: "Руководитель группы проектирования",
				company: "НИПИ «Инжео»",
				period: "2009 — 2011",
				description: "Проектирование магистральных нефтепроводов. Руководство командой из 5 инженеров, контроль сроков и качества проектов."
			},
			{
				title: "Руководитель отдела проектирования",
				company: "ООО «Трансэнергострой»",
				period: "2011 — 2026",
				description: "Выполнение проектов в нефтегазовой области, управление командой до 10 человек."
			},
			{
				title: "Ведущий инженер",
				company: "АО «Мосгаз»",
				period: "2026 — настоящее время",
				description: "Разработка проектов газификации в Новой Москве."
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "py-12" }, _attrs))}><h2 class="text-3xl font-bold mb-8 text-center">Опыт работы</h2><div class="mb-10 bg-surface rounded-xl p-6 shadow-sm border border-border"><div class="flex flex-col md:flex-row md:items-start gap-6"><div class="md:w-2/3"><h4 class="font-medium text-lg mb-3">Чем я занимаюсь</h4><ul class="space-y-3"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(mainTasks, (task, index) => {
				_push(`<li class="flex items-start gap-2"><span class="text-accent mt-1">•</span><span>${(0, server_renderer_exports.ssrInterpolate)(task)}</span></li>`);
			});
			_push(`<!--]--></ul></div></div></div><div class="mt-10"><h3 class="text-xl font-semibold mb-4">Хронология должностей</h3><div class="space-y-4"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)(roles, (role, index) => {
				_push(`<div class="bg-surface rounded-lg p-4 border border-border"><div class="flex justify-between items-start"><div><h4 class="font-medium">${(0, server_renderer_exports.ssrInterpolate)(role.title)}</h4><p class="text-sm text-muted-foreground">${(0, server_renderer_exports.ssrInterpolate)(role.company)}</p></div><span class="text-xs font-medium text-accent">${(0, server_renderer_exports.ssrInterpolate)(role.period)}</span></div><p class="mt-2 text-sm">${(0, server_renderer_exports.ssrInterpolate)(role.description)}</p></div>`);
			});
			_push(`<!--]--></div></div></section>`);
		};
	}
});
var _sfc_setup$5 = SectionExperience_vue_vue_type_script_setup_true_lang_default.setup;
SectionExperience_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/SectionExperience.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var SectionExperience_default = SectionExperience_vue_vue_type_script_setup_true_lang_default;
var projects_default = /* @__PURE__ */ JSON.parse("[{\"name\":\"Газификация с. Горки (Московская обл.)\",\"description\":\"Распределительный газопровод низкого давления с вводами к домам\",\"fullDescription\":\"Проектирование распределительной сети газоснабжения в рамках программы «Развитие газификации в Московской области до 2030 года». Выполнены разделы ПЗ, ППО, ТКР, ПОС и ГСН: трассировка, гидравлический и прочностной расчёт, расчёт балластировки, составлены ведомости работ и спецификация, подбор диаметров (Ø110 мм, Ø63 мм), расстановка подземной запорной арматуры, переходы через автодороги методом ГНБ с устройством футляров. Обеспечено прохождение ведомственной и государственной экспертизы.\",\"technologies\":[\"ГСН\",\"ППО\",\"ПОС\",\"ТКР\",\"ГНБ\",\"ПЭ\",\"газопровод НД (Г1)\"],\"links\":[],\"drawings\":[{\"label\":\"План трасс\",\"url\":\"/drawings/gorki_plan.pdf\"},{\"label\":\"Продольный профиль\",\"url\":\"/drawings/gorki_prof.pdf\"}]},{\"name\":\"Газификация д. Панино (Московская обл.)\",\"description\":\"Прокладка газопровода высокого давления до ПРГ. Распределительный газопровод среднего давления. Для снижения давления газа с высокого до среднего и автоматического поддержания предусмотрено ПРГ.\",\"fullDescription\":\"Проектирование сети газоснабжения в д. Панино (городской округ Чехов) в рамках программы «Развитие газификации в Московской области до 2030 года». Выполнены разделы ПЗ, ППО, ТКР, ПОС и ГСН: трассировка, гидравлический и прочностной расчёт, расчёт балластировки, подбор ПРГ, составлены ведомости работ и спецификация, подбор диаметров (Ø108 мм, Ø160 мм, Ø110 мм), размещение и обвязка ПРГ, расстановка подземной запорной арматуры, переходы через автодороги методом ГНБ с устройством футляров. Обеспечено прохождение ведомственной и государственной экспертизы.\",\"technologies\":[\"ГСН\",\"ППО\",\"ПОС\",\"ТКР\",\"ГНБ\",\"ПРГ\",\"ПЭ\",\"газопровод ВД (Г4)\",\"газопровод СД (Г2)\"],\"links\":[],\"drawings\":[{\"label\":\"План трасс\",\"url\":\"/drawings/panino_plan.pdf\"},{\"label\":\"Продольный профиль\",\"url\":\"/drawings/panino_prof.jpg\"}]},{\"name\":\"Газификация д. Лидино (Московская обл.)\",\"description\":\"Распределительный газопровод среднего давления с ПРГ и вводами к домам. Подключение ПРГ от существующего газопровода высокого давления, для этих целей проложен стальной газопровод высокого давления Ø108 мм протяжённостью 1,8км. Переходы через а/д IV категории методом ГНБ.\",\"fullDescription\":\"Проектирование сети газоснабжения в д. Лидино в рамках программы газификации Московской области. Выполнены разделы ПЗ, ППО, ТКР, ПОС и ГСН: трассировка, гидравлический и прочностной расчёт, расчёт балластировки, подбор ПРГ, составлены ведомости работ и спецификация, подбор диаметров (Ø108 мм, Ø160 мм, Ø110 мм), размещение и обвязка ПРГ, расстановка подземной запорной арматуры, переходы через автодороги методом ГНБ с устройством футляров. Обеспечено прохождение ведомственной и государственной экспертизы.\",\"technologies\":[\"ГСН\",\"ППО\",\"ПОС\",\"ТКР\",\"ГНБ\",\"ПРГ\",\"Сталь + ПЭ\",\"газопровод ВД (Г4)\",\"газопровод СД (Г2)\"],\"links\":[],\"drawings\":[{\"label\":\"План трасс\",\"url\":\"/drawings/lidino_plan.pdf\"},{\"label\":\"Продольный профиль\",\"url\":\"/drawings/lidino_prof.jpg\"}]},{\"name\":\"Межпоселковый газопровод от д. Кучелапы до пгт Верхошижемье (Кировская обл.)\",\"description\":\"Газопровод высокого давления 1 и 2 категорий с отводами и ПРГ\",\"fullDescription\":\"Крупный межпоселковый газопровод протяжённостью свыше 39 км с тремя уровнями давления: высокое (1,2 МПа, Ø225 мм ПЭ100 SDR9), среднее (0,3 МПа) и низкое (0,002 МПа). Включает 4 ГРПШ с телеметрией и узлами учёта, переходы через реки и дороги методом ГНБ с футлярами Ø400 мм. Учтены сложные условия: пучинистые и водонасыщенные грунты, заболоченная местность, резкий перепад рельефа. Выполнены разделы ПЗ, ППО, ТКР, ПОС и ГСН: трассировка, гидравлический и прочностной расчёт, расчёт балластировки, подбор ПРГ, составлены ведомости работ и спецификация, подбор диаметров, размещение и обвязка ПРГ, расстановка надземной запорной арматуры. Обеспечено прохождение ведомственной и государственной экспертизы.\",\"technologies\":[\"ГСН\",\"ППО\",\"ПОС\",\"ТКР\",\"ГНБ\",\"ПРГ\",\"Сталь + ПЭ\",\"газопровод ВД (Г4)\",\"газопровод ВД (Г4)\",\"газопровод СД (Г2)\",\"газопровод НД (Г1)\"],\"links\":[],\"drawings\":[{\"label\":\"План трасс\",\"url\":\"/drawings/verhoshizh_plan.pdf\"},{\"label\":\"Продольный профиль\",\"url\":\"/drawings/verhoshizh_prof.jpg\"}]},{\"name\":\"Газопровод топливного газа до котельной п. Аксарайский (Астраханская обл.)\",\"description\":\"Газопровод высокого давления 2 категории (0,6 МПа) протяжённостью 13 км\",\"fullDescription\":\"Крупный линейный объект с комбинированной прокладкой: стальной участок Ø530 мм и полиэтиленовый Ø630 мм. Включает крановые узлы DN500 и DN200 в ограждениях, переходы под автодорогами и ЖД методом ГШБ. Учтены особенности Прикаспийской низменности: подтопление, блуждающие токи, агрессивные грунтовые воды. Выполнены все разделы ПД для прохождения экспертизы.\",\"technologies\":[\"ГСН\",\"Сталь + ПЭ\",\"ГШБ\",\"Крановые узлы\",\"Блуждающие токи\"],\"links\":[],\"drawings\":[{\"label\":\"План трасс\",\"url\":\"/drawings/gorki_plan.pdf\"},{\"label\":\"Продольный профиль\",\"url\":\"/drawings/gorki_prof.jpg\"}]},{\"name\":\"Газопровод от ГРС Нижнеивкино до д. Кучелапы (Кировская обл.)\",\"description\":\"Многониточный газопровод с ГРПШ и отводами (высокое, среднее и низкое давление)\",\"fullDescription\":\"Комплексный проект с тремя зонами давления: высокое (1,2 МПа, Ø225 мм ПЭ), среднее (0,3 МПа) и низкое (0,002 МПа). Применены решения для балластировки на водонасыщенных участках, прокладка в пучинистых грунтах с устройством песчаных подушек. ГРПШ оснащён АСУ ТП с передачей данных на Web-сервер. Проект включает перспективное подключение к другому межпоселковому газопроводу.\",\"technologies\":[\"ТКР\",\"ПЭ100 SDR9/11\",\"АСУ ТП\",\"Балластировка\",\"Многоуровневое давление\"],\"links\":[]},{\"name\":\"Обустройство Вятской площади (Удмуртия)\",\"description\":\"Линейные трубопроводы для ТВО-5 и БКНС-5 на Арланском месторождении\",\"fullDescription\":\"Проектирование нефтегазопроводов и водоводов системы заводнения (DN114–DN325, Р=4–15 МПа). Разработаны решения по прокладке в сложных инженерно-геологических условиях (пучинистые и просадочные грунты), переходы под автодорогами в футлярах, расчёт толщин стенок с учётом коррозии. Категория трубопроводов — II–III.\",\"technologies\":[\"ТХ\",\"ТКР\",\"AutoCAD\",\"Гидросистема\",\"СП 284.1325800.2016\"],\"links\":[]},{\"name\":\"Топливозаправочный комплекс (Новосибирск)\",\"description\":\"Топливнозаправочного комплекса аэропорта, разгрузка авиотоплива из ж/д цистерн, хранение в резервуарном парке и отгрузка авиационного топлива в автоцистерны.\",\"fullDescription\":\"Проектирование топливнозаправочного комплекса аэропорта в г. Новосибирск, в том числе: два резервуарных парка РВС и РГС, ж/д эстакада, автомобильные пункты налива, насосная, подземные ёмкости и технологические трубопроводы\",\"technologies\":[\"РВС\",\"РГС\",\"Насосная\",\"ж/д эстакада\",\"автомобильный пункт налива\",\"ёмкости ЕП\",\"3d моделирование\",\"AutoCAD Plant 3D\"],\"links\":[],\"drawings\":[{\"label\":\"Планы, разрезы\",\"url\":\"/drawings/tzk.pdf\"}]},{\"name\":\"Терминал отгрузки ЖУГ и СУГ (ЯНАО)\",\"description\":\"Технологические коммуникации эстакады №7 на Бованенковском месторождении\",\"fullDescription\":\"Проектирование технологических трубопроводов для терминала отгрузки широкой фракции лёгких углеводородов и сжиженного углеводородного газа. Учёт требований ФНП по промышленной безопасности, расчёт на прочность и устойчивость, подбор теплоизоляции и антикоррозионной защиты.\",\"technologies\":[\"технологическая эстакада\",\"3d моделирование\",\"AutoCAD Plant 3D\"],\"links\":[],\"drawings\":[{\"label\":\"План расположения трубопроводов\",\"url\":\"/drawings/bov_plan.pdf\"},{\"label\":\"Разрезы\",\"url\":\"/drawings/bov_razrez.pdf\"},{\"label\":\"Изометрическая схема трубопровода\",\"url\":\"/drawings/bov_iso.pdf\"}]},{\"name\":\"Межпоселковый газопровод Швариха–Хмелевка (Кировская обл.)\",\"description\":\"Газопровод высокого давления 1 категории (до 1,2 МПа) протяжённостью 12,8 км\",\"fullDescription\":\"Проектирование межпоселкового газопровода из полиэтиленовых труб ПЭ100 SDR9 Ø63 мм с переходами через реку Лудянка и автодороги методом ГНБ. Установка ГРПШ с автоматизацией и телеметрией. Учёт сложных условий: пучинистые грунты, подтопление, сейсмичность 5 баллов. Обеспечена охранная зона и система обозначения трассы (маркерные столбики, сигнальная лента, электронные маркеры).\",\"technologies\":[\"ТКР\",\"ПЭ100 SDR9\",\"ГНБ\",\"ГРПШ с телеметрией\",\"СП 62.13330.2011\"],\"links\":[]},{\"name\":\"Реконструкция газопровода в с. Икряное (Астраханская обл.)\",\"description\":\"Распределительная сеть среднего давления (0,3 МПа) протяжённостью 3,8 км\",\"fullDescription\":\"Реконструкция устаревшей сети с заменой на полиэтиленовые трубы ПЭ100 SDR11 Ø110 мм. Выполнены переходы под просёлочными дорогами и коммуникациями. Учтены особенности региона: полупустынный климат, просадочные грунты I типа, низкая глубина промерзания. Проект включает демонтаж старого участка и полную замену с сохранением пропускной способности.\",\"technologies\":[\"ГСН\",\"Реконструкция\",\"ПЭ100 SDR11\",\"Просадочные грунты\",\"Демонтаж\"],\"links\":[]},{\"name\":\"Газификация д. Апонитищи (Московская обл.)\",\"description\":\"Распределительный газопровод среднего давления с вводами к домам\",\"fullDescription\":\"Проектирование распределительной сети газоснабжения в д. Апонитищи (городской округ Зарайск) в рамках программы «Развитие газификации в Московской области до 2030 года». Выполнены разделы ТКР: трассировка по улицам, гидравлический расчёт, подбор диаметров (Ø110 мм для распределительных сетей, Ø63 мм для вводов), установка подземных задвижек DN50 и секционирующих устройств. Переходы через автомобильные дороги и водные преграды выполнены методом ГНБ с устройством футляров из ПЭ труб. Учтены сложные инженерно-геологические условия: подтопление, чрезмернопучинистые грунты, высокая коррозионная агрессивность. Обеспечена система обозначения трассы: сигнальная лента, провод-спутник, опознавательные знаки и стойки типа «Ин».\",\"technologies\":[\"ТКР\",\"ПЭ100 ГАЗ SDR11\",\"ГНБ\",\"Подземная запорная арматура\",\"СП 62.13330.2011\",\"Сигнальная лента\",\"Провод-спутник\"],\"links\":[]},{\"name\":\"Газификация д. Иванчиково (Московская обл.)\",\"description\":\"Распределительный газопровод среднего давления с вводами к домам\",\"fullDescription\":\"Проектирование сети газоснабжения в д. Иванчиково (городской округ Зарайск). Источник газоснабжения — ПРГ с давлением 0,3 МПа. Применены полиэтиленовые трубы ПЭ100 ГАЗ SDR11 Ø110 мм. Переходы через автомобильные дороги выполнены закрытым способом с устройством футляров из ПЭ труб Ø225 мм. Установлены подземные отключающие устройства с выводом под ковер и ограждением. Учтены опасные природные процессы: морозное пучение (до 50% площади), подтопление (50–70% площади). Предусмотрены мероприятия по строительству в сложных геологических условиях: засыпка траншей песком, соблюдение глубины заложения с учётом пучинистости. Система обозначения трассы включает опознавательные знаки с контактами АДС.\",\"technologies\":[\"ТКР\",\"ПЭ100 ГАЗ SDR11\",\"ГНБ\",\"Закрытая прокладка\",\"Ограждения АО «Мособлгаз»\",\"СП 62.13330.2011\",\"Опознавательные знаки\"],\"links\":[]},{\"name\":\"Газификация д. Житонино (Московская обл.)\",\"description\":\"Распределительный газопровод среднего давления с вводами к домам\",\"fullDescription\":\"Проектирование распределительной сети в д. Житонино (городской округ Шаховская). Диаметры газопроводов — Ø110 мм (распределительные) и Ø63 мм (вводы). Установлено 12 подземных кранов DN100 для секционирования сети. Переходы через автомобильные дороги выполнены методом наклонно-направленного бурения (ННБ, аналог ГНБ) с устройством футляров из ПЭ труб Ø160 и Ø110 мм. Глубина прокладки учтена с учётом пучинистости грунтов (1,1–1,4 м до верха трубы). Предусмотрены сигнальная лента, провод-спутник и информационные стойки.\",\"technologies\":[\"ТКР\",\"ПЭ100 ГАЗ SDR11\",\"ННБ\",\"Подземные краны DN100\",\"Сигнальная лента\",\"Провод-спутник\",\"СП 62.13330.2011\"],\"links\":[]},{\"name\":\"Газификация д. Большое Сытьково (Московская обл.)\",\"description\":\"Распределительный газопровод среднего давления с вводами к домам\",\"fullDescription\":\"На основании спецификации оборудования и материалов спроектирована сеть газоснабжения в д. Большое Сытьково. Применены полиэтиленовые трубы ПЭ100 ГАЗ SDR11 Ø110 мм, в том числе в защитной оболочке для участков ГНБ. Установлены задвижки DN100 в подземном исполнении и ограждения по нормали АО «Мособлгаз». Переходы через автодороги выполнены в футлярах из ПЭ труб Ø250 мм. Предусмотрены информационные стойки типа «Ин», сигнальная лента и медный провод-спутник.\",\"technologies\":[\"ГСН\",\"ПЭ100 ГАЗ SDR11\",\"Футляры Ø250\",\"Задвижки DN100\",\"Ограждения АО «Мособлгаз»\",\"Сигнальная лента\",\"Провод-спутник\"],\"links\":[]},{\"name\":\"Газопровод высокого давления с. Поречье – д. Астафьево – д. Чернево (Московская обл.)\",\"description\":\"Межпоселковый газопровод высокого давления протяжённостью ~17,7 км\",\"fullDescription\":\"Линейный объект для газоснабжения населённых пунктов Можайского городского округа. Проект включает пересечение 7 водных преград (реки Иночь, Песочня, Мошна и ручьи), переходы под ЛЭП 10 кВ с соблюдением охранных зон. Учтены инженерно-геологические условия: суглинки слабопучинистые и среднепучинистые при водонасыщении, сейсмичность 5 баллов. Глубина прокладки — с учётом промерзания и пучинистости. Охранная зона — 2 м от оси, в лесах — просека 6 м. Расчётный расход — 1000 м³/ч.\",\"technologies\":[\"ТКР\",\"Межпоселковый ГП\",\"Переходы через реки\",\"Сейсмичность 5 баллов\",\"СП 62.13330.2011\",\"Охранная зона\",\"Гидравлический расчёт\"],\"links\":[]},{\"name\":\"Газификация д. Кривошеино (Московская обл.)\",\"description\":\"Распределительный газопровод среднего давления с вводами к домам\",\"fullDescription\":\"Проект выполнен для д. Кривошеино (Рузский городской округ). Источник газа — межпоселковый газопровод «п. Колюбакино – д. Апальщино – д. Кривошеино – д. Новогорбово». Применены трубы ПЭ100 ГАЗ SDR11: Ø110 мм для распределительной сети и Ø63 мм для вводов. Установлены подземные задвижки с выводом под ковер по нормали 154.05-0-ГСН.ЗД и ограждения по 035.16-0-ГСН.ОГР.2. Учтены климатические особенности IIВ строительно-климатического района: глубина промерзания до 150 см, снежный покров 25–50 см. Грунты — слабо- и среднепучинистые.\",\"technologies\":[\"ТКР\",\"ПЭ100 ГАЗ SDR11\",\"Подземная арматура\",\"СП 62.13330.2011\",\"Климат IIВ\",\"Пучинистые грунты\",\"Ограждения АО «Мособлгаз»\"],\"links\":[]},{\"name\":\"Газификация д. Филатово (Московская обл.)\",\"description\":\"Распределительный газопровод среднего давления с вводами к домам\",\"fullDescription\":\"Проектирование сети газоснабжения в д. Филатово (Рузский городской округ). Применены полиэтиленовые трубы ПЭ100 ГАЗ SDR11 Ø110 мм. Выполнены переходы через автодороги методом ГНБ и прокола с футлярами Ø250 мм. Установлены подземные задвижки DN100, ограждения и информационные стойки типа «Ин». Учтены сложные геологические условия: пучинистые грунты, подтопление. Предусмотрена балластировка на отдельных участках, сигнальная лента и провод-спутник по всей трассе.\",\"technologies\":[\"ТКР\",\"ПЭ100 ГАЗ SDR11\",\"ГНБ\",\"Прокол\",\"Футляры Ø250\",\"Подземная арматура\",\"Балластировка\",\"СП 62.13330.2011\"],\"links\":[]},{\"name\":\"Газификация д. Знаменское (Московская обл.)\",\"description\":\"Распределительный газопровод среднего давления с двумя ПРГ и вводами к домам\",\"fullDescription\":\"Проектирование сети газоснабжения в д. Знаменское (городской округ Кашира) в рамках программы газификации Московской области. Источник газа — существующий газопровод ВД Ø159 мм (Р ≤ 1,2 МПа). От него проложены стальные газопроводы ВД Ø108×4 мм до двух проектируемых ПРГ (ШРП-ГК-105, Q = 1020 м³/ч). Распределительная сеть СД (Р = 0,1 МПа) выполнена из полиэтиленовых труб ПЭ100 ГАЗ SDR11 Ø160 мм и Ø110 мм, вводы — Ø63 мм. Переходы через автомобильные дороги и водные преграды выполнены методом ГНБ с футлярами из ПЭ труб в защитной оболочке. Установлены подземные отключающие устройства DN150 с выводом под ковер и ограждениями по нормали АО «Мособлгаз» в удалённых участках. Учтены сложные инженерно-геологические условия: пучинистые суглинки и глины, нормативная глубина промерзания — 1,10 м. Предусмотрена балластировка на водонасыщенных участках, сигнальная лента, провод-спутник и опознавательные знаки.\",\"technologies\":[\"ТКР\",\"ПЭ100 ГАЗ SDR11\",\"Стальные трубы Ø108×4\",\"ГНБ\",\"ПРГ ШРП-ГК-105\",\"Подземная арматура\",\"Ограждения АО «Мособлгаз»\",\"Балластировка\",\"СП 62.13330.2011\"],\"links\":[]},{\"name\":\"Техническое перевооружение склада ГСМ Балаковской АЭС\",\"description\":\"Модернизация резервуарного парка и насосных станций для хранения дизтоплива, турбинных и трансформаторных масел\",\"fullDescription\":\"Проектирование технологических решений при техническом перевооружении опасного производственного объекта «Склад ГСМ Балаковской АЭС». Включает замену насосного оборудования на центробежные насосы с торцевыми уплотнениями, установку новых вертикальных резервуаров (РВС-63, РВС-160, РВС-200, РВС-300) для хранения и аварийного приёма нефтепродуктов, монтаж системы рекуперации паров дизельного топлива (ККР-30), оснащение резервуаров автоматической системой сброса подтоварной воды «PAUTPAC II», установку электроприводной запорной арматуры и систем контроля уровня/температуры. Реализованы схемы внутрипарковой перекачки, приёма и отпуска дизельного топлива, моторных и турбинных масел, включая регенерацию масел ТП-22с на блоках адсорберов и установке ввода присадок. Все решения выполнены в соответствии с ФНП «Правила промышленной безопасности складов нефти и нефтепродуктов», ГОСТ 31385-2016, ГОСТ 32569-2013 и другими нормативными документами. Обеспечена взрыво- и пожаробезопасность (зона В-Iг для дизтоплива), герметизация технологических схем, автоматизация управления из операторной и локальное резервирование.\",\"technologies\":[\"ТХ\",\"ГОСТ 31385-2016\",\"ГОСТ 32569-2013\",\"ФНП по складам нефтепродуктов\",\"AutoCAD\",\"РВС\",\"Установка рекуперации паров ККР-30\",\"Система PAUTPAC II\",\"Взрывобезопасность (В-Iг)\",\"Автоматизация и дистанционное управление\"],\"links\":[]},{\"name\":\"Обустройство Вятской площади Арланского нефтяного месторождения (1 этап)\",\"description\":\"Кустовые площадки. Установки предварительного сброса воды. Кустовые насосные станции. Промысловые трубопроводы\",\"fullDescription\":\"Проектирование технологических решений обустройства кустов Вятской площади Арланского нефтяного месторождения. Проектирование нефтегазопроводов и водоводов системы заводнения (DN114–DN325, Р=4–15 МПа). Предусмотрены по трассам нефтегазопроводов установки ТВО (трубный водоотделитель), обеспечивающие одноступенчатую сепарацию нефти от газа и воды при высокой обводненности продукции скважин. Установлены блочные кустовые насосные станции для дальнейшей закачки воды в пласт.     Разработаны решения по прокладке в сложных инженерно-геологических условиях, переходы под автодорогами в футлярах закрытым и открытым спобом.\",\"technologies\":[\"ТХ, ТКР, ППО\",\"ГОСТ Р 55990-2014\",\"Промысловые трубопроводы\",\"Система ППД\",\"Кусты скважин\",\"БКНС\",\"площадки ТВО\"],\"links\":[],\"drawings\":[{\"label\":\"Технологическая схема ТВО\",\"url\":\"/drawings/tx_shema_tvo.pdf\"},{\"label\":\"План площадки ТВО\",\"url\":\"/drawings/plan_tvo.pdf\"},{\"label\":\"План кустовой площадки\",\"url\":\"/drawings/plan_kusta.pdf\"}]},{\"name\":\"Обустройство Вятской площади Арланского нефтяного месторождения (2 этап)\",\"description\":\"Кустовые площадки на спецоснованиях. Установки предварительного сброса воды. Кустовые насосные станции. Промысловые трубопроводы\",\"fullDescription\":\"Проектирование технологических решений обустройства кустов на спецоснованиях Вятской площади Арланского нефтяного месторождения. Проектирование нефтегазопроводов и водоводов системы заводнения (DN114–DN325, Р=4–15 МПа). Предусмотрены по трассам нефтегазопроводов установки ТВО (трубный водоотделитель), обеспечивающие одноступенчатую сепарацию нефти от газа и воды при высокой обводненности продукции скважин. Установлены блочные кустовые насосные станции для дальнейшей закачки воды в пласт.     Разработаны решения по прокладке в сложных инженерно-геологических условиях, переходы под автодорогами в футлярах закрытым и открытым спобом.\",\"technologies\":[\"ТХ, ТКР, ППО\",\"ГОСТ Р 55990-2014\",\"Промысловые трубопроводы\",\"Система ППД\",\"Кусты скважин, спецоснования\",\"БКНС\",\"площадки ТВО\"],\"links\":[]},{\"name\":\"Обустройство Окунёвского участка недр\",\"description\":\"Кустовые площадки. Промысловые трубопроводы. УПСВ \\\"Окунёвское\\\"\",\"fullDescription\":\"Запроектирован сбор нефти с кустовых площадок и транспортировка на УПСВ, запроектировано УПСВ, состоящая из отстойников нефти, отстойников воды и газа, насосной нефти, факельной установки и БКНС.\",\"technologies\":[\"ТХ, ТКР, ППО\",\"Промысловые трубопроводы\",\"Кусты скважин\",\"БКНС\",\"УПСВ\",\"Сепарация воды и попутного газа\",\"Факельная установка\"],\"links\":[],\"drawings\":[{\"label\":\"Технологическая схема УПСВ\",\"url\":\"/drawings/okuni_shema.pdf\"}]},{\"name\":\"Пункт подготовки и сбора нефти (ЦПС) Западно-Могутлорского месторождения\",\"description\":\"Комплексная реконструкция объектов подготовки нефти с увеличением пропускной способности\",\"fullDescription\":\"Реализуется комплексная реконструкция объектов подготовки нефти, направленная на повышение надёжности, энергоэффективности и пропускной способности. Ключевые направления: строительство 2 путевых нагревателей нефти (по 1,9 МВт каждый) с промежуточным теплоносителем; замена и модернизация горелок на подогревателях ПП-1,6; оптимизация схем обвязки подогревателей ПП-1,6 №1, №2 и трубопроводов сепараторов КСУ №1, №2 (V=50 м³); гидравлический расчёт всей системы с подбором оптимальных параметров насосного оборудования; реконструкция эстакад и обвязки резервуаров. Цели: рост пропускной способности без увеличения штата, снижение эксплуатационных затрат на 15–20%, повышение промышленной и экологической безопасности. Проект реализуется с применением BIM-технологий.\",\"technologies\":[\"Путевые нагреватели нефти\",\"ПП-1,6\",\"КСУ\",\"Сепараторы V=50 м³\",\"Гидравлический расчёт\",\"BIM-технологии\",\"Реконструкция эстакад\"],\"links\":[]}]");
var projectGroups_default = [
	{
		"title": "Газификация населённых пунктов",
		"regions": [
			"Московская область",
			"Кировская область",
			"Астраханская область"
		],
		"summary": "Проектирование распределительных и межпоселковых газопроводов из полиэтиленовых и стальных труб с учётом сложных инженерно-геологических условий: пучинистые и просадочные грунты, подтопление.",
		"features": [
			"Прокладка стальных и полиэтиленовых газопроводов низкого, среднего и высокого давления",
			"Переходы через дороги и водные преграды закрытым способом (ГНБ, прокол) в том числе в футлярах",
			"Установка и обвзяка ПРГ (пункт распределительный газовый), установка узлов запорной арматуры.",
			"Обозначение трассы: сигнальная лента, провод-спутник, электронные маркеры"
		],
		"examples": [
			"Межпоселковый газопровод от д. Кучелапы до пгт Верхошижемье (Кировская обл.)",
			"Газификация с. Горки (Московская обл.)",
			"Газификация д. Панино (Московская обл.)",
			"Газификация д. Лидино (Московская обл.)",
			"Газопровод топливного газа до котельной п. Аксарайский (Астраханская обл.)"
		]
	},
	{
		"title": "Обустройство месторождений",
		"regions": ["Удмуртия", "ЯНАО"],
		"summary": "Проектирование промысловых трубопроводов для систем сбора нефти, закачки воды (ППД). Проектирование кустовых площадок, кустовых насосных станций (КНС). Проектирование технологических площадрк нефтяных месторождений.",
		"features": [
			"Промысловые трубопроводы, давление до 15 МПа",
			"Кусты скважин",
			"Кустовые насосные станции",
			"Установки предварительного сброса воды (УПСВ) и трубные водотделители (ТВО)"
		],
		"examples": [
			"Обустройство Вятской площади Арланского нефтяного месторождения (1 этап)",
			"Обустройство Вятской площади Арланского нефтяного месторождения (2 этап)",
			"Обустройство Окунёвского участка недр"
		]
	},
	{
		"title": "Нефтегазовые объекты. Резервуарные парки и склады ГСМ",
		"regions": ["Новосибирск", "Саратовская область"],
		"summary": "Разработка технологических решений для хранения, подготовки и перекачки нефти и нефтепродуктов с обеспечением взрыво- и пожаробезопасности.",
		"features": [
			"Взрывозоны: В-Iг, классы 1 и 2",
			"Объёмы резервуаров: от 63 м³ до 3000 м³ (до 9000 м³ суммарно)",
			"Системы: рекуперации паров, автоматического сброса подтоварной воды, дистанционного управления",
			"Соответствие: ФНП, ГОСТ 31385, ГОСТ 32569, ПУЭ"
		],
		"examples": [
			"Терминал отгрузки ЖУГ и СУГ (ЯНАО)",
			"Топливозаправочный комплекс (Новосибирск)",
			"Пункт подготовки и сбора нефти (ЦПС) Западно-Могутлорского месторождения",
			"Техническое перевооружение склада ГСМ Балаковской АЭС"
		]
	},
	{
		"title": "Магистральные трубопроводы",
		"regions": ["Дагестан", "ЯНАО"],
		"summary": "Проектирование магистральных нефтепроводов и газопроводов, газораспределительных станций (ГРС)",
		"features": [
			"Магистральные газопроводы",
			"Магистральные нефтепроводы",
			"Узлы очистки и диагностики (СОД)",
			"Газораспределительные станции (ГРС)"
		],
		"examples": []
	}
];
var SectionPortfolio_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "SectionPortfolio",
	__ssrInlineRender: true,
	emits: ["projectSelect"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const portEl = (0, vue_exports.ref)(null);
		useFadeUp(portEl);
		const projectGroups = projectGroups_default;
		const openGroups = (0, vue_exports.ref)({});
		const showAll = (0, vue_exports.ref)({});
		function toggleShowAll(index) {
			showAll.value[index] = !showAll.value[index];
		}
		function visibleExamples(group, index) {
			return showAll.value[index] ? group.examples : group.examples.slice(0, 4);
		}
		function getRegions(group) {
			return group.regions;
		}
		function findProjectByName(name) {
			return projects_default.find((p$7) => p$7.name === name);
		}
		function toggleGroup(index) {
			openGroups.value[index] = !openGroups.value[index];
		}
		function handleProjectClick(projectName) {
			emit("projectSelect", findProjectByName(projectName));
		}
		function getExampleWord(n$7) {
			const mod10 = n$7 % 10;
			const mod100 = n$7 % 100;
			if (mod100 >= 11 && mod100 <= 19) return "примеров";
			if (mod10 === 1) return "пример";
			if (mod10 >= 2 && mod10 <= 4) return "примера";
			return "примеров";
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				ref_key: "portEl",
				ref: portEl,
				class: "mb-16 fade-up"
			}, _attrs))}><div class="flex items-center gap-3 mb-8"><div class="w-1 h-8 bg-primary rounded-full"></div><h2 class="text-2xl font-bold">Портфолио проектов</h2></div><div class="space-y-4 stagger-animation"><!--[-->`);
			(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(projectGroups), (group, idx) => {
				_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UICard_default), {
					key: idx,
					class: "card-hover overflow-hidden"
				}, {
					default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
						if (_push$1) {
							_push$1(`<button class="flex w-full items-center justify-between p-6 text-left hover:bg-accent/30 transition-colors"${_scopeId}><div class="flex items-center gap-4"${_scopeId}><div class="w-14 h-14 flex items-center justify-center"${_scopeId}>`);
							if (group.examples.length > 0) _push$1(`<div class="text-center"${_scopeId}><div class="bg-gradient-to-br from-primary to-primary/80 rounded-lg flex flex-col items-center justify-center text-white relative" style="${(0, server_renderer_exports.ssrRenderStyle)({
								"width": "56px",
								"height": "56px"
							})}"${_scopeId}><span class="font-bold text-lg leading-none"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(group.examples.length)}</span><span class="text-xs leading-none mt-1"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(getExampleWord(group.examples.length))}</span></div></div>`);
							else _push$1(`<!---->`);
							_push$1(`</div><div class="flex-1"${_scopeId}><h3 class="font-semibold text-lg"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(group.title)}</h3><p class="text-sm text-muted-foreground mt-1"${_scopeId}> Регионы: ${(0, server_renderer_exports.ssrInterpolate)(getRegions(group).join(", "))}</p>`);
							if (group.examples.length > 0) _push$1(`<p class="text-xs text-primary mt-1 font-medium"${_scopeId}> Показаны ключевые проекты из портфолио </p>`);
							else _push$1(`<!---->`);
							_push$1(`</div></div><svg class="${(0, server_renderer_exports.ssrRenderClass)([{ "rotate-180": openGroups.value[idx] }, "h-5 w-5 transition-transform duration-200 text-muted-foreground"])}" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"${_scopeId}></path></svg></button><div class="px-6 pb-6 border-t pt-6" style="${(0, server_renderer_exports.ssrRenderStyle)(openGroups.value[idx] ? null : { display: "none" })}"${_scopeId}><p class="text-muted-foreground mb-4 leading-relaxed"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(group.summary)}</p><div class="grid md:grid-cols-2 gap-4 mb-6"${_scopeId}><!--[-->`);
							(0, server_renderer_exports.ssrRenderList)(group.features, (feat, fIdx) => {
								_push$1(`<div class="flex items-start gap-3 p-3 bg-accent/30 rounded-lg"${_scopeId}><span class="text-primary mt-0.5"${_scopeId}>✓</span><span class="text-sm"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(feat)}</span></div>`);
							});
							_push$1(`<!--]--></div>`);
							if (group.examples.length > 0) {
								_push$1(`<div class="grid gap-3"${_scopeId}><!--[-->`);
								(0, server_renderer_exports.ssrRenderList)(visibleExamples(group, idx), (example, eIdx) => {
									_push$1(`<div class="flex items-center justify-between p-3 border rounded-lg hover:border-primary transition-colors"${_scopeId}><span class="font-medium"${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(example)}</span>`);
									_push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UIButton_default), {
										variant: "outline",
										size: "sm",
										onClick: ($event) => handleProjectClick(example),
										class: "btn-modern !py-1 !px-3 text-xs"
									}, {
										default: (0, vue_exports.withCtx)((_$2, _push$2, _parent$2, _scopeId$1) => {
											if (_push$2) _push$2(` Подробнее `);
											else return [(0, vue_exports.createTextVNode)(" Подробнее ")];
										}),
										_: 2
									}, _parent$1, _scopeId));
									_push$1(`</div>`);
								});
								_push$1(`<!--]--></div>`);
							} else _push$1(`<!---->`);
							if (group.examples.length > 4) {
								_push$1(`<div class="mt-4 text-center"${_scopeId}>`);
								_push$1((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UIButton_default), {
									variant: "ghost",
									size: "sm",
									onClick: ($event) => toggleShowAll(idx),
									class: "text-primary hover:text-primary/80"
								}, {
									default: (0, vue_exports.withCtx)((_$2, _push$2, _parent$2, _scopeId$1) => {
										if (_push$2) _push$2(`${(0, server_renderer_exports.ssrInterpolate)(showAll.value[idx] ? "Скрыть" : `Показать все ${group.examples.length} проектов`)}`);
										else return [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(showAll.value[idx] ? "Скрыть" : `Показать все ${group.examples.length} проектов`), 1)];
									}),
									_: 2
								}, _parent$1, _scopeId));
								_push$1(`</div>`);
							} else _push$1(`<!---->`);
							_push$1(`</div>`);
						} else return [(0, vue_exports.createVNode)("button", {
							class: "flex w-full items-center justify-between p-6 text-left hover:bg-accent/30 transition-colors",
							onClick: ($event) => toggleGroup(idx)
						}, [(0, vue_exports.createVNode)("div", { class: "flex items-center gap-4" }, [(0, vue_exports.createVNode)("div", { class: "w-14 h-14 flex items-center justify-center" }, [group.examples.length > 0 ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: 0,
							class: "text-center"
						}, [(0, vue_exports.createVNode)("div", {
							class: "bg-gradient-to-br from-primary to-primary/80 rounded-lg flex flex-col items-center justify-center text-white relative",
							style: {
								"width": "56px",
								"height": "56px"
							}
						}, [(0, vue_exports.createVNode)("span", { class: "font-bold text-lg leading-none" }, (0, vue_exports.toDisplayString)(group.examples.length), 1), (0, vue_exports.createVNode)("span", { class: "text-xs leading-none mt-1" }, (0, vue_exports.toDisplayString)(getExampleWord(group.examples.length)), 1)])])) : (0, vue_exports.createCommentVNode)("", true)]), (0, vue_exports.createVNode)("div", { class: "flex-1" }, [
							(0, vue_exports.createVNode)("h3", { class: "font-semibold text-lg" }, (0, vue_exports.toDisplayString)(group.title), 1),
							(0, vue_exports.createVNode)("p", { class: "text-sm text-muted-foreground mt-1" }, " Регионы: " + (0, vue_exports.toDisplayString)(getRegions(group).join(", ")), 1),
							group.examples.length > 0 ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("p", {
								key: 0,
								class: "text-xs text-primary mt-1 font-medium"
							}, " Показаны ключевые проекты из портфолио ")) : (0, vue_exports.createCommentVNode)("", true)
						])]), ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("svg", {
							class: ["h-5 w-5 transition-transform duration-200 text-muted-foreground", { "rotate-180": openGroups.value[idx] }],
							fill: "none",
							viewBox: "0 0 24 24",
							stroke: "currentColor"
						}, [(0, vue_exports.createVNode)("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							"stroke-width": "2",
							d: "m19 9-7 7-7-7"
						})], 2))], 8, ["onClick"]), (0, vue_exports.withDirectives)((0, vue_exports.createVNode)("div", { class: "px-6 pb-6 border-t pt-6" }, [
							(0, vue_exports.createVNode)("p", { class: "text-muted-foreground mb-4 leading-relaxed" }, (0, vue_exports.toDisplayString)(group.summary), 1),
							(0, vue_exports.createVNode)("div", { class: "grid md:grid-cols-2 gap-4 mb-6" }, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(group.features, (feat, fIdx) => {
								return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: fIdx,
									class: "flex items-start gap-3 p-3 bg-accent/30 rounded-lg"
								}, [(0, vue_exports.createVNode)("span", { class: "text-primary mt-0.5" }, "✓"), (0, vue_exports.createVNode)("span", { class: "text-sm" }, (0, vue_exports.toDisplayString)(feat), 1)]);
							}), 128))]),
							group.examples.length > 0 ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 0,
								class: "grid gap-3"
							}, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)(visibleExamples(group, idx), (example, eIdx) => {
								return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
									key: eIdx,
									class: "flex items-center justify-between p-3 border rounded-lg hover:border-primary transition-colors"
								}, [(0, vue_exports.createVNode)("span", { class: "font-medium" }, (0, vue_exports.toDisplayString)(example), 1), (0, vue_exports.createVNode)((0, vue_exports.unref)(UIButton_default), {
									variant: "outline",
									size: "sm",
									onClick: ($event) => handleProjectClick(example),
									class: "btn-modern !py-1 !px-3 text-xs"
								}, {
									default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)(" Подробнее ")]),
									_: 1
								}, 8, ["onClick"])]);
							}), 128))])) : (0, vue_exports.createCommentVNode)("", true),
							group.examples.length > 4 ? ((0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
								key: 1,
								class: "mt-4 text-center"
							}, [(0, vue_exports.createVNode)((0, vue_exports.unref)(UIButton_default), {
								variant: "ghost",
								size: "sm",
								onClick: ($event) => toggleShowAll(idx),
								class: "text-primary hover:text-primary/80"
							}, {
								default: (0, vue_exports.withCtx)(() => [(0, vue_exports.createTextVNode)((0, vue_exports.toDisplayString)(showAll.value[idx] ? "Скрыть" : `Показать все ${group.examples.length} проектов`), 1)]),
								_: 2
							}, 1032, ["onClick"])])) : (0, vue_exports.createCommentVNode)("", true)
						], 512), [[vue_exports.vShow, openGroups.value[idx]]])];
					}),
					_: 2
				}, _parent));
			});
			_push(`<!--]--></div></section>`);
		};
	}
});
var _sfc_setup$4 = SectionPortfolio_vue_vue_type_script_setup_true_lang_default.setup;
SectionPortfolio_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/SectionPortfolio.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var SectionPortfolio_default = SectionPortfolio_vue_vue_type_script_setup_true_lang_default;
var skills_default = [
	{
		"name": "Газоснабжение",
		"level": 5
	},
	{
		"name": "Нефтепроводы",
		"level": 5
	},
	{
		"name": "AutoCAD Plant 3D",
		"level": 5
	},
	{
		"name": "AutoCAD API",
		"level": 4
	},
	{
		"name": "Python",
		"level": 5
	},
	{
		"name": "AI/LLM (промптинг)",
		"level": 4
	},
	{
		"name": "AI-агенты",
		"level": 4
	},
	{
		"name": "RAG-системы",
		"level": 3
	},
	{
		"name": "Разработка ПД/РД",
		"level": 5
	},
	{
		"name": "Госэкспертиза",
		"level": 5
	},
	{
		"name": "Руководство командой",
		"level": 4
	},
	{
		"name": "3D-моделирование",
		"level": 5
	},
	{
		"name": "MS Office",
		"level": 5
	}
];
var SectionSkills_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "SectionSkills",
	__ssrInlineRender: true,
	setup(__props) {
		const root = (0, vue_exports.ref)(null);
		useFadeUp(root);
		const all = skills_default;
		const design = all.filter((s$10) => [
			"Газоснабжение",
			"Нефтепроводы",
			"AutoCAD Plant 3D",
			"Разработка ПД/РД",
			"Госэкспертиза",
			"3D-моделирование"
		].includes(s$10.name));
		const tech = all.filter((s$10) => [
			"Python",
			"AutoCAD API",
			"MS Office",
			"Руководство командой",
			"AI/LLM (промптинг)",
			"AI-агенты",
			"RAG-системы"
		].includes(s$10.name));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({
				ref_key: "root",
				ref: root,
				class: "fade-up mb-16"
			}, _attrs))} data-v-a2d1c3a5><div class="flex items-center gap-3 mb-8" data-v-a2d1c3a5><div class="w-1 h-8 bg-accent rounded-full" data-v-a2d1c3a5></div><h2 data-v-a2d1c3a5>Ключевые навыки</h2></div><div class="grid md:grid-cols-2 gap-6" data-v-a2d1c3a5>`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UICard_default), { class: "p-6 glass" }, {
				default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1(`<h3 class="text-lg font-semibold mb-4 border-b border-border pb-2" data-v-a2d1c3a5${_scopeId}> Проектирование </h3><div class="space-y-4" data-v-a2d1c3a5${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(design), (s$10) => {
							_push$1(`<div class="skill-item" data-v-a2d1c3a5${_scopeId}><div class="flex justify-between text-sm" data-v-a2d1c3a5${_scopeId}><span data-v-a2d1c3a5${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(s$10.name)}</span></div><div class="skill-bar mt-1" data-v-a2d1c3a5${_scopeId}><div style="${(0, server_renderer_exports.ssrRenderStyle)({ "width": "100%" })}" data-v-a2d1c3a5${_scopeId}></div></div></div>`);
						});
						_push$1(`<!--]--></div>`);
					} else return [(0, vue_exports.createVNode)("h3", { class: "text-lg font-semibold mb-4 border-b border-border pb-2" }, " Проектирование "), (0, vue_exports.createVNode)("div", { class: "space-y-4" }, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(design), (s$10) => {
						return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: s$10.name,
							class: "skill-item"
						}, [(0, vue_exports.createVNode)("div", { class: "flex justify-between text-sm" }, [(0, vue_exports.createVNode)("span", null, (0, vue_exports.toDisplayString)(s$10.name), 1)]), (0, vue_exports.createVNode)("div", { class: "skill-bar mt-1" }, [(0, vue_exports.createVNode)("div", { style: { "width": "100%" } })])]);
					}), 128))])];
				}),
				_: 1
			}, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UICard_default), { class: "p-6 glass" }, {
				default: (0, vue_exports.withCtx)((_$1, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1(`<h3 class="text-lg font-semibold mb-4 border-b border-border pb-2" data-v-a2d1c3a5${_scopeId}> Навыки </h3><div class="space-y-4" data-v-a2d1c3a5${_scopeId}><!--[-->`);
						(0, server_renderer_exports.ssrRenderList)((0, vue_exports.unref)(tech), (s$10) => {
							_push$1(`<div class="skill-item" data-v-a2d1c3a5${_scopeId}><div class="flex justify-between text-sm" data-v-a2d1c3a5${_scopeId}><span data-v-a2d1c3a5${_scopeId}>${(0, server_renderer_exports.ssrInterpolate)(s$10.name)}</span></div><div class="skill-bar mt-1" data-v-a2d1c3a5${_scopeId}><div style="${(0, server_renderer_exports.ssrRenderStyle)({ "width": "100%" })}" data-v-a2d1c3a5${_scopeId}></div></div></div>`);
						});
						_push$1(`<!--]--></div>`);
					} else return [(0, vue_exports.createVNode)("h3", { class: "text-lg font-semibold mb-4 border-b border-border pb-2" }, " Навыки "), (0, vue_exports.createVNode)("div", { class: "space-y-4" }, [((0, vue_exports.openBlock)(true), (0, vue_exports.createBlock)(vue_exports.Fragment, null, (0, vue_exports.renderList)((0, vue_exports.unref)(tech), (s$10) => {
						return (0, vue_exports.openBlock)(), (0, vue_exports.createBlock)("div", {
							key: s$10.name,
							class: "skill-item"
						}, [(0, vue_exports.createVNode)("div", { class: "flex justify-between text-sm" }, [(0, vue_exports.createVNode)("span", null, (0, vue_exports.toDisplayString)(s$10.name), 1)]), (0, vue_exports.createVNode)("div", { class: "skill-bar mt-1" }, [(0, vue_exports.createVNode)("div", { style: { "width": "100%" } })])]);
					}), 128))])];
				}),
				_: 1
			}, _parent));
			_push(`</div></section>`);
		};
	}
});
var _sfc_setup$3 = SectionSkills_vue_vue_type_script_setup_true_lang_default.setup;
SectionSkills_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/SectionSkills.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var SectionSkills_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SectionSkills_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-a2d1c3a5"]]);
var SectionFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "SectionFooter",
	__ssrInlineRender: true,
	setup(__props) {
		const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<footer${(0, server_renderer_exports.ssrRenderAttrs)((0, vue_exports.mergeProps)({ class: "border-t bg-surface/50 py-8 mt-12 text-center text-sm text-muted-fore" }, _attrs))}><p class="mb-2">Разиньков Никита Николаевич</p><p class="text-xs">Обновлено: ${(0, server_renderer_exports.ssrInterpolate)((0, vue_exports.unref)(currentYear))}</p></footer>`);
		};
	}
});
var _sfc_setup$2 = SectionFooter_vue_vue_type_script_setup_true_lang_default.setup;
SectionFooter_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/SectionFooter.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var SectionFooter_default = SectionFooter_vue_vue_type_script_setup_true_lang_default;
var HeadMeta_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "HeadMeta",
	props: {
		title: { default: "Разиньков Никита - Специалист по проектированию систем газоснабжения и нефтегазовых объектов" },
		description: { default: "Инженер-проектировщик с 20+ летним опытом в проектировании систем газоснабжения и нефтегазовых объектов" },
		keywords: { default: "инженер-проектировщик, нефтегазовые объекты, газоснабжение, AutoCAD Plant 3D, Python" },
		ogImage: { default: "/og-image.jpg" },
		canonical: { default: "https://ваш-сайт.com" }
	},
	setup(__props) {
		const props = __props;
		useHead({
			title: props.title,
			meta: [
				{
					name: "description",
					content: props.description
				},
				{
					name: "keywords",
					content: props.keywords
				},
				{
					property: "og:image",
					content: props.ogImage
				},
				{
					property: "og:title",
					content: props.title
				},
				{
					property: "og:description",
					content: props.description
				}
			],
			link: [{
				rel: "canonical",
				href: props.canonical
			}]
		});
		return () => {};
	}
});
var _sfc_setup$1 = HeadMeta_vue_vue_type_script_setup_true_lang_default.setup;
HeadMeta_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/seo/HeadMeta.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var HeadMeta_default = HeadMeta_vue_vue_type_script_setup_true_lang_default;
var App_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ (0, vue_exports.defineComponent)({
	__name: "App",
	__ssrInlineRender: true,
	setup(__props) {
		const selectedProject = (0, vue_exports.ref)(null);
		function openProjectModal(project) {
			if (project) selectedProject.value = project;
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push((0, server_renderer_exports.ssrRenderComponent)(HeadMeta_default, {
				title: "Разиньков Никита Николаевич - Специалист по проектированию систем газоснабжения и нефтегазовых объектов",
				description: "Более 20 лет опыта в проектировании систем газоснабжения, магистральных и распределительных трубопроводов, объектов добычи и хранения нефти и газа.",
				keywords: "инженер-проектировщик, нефтегазовые объекты, газоснабжение, AutoCAD Plant 3D, Python, проектирование"
			}, null, _parent));
			_push(`<div class="min-h-screen bg-background text-foreground">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UIHeader_default), null, null, _parent));
			_push(`<div class="pt-20">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UIHero_default), null, null, _parent));
			_push(`<div class="container mx-auto max-w-4xl py-12 px-4">`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(SectionExperience_default), { id: "experience" }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(SectionPortfolio_default), {
				id: "portfolio",
				onProjectSelect: openProjectModal
			}, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(SectionSkills_default), { id: "skills" }, null, _parent));
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(SectionContact_default), { id: "contact" }, null, _parent));
			_push(`</div>`);
			_push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(SectionFooter_default), null, null, _parent));
			_push(`</div>`);
			if (selectedProject.value) _push((0, server_renderer_exports.ssrRenderComponent)((0, vue_exports.unref)(UIProjectModal_default), {
				project: selectedProject.value,
				onClose: ($event) => selectedProject.value = null
			}, null, _parent));
			else _push(`<!---->`);
			_push(`</div><!--]-->`);
		};
	}
});
var _sfc_setup = App_vue_vue_type_script_setup_true_lang_default.setup;
App_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = (0, vue_exports.useSSRContext)();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var App_default = App_vue_vue_type_script_setup_true_lang_default;
var app = (0, vue_exports.createApp)(App_default);
app.config.errorHandler = (err, instance, info) => {
	console.error("Vue error:", err);
	console.error("Component instance:", instance);
	console.error("Error info:", info);
};
app.config.globalProperties.$filters = { formatDate(date) {
	return new Date(date).toLocaleDateString("ru-RU");
} };
app.mount("#app");
export {};
