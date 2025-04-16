function parseUplink(device, payload)
{
    var parsed = payload.asJsonObject();
    env.log(parsed);    

    // Store Temperature
    var e1 = device.endpoints.byAddress("1");
    if(parsed.temp != null && e1 != null)
        e1.updateTemperatureSensorStatus(parsed.temp);

    // Store Generic 2
    var e2 = device.endpoints.byAddress("2");
    if(parsed.hum != null && e2 != null)
        e2.updateHumiditySensorStatus(parsed.hum);

    // Store Generic 3
    var e3 = device.endpoints.byAddress("3");
    if(parsed.volt3 != null && e3 != null)
        e3.updateGenericSensorStatus(parsed.volt3);

    // Store Generic 4
    var e4 = device.endpoints.byAddress("4");
    if(parsed.volt4 != null && e4 != null)
        e4.updateGenericSensorStatus(parsed.volt4);

    // Store Generic 5
    var e5 = device.endpoints.byAddress("5");
    if(parsed.volt5 != null && e5 != null)
        e5.updateGenericSensorStatus(parsed.volt5);

    // Store Generic 6
    var e6 = device.endpoints.byAddress("6");
    if(parsed.volt6 != null && e6 != null)
        e6.updateGenericSensorStatus(parsed.volt6);
    
    // Store Generic 7
    var e7 = device.endpoints.byAddress("7");
    if(parsed.volt7 != null && e7 != null)
        e7.updateGenericSensorStatus(parsed.volt7);

    // Store Generic 8
    var e8 = device.endpoints.byAddress("8");
    if(parsed.volt8 != null && e8 != null)
        e8.updateGenericSensorStatus(parsed.volt8);
}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint object representing the endpoint to which the 
	//   command will be sent. May be null if the command is to be sent to 
	//   the device, and not to an individual endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

/*
	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // Command ID 30 is "turn on" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // Command ID 31 is "turn off" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // Command ID 32 is "toggle" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}