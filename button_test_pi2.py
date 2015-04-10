import RPi.GPIO as GPIO
from time import sleep

# Constants for Button pins
PUSH_BUTTON_1 = 5
PUSH_BUTTON_2 = 6
PUSH_BUTTON_3 = 13
PUSH_BUTTON_4 = 19

MASTER_BUTTON = 17

# Constants for LED pins
LED_1 = 21
LED_2 = 20
LED_3 = 16
LED_4 = 12

inputs_locked = False
led_activated = 0


GPIO.setmode(GPIO.BCM)

# Setup Inputs
GPIO.setup(PUSH_BUTTON_1, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_2, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_3, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(PUSH_BUTTON_4, GPIO.IN, pull_up_down = GPIO.PUD_UP)

GPIO.setup(MASTER_BUTTON, GPIO.IN, pull_up_down = GPIO.PUD_UP)


# Setup Outputs 
GPIO.setup(LED_1, GPIO.OUT)
GPIO.setup(LED_2, GPIO.OUT)
GPIO.setup(LED_3, GPIO.OUT)
GPIO.setup(LED_4, GPIO.OUT)

try:
	while True:
		if(inputs_locked == False):
			if(GPIO.input(PUSH_BUTTON_1) == GPIO.LOW):
				print("PB 1 pressed")
				inputs_locked = True
				GPIO.output(LED_1, GPIO.HIGH)
				led_activated = LED_1
			elif(GPIO.input(PUSH_BUTTON_2) == GPIO.LOW):
				print("PB 2 pressed")
				inputs_locked = True
				GPIO.output(LED_2, GPIO.HIGH)
				led_activated = LED_2
			elif(GPIO.input(PUSH_BUTTON_3) == GPIO.LOW):
				print("PB 3 pressed")
				inputs_locked = True
				GPIO.output(LED_3, GPIO.HIGH)
				led_activated = LED_3
			elif(GPIO.input(PUSH_BUTTON_4) == GPIO.LOW):
				print("PB 4 pressed")
				inputs_locked = True
				GPIO.output(LED_4, GPIO.HIGH)
				led_activated = LED_4
		else:
			if(GPIO.input(MASTER_BUTTON) == GPIO.LOW):
				print("Master Button pressed")
				GPIO.output(led_activated, GPIO.LOW)
				inputs_locked = False
except KeyboardInterrupt:
	GPIO.cleanup()
