'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _badge = require('./badge/badge');

Object.keys(_badge).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _badge[key];
    }
  });
});

var _box = require('./box/box');

Object.keys(_box).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _box[key];
    }
  });
});

var _breadcrumbs = require('./breadcrumbs/breadcrumbs');

Object.keys(_breadcrumbs).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _breadcrumbs[key];
    }
  });
});

var _instructionFilter = require('./breadcrumbs/instructionFilter');

Object.keys(_instructionFilter).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _instructionFilter[key];
    }
  });
});

var _button = require('./button/button');

Object.keys(_button).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _button[key];
    }
  });
});

var _card = require('./card/card');

Object.keys(_card).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _card[key];
    }
  });
});

var _carouselItem = require('./carousel/carousel-item');

Object.keys(_carouselItem).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _carouselItem[key];
    }
  });
});

var _carousel = require('./carousel/carousel');

Object.keys(_carousel).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _carousel[key];
    }
  });
});

var _charCounter = require('./char-counter/char-counter');

Object.keys(_charCounter).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _charCounter[key];
    }
  });
});

var _checkbox = require('./checkbox/checkbox');

Object.keys(_checkbox).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkbox[key];
    }
  });
});

var _chip = require('./chip/chip');

Object.keys(_chip).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _chip[key];
    }
  });
});

var _chips = require('./chip/chips');

Object.keys(_chips).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _chips[key];
    }
  });
});

var _collapsible = require('./collapsible/collapsible');

Object.keys(_collapsible).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _collapsible[key];
    }
  });
});

var _collectionHeader = require('./collection/collection-header');

Object.keys(_collectionHeader).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _collectionHeader[key];
    }
  });
});

var _collectionItem = require('./collection/collection-item');

Object.keys(_collectionItem).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _collectionItem[key];
    }
  });
});

var _collection = require('./collection/collection');

Object.keys(_collection).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _collection[key];
    }
  });
});

var _mdCollectionSelector = require('./collection/md-collection-selector');

Object.keys(_mdCollectionSelector).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mdCollectionSelector[key];
    }
  });
});

var _colorValueConverters = require('./colors/colorValueConverters');

Object.keys(_colorValueConverters).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _colorValueConverters[key];
    }
  });
});

var _attributeManager = require('./common/attributeManager');

Object.keys(_attributeManager).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _attributeManager[key];
    }
  });
});

var _attributes = require('./common/attributes');

Object.keys(_attributes).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _attributes[key];
    }
  });
});

var _constants = require('./common/constants');

Object.keys(_constants).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _constants[key];
    }
  });
});

var _events = require('./common/events');

Object.keys(_events).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _events[key];
    }
  });
});

var _datepicker = require('./datepicker/datepicker.default-parser');

Object.keys(_datepicker).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _datepicker[key];
    }
  });
});

var _datepicker2 = require('./datepicker/datepicker');

Object.keys(_datepicker2).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _datepicker2[key];
    }
  });
});

var _dropdownElement = require('./dropdown/dropdown-element');

Object.keys(_dropdownElement).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dropdownElement[key];
    }
  });
});

var _dropdown = require('./dropdown/dropdown');

Object.keys(_dropdown).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dropdown[key];
    }
  });
});

var _fab = require('./fab/fab');

Object.keys(_fab).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fab[key];
    }
  });
});

var _file = require('./file/file');

Object.keys(_file).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _file[key];
    }
  });
});

var _footer = require('./footer/footer');

Object.keys(_footer).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _footer[key];
    }
  });
});

var _inputPrefix = require('./input/input-prefix');

Object.keys(_inputPrefix).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inputPrefix[key];
    }
  });
});

var _inputUpdateService = require('./input/input-update-service');

Object.keys(_inputUpdateService).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inputUpdateService[key];
    }
  });
});

var _input = require('./input/input');

Object.keys(_input).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _input[key];
    }
  });
});

var _modalTrigger = require('./modal/modal-trigger');

Object.keys(_modalTrigger).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modalTrigger[key];
    }
  });
});

var _navbar = require('./navbar/navbar');

Object.keys(_navbar).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _navbar[key];
    }
  });
});

var _pagination = require('./pagination/pagination');

Object.keys(_pagination).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pagination[key];
    }
  });
});

var _parallax = require('./parallax/parallax');

Object.keys(_parallax).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _parallax[key];
    }
  });
});

var _progress = require('./progress/progress');

Object.keys(_progress).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _progress[key];
    }
  });
});

var _pushpin = require('./pushpin/pushpin');

Object.keys(_pushpin).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pushpin[key];
    }
  });
});

var _radio = require('./radio/radio');

Object.keys(_radio).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _radio[key];
    }
  });
});

var _range = require('./range/range');

Object.keys(_range).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _range[key];
    }
  });
});

var _scrollfirePatch = require('./scrollfire/scrollfire-patch');

Object.keys(_scrollfirePatch).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scrollfirePatch[key];
    }
  });
});

var _scrollfireTarget = require('./scrollfire/scrollfire-target');

Object.keys(_scrollfireTarget).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scrollfireTarget[key];
    }
  });
});

var _scrollfire = require('./scrollfire/scrollfire');

Object.keys(_scrollfire).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scrollfire[key];
    }
  });
});

var _scrollspy = require('./scrollspy/scrollspy');

Object.keys(_scrollspy).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scrollspy[key];
    }
  });
});

var _select = require('./select/select');

Object.keys(_select).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _select[key];
    }
  });
});

var _sidenavCollapse = require('./sidenav/sidenav-collapse');

Object.keys(_sidenavCollapse).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sidenavCollapse[key];
    }
  });
});

var _sidenav = require('./sidenav/sidenav');

Object.keys(_sidenav).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sidenav[key];
    }
  });
});

var _slider = require('./slider/slider');

Object.keys(_slider).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _slider[key];
    }
  });
});

var _switch = require('./switch/switch');

Object.keys(_switch).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _switch[key];
    }
  });
});

var _tabs = require('./tabs/tabs');

Object.keys(_tabs).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabs[key];
    }
  });
});

var _toastService = require('./toast/toastService');

Object.keys(_toastService).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _toastService[key];
    }
  });
});

var _tooltip = require('./tooltip/tooltip');

Object.keys(_tooltip).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tooltip[key];
    }
  });
});

var _fadeinImage = require('./transitions/fadein-image');

Object.keys(_fadeinImage).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _fadeinImage[key];
    }
  });
});

var _staggeredList = require('./transitions/staggered-list');

Object.keys(_staggeredList).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _staggeredList[key];
    }
  });
});

var _waves = require('./waves/waves');

Object.keys(_waves).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _waves[key];
    }
  });
});

var _configBuilder = require('./config-builder');

function configure(aurelia, configCallback) {
  var builder = new _configBuilder.ConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
  if (builder.useScrollfirePatch) {
    new _scrollfirePatch.ScrollfirePatch().patch();
  }
}