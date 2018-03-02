function openPronic()
{
	try 
	{
	   var url = "http://www.pronic.si/en/index.html";
	   var args = new blackberry.invoke.BrowserArguments(url);
	   blackberry.invoke.invoke(blackberry.invoke.APP_BROWSER, args);
	} 
   	catch (e) 
   	{
   	}
}


var lengthField = new Ext.form.TextField
(
	{
        xtype: 'textfield',
        name: 'lengthfield',
        label: 'Length value: ',
        value: '0',
        flex: 1
    }
);

var lengthSrc = new Ext.form.Select
(
	{
		name: 'lengthsrc',
		label: 'Source length unit: ',
    	flex: 1,
		options: 
			[
			 	{text: 'centimeters', value: '100'},
			 	{text: 'decimeters', value: '10'},
			 	{text: 'feet',  value: '3.28084'},
			 	{text: 'inches',  value: '39.370079'},
			 	{text: 'kilometers',  value: '0.001'},
			 	{text: 'meters',  value: '1'},
			 	{text: 'micrometers', value: '1000000'},
			 	{text: 'miles',  value: '0.000621'},
			 	{text: 'milimeters', value: '1000'},
			 	{text: 'nanometers', value: '1000000000'},
			 	{text: 'yards',  value: '1.093613'}
			]
	}
);

var lengthDest = new Ext.form.Select
(
	{
		name: 'lengthdest',
		label: 'Target length unit: ',
    	flex: 1,
 		options: 
			[
			 	{text: 'centimeters', value: '100'},
			 	{text: 'decimeters', value: '10'},
			 	{text: 'feet',  value: '3.28084'},
			 	{text: 'inches',  value: '39.370079'},
			 	{text: 'kilometers',  value: '0.001'},
			 	{text: 'meters',  value: '1'},
			 	{text: 'micrometers', value: '1000000'},
			 	{text: 'miles',  value: '0.000621'},
			 	{text: 'milimeters', value: '1000'},
			 	{text: 'nanometers', value: '1000000000'},
			 	{text: 'yards',  value: '1.093613'}
			]
	}
);

var convertLength = function() 
{
	lengthResult.setValue(parseFloat(lengthField.getValue()) * 
			parseFloat(lengthDest.getValue()) / parseFloat(lengthSrc.getValue()));
};

var lengthButton = new Ext.Button
(
 	{
 	    ui  : 'round',
 	    text: 'Convert It',
 	    name: 'lengthbutton',
 	    padding: 10,
 	    handler: convertLength
 	}
);

var lengthResult = new Ext.form.TextField
(
	{
        xtype: 'textfield',
        name: 'lengthresult',
        label: 'Length result: ',
        value: '0',
        flex: 1
    }
);

var lengthPanel = new Ext.form.FormPanel
(
	{
		title: 'Length',
		dockedItems:
			[
			 	lengthField,
			 	lengthSrc,
			 	lengthDest,
			 	lengthResult,
			 	lengthButton,
			 	{
			 		html: '<img src="img/converter.png"/>'
			 	}
			],
		layout: 
			{
				type: 'vbox',
				align: 'stretch',
				pack: 'end' 
			}
	}
);

var areaField = new Ext.form.TextField
(
	{
        xtype: 'textfield',
        name: 'areafield',
        label: 'Area value: ',
        value: '0',
        flex: 1
    }
);

var areaSrc = new Ext.form.Select
(
	{
		name: 'areasrc',
		label: 'Source area unit: ',
    	flex: 1,
		options: 
			[
			 	{text: 'acres',  value: '0.000247'},
			 	{text: 'ares',  value: '0.01'},
			 	{text: 'hectares',  value: '0.0001'},
			 	{text: 'square centimeters',  value: '10000'},
			 	{text: 'square feet',  value: '10.76391'},
			 	{text: 'square inches',  value: '1550.0031'},
			 	{text: 'square kilometers',  value: '0.000001'},
			 	{text: 'square meters',  value: '1'},
			 	{text: 'square miles',  value: '0.000000385641'},
			 	{text: 'square milimeters',  value: '1000000'},
			 	{text: 'square yards',  value: '1.19599'}
			]
	}
);

var areaDest = new Ext.form.Select
(
	{
		name: 'areadest',
		label: 'Target area unit: ',
    	flex: 1,
 		options: 
			[
			 	{text: 'acres',  value: '0.000247'},
			 	{text: 'ares',  value: '0.01'},
			 	{text: 'hectares',  value: '0.0001'},
			 	{text: 'square centimeters',  value: '10000'},
			 	{text: 'square feet',  value: '10.76391'},
			 	{text: 'square inches',  value: '1550.0031'},
			 	{text: 'square kilometers',  value: '0.000001'},
			 	{text: 'square meters',  value: '1'},
			 	{text: 'square miles',  value: '0.000000385641'},
			 	{text: 'square milimeters',  value: '1000000'},
			 	{text: 'square yards',  value: '1.19599'}
			]
	}
);

var convertArea = function() 
{
	areaResult.setValue(parseFloat(areaField.getValue()) * 
			parseFloat(areaDest.getValue()) / parseFloat(areaSrc.getValue()));
};

var areaButton = new Ext.Button
(
 	{
 	    ui  : 'round',
 	    text: 'Convert It',
 	    name: 'areabutton',
 	    padding: 10,
 	    handler: convertArea
 	}
);

var areaResult = new Ext.form.TextField
(
	{
        xtype: 'textfield',
        name: 'arearesult',
        label: 'Area result: ',
        value: '0',
        flex: 1
    }
);

var areaPanel = new Ext.form.FormPanel
(
	{
		title: 'Area',
		dockedItems:
			[
			 	areaField,
			 	areaSrc,
			 	areaDest,
			 	areaResult,
			 	areaButton,
			 	{
			 		html: '<img src="img/converter.png"/>'
			 	}
			],
		layout: 
			{
				type: 'vbox',
				align: 'stretch',
				pack: 'end' 
			}
	}
);

var volumeField = new Ext.form.TextField
(
	{
     xtype: 'textfield',
     name: 'volumefield',
     label: 'Volume value: ',
     value: '0',
     flex: 1
 }
);

var volumeSrc = new Ext.form.Select
(
	{
		name: 'volumesrc',
		label: 'Source volume unit: ',
 	flex: 1,
		options: 
			[
			 	{text: 'barrels',  value: '6.28981077'},
			 	{text: 'cubic centimeters',  value: '1000000'},
			 	{text: 'cubic feet',  value: '35.314667'},
			 	{text: 'cubic inches',  value: '61023.744095'},
			 	{text: 'cubic meters',  value: '1'},
			 	{text: 'cubic milimeters', value: '1000000000'},
			 	{text: 'cubic yards',  value: '1.307951'},
			 	{text: 'ounces UK',  value: '35195.079728'},
			 	{text: 'ounces US',  value: '33814.022702'},
			 	{text: 'gallons UK',  value: '219.969248'},
			 	{text: 'gallons, liquid US',  value: '264.172052'},
			 	{text: 'liters',  value: '1000'},
			 	{text: 'pints UK',  value: '1759.753986'},
			 	{text: 'pints US',  value: '2113.376419'}
			]
	}
);

var volumeDest = new Ext.form.Select
(
	{
		name: 'volumedest',
		label: 'Target volume unit: ',
 	flex: 1,
		options: 
			[
			 	{text: 'barrels',  value: '6.28981077'},
			 	{text: 'cubic centimeters',  value: '1000000'},
			 	{text: 'cubic feet',  value: '35.314667'},
			 	{text: 'cubic inches',  value: '61023.744095'},
			 	{text: 'cubic meters',  value: '1'},
			 	{text: 'cubic milimeters', value: '1000000000'},
			 	{text: 'cubic yards',  value: '1.307951'},
			 	{text: 'ounces UK',  value: '35195.079728'},
			 	{text: 'ounces US',  value: '33814.022702'},
			 	{text: 'gallons UK',  value: '219.969248'},
			 	{text: 'gallons, liquid US',  value: '264.172052'},
			 	{text: 'liters',  value: '1000'},
			 	{text: 'pints UK',  value: '1759.753986'},
			 	{text: 'pints US',  value: '2113.376419'}
			]
	}
);

var convertVolume = function() 
{
	volumeResult.setValue(parseFloat(volumeField.getValue()) * 
			parseFloat(volumeDest.getValue()) / parseFloat(volumeSrc.getValue()));
};

var volumeButton = new Ext.Button
(
	{
	    ui  : 'round',
	    text: 'Convert It',
	    name: 'volumebutton',
	    padding: 10,
	    handler: convertVolume
	}
);

var volumeResult = new Ext.form.TextField
(
	{
     xtype: 'textfield',
     name: 'volumeresult',
     label: 'Volume result: ',
     value: '0',
     flex: 1
 }
);

var volumePanel = new Ext.form.FormPanel
(
	{
		title: 'Volume',
		dockedItems:
			[
			 	volumeField,
			 	volumeSrc,
			 	volumeDest,
			 	volumeResult,
			 	volumeButton,
			 	{
			 		html: '<img src="img/converter.png"/>'
			 	}
			],
		layout: 
			{
				type: 'vbox',
				align: 'stretch',
				pack: 'end' 
			}
	}
);

var massField = new Ext.form.TextField
(
	{
   xtype: 'textfield',
   name: 'massfield',
   label: 'Mass value: ',
   value: '0',
   flex: 1
}
);

var massSrc = new Ext.form.Select
(
	{
		name: 'masssrc',
		label: 'Source mass unit: ',
		flex: 1,
		options: 
			[
			 	{text: 'carats',  value: '5000'},
			 	{text: 'grams', value: '1000'},
			 	{text: 'kilograms',  value: '1'},
			 	{text: 'ounces',  value: '35.273962'},
			 	{text: 'pounds (lbs)',  value: '2.204623'},
			 	{text: 'stones',  value: '0.157473'},
			 	{text: 'tonnes',  value: '0.001'}
			]
	}
);

var massDest = new Ext.form.Select
(
	{
		name: 'massdest',
		label: 'Target mass unit: ',
		flex: 1,
		options: 
			[
			 	{text: 'carats',  value: '5000'},
			 	{text: 'grams', value: '1000'},
			 	{text: 'kilograms',  value: '1'},
			 	{text: 'ounces',  value: '35.273962'},
			 	{text: 'pounds (lbs)',  value: '2.204623'},
			 	{text: 'stones',  value: '0.157473'},
			 	{text: 'tonnes',  value: '0.001'}
			]
	}
);

var convertMass = function() 
{
	massResult.setValue(parseFloat(massField.getValue()) * 
			parseFloat(massDest.getValue()) / parseFloat(massSrc.getValue()));
};

var massButton = new Ext.Button
(
	{
	    ui  : 'round',
	    text: 'Convert It',
	    name: 'massbutton',
	    padding: 10,
	    handler: convertMass
	}
);

var massResult = new Ext.form.TextField
(
	{
		xtype: 'textfield',
		name: 'massresult',
		label: 'Mass result: ',
		value: '0',
		flex: 1
	}
);

var massPanel = new Ext.form.FormPanel
(
	{
		title: 'Mass',
		dockedItems:
			[
			 	massField,
			 	massSrc,
			 	massDest,
			 	massResult,
			 	massButton,
			 	{
			 		html: '<img src="img/converter.png"/>'
			 	}
			],
		layout: 
			{
				type: 'vbox',
				align: 'stretch',
				pack: 'end' 
			}
	}
);

var speedField = new Ext.form.TextField
(
	{
		xtype: 'textfield',
		name: 'speedfield',
		label: 'Speed value: ',
		value: '0',
		flex: 1
	}
);

var speedSrc = new Ext.form.Select
(
	{
		name: 'speedsrc',
		label: 'Source speed unit: ',
		flex: 1,
		options: 
			[
			 	{text: 'feet per minute',  value: '54.680665'},
			 	{text: 'feet per second', value: '0.911344'},
			 	{text: 'kilometers per hour',  value: '1'},
			 	{text: 'knots',  value: '0.539957'},
			 	{text: 'meters per minute', value: '16.666667'},
			 	{text: 'meters per second',  value: '0.277778'},
			 	{text: 'miles per hour',  value: '0.621372'},
			 	{text: 'yards per minute',  value: '18.226907'},
			 	{text: 'yards per second',  value: '0.303782'}
			]
	}
);

var speedDest = new Ext.form.Select
(
	{
		name: 'speeddest',
		label: 'Target speed unit: ',
		flex: 1,
		options: 
			[
			 	{text: 'feet per minute',  value: '54.680665'},
			 	{text: 'feet per second', value: '0.911344'},
			 	{text: 'kilometers per hour',  value: '1'},
			 	{text: 'knots',  value: '0.539957'},
			 	{text: 'meters per minute', value: '16.666667'},
			 	{text: 'meters per second',  value: '0.277778'},
			 	{text: 'miles per hour',  value: '0.621372'},
			 	{text: 'yards per minute',  value: '18.226907'},
			 	{text: 'yards per second',  value: '0.303782'}
			]
	}
);

var convertSpeed = function() 
{
	speedResult.setValue(parseFloat(speedField.getValue()) * 
			parseFloat(speedDest.getValue()) / parseFloat(speedSrc.getValue()));
};

var speedButton = new Ext.Button
(
	{
	    ui  : 'round',
	    text: 'Convert It',
	    name: 'speedbutton',
	    padding: 10,
	    handler: convertSpeed
	}
);

var speedResult = new Ext.form.TextField
(
	{
		xtype: 'textfield',
		name: 'speedresult',
		label: 'Speed result: ',
		value: '0',
		flex: 1
	}
);

var speedPanel = new Ext.form.FormPanel
(
	{
		title: 'Speed',
		dockedItems:
			[
			 	speedField,
			 	speedSrc,
			 	speedDest,
			 	speedResult,
			 	speedButton,
			 	{
			 		html: '<img src="img/converter.png"/>'
			 	}
			],
		layout: 
			{
				type: 'vbox',
				align: 'stretch',
				pack: 'end' 
			}
	}
);

var tempField = new Ext.form.TextField
(
	{
		xtype: 'textfield',
		name: 'tempfield',
		label: 'Temperature value: ',
     	value: '0',
     	flex: 1
	}
);

var tempSrc = new Ext.form.Select
(
	{
		name: 'tempsrc',
		label: 'Source temperature unit: ',
		flex: 1,
		options: 
			[
			 	{text: 'celsius',  value: '1'},
			 	{text: 'fahrenheit', value: '2'},
			 	{text: 'kelvin',  value: '3'}
			]
	}
);

var tempDest = new Ext.form.Select
(
	{
		name: 'tempdest',
		label: 'Target temperature unit: ',
		flex: 1,
		options: 
			[
			 	{text: 'celsius',  value: '1'},
			 	{text: 'fahrenheit', value: '2'},
			 	{text: 'kelvin',  value: '3'}
			]
	}
);

var convertTemp = function() 
{
	var value = parseFloat(tempField.getValue());
	var fromType = parseInt(tempSrc.getValue());
	var toType = parseInt(tempDest.getValue());
	
	var result = 0;
	if (fromType == 1)
	{
		if (toType == 1)
		{
			result = value;
		}
		if (toType == 2)
		{
			result = 1.8 * value + 32; 
		}
		if (toType == 3)
		{
			result = value - 273.15;
		}
	}
	if (fromType == 2)
	{
		if (toType == 1)
		{
			result = (value - 32) * 0.555555;
		}
		if (toType == 2)
		{
			result = value; 
		}
		if (toType == 3)
		{
			result = (value + 459.67) * 0.555555;
		}
	}
	if (fromType == 3)
	{
		if (toType == 1)
		{
			result = value + 273.15;
		}
		if (toType == 2)
		{
			result = 1.8 * value - 459.67; 
		}
		if (toType == 3)
		{
			result = 1;
		}
	}
	
	tempResult.setValue(result);
};

var tempButton = new Ext.Button
(
	{
	    ui  : 'round',
	    text: 'Convert It',
	    name: 'tempbutton',
	    padding: 10,
	    handler: convertTemp
	}
);

var tempResult = new Ext.form.TextField
(
	{
		xtype: 'textfield',
		name: 'tempresult',
		label: 'Temperature result: ',
		value: '0',
		flex: 1
	}
);

var tempPanel = new Ext.form.FormPanel
(
	{
		title: 'Temperature',
		dockedItems:
			[
			 	tempField,
			 	tempSrc,
			 	tempDest,
			 	tempResult,
			 	tempButton,
			 	{
			 		html: '<img src="img/converter.png"/>'
			 	}
			],
		layout: 
			{
				type: 'vbox',
				align: 'stretch',
				pack: 'end' 
			}
	}
);

var timeField = new Ext.form.TextField
(
	{
        xtype: 'textfield',
        name: 'timefield',
        label: 'Time value: ',
        value: '0',
        flex: 1
    }
);

var timeSrc = new Ext.form.Select
(
	{
		name: 'timesrc',
		label: 'Source time unit: ',
    	flex: 1,
		options: 
			[
			 	{text: 'centuries',  value: '0.000027'},
			 	{text: 'days',  value: '1'},
			 	{text: 'decades', value: '0.000274'},
			 	{text: 'hours',  value: '24'},
			 	{text: 'microseconds',  value: '86400000000'},
			 	{text: 'minutes', value: '1440'},
			 	{text: 'seconds',  value: '86400'},
			 	{text: 'weeks', value: '0.142857'}
			]
	}
);

var timeDest = new Ext.form.Select
(
	{
		name: 'timedest',
		label: 'Target time unit: ',
    	flex: 1,
 		options: 
			[
			 	{text: 'centuries',  value: '0.000027'},
			 	{text: 'days',  value: '1'},
			 	{text: 'decades', value: '0.000274'},
			 	{text: 'hours',  value: '24'},
			 	{text: 'microseconds',  value: '86400000000'},
			 	{text: 'minutes', value: '1440'},
			 	{text: 'seconds',  value: '86400'},
			 	{text: 'weeks', value: '0.142857'}
			]
	}
);

var convertTime = function() 
{
		timeResult.setValue(parseFloat(timeField.getValue()) * 
			parseFloat(timeDest.getValue()) / parseFloat(timeSrc.getValue()));
};

var timeButton = new Ext.Button
(
 	{
 	    ui  : 'round',
 	    text: 'Convert It',
 	    name: 'timebutton',
 	    padding: 10,
 	    handler: convertTime
 	}
);

var timeResult = new Ext.form.TextField
(
	{
        xtype: 'textfield',
        name: 'timeresult',
        label: 'Time result: ',
        value: '0',
        flex: 1
    }
);

var timePanel = new Ext.form.FormPanel
(
	{
		title: 'Time',
		dockedItems:
			[
			 	timeField,
		        timeSrc,
		        timeDest,
		        timeResult,
		        timeButton,
			 	{
			 		html: '<img src="img/converter.png"/>'
			 	}
			],
		layout: 
			{
				type: 'vbox',
				align: 'stretch',
				pack: 'end' 
			}
	}
);

Ext.setup
(
	{
		onReady: function() 
		{		
			var tabpanel = new Ext.TabPanel
			(
				{
					tabBar: 
						{
							dock: 'top',
							layout: 
								{
									type: 'hbox',
									pack: 'left'
								}
						},
					fullscreen: true,
					ui: 'dark',
					cardSwitchAnimation: 
						{
							type: 'slide',
							cover: true
						},
					items: 
						[
							lengthPanel,
							areaPanel,
							volumePanel,
							massPanel,
							speedPanel,
							tempPanel,
							timePanel
						]
				}
			);		
		}
	}
);


