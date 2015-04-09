import RPi.GPIO as GPIO
from time import sleep

GPIO.setmode(GPIO.BCM)

# Setup Inputs
GPIO.setup(5, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(6, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(13, GPIO.IN, pull_up_down = GPIO.PUD_UP)
GPIO.setup(19, GPIO.IN, pull_up_down = GPIO.PUD_UP)

# Setup Outputs 
GPIO.setup(12, GPIO.OUT)
GPIO.setup(16, GPIO.OUT)
GPIO.setup(20, GPIO.OUT)
GPIO.setup(21, GPIO.OUT)

try:
    while True:
		if(GPIO.input(5) == 0):
			print("PB 1 pressed")
			GPIO.output(21, 1)
			sleep(5)
			GPIO.output(21, 0)

		if(GPIO.input(6) == 0):
			print("PB 2 pressed")
			GPIO.output(20, 1)
			sleep(5)
			GPIO.output(20, 0)

		if(GPIO.input(13) == 0):
			print("PB 3 pressed")
			GPIO.output(16, 1)
			sleep(5)
			GPIO.output(16, 0)

		if(GPIO.input(19) == 0):
			print("PB 4 pressed")
			GPIO.output(12, 1)
			sleep(5)
			GPIO.output(12, 0)

except KeyboardInterrupt:
    GPIO.cleanup()
