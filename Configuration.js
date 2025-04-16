function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  var e = endpoints.addEndpoint("1", "Temperatura", endpointType.temperatureSensor);
  var e = endpoints.addEndpoint("2", "Humedad", endpointType.humiditySensor);
  var e = endpoints.addEndpoint("3", "Generic sensor", endpointType.genericSensor);
  e.variableTypeId = 1233;
  var e = endpoints.addEndpoint("4", "Generic sensor", endpointType.genericSensor);
  e.variableTypeId = 1233;
  var e = endpoints.addEndpoint("5", "Generic sensor", endpointType.genericSensor);
  e.variableTypeId = 1233;
  var e = endpoints.addEndpoint("6", "Generic sensor", endpointType.genericSensor);
  e.variableTypeId = 1233;
  var e = endpoints.addEndpoint("7", "Generic sensor", endpointType.genericSensor);
  e.variableTypeId = 1233;
  var e = endpoints.addEndpoint("8", "Generic sensor", endpointType.genericSensor);
  e.variableTypeId = 1233;
}

function validateDeviceAddress(address, result)
{
  if (address.length != 4) {
    result.ok = false;
    result.errorMessage = {
      en: "The address must be 4 characters long.", 
      es: "La dirección debe tener exactamente 4 caracteres."
    };
  }
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}