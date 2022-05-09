import * as Blockly from "blockly/core";
import "@blockly/field-grid-dropdown";

const blockName = "s4d_set_addon";

const blockData = {
    "message0": "%{BKY_SET_ADDON}",
    "args0": [{"type": "field_grid_dropdown",
        "name": "TYPE",
        "options": [
          ["Reputation", "Reputation"], 
					["Rank", "Rank"], 
					["Badges", "Badges"], 
					["Rank-Name", "Rank-Name"]
        ]
			},
      {
        "type":"input_value",
        "name":"BOOLEAN",
        "check":"Boolean"
      },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
		"inputsInline": true,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const boolean = Blockly.JavaScript.valueToCode(block, "BOOLEAN", Blockly.JavaScript.ORDER_ATOMIC);
		const type = block.getFieldValue("TYPE");
return `.setAddon("${type}",${boolean})`
};