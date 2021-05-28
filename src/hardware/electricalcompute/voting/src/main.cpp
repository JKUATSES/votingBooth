#include <Arduino.h>

void setup()
{
	// put your setup code here, to run once:
	Serial.begin(115200);
	// initialize LED digital pin as an output.
	pinMode(4, OUTPUT);
}

void loop()
{
	// put your main code here, to run repeatedly:
	Serial.println("Hello world!");
	// turn the LED on (HIGH is the voltage level)
	digitalWrite(4, HIGH);
	// wait for a second
	delay(1000);
	// turn the LED off by making the voltage LOW
	digitalWrite(4, LOW);
	// wait for a second
	delay(1000);
}
