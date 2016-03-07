System.register([], function (_export) {
  "use strict";

  var InstructionFilterValueConverter;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      InstructionFilterValueConverter = (function () {
        function InstructionFilterValueConverter() {
          _classCallCheck(this, InstructionFilterValueConverter);
        }

        InstructionFilterValueConverter.prototype.toView = function toView(navigationInstructions) {
          return navigationInstructions.filter(function (i) {
            var result = false;
            if (i.config.title) {
              result = true;
            }
            return result;
          });
        };

        return InstructionFilterValueConverter;
      })();

      _export("InstructionFilterValueConverter", InstructionFilterValueConverter);
    }
  };
});